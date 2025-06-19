const nameCustomElement = "quantity-component";
class QuantityComponent extends window.HTMLElement {
  static get observedAttributes() {
    return ["data-value"];
  }

  connectedCallback() {
    this.$inputElement = this.querySelector("[data-quantity-input]");
    this.$buttonMinus = this.querySelector("[data-quantity-button-minus]");
    this.$buttonPlus = this.querySelector("[data-quantity-button-plus]");
    this.value = Number(this.$inputElement.value);
    this.dataset.value = this.value;

    this.handleListeners();
    this.updateQuantityState();
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    if (attribute === "data-value") {
      if (oldValue !== null && newValue !== null) {
        this.value = Math.max(Number(this.$inputElement.min), Number(this.dataset.value));
        this.$inputElement.value = this.value;
        this.updateQuantityState();
        this.notifyChange();
      }
      
    }
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      window.clearTimeout(t);
      t = window.setTimeout(() => fn.apply(this, args), wait);
    };
  }

  handleListeners() {
    // Agregar eventos a los botones
    this.$buttonMinus.addEventListener("click", () => this.updateValue(-1));
    this.$buttonPlus.addEventListener("click", () => this.updateValue(1));

    // Observar cambios en el input con el método de debounce
    this.$inputElement.addEventListener(
      "input",
      this.debounce(() => {
        this.$inputElement.blur();
      }, 500)
    );

    // Establecer el valor mínimo cuando se sale del input
    this.$inputElement.addEventListener("blur", () => {
      this.handleInput();
    });
  }

  updateQuantityState() {
    if (this.value <= Number(this.$inputElement.min)) {
      this.$buttonMinus.disabled = true;
    } else {
      this.$buttonMinus.disabled = false;
    }
  }

  handleInput() {
    const inputValue = Number(this.$inputElement.value);

    if (isNaN(inputValue) || inputValue <= 0) {
      this.value = Number(this.$inputElement.min);
    } else {
      this.value = inputValue;
    }

    this.$inputElement.value = this.value;
    this.dataset.value = this.value;
    this.updateQuantityState();
    this.notifyChange();
  }

  updateValue(change) {
    const newValue = this.value + change;
    this.value = Math.max(Number(this.$inputElement.min), newValue);

    this.$inputElement.value = this.value;
    this.dataset.value = this.value;
    this.updateQuantityState();
    this.notifyChange();
  }

  notifyChange() {
    this.dispatchEvent(
      new window.CustomEvent("value:change", {
        detail: {
          value: this.value,
        },
      })
    );
  }
}

if (!window.customElements.get(nameCustomElement)) {
  window.customElements.define(nameCustomElement, QuantityComponent);
}
