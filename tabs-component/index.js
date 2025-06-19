const nameCustomElement = "tabs-component";
class TabsComponent extends window.HTMLElement {
  connectedCallback() {
    this.$tabs = this.querySelectorAll("[data-tab-button]");
    this.contentsAttributes = ["data-tab-content"];
    if (this.hasAttribute("data-aditional-contents")) {
      this.contentsAttributes = [this.contentsAttributes, ...this.dataset.aditionalContents.split(", ")];
    }
    this._setIndex();
    this._handleEvents();
    this.dispatchEvent(new window.Event("init"));
  }

  _handleEvents() {
    this.$tabs.forEach(($button, index) => {
      $button.addEventListener("click", () => {
        this._toggleTabContent($button, index);
      });
    });
  }

  _removeClass(array, classToRemove) {
    array.forEach((element) => {
      element.classList.remove(classToRemove);
    });
  }

  _setIndex() {
    this.$tabs.forEach(($button, index) => ($button.dataset.index = index));

    this.contentsAttributes.forEach((attribute) => {
      const $contents = this.querySelectorAll(`[${attribute}]`);
      $contents.forEach(($content, index) => ($content.dataset.index = index));
    });
  }

  _showContent(attribute, name, index) {
    const $contents = this.querySelectorAll(`[${attribute}]`);
    const $contentByName = this.querySelector(`[${attribute}="${name}"]`);
    let $content = null;

    this._removeClass($contents, "active");

    // set active to actual button and content
    if (name !== "" && $contentByName) {
      $content = $contentByName;
    } else {
      $content = $contents[index];
    }

    $content.classList.add("active");
  }

  _toggleTabContent($button, index) {
    const buttonName = $button.dataset.tabButton;
    // clean classes active
    this._removeClass(this.$tabs, "active");
    $button.classList.add("active");

    // Show content
    this.contentsAttributes.forEach((attribute) => {
      this._showContent(attribute, buttonName, index);
    });

    this.dispatchEvent(new window.CustomEvent("change", { 
      detail: {
        index: index,
        name: buttonName || null
      }
    }));
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, TabsComponent);
}
