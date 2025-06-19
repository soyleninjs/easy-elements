/* eslint-disable comma-dangle */
const nameCustomElement = "tooltip-component";
class TooltipComponent extends window.HTMLElement {
  connectedCallback() {
    this.isShowing = false;
    this.$trigger = this.querySelector("[data-tooltip-trigger]");
    this.$content = this.querySelector("[data-tooltip-content]");
    this.breakpoint = this.hasAttribute("data-breakpoint") ? window.matchMedia(`(max-width: ${this.getAttribute("data-breakpoint")}px)`) : null;
    this.mode = this.getAttribute("data-mode") || "hover";
    this.mobileMode = this.getAttribute("data-mobile-mode") || this.getAttribute("data-mode") || "hover";
    this.contentPositions = this.hasAttribute("data-content-positions") ? this.getAttribute("data-content-positions").split(",").map(position => position.trim()) : [
      'top-left',
      'top-middle',
      'top-right',
      'right-top',
      'right-middle',
      'right-bottom',
      'bottom-right',
      'bottom-middle',
      'bottom-left',
      'left-bottom',
      'left-middle',
      'left-top',
    ];

    this._calculatePosition()
    this._handleEvents();
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this._handleScroll.bind(this));
    window.removeEventListener("resize", this._handleResize.bind(this));
  }

  _handleScroll() {
    this._calculatePosition();
  }

  _handleResize() {
    this._calculatePosition();

    if (this.isShowing && this.mode !== this.mobileMode && this.breakpoint) {
      if (this._matchBreakpoint() && this.mode === "click") {
        this._hideContent();
      }

      if (!this._matchBreakpoint() && this.mobileMode === "click") {
        this._hideContent();
      }
    }
  }

  _handleEvents() {
    window.addEventListener("scroll", this._handleScroll.bind(this));
    window.addEventListener("resize", this._handleResize.bind(this));
    
    if (this.mode === "click" || this.mobileMode === "click"){
      document.addEventListener("click", (event) => {
        if (this.isShowing && this.$content !== event.target && !this.$content.contains(event.target)) {
          this._hideContent();
        }
      });
  
      this.$trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
  
        window.dispatchEvent(
          new window.CustomEvent("tooltip-opened", {
            detail: {
              source: this,
            },
          })
        );
  
        if (this.isShowing) {
          this._hideContent();
        } else {
          this._handleShowingContent("click").show();
        }
      });
    }

    if (this.mode === "hover" || this.mobileMode === "hover") {
      this.$trigger.addEventListener("mouseenter", () => {
        this._handleShowingContent("hover").show();
      });
      
      this.$trigger.addEventListener("mouseleave", () => {
        this._handleShowingContent("hover").hide();
      });
    }

    window.addEventListener("tooltip-opened", (event) => {
      if (event.detail.source !== this && this.isShowing) {
        this._hideContent();
      }
    });
  }

  _debounce(fn, wait) {
    let t;
    return (...args) => {
      window.clearTimeout(t);
      t = window.setTimeout(() => fn.apply(this, args), wait);
    };
  }

  _matchBreakpoint() {
    return this.breakpoint && this.breakpoint.matches
  }

  _handleShowingContent(mode) {
    return {
      show: () => {
        console.log({
          mode: this.mode,
          mobileMode: this.mobileMode,
          paramMode: mode,
          breakpoint: this.breakpoint,
          matchBreakpoint: this._matchBreakpoint(),
        })
        if (this.mode === mode) {
          if (this.breakpoint) {
            if (!this.breakpoint.matches) {
              this._showContent();
            }
          } else {
            this._showContent();
          }
        }

        if (this.mobileMode === mode && this._matchBreakpoint()) {
          this._showContent();
        }
      },
      hide: () => {
        if (this.mode === mode) {
          if (this.breakpoint) {
            if (!this.breakpoint.matches) {
              this._hideContent();
            }
          } else {
            this._hideContent();
          }
        }

        if (this.mobileMode === mode && this._matchBreakpoint()) {
          this._hideContent();
        }
      }
    }
  }

  _setScrollbarWidth() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    this.$content.style.setProperty("--offset-scrollbar", `${scrollbarWidth}px`);
  }

  _getVisibilityStatus($element) {
    if (!$element) return null;

    const { top, left, bottom, right } = $element.getBoundingClientRect();
    const vw = window.visualViewport?.width || window.innerWidth;
    const vh = window.visualViewport?.height || window.innerHeight;

    console.log({
      top,
      left,
      bottom,
      right,
      vw,
      vh,
    })

    return {
      fullyVisible: top >= 0 && left >= 0 && bottom <= vh && right <= vw
    };
  }

  _calculatePosition() {    
    const triggerRect = this.$trigger.getBoundingClientRect();
    this._setScrollbarWidth();
    
    // asingar variables css
    this.$content.style.setProperty("--trigger-top", `${Math.round(triggerRect.top)}px`);
    this.$content.style.setProperty("--trigger-left", `${Math.round(triggerRect.left)}px`);
    this.$content.style.setProperty("--trigger-bottom", `${Math.round(triggerRect.bottom)}px`);
    this.$content.style.setProperty("--trigger-right", `${Math.round(triggerRect.right)}px`);
    this.$content.style.setProperty("--trigger-width", `${Math.round(triggerRect.width)}px`);
    this.$content.style.setProperty("--trigger-height", `${Math.round(triggerRect.height)}px`);

    // calcular posiciones
    this.$content.classList.remove(...this.contentPositions);

    // si con la posicion default es visible, no hacer nada
    if (this._getVisibilityStatus(this.$content).fullyVisible) return;

    for (const position of this.contentPositions) {
      this.$content.classList.add(position);
      const visibility = this._getVisibilityStatus(this.$content);
  
      if (visibility.fullyVisible) {
        // Esta es la clase correcta, no hacemos nada más
        break;
      }
  
      // Si no es visible completamente, probar siguiente
      this.$content.classList.remove(position);
    }
  }

  _showContent() {
    this.$content.classList.add("visible");
    document.body.appendChild(this.$content);
    this.isShowing = true;
    this._calculatePosition();
    this.dispatchEvent(new window.CustomEvent("tooltip:show", {
      detail: {
        source: this,
      },
    }));
  }

  _hideContent() {
    this.$content.classList.remove("visible");
    this.appendChild(this.$content);
    this.isShowing = false;
    this.dispatchEvent(new window.CustomEvent("tooltip:hide", {
      detail: {
        source: this,
      },
    }));
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, TooltipComponent);
}
