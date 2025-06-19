# Tooltip Component

Componente web personalizado para crear tooltips interactivos con posicionamiento inteligente y múltiples modos de activación.

## Menú
- [Tooltip Component](#tooltip-component)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Tooltip básico con activación por hover](#ejemplo-1-tooltip-básico-con-activación-por-hover)
    - [Ejemplo 2: Tooltip con activación por clic](#ejemplo-2-tooltip-con-activación-por-clic)
    - [Ejemplo 3: Tooltip con comportamiento responsivo](#ejemplo-3-tooltip-con-comportamiento-responsivo)
  - [Opciones de configuración](#opciones-de-configuración)
    - [Atributos](#atributos)
    - [Selectores de datos](#selectores-de-datos)
    - [Eventos personalizados](#eventos-personalizados)
  - [Funcionalidades](#funcionalidades)
  - [Estilización](#estilización)
    - [Personalización de posiciones](#personalización-de-posiciones)
    - [Personalización avanzada con CSS](#personalización-avanzada-con-css)
    - [Estructura de clases CSS](#estructura-de-clases-css)

## Instalación

1. Copia los archivos necesarios a tu proyecto e inclúyelos en tu HTML:
   - `index.js` - Funcionalidad del componente
   - `index.css` - Estilos del componente
   - `index.html` - Ejemplo de implementación

```html
<link rel="stylesheet" href="ruta/a/tu/proyecto/tooltip-component/index.css">
<script src="ruta/a/tu/proyecto/tooltip-component/index.js"></script>
```

## Uso básico

```html
<tooltip-component data-mode="hover">
  <button data-tooltip-trigger>
    Hover aquí
  </button>
  
  <div data-tooltip-content>
    Este es el contenido del tooltip
  </div>
</tooltip-component>
```

## Ejemplos

### Ejemplo 1: Tooltip básico con activación por hover

```html
<tooltip-component data-mode="hover">
  <button class="info-button" data-tooltip-trigger>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  </button>
  
  <div class="custom-tooltip" data-tooltip-content>
    <div class="tooltip-header">
      Información importante
    </div>
    <div class="tooltip-body">
      <p>Este tooltip muestra información adicional al pasar el cursor sobre el botón.</p>
    </div>
  </div>
</tooltip-component>
```

### Ejemplo 2: Tooltip con activación por clic

```html
<tooltip-component data-mode="click">
  <button class="help-button" data-tooltip-trigger>
    Ayuda
  </button>
  
  <div class="help-tooltip" data-tooltip-content>
    <div class="tooltip-header">
      Instrucciones
    </div>
    <div class="tooltip-body">
      <p>Siga estos pasos para completar el proceso:</p>
      <ol>
        <li>Complete el formulario</li>
        <li>Verifique sus datos</li>
        <li>Envíe la solicitud</li>
      </ol>
    </div>
    <div class="tooltip-footer">
      <button class="close-tooltip">Cerrar</button>
    </div>
  </div>
</tooltip-component>
```

### Ejemplo 3: Tooltip con comportamiento responsivo

```html
<tooltip-component data-mode="hover" data-mobile-mode="click" data-breakpoint="768">
  <span class="term" data-tooltip-trigger>
    Término técnico
  </span>
  
  <div class="glossary-tooltip" data-tooltip-content>
    <h3>Término técnico</h3>
    <p>Definición detallada del término técnico con explicación completa.</p>
    <a href="#">Más información</a>
  </div>
</tooltip-component>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción |
|----------|-------------|
| `data-mode` | Modo de activación del tooltip ("hover" o "click") |
| `data-mobile-mode` | Modo de activación en dispositivos móviles ("hover" o "click") |
| `data-breakpoint` | Punto de quiebre en píxeles para cambiar entre modo normal y móvil |
| `data-content-positions` | Lista de posiciones preferidas separadas por comas (ej: "top-left,bottom-right") |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-tooltip-trigger]` | Elemento que activa la visualización del tooltip |
| `[data-tooltip-content]` | Contenido del tooltip que se mostrará |

### Eventos personalizados

El componente emite los siguientes eventos personalizados que puedes escuchar para realizar acciones adicionales:

| Evento | Descripción |
|--------|-------------|
| `tooltip:show` | Se dispara cuando el tooltip se muestra |
| `tooltip:hide` | Se dispara cuando el tooltip se oculta |

Ejemplo de uso de los eventos:

```javascript
// Obtener referencia al componente
const tooltip = document.querySelector('tooltip-component');

// Escuchar el evento de mostrar tooltip
tooltip.addEventListener('tooltip:show', (event) => {
  console.log('Tooltip mostrado:', event.detail.source);
  // Realizar acciones adicionales cuando se muestra el tooltip
});

// Escuchar el evento de ocultar tooltip
tooltip.addEventListener('tooltip:hide', (event) => {
  console.log('Tooltip ocultado:', event.detail.source);
  // Realizar acciones adicionales cuando se oculta el tooltip
});
```

## Funcionalidades

- **Posicionamiento inteligente**: Calcula automáticamente la mejor posición para el tooltip
- **Múltiples posiciones**: Soporta 12 posiciones diferentes (top, bottom, left, right con variantes)
- **Modos de activación**: Funciona con eventos hover o click
- **Modo responsivo**: Permite configurar comportamientos diferentes en móvil y escritorio
- **Visibilidad automática**: Detecta los límites de la pantalla para garantizar que el tooltip sea visible
- **Cierre automático**: En modo click, se cierra al hacer clic fuera del tooltip
- **Eventos personalizados**: Emite eventos que pueden ser capturados por otros componentes
- **Ajuste al scroll**: Se reposiciona automáticamente al hacer scroll en la página

## Estilización

El componente incluye estilos básicos que puedes personalizar usando variables CSS:

```css
[data-tooltip-content] {
  /* Offset */
  --offset-x: 5px;
  --offset-y: 5px;
  
  /* Personalización visual */
  width: 200px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}
```

### Personalización de posiciones

El componente soporta 12 posiciones diferentes que puedes personalizar:

```css
/* Ejemplo de personalización para una posición específica */
[data-tooltip-content].top-middle {
  --offset-y: 10px; /* Aumentar la separación vertical */
  border-top: 3px solid blue; /* Añadir un indicador de color */
}

[data-tooltip-content].bottom-left::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 16px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ffffff;
}
```

### Personalización avanzada con CSS

Para personalizar la apariencia específica de un tooltip:

```css
/* Personalizar un tooltip específico */
.mi-tooltip-personalizado[data-tooltip-content] {
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 100, 0.15);
  max-width: 300px;
}

/* Personalizar el trigger */
.mi-tooltip-personalizado[data-tooltip-trigger] {
  border-bottom: 1px dashed #999;
  cursor: help;
}

/* Añadir animaciones */
.mi-tooltip-personalizado[data-tooltip-content].visible {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Estructura de clases CSS

| Clase | Descripción |
|-------|-------------|
| `[data-tooltip-trigger]` | Elemento que activa el tooltip |
| `[data-tooltip-content]` | Contenedor del contenido del tooltip |
| `.visible` | Clase aplicada cuando el tooltip está visible |
| `.top-left`, `.top-middle`, `.top-right` | Clases para posicionamiento superior |
| `.right-top`, `.right-middle`, `.right-bottom` | Clases para posicionamiento derecho |
| `.bottom-right`, `.bottom-middle`, `.bottom-left` | Clases para posicionamiento inferior |
| `.left-bottom`, `.left-middle`, `.left-top` | Clases para posicionamiento izquierdo |
