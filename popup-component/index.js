/* eslint-disable curly */
const nameCustomElement = "popup-component";
class PopupComponent extends window.HTMLElement {
  connectedCallback() {
    this.$popupButtonOpen = this.querySelector("[data-popup-button-open]");
    this.$popup = this.querySelector("[data-popup]");
    this.$popupMask = this.querySelector("[data-popup-mask]");
    this.$popupButtonsClose = this.querySelectorAll("[data-popup-button-close]");
    this.contentType = this.dataset.contentType || "normal";

    this.$popupButtonOpen.addEventListener("click", () => this.openPopup());
    this.$popupMask.addEventListener("click", () => this.closePopup());
    
    // Agregar evento de clic a todos los botones de cierre
    this.$popupButtonsClose.forEach(button => {
      button.addEventListener("click", () => this.closePopup());
    });
  }

  openPopup() {
    this.$popup.classList.add("visible");
    document.body.appendChild(this.$popup);
    document.body.style.overflow = "hidden";
    document.body.classList.add("popup-component-is-open");
  }

  closePopup() {
    this.$popup.classList.add("hidding");
    if (this.contentType === "video") this.pauseVideos();

    window.setTimeout(() => {
      this.appendChild(this.$popup);
      this.$popup.classList.remove("visible", "hidding");
      document.body.style.overflow = "unset";
      document.body.classList.remove("popup-component-is-open");
    }, 300);
  }

  commandYoutubeApi(player, command) {
    if (player == null || command == null) {
      return;
    }
    const $jsonCommand = {
      event: "command",
      func: `${command}`,
      args: "",
    };
    player.contentWindow.postMessage(JSON.stringify($jsonCommand), "*");
  }

  pauseVideos() {
    const $videos = this.$popup.querySelectorAll("video");
    const $iframes = this.$popup.querySelectorAll("iframe");

    // Pausar videos MP4
    if ($videos !== null) {
      $videos.forEach(($video) => {
        $video.pause();
      });
    }

    // Pausar videos Youtobe Iframe
    if ($iframes !== null) {
      $iframes.forEach(($iframe) => {
        this.commandYoutubeApi($iframe, "pauseVideo");
      });
    }
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, PopupComponent);
}
