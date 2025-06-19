# Sidebar Component

Componente web personalizado para crear barras laterales o paneles deslizantes desde diferentes direcciones con animaciones fluidas y personalización completa.

## Menú
- [Sidebar Component](#sidebar-component)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Sidebar desde la izquierda (por defecto)](#ejemplo-1-sidebar-desde-la-izquierda-por-defecto)
    - [Ejemplo 2: Sidebar desde la derecha (carrito de compras)](#ejemplo-2-sidebar-desde-la-derecha-carrito-de-compras)
    - [Ejemplo 3: Sidebar desde abajo (información rápida)](#ejemplo-3-sidebar-desde-abajo-información-rápida)
  - [Opciones de configuración](#opciones-de-configuración)
    - [Atributos](#atributos)
    - [Selectores de datos](#selectores-de-datos)
  - [Métodos](#métodos)
    - [Ejemplo de uso con JavaScript](#ejemplo-de-uso-con-javascript)
  - [Funcionalidades](#funcionalidades)
  - [Estilización](#estilización)
    - [Personalización por posición](#personalización-por-posición)
    - [Personalización avanzada con CSS](#personalización-avanzada-con-css)
    - [Estructura de clases CSS](#estructura-de-clases-css)

## Instalación

1. Copia los archivos necesarios a tu proyecto e inclúyelos en tu HTML:
   - `index.js` - Funcionalidad del componente
   - `index.css` - Estilos del componente
   - `index.html` - Ejemplo de implementación

```html
<link rel="stylesheet" href="ruta/a/tu/proyecto/sidebar-component/index.css">
<script src="ruta/a/tu/proyecto/sidebar-component/index.js"></script>
```

## Uso básico

```html
<sidebar-component data-align="left">
  <details class="sidebar-component" data-sidebar-details>
    <summary class="sidebar-component-trigger" data-sidebar-trigger>
      Abrir sidebar
    </summary>

    <aside class="sidebar-component-aside">
      <div class="sidebar-component-mask" data-sidebar-mask></div>
      
      <div class="sidebar-component-content">
        <div class="sidebar-component-header">
          Título del Sidebar
          <div class="sidebar-component-icon-close-wrapper" data-sidebar-button-close>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.97169 8L0.212755 1.24107C-0.0709183 0.957394 -0.0709183 0.496428 0.212755 0.212755C0.496428 -0.0709184 0.957394 -0.0709184 1.24107 0.212755L8 6.97169L14.7589 0.212755C15.0426 -0.0709184 15.5036 -0.0709184 15.7872 0.212755C16.0709 0.496428 16.0709 0.957394 15.7872 1.24107L9.02831 8L15.7872 14.7589C16.0709 15.0426 16.0709 15.5036 15.7872 15.7872C15.5036 16.0709 15.0426 16.0709 14.7589 15.7872L8 9.02831L1.24107 15.7872C0.957394 16.0709 0.496428 16.0709 0.212755 15.7872C-0.0709183 15.5036 -0.0709183 15.0426 0.212755 14.7589L6.97169 8Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <div class="sidebar-component-body">
          <!-- Contenido del sidebar -->
          Tu contenido aquí
        </div>
        
        <div class="sidebar-component-footer">
          <!-- Contenido del footer -->
          Botones o acciones adicionales
        </div>
      </div>
    </aside>
  </details>
</sidebar-component>
```

## Ejemplos

### Ejemplo 1: Sidebar desde la izquierda (por defecto)

```html
<sidebar-component data-align="left">
  <details class="sidebar-component" data-sidebar-details>
    <summary class="sidebar-component-trigger" data-sidebar-trigger>
      <button class="btn">Menú</button>
    </summary>

    <aside class="sidebar-component-aside">
      <div class="sidebar-component-mask" data-sidebar-mask></div>
      
      <div class="sidebar-component-content">
        <div class="sidebar-component-header">
          Navegación
          <div class="sidebar-component-icon-close-wrapper" data-sidebar-button-close>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.97169 8L0.212755 1.24107C-0.0709183 0.957394 -0.0709183 0.496428 0.212755 0.212755C0.496428 -0.0709184 0.957394 -0.0709184 1.24107 0.212755L8 6.97169L14.7589 0.212755C15.0426 -0.0709184 15.5036 -0.0709184 15.7872 0.212755C16.0709 0.496428 16.0709 0.957394 15.7872 1.24107L9.02831 8L15.7872 14.7589C16.0709 15.0426 16.0709 15.5036 15.7872 15.7872C15.5036 16.0709 15.0426 16.0709 14.7589 15.7872L8 9.02831L1.24107 15.7872C0.957394 16.0709 0.496428 16.0709 0.212755 15.7872C-0.0709183 15.5036 -0.0709183 15.0426 0.212755 14.7589L6.97169 8Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <div class="sidebar-component-body">
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  </details>
</sidebar-component>
```

### Ejemplo 2: Sidebar desde la derecha (carrito de compras)

```html
<sidebar-component data-align="right">
  <details class="sidebar-component" data-sidebar-details>
    <summary class="sidebar-component-trigger" data-sidebar-trigger>
      <div class="cart-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="cart-count">3</span>
      </div>
    </summary>

    <aside class="sidebar-component-aside">
      <div class="sidebar-component-mask" data-sidebar-mask></div>
      
      <div class="sidebar-component-content">
        <div class="sidebar-component-header">
          Carrito de compras
          <div class="sidebar-component-icon-close-wrapper" data-sidebar-button-close>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.97169 8L0.212755 1.24107C-0.0709183 0.957394 -0.0709183 0.496428 0.212755 0.212755C0.496428 -0.0709184 0.957394 -0.0709184 1.24107 0.212755L8 6.97169L14.7589 0.212755C15.0426 -0.0709184 15.5036 -0.0709184 15.7872 0.212755C16.0709 0.496428 16.0709 0.957394 15.7872 1.24107L9.02831 8L15.7872 14.7589C16.0709 15.0426 16.0709 15.5036 15.7872 15.7872C15.5036 16.0709 15.0426 16.0709 14.7589 15.7872L8 9.02831L1.24107 15.7872C0.957394 16.0709 0.496428 16.0709 0.212755 15.7872C-0.0709183 15.5036 -0.0709183 15.0426 0.212755 14.7589L6.97169 8Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <div class="sidebar-component-body">
          <div class="cart-items">
            <div class="cart-item">
              <img src="product1.jpg" alt="Producto 1">
              <div class="cart-item-details">
                <h3>Producto 1</h3>
                <p>$19.99</p>
                <div class="cart-item-quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div class="cart-item">
              <img src="product2.jpg" alt="Producto 2">
              <div class="cart-item-details">
                <h3>Producto 2</h3>
                <p>$24.99</p>
                <div class="cart-item-quantity">
                  <button>-</button>
                  <span>2</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="sidebar-component-footer">
          <div class="cart-total">
            <span>Total:</span>
            <span>$69.97</span>
          </div>
          <button class="checkout-button">Proceder al pago</button>
        </div>
      </div>
    </aside>
  </details>
</sidebar-component>
```

### Ejemplo 3: Sidebar desde abajo (información rápida)

```html
<sidebar-component data-align="bottom" style="--sidebar-max-height: 300px;">
  <details class="sidebar-component" data-sidebar-details>
    <summary class="sidebar-component-trigger" data-sidebar-trigger>
      <button class="info-button">Mostrar información</button>
    </summary>

    <aside class="sidebar-component-aside">
      <div class="sidebar-component-mask" data-sidebar-mask></div>
      
      <div class="sidebar-component-content">
        <div class="sidebar-component-header">
          Información del producto
          <div class="sidebar-component-icon-close-wrapper" data-sidebar-button-close>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.97169 8L0.212755 1.24107C-0.0709183 0.957394 -0.0709183 0.496428 0.212755 0.212755C0.496428 -0.0709184 0.957394 -0.0709184 1.24107 0.212755L8 6.97169L14.7589 0.212755C15.0426 -0.0709184 15.5036 -0.0709184 15.7872 0.212755C16.0709 0.496428 16.0709 0.957394 15.7872 1.24107L9.02831 8L15.7872 14.7589C16.0709 15.0426 16.0709 15.5036 15.7872 15.7872C15.5036 16.0709 15.0426 16.0709 14.7589 15.7872L8 9.02831L1.24107 15.7872C0.957394 16.0709 0.496428 16.0709 0.212755 15.7872C-0.0709183 15.5036 -0.0709183 15.0426 0.212755 14.7589L6.97169 8Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <div class="sidebar-component-body">
          <div class="product-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in est at nulla scelerisque scelerisque. Vivamus feugiat metus eu orci tincidunt, non fringilla quam sagittis.</p>
            <ul>
              <li><strong>Material:</strong> Aluminio</li>
              <li><strong>Dimensiones:</strong> 10 x 15 x 2 cm</li>
              <li><strong>Peso:</strong> 250g</li>
              <li><strong>Garantía:</strong> 2 años</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  </details>
</sidebar-component>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción |
|----------|-------------|
| `data-align` | Dirección desde donde aparece el sidebar ("left", "right", "bottom") |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-sidebar-details]` | Elemento `details` principal que contiene todo el sidebar |
| `[data-sidebar-trigger]` | Elemento que activa la apertura/cierre del sidebar |
| `[data-sidebar-mask]` | Máscara de fondo oscuro que cubre la página |
| `[data-sidebar-button-close]` | Botón(es) para cerrar el sidebar |

## Métodos

El componente expone los siguientes métodos:

| Método | Descripción |
|--------|-------------|
| `openSidebar()` | Abre el sidebar |
| `closeSidebar()` | Cierra el sidebar |

### Ejemplo de uso con JavaScript

```javascript
// Referencia al componente
const sidebar = document.querySelector('sidebar-component');

// Abrir el sidebar programáticamente
document.querySelector('#mi-boton').addEventListener('click', () => {
  sidebar.openSidebar();
});

// Cerrar el sidebar programáticamente
document.querySelector('#otro-boton').addEventListener('click', () => {
  sidebar.closeSidebar();
});
```

## Funcionalidades

- **Animaciones suaves**: Transiciones configurables mediante variables CSS para la apertura y cierre
- **Múltiples posiciones**: Soporte para sidebar desde la izquierda, derecha o desde abajo
- **Control de scroll**: Bloquea automáticamente el scroll de la página cuando el sidebar está abierto
- **Máscara de fondo**: Fondo oscuro que enfoca la atención en el sidebar y permite cerrar al hacer clic
- **Botón de cierre**: Cierre mediante botón, clic en la máscara o el mismo trigger
- **Ocultar automáticamente**: Si el trigger está vacío, el componente se oculta completamente
- **Secciones opcionales**: El header, body y footer son opcionales y se ocultan si están vacíos
- **Esconder scrollbar**: El contenido del body tiene scrollbar invisible pero funcional

## Estilización

El componente incluye estilos por defecto que puedes personalizar usando variables CSS:

```css
sidebar-component {
  /* Sidebar */
  --sidebar-position: absolute;
  --sidebar-top: 0px;
  --sidebar-width: calc(100% - 65px);
  --sidebar-max-width: 300px;
  --sidebar-height: calc(100dvh - var(--sidebar-top) * 2);
  --sidebar-max-height: 100dvh;
  --sidebar-content-padding: 10px;
  --sidebar-box-shadow: unset;
  --sidebar-background-color: #ffffff;
  --sidebar-border-radius: 0;
  
  /* Animación */
  --sidebar-animation-duration: 0.3s;
  --sidebar-animation-timing: forwards ease-in-out;
  
  /* Header */
  --sidebar-header-gap: 10px;
  --sidebar-header-padding: 0 0 10px;
  
  /* Body */
  --sidebar-body-padding: 0;
  
  /* Footer */
  --sidebar-footer-padding: 10px 0 0;
  
  /* Button close */
  --sidebar-button-close-display: flex;
  --sidebar-button-close-asset-size: 15px;
  --sidebar-button-close-asset-color: #000000;
}
```

### Personalización por posición

Cuando se usa `data-align="bottom"`, el componente ajusta automáticamente algunas variables:

```css
sidebar-component[data-align="bottom"] {
  --sidebar-top: 0px;
  --sidebar-width: 100%;
  --sidebar-max-width: 100%;
  --sidebar-height: 100dvh;
  --sidebar-max-height: 400px;
}
```

### Personalización avanzada con CSS

Para personalizar colores y apariencia específica de un sidebar:

```css
/* Personalizar un sidebar específico */
.mi-sidebar-especial {
  --sidebar-background-color: #f0f0f0;
  --sidebar-border-radius: 8px;
  --sidebar-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Personalizar el botón de cerrar */
.mi-sidebar-especial .sidebar-component-icon-close-wrapper {
  background-color: #e0e0e0;
  border-radius: 50%;
  padding: 5px;
}

/* Personalizar la máscara de fondo */
.mi-sidebar-especial .sidebar-component-mask {
  background-color: rgba(0, 0, 0, 0.7);
}
```

### Estructura de clases CSS

| Clase | Descripción |
|-------|-------------|
| `.sidebar-component` | Contenedor principal (elemento `details`) |
| `.sidebar-component-trigger` | Botón que activa el sidebar |
| `.sidebar-component-aside` | Contenedor del sidebar y la máscara |
| `.sidebar-component-mask` | Máscara de fondo oscuro |
| `.sidebar-component-content` | Contenedor principal del contenido |
| `.sidebar-component-header` | Cabecera del sidebar |
| `.sidebar-component-body` | Cuerpo principal con contenido scrollable |
| `.sidebar-component-footer` | Pie del sidebar |
| `.sidebar-component-icon-close-wrapper` | Contenedor del botón de cierre |
| `.is-hidding` | Clase temporal durante la animación de cierre |
| `.with-scroll` | Clase opcional para contenido con scroll | 