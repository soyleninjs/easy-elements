# Accordions Component

Componente web personalizado que permite crear grupos de acordeones con funcionalidad de expansión y colapso, con la opción de mantener solo un acordeón abierto a la vez o permitir múltiples acordeones abiertos simultáneamente.

## Menú
- [Accordions Component](#accordions-component)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Acordeones con apertura única](#ejemplo-1-acordeones-con-apertura-única)
    - [Ejemplo 2: Acordeones con múltiple apertura](#ejemplo-2-acordeones-con-múltiple-apertura)
    - [Ejemplo 3: Acordeones personalizados](#ejemplo-3-acordeones-personalizados)
  - [Opciones de configuración](#opciones-de-configuración)
    - [Atributos](#atributos)
    - [Selectores de datos](#selectores-de-datos)
  - [Métodos](#métodos)
    - [Ejemplo de uso con JavaScript](#ejemplo-de-uso-con-javascript)
  - [Funcionalidades](#funcionalidades)
  - [Estilización](#estilización)
    - [Variables CSS](#variables-css)
    - [Estructura de clases CSS](#estructura-de-clases-css)
    - [Atributos de personalización](#atributos-de-personalización)

## Instalación

1. Copia los archivos necesarios a tu proyecto e inclúyelos en tu HTML:
   - `index.js` - Funcionalidad del componente
   - `index.css` - Estilos del componente
   - `index.html` - Ejemplo de implementación

```html
<link rel="stylesheet" href="ruta/a/tu/proyecto/accordions-component/index.css">
<script src="ruta/a/tu/proyecto/accordions-component/index.js"></script>
```

## Uso básico

```html
<accordions-component data-open-one-by-one>
  <details class="accordion" data-accordion open>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">Título del acordeón 1</span>
      <div class="accordion-asset-wrapper">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.165 7.968a.611.611 0 0 0 .016.852c.235.234.613.24.857.015l6.577-6.548 6.348 6.548a.619.619 0 0 0 .857-.015.612.612 0 0 0 .014-.852L7.615.667l-7.45 7.3z" fill="#000"></path>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      Contenido del acordeón 1
    </div>
  </details>

  <details class="accordion" data-accordion>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">Título del acordeón 2</span>
      <div class="accordion-asset-wrapper">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.165 7.968a.611.611 0 0 0 .016.852c.235.234.613.24.857.015l6.577-6.548 6.348 6.548a.619.619 0 0 0 .857-.015.612.612 0 0 0 .014-.852L7.615.667l-7.45 7.3z" fill="#000"></path>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      Contenido del acordeón 2
    </div>
  </details>
</accordions-component>
```

## Ejemplos

### Ejemplo 1: Acordeones con apertura única

Este ejemplo muestra un grupo de acordeones donde solo uno puede estar abierto a la vez.

```html
<accordions-component data-open-one-by-one>
  <details class="accordion" data-accordion open>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">¿Qué es HTML?</span>
      <div class="accordion-asset-wrapper">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.165 7.968a.611.611 0 0 0 .016.852c.235.234.613.24.857.015l6.577-6.548 6.348 6.548a.619.619 0 0 0 .857-.015.612.612 0 0 0 .014-.852L7.615.667l-7.45 7.3z" fill="#000"></path>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. Describe la estructura de una página web mediante elementos que le indican al navegador cómo mostrar el contenido.
    </div>
  </details>

  <details class="accordion" data-accordion>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">¿Qué es CSS?</span>
      <div class="accordion-asset-wrapper">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.165 7.968a.611.611 0 0 0 .016.852c.235.234.613.24.857.015l6.577-6.548 6.348 6.548a.619.619 0 0 0 .857-.015.612.612 0 0 0 .014-.852L7.615.667l-7.45 7.3z" fill="#000"></path>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML. CSS describe cómo deben mostrarse los elementos HTML.
    </div>
  </details>

  <details class="accordion" data-accordion>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">¿Qué es JavaScript?</span>
      <div class="accordion-asset-wrapper">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.165 7.968a.611.611 0 0 0 .016.852c.235.234.613.24.857.015l6.577-6.548 6.348 6.548a.619.619 0 0 0 .857-.015.612.612 0 0 0 .014-.852L7.615.667l-7.45 7.3z" fill="#000"></path>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      JavaScript es un lenguaje de programación que permite implementar funcionalidades complejas en páginas web. Cada vez que una página web hace más que simplemente mostrar información estática, es probable que JavaScript esté involucrado.
    </div>
  </details>
</accordions-component>
```

### Ejemplo 2: Acordeones con múltiple apertura

Este ejemplo muestra un grupo de acordeones donde varios pueden estar abiertos simultáneamente.

```html
<accordions-component>
  <details class="accordion" data-accordion open>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">Sección 1: Introducción</span>
      <div class="accordion-asset-wrapper">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.165 7.968a.611.611 0 0 0 .016.852c.235.234.613.24.857.015l6.577-6.548 6.348 6.548a.619.619 0 0 0 .857-.015.612.612 0 0 0 .014-.852L7.615.667l-7.45 7.3z" fill="#000"></path>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      <p>Esta es la introducción al curso. Aquí encontrarás información básica sobre los temas que se cubrirán.</p>
    </div>
  </details>

  <details class="accordion" data-accordion open>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">Sección 2: Conceptos fundamentales</span>
      <div class="accordion-asset-wrapper">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.165 7.968a.611.611 0 0 0 .016.852c.235.234.613.24.857.015l6.577-6.548 6.348 6.548a.619.619 0 0 0 .857-.015.612.612 0 0 0 .014-.852L7.615.667l-7.45 7.3z" fill="#000"></path>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      <p>En esta sección se abordan los conceptos fundamentales que debes conocer.</p>
    </div>
  </details>

  <details class="accordion" data-accordion>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">Sección 3: Temas avanzados</span>
      <div class="accordion-asset-wrapper">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.165 7.968a.611.611 0 0 0 .016.852c.235.234.613.24.857.015l6.577-6.548 6.348 6.548a.619.619 0 0 0 .857-.015.612.612 0 0 0 .014-.852L7.615.667l-7.45 7.3z" fill="#000"></path>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      <p>Esta sección cubre temas avanzados para usuarios con experiencia previa.</p>
    </div>
  </details>
</accordions-component>
```

### Ejemplo 3: Acordeones personalizados

Este ejemplo muestra acordeones con estilos personalizados utilizando atributos y variables CSS.

```html
<style>
  .custom-accordions {
    --accordion-asset-width: 20px;
    --accordion-asset-rotation: 0deg;
    --accordion-asset-rotation-hover: 180deg;
    --accordion-border: 1px solid #3498db;
    --accordion-trigger-padding: 20px;
    --accordion-content-padding: 0 20px 20px;
  }
  
  .custom-accordions .accordion-title {
    font-weight: bold;
    color: #2980b9;
  }
  
  .custom-accordions .accordion-content {
    color: #333;
    line-height: 1.6;
  }
</style>

<accordions-component class="custom-accordions" data-open-one-by-one>
  <details class="accordion" data-accordion open no-border-top>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">Primer acordeón personalizado</span>
      <div class="accordion-asset-wrapper">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V16M8 12H16" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="#3498db" stroke-width="2"/>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      <p>Este es un acordeón con estilos personalizados. Hemos modificado los colores, bordes, espaciado y el icono.</p>
      <p>Las personalizaciones se realizan fácilmente mediante variables CSS y atributos.</p>
    </div>
  </details>

  <details class="accordion" data-accordion>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">Segundo acordeón personalizado</span>
      <div class="accordion-asset-wrapper">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V16M8 12H16" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="#3498db" stroke-width="2"/>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      <p>La estructura interna del acordeón puede contener cualquier tipo de contenido HTML.</p>
      <ul>
        <li>Listas</li>
        <li>Imágenes</li>
        <li>Enlaces</li>
        <li>Y más</li>
      </ul>
    </div>
  </details>

  <details class="accordion" data-accordion no-border-bottom>
    <summary class="accordion-trigger" data-accordion-trigger>
      <span class="accordion-title">Tercer acordeón personalizado</span>
      <div class="accordion-asset-wrapper">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V16M8 12H16" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="#3498db" stroke-width="2"/>
        </svg>
      </div>
    </summary>

    <div class="accordion-content" data-accordion-content>
      <p>El comportamiento de rotación del icono también se ha personalizado.</p>
      <p>Observa cómo el icono gira cuando el acordeón se abre o se cierra.</p>
    </div>
  </details>
</accordions-component>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción | Valores posibles | Valor por defecto |
|----------|-------------|------------------|-------------------|
| `data-open-one-by-one` | Indica si solo un acordeón puede estar abierto a la vez | No requiere valor | `false` (no está presente) |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-accordion]` | Identifica cada elemento de acordeón individual |
| `[data-accordion-trigger]` | Elemento que activa la apertura/cierre del acordeón |
| `[data-accordion-content]` | Contenido del acordeón |

## Métodos

El componente proporciona los siguientes métodos:

| Método | Descripción |
|--------|-------------|
| `closeAllAccordions()` | Cierra todos los acordeones en el componente |

### Ejemplo de uso con JavaScript

```javascript
// Obtener una referencia al componente
const accordionsComponent = document.querySelector('accordions-component');

// Cerrar todos los acordeones programáticamente
document.getElementById('close-all-button').addEventListener('click', () => {
  accordionsComponent.closeAllAccordions();
});

// Detectar cuando un acordeón se abre o cierra
const accordions = accordionsComponent.querySelectorAll('[data-accordion]');
accordions.forEach(accordion => {
  accordion.addEventListener('toggle', () => {
    if (accordion.open) {
      console.log('Acordeón abierto:', accordion.querySelector('.accordion-title').textContent);
    } else {
      console.log('Acordeón cerrado:', accordion.querySelector('.accordion-title').textContent);
    }
  });
});
```

## Funcionalidades

- **Acordeones expansibles**: Permite a los usuarios expandir y contraer secciones de contenido
- **Modo único o múltiple**: Opción para permitir solo un acordeón abierto a la vez o múltiples
- **Rotación de iconos**: Los iconos rotan automáticamente cuando el acordeón se abre o cierra
- **Personalización completa**: Amplia gama de variables CSS y atributos para personalizar la apariencia
- **Basado en elementos nativos**: Utiliza el elemento `<details>` nativo para mejor accesibilidad y compatibilidad
- **Estructura simple**: Fácil de implementar y personalizar

## Estilización

### Variables CSS

El componente incluye variables CSS para personalizar su apariencia:

```css
accordions-component {
  --accordion-asset-width: 15px;            /* Ancho del icono de flecha */
  --accordion-asset-rotation: 180deg;        /* Rotación inicial del icono */
  --accordion-asset-rotation-hover: 0deg;    /* Rotación del icono cuando el acordeón está abierto */
  --accordion-border: 1px solid #000000;     /* Borde de los acordeones */
  --accordion-trigger-padding: 15px 0;       /* Relleno del disparador del acordeón */
  --accordion-content-padding: 0 0 15px;     /* Relleno del contenido del acordeón */
}
```

### Estructura de clases CSS

| Clase | Descripción |
|-------|-------------|
| `.accordion` | Contenedor principal de cada acordeón individual |
| `.accordion-trigger` | Elemento que activa la apertura/cierre del acordeón |
| `.accordion-title` | Título del acordeón |
| `.accordion-asset-wrapper` | Contenedor del icono del acordeón |
| `.accordion-content` | Contenido del acordeón |

### Atributos de personalización

El componente permite varios atributos para personalizar cada acordeón individual:

| Atributo | Descripción |
|----------|-------------|
| `no-border` | Elimina todos los bordes del acordeón |
| `no-border-top` | Elimina el borde superior del acordeón |
| `no-border-bottom` | Elimina el borde inferior del acordeón |
| `no-padding-top` | Elimina el relleno superior del disparador del acordeón |
| `no-padding-bottom` | Elimina el relleno inferior del disparador del acordeón |
