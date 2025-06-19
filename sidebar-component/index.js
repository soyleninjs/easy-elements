const nameCustomElement = "sidebar-component";
class SidebarComponent extends window.HTMLElement {
  connectedCallback() {
    this.$details = this.querySelector("[data-sidebar-details]");
    this.$sidebarButtonOpen = this.querySelector("[data-sidebar-trigger]");
    this.$sidebarMask = this.querySelector("[data-sidebar-mask]");
    this.$sidebarButtonsClose = this.querySelectorAll("[data-sidebar-button-close]");
    
    this.handleEvents();
  }

  handleEvents() {
    this.$sidebarButtonOpen.addEventListener("click", (event) => {
      event.preventDefault();

      if (this.$details.open) {
        this.closeSidebar();
      } else {
        this.openSidebar();
      }
    });

    this.$sidebarMask.addEventListener("click", () => {
      this.closeSidebar();
    });

    this.$sidebarButtonsClose.forEach(($button) => {
      $button.addEventListener("click", () => {
        this.closeSidebar();
      });
    });
  }

  openSidebar() {
    this.$details.open = true;
    document.body.classList.add("sidebar-component-is-open");
    document.body.style.overflow = "hidden";
  }

  closeSidebar() {
    this.$details.classList.add("is-hidding");
    
    // Obtenemos la duración de la animación desde la variable CSS
    const computedStyle = window.getComputedStyle(this);
    const animationDuration = window.parseFloat(computedStyle.getPropertyValue('--sidebar-animation-duration')) || 0.3;
    
    window.setTimeout(() => {
      this.$details.open = false;
      this.$details.classList.remove("is-hidding");
      document.body.classList.remove("sidebar-component-is-open");
      document.body.style.overflow = "unset";
    }, animationDuration * 1000);
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, SidebarComponent);
}
