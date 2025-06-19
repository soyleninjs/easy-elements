# Quantity Component

Componente web personalizado para crear controles de cantidad con botones de incremento y decremento, ideal para formularios, carritos de compra y cualquier interfaz que requiera selección numérica.

## Menú
- [Quantity Component](#quantity-component)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Uso básico con valores por defecto](#ejemplo-1-uso-básico-con-valores-por-defecto)
    - [Ejemplo 2: Control de cantidad para carrito de compras](#ejemplo-2-control-de-cantidad-para-carrito-de-compras)
    - [Ejemplo 3: Control con valor mínimo personalizado](#ejemplo-3-control-con-valor-mínimo-personalizado)
  - [Opciones de configuración](#opciones-de-configuración)
    - [Atributos](#atributos)
    - [Selectores de datos](#selectores-de-datos)
  - [Métodos y Eventos](#métodos-y-eventos)
    - [Eventos](#eventos)
    - [Ejemplo de uso con JavaScript](#ejemplo-de-uso-con-javascript)
  - [Funcionalidades](#funcionalidades)
  - [Estilización](#estilización)
    - [Variables CSS](#variables-css)
    - [Estructura de clases CSS](#estructura-de-clases-css)

## Instalación

1. Copia los archivos necesarios a tu proyecto e inclúyelos en tu HTML:
   - `index.js` - Funcionalidad del componente
   - `index.css` - Estilos del componente
   - `index.html` - Ejemplo de implementación

```html
<link rel="stylesheet" href="ruta/a/tu/proyecto/quantity-component/index.css">
<script src="ruta/a/tu/proyecto/quantity-component/index.js"></script>
```

## Uso básico

```html
<quantity-component>
  <button class="quantity-component-button quantity-component-button-minus" type="button" data-quantity-button-minus>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12h-15"/></svg>
  </button>
  <input class="quantity-component-input" type="number" name="quantity" value="1" min="1" pattern="[0-9]*" data-quantity-input>
  <button class="quantity-component-button quantity-component-button-plus" type="button" data-quantity-button-plus>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"/></svg>
  </button>
</quantity-component>
```

## Ejemplos

### Ejemplo 1: Uso básico con valores por defecto

```html
<quantity-component>
  <button class="quantity-component-button quantity-component-button-minus" type="button" data-quantity-button-minus>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12h-15"/></svg>
  </button>
  <input class="quantity-component-input" type="number" name="quantity" value="1" min="1" pattern="[0-9]*" data-quantity-input>
  <button class="quantity-component-button quantity-component-button-plus" type="button" data-quantity-button-plus>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"/></svg>
  </button>
</quantity-component>
```

### Ejemplo 2: Control de cantidad para carrito de compras

```html
<div class="product-card">
  <img src="product-image.jpg" alt="Producto">
  <h3>Nombre del Producto</h3>
  <p class="price">$24.99</p>
  
  <div class="product-actions">
    <quantity-component style="--max-width: 120px; --height: 45px; --border-radius: 4px;">
      <button class="quantity-component-button quantity-component-button-minus" type="button" data-quantity-button-minus>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12h-15"/></svg>
      </button>
      <input class="quantity-component-input" type="number" name="cart-quantity" value="1" min="1" pattern="[0-9]*" data-quantity-input>
      <button class="quantity-component-button quantity-component-button-plus" type="button" data-quantity-button-plus>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"/></svg>
      </button>
    </quantity-component>
    
    <button class="add-to-cart-button">Añadir al carrito</button>
  </div>
</div>

<script>
  const quantityComponent = document.querySelector('quantity-component');
  const addToCartButton = document.querySelector('.add-to-cart-button');
  
  quantityComponent.addEventListener('value:change', (event) => {
    console.log(`Cantidad seleccionada: ${event.detail.value}`);
  });
  
  addToCartButton.addEventListener('click', () => {
    const quantity = parseInt(quantityComponent.dataset.value);
    console.log(`Añadiendo ${quantity} unidades al carrito`);
    // Lógica para añadir al carrito
  });
</script>
```

### Ejemplo 3: Control con valor mínimo personalizado

```html
<div class="inventory-form">
  <label for="stock-quantity">Cantidad en stock:</label>
  <quantity-component style="--button-background: #f0f0f0; --button-background-hover: #007bff; --button-color-hover: white;">
    <button class="quantity-component-button quantity-component-button-minus" type="button" data-quantity-button-minus>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12h-15"/></svg>
    </button>
    <input class="quantity-component-input" id="stock-quantity" type="number" name="stock" value="5" min="0" pattern="[0-9]*" data-quantity-input>
    <button class="quantity-component-button quantity-component-button-plus" type="button" data-quantity-button-plus>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"/></svg>
    </button>
  </quantity-component>
  <p class="help-text">Establece la cantidad disponible en el inventario (puede ser cero)</p>
</div>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción |
|----------|-------------|
| `data-value` | Valor actual del componente (se actualiza automáticamente) |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-quantity-input]` | Campo de entrada para el valor numérico |
| `[data-quantity-button-minus]` | Botón para decrementar el valor |
| `[data-quantity-button-plus]` | Botón para incrementar el valor |

## Métodos y Eventos

### Eventos

El componente emite el siguiente evento:

| Evento | Descripción |
|--------|-------------|
| `value:change` | Se dispara cuando cambia el valor de la cantidad |

### Ejemplo de uso con JavaScript

```javascript
// Obtener referencia al componente
const quantityComponent = document.querySelector("quantity-component");

// Escuchar cambios en el valor
quantityComponent.addEventListener("value:change", (event) => {
  console.log("Nuevo valor:", event.detail.value);
  
  // Puedes realizar acciones basadas en el nuevo valor
  if (event.detail.value > 10) {
    console.log("Has seleccionado una cantidad grande");
  }
});

// También puedes acceder al valor actual mediante el atributo data-value
console.log("Valor actual:", quantityComponent.dataset.value);

// Para cambiar el valor programáticamente, actualiza el atributo data-value
quantityComponent.dataset.value = 5; // Esto actualiza la interfaz y dispara el evento value:change
```

## Funcionalidades

- **Control automático del valor mínimo**: El componente respeta el atributo `min` definido en el input.
- **Desactivación automática**: El botón de decremento se desactiva cuando se alcanza el valor mínimo.
- **Validación de entrada**: Solo permite valores numéricos válidos.
- **Debounce integrado**: Mejora el rendimiento al controlar la frecuencia de actualización.
- **Manejo de eventos**: Emite eventos cuando cambia el valor para facilitar la integración con otras partes de la aplicación.
- **Personalización completa**: Amplia gama de variables CSS para personalizar la apariencia.

## Estilización

### Variables CSS

El componente incluye variables CSS para personalizar su apariencia:

```css
quantity-component {
  --max-width: 100px;             /* Ancho máximo del componente */
  --height: 40px;                 /* Altura del componente */
  --border: 1px solid;            /* Borde del componente */
  --border-radius: 0;             /* Radio de borde del componente */
  
  /* Estilos de los botones */
  --button-width: 30px;           /* Ancho de los botones +/- */
  --button-background: white;     /* Color de fondo de los botones */
  --button-color: black;          /* Color del texto/icono de los botones */
  --button-background-hover: black; /* Color de fondo al pasar el ratón */
  --button-color-hover: white;    /* Color del texto/icono al pasar el ratón */
  --button-transition: 0.3s;      /* Transición para efectos hover */
  
  /* Estilos del input */
  --input-background: white;      /* Color de fondo del input */
  --input-padding: 0 calc(var(--button-width) - 3px); /* Relleno del input */
  --input-font-family: sans-serif; /* Familia de fuente del input */
  --input-font-size: 15px;        /* Tamaño de fuente del input */
  --input-font-weight: normal;    /* Peso de fuente del input */
  --input-line-height: normal;    /* Altura de línea del input */
  --input-letter-spacing: normal; /* Espaciado entre letras del input */
  --input-text-color: #000000;    /* Color del texto del input */
}
```

### Estructura de clases CSS

| Clase | Descripción |
|-------|-------------|
| `.quantity-component-button` | Estilo base para los botones de incremento y decremento |
| `.quantity-component-button-minus` | Botón de decremento |
| `.quantity-component-button-plus` | Botón de incremento |
| `.quantity-component-input` | Campo de entrada numérico |

Puedes sobrescribir estos estilos en tu CSS para personalizar aún más el componente:

```css
/* Ejemplo de personalización avanzada */
quantity-component {
  --max-width: 150px;
  --height: 50px;
  --border: 2px solid #3498db;
  --border-radius: 25px;
  --button-background: #3498db;
  --button-color: white;
  --button-background-hover: #2980b9;
  --input-background: #f8f9fa;
  --input-font-weight: bold;
}

/* Personalización adicional de clases específicas */
.quantity-component-button {
  transition: all 0.2s ease;
}

.quantity-component-input {
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
}
```
