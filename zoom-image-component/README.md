# Zoom Image Component

Componente web personalizado que permite aplicar efecto de zoom en imágenes mediante click o hover, con capacidad de personalización completa y diferentes modos de interacción.

## Menú
- [Zoom Image Component](#zoom-image-component)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Zoom básico con click](#ejemplo-1-zoom-básico-con-click)
    - [Ejemplo 2: Zoom con hover](#ejemplo-2-zoom-con-hover)
    - [Ejemplo 3: Zoom con nivel personalizado](#ejemplo-3-zoom-con-nivel-personalizado)
  - [Opciones de configuración](#opciones-de-configuración)
    - [Atributos](#atributos)
    - [Selectores de datos](#selectores-de-datos)
  - [Funcionalidades](#funcionalidades)
  - [Estilización](#estilización)
    - [Personalización básica](#personalización-básica)
    - [Personalización avanzada con CSS](#personalización-avanzada-con-css)
    - [Clases CSS disponibles](#clases-css-disponibles)

## Instalación

1. Copia los archivos necesarios a tu proyecto e inclúyelos en tu HTML:
   - `index.js` - Funcionalidad del componente
   - `index.css` - Estilos del componente
   - `index.html` - Ejemplo de implementación

```html
<link rel="stylesheet" href="ruta/a/tu/proyecto/zoom-image-component/index.css">
<script src="ruta/a/tu/proyecto/zoom-image-component/index.js"></script>
```

## Uso básico

```html
<zoom-image-component data-zoom-level="2" data-zoom-mode="click">
  <div data-zoom-image-wrapper>
    <img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen">
  </div>
</zoom-image-component>
```

## Ejemplos

### Ejemplo 1: Zoom básico con click

```html
<zoom-image-component data-zoom-mode="click">
  <div data-zoom-image-wrapper>
    <img src="producto.jpg" alt="Imagen del producto">
  </div>
</zoom-image-component>
```

### Ejemplo 2: Zoom con hover

```html
<zoom-image-component data-zoom-mode="hover" data-zoom-level="1.5">
  <div data-zoom-image-wrapper>
    <img src="imagen-detalle.jpg" alt="Detalles del producto">
  </div>
</zoom-image-component>
```

### Ejemplo 3: Zoom con nivel personalizado

```html
<zoom-image-component data-zoom-level="3" data-disable-below="768">
  <div data-zoom-image-wrapper style="--image-wrapper-max-width: 500px; --image-wrapper-aspect-ratio: 1/1; --image-wrapper-border-radius: 8px;">
    <img src="imagen-alta-resolucion.jpg" alt="Imagen de alta resolución">
  </div>
</zoom-image-component>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `data-zoom-level` | Nivel de ampliación de la imagen al hacer zoom | `2` |
| `data-zoom-mode` | Modo de activación del zoom: "click" o "hover" | `"click"` |
| `data-disable-below` | Desactiva el zoom por debajo de un ancho de pantalla específico (en píxeles) | `null` |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-zoom-image-wrapper]` | Contenedor de la imagen donde se aplicará el efecto de zoom |

## Funcionalidades

- **Zoom interactivo**: Ampliación de imágenes con seguimiento del cursor en tiempo real
- **Múltiples modos**: Activación por click o por hover según las necesidades
- **Nivel personalizable**: Control sobre el nivel de ampliación 
- **Responsive**: Opción para desactivar el zoom en dispositivos móviles
- **Transiciones suaves**: Animaciones fluidas al activar y desactivar el zoom
- **Interacción intuitiva**: El cursor cambia para indicar las posibles interacciones
- **Dimensiones personalizables**: Control completo sobre el tamaño y proporciones del contenedor

## Estilización

El componente incluye estilos por defecto que puedes personalizar usando variables CSS:

### Personalización básica

```css
[data-zoom-image-wrapper] {
  --image-wrapper-max-width: 300px;
  --image-wrapper-aspect-ratio: 300/420;
  --image-wrapper-border-radius: 0;
  --image-wrapper-border: 1px solid;
  --image-object-fit: cover;
}
```

### Personalización avanzada con CSS

```css
/* Personalizar un zoom-image específico */
.producto-destacado [data-zoom-image-wrapper] {
  --image-wrapper-max-width: 500px;
  --image-wrapper-aspect-ratio: 1/1;
  --image-wrapper-border-radius: 8px;
  --image-wrapper-border: 2px solid #e0e0e0;
  --image-object-fit: contain;
}

/* Añadir un borde especial durante el zoom */
.producto-destacado.zoom-active [data-zoom-image-wrapper] {
  border-color: #4caf50;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

/* Personalizar el cursor */
.producto-destacado [data-zoom-image-wrapper] {
  cursor: crosshair;
}
```

### Clases CSS disponibles

| Clase | Descripción |
|-------|-------------|
| `.zoom-active` | Se añade al componente cuando el zoom está activo |
| `.zoom-disabled` | Se añade al componente cuando el zoom está desactivado por el breakpoint |
| `.zoomed` | Se añade a la imagen cuando está ampliada |
