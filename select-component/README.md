# Select Component

Componente web personalizado para crear menús desplegables con funcionalidad de selección y opciones de personalización completa.

## Menú
- [Select Component](#select-component)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Select básico con opciones simples](#ejemplo-1-select-básico-con-opciones-simples)
    - [Ejemplo 2: Select con cierre automático](#ejemplo-2-select-con-cierre-automático)
    - [Ejemplo 3: Select con opción preseleccionada](#ejemplo-3-select-con-opción-preseleccionada)
  - [Opciones de configuración](#opciones-de-configuración)
    - [Atributos](#atributos)
    - [Selectores de datos](#selectores-de-datos)
  - [Métodos](#métodos)
    - [Ejemplo de uso con JavaScript](#ejemplo-de-uso-con-javascript)
  - [Funcionalidades](#funcionalidades)
  - [Estilización](#estilización)
    - [Personalización con CSS](#personalización-con-css)
    - [Estructura de clases CSS](#estructura-de-clases-css)

## Instalación

1. Copia los archivos necesarios a tu proyecto e inclúyelos en tu HTML:

   - `index.js` - Funcionalidad del componente
   - `index.css` - Estilos del componente
   - `index.html` - Ejemplo de implementación

```html
<link rel="stylesheet" href="ruta/a/tu/proyecto/r-select-component/index.css">
<script src="ruta/a/tu/proyecto/r-select-component/index.js"></script>
```

## Uso básico

```html
<select-component data-close-dropdown-after-selected>
  <details class="select-component" data-select-details>
    <summary class="select-component-button" data-select-button>
      <span class="select-component-button-label" data-select-label>Selecciona una opción</span>
      <span class="select-component-button-asset">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.552.552 0 0 0-.771 0"/></svg>
      </span>
    </summary>
    <ul class="select-component-dropdown">
      <li class="select-component-dropdown-option" data-index="0" data-value="option1" data-select-option>Opción 1</li>
      <li class="select-component-dropdown-option" data-index="1" data-value="option2" data-select-option>Opción 2</li>
      <li class="select-component-dropdown-option" data-index="2" data-value="option3" data-select-option>Opción 3</li>
    </ul>
  </details>
</select-component>
```

## Ejemplos

### Ejemplo 1: Select básico con opciones simples

```html
<select-component>
  <details class="select-component" data-select-details>
    <summary class="select-component-button" data-select-button>
      <span class="select-component-button-label" data-select-label>Selecciona una categoría</span>
      <span class="select-component-button-asset">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.552.552 0 0 0-.771 0"/></svg>
      </span>
    </summary>
    <ul class="select-component-dropdown">
      <li class="select-component-dropdown-option" data-index="0" data-value="electronica" data-select-option>Electrónica</li>
      <li class="select-component-dropdown-option" data-index="1" data-value="ropa" data-select-option>Ropa</li>
      <li class="select-component-dropdown-option" data-index="2" data-value="hogar" data-select-option>Hogar</li>
      <li class="select-component-dropdown-option" data-index="3" data-value="deportes" data-select-option>Deportes</li>
    </ul>
  </details>
</select-component>
```

### Ejemplo 2: Select con cierre automático

```html
<select-component data-close-dropdown-after-selected>
  <details class="select-component" data-select-details>
    <summary class="select-component-button" data-select-button>
      <span class="select-component-button-label" data-select-label>Selecciona un país</span>
      <span class="select-component-button-asset">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.552.552 0 0 0-.771 0"/></svg>
      </span>
    </summary>
    <ul class="select-component-dropdown">
      <li class="select-component-dropdown-option" data-index="0" data-value="es" data-select-option>España</li>
      <li class="select-component-dropdown-option" data-index="1" data-value="mx" data-select-option>México</li>
      <li class="select-component-dropdown-option" data-index="2" data-value="ar" data-select-option>Argentina</li>
      <li class="select-component-dropdown-option" data-index="3" data-value="cl" data-select-option>Chile</li>
      <li class="select-component-dropdown-option" data-index="4" data-value="co" data-select-option>Colombia</li>
    </ul>
  </details>
</select-component>
```

### Ejemplo 3: Select con opción preseleccionada

```html
<select-component>
  <details class="select-component" data-select-details>
    <summary class="select-component-button" data-select-button>
      <span class="select-component-button-label" data-select-label>Nivel de experiencia</span>
      <span class="select-component-button-asset">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.552.552 0 0 0-.771 0"/></svg>
      </span>
    </summary>
    <ul class="select-component-dropdown">
      <li class="select-component-dropdown-option" data-index="0" data-value="principiante" data-select-option>Principiante</li>
      <li class="select-component-dropdown-option selected" data-index="1" data-value="intermedio" data-select-option>Intermedio</li>
      <li class="select-component-dropdown-option" data-index="2" data-value="avanzado" data-select-option>Avanzado</li>
      <li class="select-component-dropdown-option" data-index="3" data-value="experto" data-select-option>Experto</li>
    </ul>
  </details>
</select-component>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción |
|----------|-------------|
| `data-close-dropdown-after-selected` | Cierra automáticamente el menú desplegable después de seleccionar una opción |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-select-details]` | El elemento `details` que contiene el menú desplegable |
| `[data-select-button]` | El botón que muestra la opción seleccionada |
| `[data-select-label]` | El texto que muestra la opción seleccionada |
| `[data-select-option]` | Cada opción del menú desplegable |

## Métodos

El componente expone los siguientes métodos:

| Método | Descripción |
|--------|-------------|
| `selectOptionByIndex(index)` | Selecciona la opción en la posición especificada por el índice (comenzando desde 0) |
| `selectOptionByValue(value)` | Selecciona la opción con el valor especificado |

### Ejemplo de uso con JavaScript

```javascript
// Referencia al componente
const selectComponent = document.querySelector('select-component');

// Seleccionar una opción por índice
document.querySelector('#boton-seleccionar-por-indice').addEventListener('click', () => {
  selectComponent.selectOptionByIndex(2); // Selecciona la tercera opción (índice 2)
});

// Seleccionar una opción por valor
document.querySelector('#boton-seleccionar-por-valor').addEventListener('click', () => {
  selectComponent.selectOptionByValue('intermedio');
});

// Escuchar el evento de cambio
selectComponent.addEventListener('change', (event) => {
  console.log('Opción seleccionada:', event.detail.value);
  console.log('Índice de la opción:', event.detail.index);
});
```

## Funcionalidades

- **Selección interactiva**: Menú desplegable con opciones seleccionables
- **Cierre automático**: Opción para cerrar el menú después de seleccionar
- **Preselección**: Capacidad para definir una opción seleccionada por defecto
- **Eventos personalizados**: Emisión de eventos para detectar cambios y personalizar comportamientos
- **API sencilla**: Métodos para seleccionar opciones y gestionar el estado del componente
- **Estilización flexible**: Fácil de adaptar visualmente a diferentes diseños con variables CSS

## Estilización

El componente incluye estilos por defecto que puedes personalizar usando variables CSS:

```css
.select-component {
  /* Select button */
  --select-padding: 10px 15px;
  --select-background-color: #fff;
  --select-border: 1px solid #ddd;
  --select-border-radius: 4px;
  --select-min-width: 200px;
  
  /* Dropdown */
  --select-dropdown-offset: 5px;
  --select-dropdown-background-color: #fff;
  --select-dropdown-border: 1px solid #ddd;
  --select-dropdown-border-radius: 4px;
  --select-dropdown-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --select-dropdown-max-height: 300px;
  
  /* Options */
  --select-option-padding: 8px 12px;
  --select-option-hover-background-color: #f5f5f5;
  --select-option-selected-background-color: #e6f7ff;
  --select-option-selected-color: #1890ff;
  
  /* Arrow */
  --select-dropdown-arrow-size: 18px;
  --select-dropdown-arrow-color: #666;
}
```

### Personalización con CSS

Para personalizar la apariencia del select con diferentes estilos:

```css
/* Estilo material design */
.select-material {
  --select-padding: 12px 16px;
  --select-border: none;
  --select-border-radius: 4px;
  --select-background-color: #f5f5f5;
  --select-dropdown-border: none;
  --select-dropdown-border-radius: 4px;
  --select-dropdown-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.select-material .select-component-button {
  transition: background-color 0.2s;
}

.select-material .select-component-button:hover {
  background-color: #ebebeb;
}

/* Estilo con bordes redondeados */
.select-rounded {
  --select-border-radius: 50px;
  --select-padding: 10px 20px;
  --select-dropdown-border-radius: 12px;
  --select-option-padding: 10px 20px;
  --select-option-hover-background-color: #f0f7ff;
  --select-option-selected-background-color: #e1f0ff;
}
```

### Estructura de clases CSS

| Clase | Descripción |
|-------|-------------|
| `.select-component` | Contenedor principal (elemento `details`) |
| `.select-component-button` | Botón del select (elemento `summary`) |
| `.select-component-button-label` | Texto que muestra la opción seleccionada |
| `.select-component-button-asset` | Contenedor del icono de flecha |
| `.select-component-dropdown` | Lista desplegable de opciones |
| `.select-component-dropdown-option` | Cada opción individual en la lista |
| `.selected` | Clase aplicada a la opción seleccionada |
