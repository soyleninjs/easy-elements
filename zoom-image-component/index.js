const nameCustomElement = "zoom-image-component";

class ZoomImageComponent extends HTMLElement {
  constructor() {
    super();
    this.$imageWrapper = null;
    this.$image = null;
    this.isZoomed = false;
    this.isDisabled = false;
    this.zoomLevel = 2;
    this.breakpoint = null;
    this.zoomMode = "click";
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
    this._handleTransitionEnd = this._handleTransitionEnd.bind(this);
    this._handleResize = this._handleResize.bind(this);
  }

  connectedCallback() {
    this.$imageWrapper = this.querySelector("[data-zoom-image-wrapper]");
    this.$image = this.querySelector("img");

    if (this.$imageWrapper && this.$image) {
      this.$imageWrapper.style.position = "relative";

      // Ahora zoomLevel se lee desde el custom element, no desde la imagen
      this.zoomLevel =
        parseFloat(this.getAttribute("data-zoom-level")) || 2;

      // Configura el breakpoint si se definió
      const disableBelow = this.getAttribute("data-disable-below");
      this.breakpoint = disableBelow ? parseInt(disableBelow) : null;

      // Configura el modo de zoom
      this.zoomMode = this.getAttribute("data-zoom-mode") || "click";

      // Configura eventos según el modo de zoom
      if (this.zoomMode === "click") {
        this.$imageWrapper.addEventListener("click", (event) =>
          this._toggleZoom(event)
        );
      } else if (this.zoomMode === "hover") {
        this.$imageWrapper.addEventListener("mouseenter", (event) =>
          this._startZoom(event)
        );
        this.$imageWrapper.addEventListener("mouseleave", () => this._stopZoom());
      }

      this.$imageWrapper.addEventListener("mousemove", (event) =>
        this._handleMouseMove(event)
      );
      this.$image.addEventListener("transitionend", this._handleTransitionEnd);

      // Escuchar cambios de tamaño de ventana solo si hay un breakpoint definido
      if (this.breakpoint !== null) {
        window.addEventListener("resize", this._handleResize);
        this._handleResize(); // Verificar estado inicial
      }
    }
  }

  disconnectedCallback() {
    if (this.breakpoint !== null) {
      window.removeEventListener("resize", this._handleResize);
    }
    window.removeEventListener("click", this._handleOutsideClick);
  }

  _toggleZoom(event) {
    if (this.isDisabled) return;
    this.isZoomed = !this.isZoomed;

    if (this.isZoomed) {
      this._startZoom(event);
      window.addEventListener("click", this._handleOutsideClick);
    } else {
      this._stopZoom();
    }
  }

  _startZoom(event) {
    if (this.isDisabled) return;

    this.isZoomed = true;
    this._handleMouseMove(event);
    this.$image.style.transform = `scale(${this.zoomLevel})`;
    this.$image.style.cursor = "move";
    this.$image.style.transition = "transform 0.3s ease";
    this.classList.add("zoom-active");
    this.$image.classList.add("zoomed");
  }

  _stopZoom() {
    this.isZoomed = false;
    this.$image.style.transform = "scale(1)";
    this.$image.style.cursor = "";
  }

  _handleOutsideClick(event) {
    if (!this.$imageWrapper.contains(event.target)) {
      this._stopZoom();
      this.classList.remove("zoom-active");
      this.$image.classList.remove("zoomed");
      window.removeEventListener("click", this._handleOutsideClick);
    }
  }

  _handleMouseMove(event) {
    if (!this.isZoomed) return;
    const rect = this.$imageWrapper.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.$image.style.transformOrigin = `${x}% ${y}%`;
  }

  _handleTransitionEnd(event) {
    if (!this.isZoomed) {
      this.$image.style.removeProperty("transform");
      this.$image.style.removeProperty("cursor");
      this.$image.style.removeProperty("transition");
      this.$image.style.removeProperty("transform-origin");
      this.classList.remove("zoom-active");
      this.$image.classList.remove("zoomed");
    }
  }

  _handleResize() {
    const isNowDisabled =
      this.breakpoint !== null && window.innerWidth <= this.breakpoint;

    if (isNowDisabled !== this.isDisabled) {
      this.isDisabled = isNowDisabled;

      if (this.isDisabled) {
        this._resetZoom();
        this.classList.add("zoom-disabled");
      } else {
        this.classList.remove("zoom-disabled");
      }
    }
  }

  _resetZoom() {
    this.isZoomed = false;
    this.$image.style.removeProperty("transform");
    this.$image.style.removeProperty("cursor");
    this.$image.style.removeProperty("transition");
    this.$image.style.removeProperty("transform-origin");
    this.classList.remove("zoom-active");
    this.$image.classList.remove("zoomed");
    window.removeEventListener("click", this._handleOutsideClick);
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, ZoomImageComponent);
}
