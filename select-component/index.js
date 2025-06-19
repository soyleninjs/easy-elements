const nameCustomElement = "select-component";
class SelectComponent extends window.HTMLElement {
  connectedCallback() {
    this.$selectDetails = this.querySelector("[data-select-details]")
    this.$selectLabel = this.querySelector("[data-select-label]")
    this.$options = this.querySelectorAll("[data-select-option]")
    this.closeDropdownAfterSelected = this.hasAttribute("data-close-dropdown-after-selected")
    this.handleEvents();
    this._setSelectedElement(this.querySelector("[data-select-option].selected"))
  }

  disconnectedCallback() {
    document.removeEventListener("click", event => this._handleDocumentClick(event));
    this.$options.forEach(($option) => {
      $option.removeEventListener("click", () => this._handleOptionClick($option));
    });
  }

  handleEvents(){
    document.addEventListener("click", event => this._handleDocumentClick(event));
    this.$options.forEach(($option) => {
      $option.addEventListener("click", () => this._handleOptionClick($option));
    });
  }

  selectOptionByIndex(index) {
    const option = this.querySelector(`[data-select-option][data-index="${index}"]`);
    if (option) {
      this._setSelectedElement(option);
    }
  }

  selectOptionByValue(value) {
    const option = this.querySelector(`[data-select-option][data-value="${value}"]`);
    if (option) {
      this._setSelectedElement(option);
    }
  }

  _setSelectedElement($option){
    if ($option) {
      const value = $option.dataset.value
      const index = Number($option.dataset.index)
      this.dataset.selectedValue = value
      this.dataset.selectedIndex = index
      this.$selectLabel.textContent = $option.textContent
      this.$options.forEach($element => $element.classList.remove("selected"))
      $option.classList.add("selected")
    } else {
      this.dataset.selectedValue = null
      this.dataset.selectedIndex = -1
      this.$options.forEach($element => $element.classList.remove("selected"))
    }

    this._handleChange(this.dataset.selectedValue, this.dataset.selectedIndex)
  }

  _handleChange(selectedValue, selectedIndex){
    this.dispatchEvent(new window.CustomEvent("change", { 
      detail: {
        value: selectedValue,
        index: selectedIndex,
      }
    }))
  }

  _handleDocumentClick(event){
    // Cerrar el menú desplegable cuando se hace clic fuera
    const isClickInside = this.contains(event.target);
    if (!isClickInside && this.$selectDetails.open) {
      this.$selectDetails.open = false;
    }
  }

  _handleOptionClick($option) {
    this._setSelectedElement($option);
    
    // Cerrar el menú desplegable cuando se hace clic en una opción
    if (this.closeDropdownAfterSelected) {
      this.$selectDetails.open = false;
    }
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, SelectComponent);
}