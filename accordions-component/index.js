const nameCustomElement = "accordions-component";
class AccordionsComponent extends window.HTMLElement {
  connectedCallback() {
    this.accordions = this.querySelectorAll("[data-accordion]");
    this.openOneByOne = this.hasAttribute("data-open-one-by-one");
    this.handleEventListeners();
  }

  handleEventListeners() {
    this.accordions.forEach(($accordion) => {
      const $trigger = $accordion.querySelector("[data-accordion-trigger]");
      $trigger.addEventListener("click", () => {
        if (this.openOneByOne) {
          this.accordions.forEach(($otherAccordion) => {
            if ($accordion !== $otherAccordion) {
              $otherAccordion.open = false;
            }
          });
        }
      });
    });
  }

  closeAllAccordions() {
    this.accordions.forEach(($accordion) => ($accordion.open = false));
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, AccordionsComponent);
}
