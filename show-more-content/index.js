/* eslint-disable no-lonely-if */
const nameCustomElement = "show-more-content";
class ShowMoreContent extends window.HTMLElement {
  connectedCallback() {
    this.expanded = this.hasAttribute("data-initial-expanded");
    this.contentElement = this.querySelector("[data-collapsable]");
    this.toggleButton = this.querySelector("[data-toggle-button]");
    this.checkContentHeight();
    this.toggleContent();
    this.handleEvents();
    this.observeContentChanges();
  }

  handleEvents() {
    window.addEventListener("resize", () => {
      this.checkContentHeight()
    });

    this.toggleButton.addEventListener("click", () => {
      this.expanded = !this.expanded;
      this.toggleContent();
    });
  }

  stateCollapsed() {
    this.contentElement.classList.add("collapsed");
    this.toggleButton.innerHTML = this.toggleButton.dataset.labelCollapsed;
  }

  stateNotCollapsed() {
    this.contentElement.classList.remove("collapsed");
    this.toggleButton.innerHTML = this.toggleButton.dataset.labelNotCollapsed;
  }

  toggleContent() {
    if (this.contentHeight >= this.maxHeight) {
      if (this.expanded) {
        this.stateNotCollapsed();
      } else {
        this.stateCollapsed();
      }
    } else {
      if (this.expanded) {
        this.stateNotCollapsed();
      }
    }
  }

  checkContentHeight() {
    const computedStyle = window.getComputedStyle(this.contentElement);
    const maxHeightCSS = computedStyle.getPropertyValue("--max-height");
    this.maxHeight = parseInt(maxHeightCSS, 10);
    this.contentHeight = this.contentElement.scrollHeight;

    if (this.contentHeight <= this.maxHeight) {
      this.toggleButton.hidden = true;
      if (!this.expanded) {
        this.contentElement.classList.remove("collapsed");
      }
    } else {
      this.toggleButton.hidden = false;
      if (!this.expanded) {
        this.contentElement.classList.add("collapsed");
      }
    }
  }

  observeContentChanges() {
    const observer = new window.MutationObserver(() => {
      this.checkContentHeight()
    });

    observer.observe(this.contentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, ShowMoreContent);
}
