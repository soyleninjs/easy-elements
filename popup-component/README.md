# Popup Component

Componente web personalizado para crear ventanas emergentes (popups) con animaciones fluidas, contenido dinámico y capacidad para mostrar diferentes tipos de contenido como texto, imágenes y videos.

## Menú
- [Popup Component](#popup-component)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Popup con contenido de texto](#ejemplo-1-popup-con-contenido-de-texto)
    - [Ejemplo 2: Popup con contenido de video](#ejemplo-2-popup-con-contenido-de-video)
    - [Ejemplo 3: Popup para ampliar imagen](#ejemplo-3-popup-para-ampliar-imagen)
  - [Opciones de configuración](#opciones-de-configuración)
    - [Atributos](#atributos)
    - [Selectores de datos](#selectores-de-datos)
  - [Métodos](#métodos)
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
<link rel="stylesheet" href="ruta/a/tu/proyecto/popup-component/index.css">
<script src="ruta/a/tu/proyecto/popup-component/index.js"></script>
```

## Uso básico

```html
<popup-component data-animation-duration="0.2" data-content-type="normal">
  <div class="popup-component-button-wrapper">
    <div class="popup-component-button" data-popup-button-open>Abrir popup</div>
  </div>

  <div class="popup-component" data-popup>
    <div class="popup-component-mask" data-popup-mask></div>

    <div class="popup-component-content">
      <!-- Contenido del popup -->
      <p>Este es el contenido del popup.</p>

      <div class="popup-component-icon-close-wrapper" data-popup-button-close>
        <span class="popup-component-icon-close"></span>
      </div>
    </div>
  </div>
</popup-component>
```

## Ejemplos

### Ejemplo 1: Popup con contenido de texto

```html
<popup-component data-animation-duration="0.2" data-content-type="normal">
  <div class="popup-component-button-wrapper">
    <button class="popup-component-button" data-popup-button-open>Ver términos y condiciones</button>
  </div>

  <div class="popup-component" data-popup>
    <div class="popup-component-mask" data-popup-mask></div>

    <div class="popup-component-content">
      <h2>Términos y Condiciones</h2>
      <div class="popup-content-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor quam vitae erat facilisis, nec convallis tellus posuere. Aenean imperdiet ligula id tellus cursus, at faucibus justo rhoncus.</p>
        <p>Sed viverra felis at est semper, nec cursus metus interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eleifend libero ac risus efficitur, vel aliquet velit vestibulum.</p>
        <p>Curabitur sagittis, turpis vel placerat facilisis, erat magna luctus dui, ut bibendum est magna nec risus. Aliquam erat volutpat. Fusce semper urna at tellus accumsan, eu vulputate lorem pharetra.</p>
      </div>
      
      <div class="popup-component-icon-close-wrapper" data-popup-button-close>
        <span class="popup-component-icon-close"></span>
      </div>
    </div>
  </div>
</popup-component>
```

### Ejemplo 2: Popup con contenido de video

```html
<popup-component data-animation-duration="0.3" data-content-type="video">
  <div class="popup-component-button-wrapper">
    <button class="popup-component-button" data-popup-button-open>Ver video</button>
  </div>

  <div class="popup-component" data-popup>
    <div class="popup-component-mask" data-popup-mask></div>

    <div class="popup-component-content">
      <!-- Video de YouTube (con enablejsapi=1 para control a través de JavaScript) -->
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID?enablejsapi=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      
      <!-- Alternativa: Video nativo HTML5 -->
      <!-- 
      <video controls>
        <source src="video.mp4" type="video/mp4">
        Tu navegador no soporta el elemento de video.
      </video>
      -->
      
      <div class="popup-component-icon-close-wrapper" data-popup-button-close>
        <span class="popup-component-icon-close"></span>
      </div>
    </div>
  </div>
</popup-component>
```

### Ejemplo 3: Popup para ampliar imagen

```html
<popup-component data-animation-duration="0.2" data-content-type="normal">
  <div class="popup-component-button-wrapper">
    <div class="popup-component-button" data-popup-button-open>
      <img src="imagen-miniatura.jpg" alt="Miniatura de imagen" style="max-width: 150px; cursor: pointer;">
    </div>
  </div>

  <div class="popup-component" data-popup>
    <div class="popup-component-mask" data-popup-mask></div>

    <div class="popup-component-content">
      <img src="imagen-grande.jpg" alt="Imagen ampliada" style="max-width: 100%;">
      
      <div class="popup-component-icon-close-wrapper" data-popup-button-close>
        <span class="popup-component-icon-close"></span>
      </div>
    </div>
  </div>
</popup-component>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción | Valores posibles | Valor por defecto |
|----------|-------------|------------------|-------------------|
| `data-animation-duration` | Duración de la animación de apertura/cierre en segundos | Número (por ejemplo, "0.2") | - |
| `data-content-type` | Tipo de contenido del popup | "normal", "video" | "normal" |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-popup-button-open]` | Elemento que activa la apertura del popup |
| `[data-popup]` | Contenedor principal del popup |
| `[data-popup-mask]` | Máscara semi-transparente que cubre el fondo |
| `[data-popup-button-close]` | Botón para cerrar el popup |

## Métodos

El componente proporciona los siguientes métodos:

| Método | Descripción |
|--------|-------------|
| `openPopup()` | Abre el popup |
| `closePopup()` | Cierra el popup |
| `pauseVideos()` | Pausa todos los videos dentro del popup (automático al cerrar) |

### Ejemplo de uso con JavaScript

```javascript
// Obtener una referencia al componente
const popup = document.querySelector('popup-component');

// Abrir el popup programáticamente
document.getElementById('open-popup-button').addEventListener('click', () => {
  popup.openPopup();
});

// Cerrar el popup programáticamente
document.getElementById('close-popup-button').addEventListener('click', () => {
  popup.closePopup();
});

// Detectar cuando se abre el popup
const popupElement = popup.querySelector('[data-popup]');
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (popupElement.classList.contains('visible')) {
        console.log('El popup se ha abierto');
      } else if (!popupElement.classList.contains('visible')) {
        console.log('El popup se ha cerrado');
      }
    }
  });
});

observer.observe(popupElement, { attributes: true });
```

## Funcionalidades

- **Animaciones fluidas**: Transiciones suaves para la apertura y cierre del popup
- **Bloqueo de desplazamiento**: Evita el desplazamiento del contenido principal cuando el popup está abierto
- **Cierre al hacer clic en el fondo**: El popup se cierra al hacer clic en la máscara de fondo
- **Control de videos**: Pausa automáticamente los videos (YouTube o HTML5) al cerrar el popup
- **Personalización completa**: Amplia gama de variables CSS para personalizar la apariencia
- **Soporte para múltiples instancias**: Puedes tener varios popups en la misma página

## Estilización

### Variables CSS

El componente incluye variables CSS para personalizar su apariencia:

```css
.popup-component {
  --popup-content-max-width: 650px;        /* Ancho máximo del contenido del popup */
  --popup-content-padding: 5px;            /* Padding del contenido */
  
  /* Botón de cierre */
  --button-close-top: -27px;               /* Posición superior del botón de cierre */
  --button-close-right: 0;                 /* Posición derecha del botón de cierre */
  --button-close-padding: 5px;             /* Padding del botón de cierre */
  --button-close-border-radius: 0;         /* Radio de borde del botón de cierre */
  --button-close-color: 0, 0, 0;           /* Color RGB del icono de cierre */
  --button-close-background-color: white;  /* Color de fondo del botón de cierre */
  --button-close-color-hover: 255, 255, 255; /* Color RGB del icono de cierre al pasar el cursor */
  --button-close-background-color-hover: black; /* Color de fondo del botón de cierre al pasar el cursor */
  --button-close-size-icon: 12px;          /* Tamaño del icono de cierre */
}
```

### Estructura de clases CSS

| Clase | Descripción |
|-------|-------------|
| `.popup-component` | Contenedor principal del popup |
| `.popup-component-button-wrapper` | Contenedor del botón para abrir el popup |
| `.popup-component-button` | Botón para abrir el popup |
| `.popup-component-mask` | Máscara semi-transparente de fondo |
| `.popup-component-content` | Contenedor del contenido del popup |
| `.popup-component-icon-close-wrapper` | Contenedor del botón de cierre |
| `.popup-component-icon-close` | Icono de cierre (×) |
| `.popup-component.visible` | Clase aplicada cuando el popup está visible |
| `.popup-component.hidding` | Clase aplicada durante la animación de cierre |

Puedes sobrescribir estos estilos en tu CSS para personalizar aún más el componente:

```css
/* Ejemplo de personalización avanzada */
popup-component {
  --popup-content-max-width: 800px;
  --popup-content-padding: 20px;
  --button-close-padding: 8px;
  --button-close-border-radius: 50%;
  --button-close-background-color: #3498db;
  --button-close-color: 255, 255, 255;
  --button-close-background-color-hover: #2980b9;
}

/* Personalización del contenido */
.popup-component-content {
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

/* Personalización del botón de apertura */
.popup-component-button {
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s;
}

.popup-component-button:hover {
  background-color: #2980b9;
}
```
