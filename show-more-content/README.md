# Show More Content

Componente web personalizado para mostrar contenido colapsable con funcionalidad "mostrar más" / "mostrar menos", ideal para textos largos, descripciones de productos o cualquier contenido que requiera ser expandible.

## Menú
- [Show More Content](#show-more-content)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Descripción de producto básica](#ejemplo-1-descripción-de-producto-básica)
    - [Ejemplo 2: Lista de características con altura personalizada](#ejemplo-2-lista-de-características-con-altura-personalizada)
    - [Ejemplo 3: Reseñas de usuarios con expansión inicial](#ejemplo-3-reseñas-de-usuarios-con-expansión-inicial)
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
<link rel="stylesheet" href="ruta/a/tu/proyecto/r-show-more-content/index.css">
<script src="ruta/a/tu/proyecto/r-show-more-content/index.js"></script>
```

## Uso básico

```html
<show-more-content>
  <div data-collapsable>
    <!-- Contenido que puede ser colapsado -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in est at nulla scelerisque scelerisque...</p>
  </div>
  <button type="button" hidden data-toggle-button 
          data-label-not-collapsed='Mostrar menos' 
          data-label-collapsed='Mostrar más'>Mostrar más</button>
</show-more-content>
```

## Ejemplos

### Ejemplo 1: Descripción de producto básica

```html
<show-more-content>
  <div data-collapsable>
    <h3>Descripción del producto</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in est at nulla scelerisque scelerisque. Vivamus feugiat metus eu orci tincidunt, non fringilla quam sagittis. Quisque feugiat diam nec diam faucibus imperdiet. Sed vestibulum orci vel ligula tincidunt, a bibendum erat posuere. Sed in lacus vel justo consectetur lacinia. Nulla facilisi. Phasellus ac sapien vel massa pulvinar tempus.</p>
    <p>Proin consequat turpis vel nisl congue, vel dignissim est volutpat. Mauris vel nisi at justo fermentum bibendum. Fusce non arcu at justo malesuada fermentum. Curabitur ultrices ante vel ex tincidunt, a efficitur lectus ultrices. Mauris euismod sapien vel enim malesuada, non fringilla mi tempus.</p>
  </div>
  <button type="button" hidden data-toggle-button 
          data-label-not-collapsed='Leer menos' 
          data-label-collapsed='Leer más'>Leer más</button>
</show-more-content>
```

### Ejemplo 2: Lista de características con altura personalizada

```html
<style>
  .product-features [data-collapsable] {
    --max-height: 150px;
  }
  
  .product-features button[data-toggle-button] {
    color: #0066cc;
    font-weight: bold;
    border: none;
    background: transparent;
    cursor: pointer;
  }
</style>

<show-more-content class="product-features">
  <div data-collapsable>
    <h3>Características</h3>
    <ul>
      <li><strong>Material:</strong> Aluminio de alta resistencia</li>
      <li><strong>Dimensiones:</strong> 15 x 20 x 5 cm</li>
      <li><strong>Peso:</strong> 350g</li>
      <li><strong>Batería:</strong> 5000mAh, hasta 10 horas de uso</li>
      <li><strong>Conectividad:</strong> Bluetooth 5.0, WiFi 6</li>
      <li><strong>Memoria:</strong> 8GB RAM, 128GB almacenamiento</li>
      <li><strong>Pantalla:</strong> 6.5" OLED, 120Hz</li>
      <li><strong>Resistencia:</strong> IP68 (agua y polvo)</li>
      <li><strong>Sistema operativo:</strong> Android 13</li>
      <li><strong>Cámara:</strong> 48MP principal, 12MP ultra gran angular</li>
      <li><strong>Carga:</strong> USB-C, carga rápida 65W</li>
    </ul>
  </div>
  <button type="button" hidden data-toggle-button 
          data-label-not-collapsed='Ver menos características' 
          data-label-collapsed='Ver todas las características'>Ver todas las características</button>
</show-more-content>
```

### Ejemplo 3: Reseñas de usuarios con expansión inicial

```html
<style>
  .user-reviews [data-collapsable] {
    --max-height: 200px;
  }
  
  .user-reviews [data-collapsable].collapsed {
    mask-image: linear-gradient(to top, transparent, rgb(0,0,0) 80%);
  }
  
  .user-reviews button[data-toggle-button] {
    padding: 8px 16px;
    border-radius: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    margin-top: 10px;
  }
</style>

<show-more-content class="user-reviews" data-initial-expanded>
  <div data-collapsable>
    <h3>Opiniones de clientes</h3>
    <div class="review">
      <div class="stars">★★★★★</div>
      <h4>Excelente producto</h4>
      <p>Lo compré hace un mes y funciona perfectamente. La batería dura todo el día incluso con uso intensivo. Recomendado.</p>
    </div>
    <div class="review">
      <div class="stars">★★★★☆</div>
      <h4>Muy buena relación calidad-precio</h4>
      <p>El producto cumple con lo prometido. Me gusta el diseño y la calidad de construcción. Lo único que mejoraría es el tiempo de carga.</p>
    </div>
    <div class="review">
      <div class="stars">★★★★★</div>
      <h4>Increíble</h4>
      <p>Superó mis expectativas. Funciona a la perfección y la entrega fue muy rápida.</p>
    </div>
    <div class="review">
      <div class="stars">★★★☆☆</div>
      <h4>Buen producto, pero mejorable</h4>
      <p>Funciona bien, pero esperaba un poco más de rendimiento. El servicio al cliente fue excelente cuando tuve algunas dudas sobre su uso.</p>
    </div>
  </div>
  <button type="button" hidden data-toggle-button 
          data-label-not-collapsed='Mostrar menos opiniones' 
          data-label-collapsed='Mostrar todas las opiniones'>Mostrar todas las opiniones</button>
</show-more-content>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción |
|----------|-------------|
| `data-initial-expanded` | Si está presente, el contenido se muestra expandido inicialmente |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-collapsable]` | Elemento que contiene el contenido colapsable |
| `[data-toggle-button]` | Botón que alterna entre mostrar más y mostrar menos |
| `data-label-collapsed` | Texto del botón cuando el contenido está colapsado |
| `data-label-not-collapsed` | Texto del botón cuando el contenido está expandido |

## Métodos

El componente maneja internamente el estado de expansión, pero puedes interactuar con él a través de JavaScript.

### Ejemplo de uso con JavaScript

```javascript
// Referencia al componente
const showMoreComponent = document.querySelector('show-more-content');
const toggleButton = showMoreComponent.querySelector('[data-toggle-button]');

// Expandir programáticamente
toggleButton.click();

// Verificar si está expandido
if (showMoreComponent.expanded) {
  console.log('El contenido está expandido');
} else {
  console.log('El contenido está colapsado');
}
```

## Funcionalidades

- **Altura máxima configurable**: Define la altura máxima del contenido colapsado mediante CSS variables
- **Etiquetas personalizables**: Configura fácilmente el texto de los botones para ambos estados
- **Responsive**: Se adapta automáticamente a cambios de tamaño de pantalla
- **Ocultación automática**: Si el contenido es más corto que la altura máxima, el botón no se muestra
- **Observador de contenido**: Reacciona a cambios dinámicos en el contenido
- **Estado inicial configurable**: Puede comenzar expandido o colapsado según tus necesidades

## Estilización

El componente incluye estilos básicos que puedes personalizar fácilmente:

### Personalización con CSS

```css
/* Configurar la altura máxima para el contenido colapsado */
show-more-content [data-collapsable] {
  --max-height: 120px; /* Altura máxima cuando está colapsado */
}

/* Personalizar el efecto de desvanecimiento */
show-more-content [data-collapsable].collapsed {
  mask-image: linear-gradient(to top, transparent, rgb(0,0,0) 90%);
}

/* Estilizar el botón de alternar */
show-more-content [data-toggle-button] {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

show-more-content [data-toggle-button]:hover {
  background-color: #004c99;
}
```

### Estructura de clases CSS

| Clase | Descripción |
|-------|-------------|
| `show-more-content` | Elemento raíz del componente (etiqueta personalizada) |
| `.collapsed` | Clase aplicada al contenido cuando está colapsado |
| `[hidden]` | Atributo aplicado al botón cuando no es necesario (contenido corto) |
