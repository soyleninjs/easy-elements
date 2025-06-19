# Tabs Component

Componente web personalizado para crear pestañas interactivas con contenido dinámico y opciones de personalización flexible.

## Menú
- [Tabs Component](#tabs-component)
  - [Menú](#menú)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Tabs básico con contenido simple](#ejemplo-1-tabs-básico-con-contenido-simple)
    - [Ejemplo 2: Tabs con nombres personalizados](#ejemplo-2-tabs-con-nombres-personalizados)
    - [Ejemplo 3: Múltiples contenidos sincronizados](#ejemplo-3-múltiples-contenidos-sincronizados)
  - [Opciones de configuración](#opciones-de-configuración)
    - [Atributos](#atributos)
    - [Selectores de datos](#selectores-de-datos)
  - [Eventos](#eventos)
    - [Ejemplo de uso con eventos](#ejemplo-de-uso-con-eventos)
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
<link rel="stylesheet" href="ruta/a/tu/proyecto/tabs-component/index.css">
<script src="ruta/a/tu/proyecto/tabs-component/index.js"></script>
```

## Uso básico

```html
<tabs-component>
  <div class="tabs-component-buttons">
    <div class="tabs-component-buttons-wrapper">
      <button type="button" class="tabs-component-button active" data-tab-button>
        Pestaña 1
      </button>
      <button type="button" class="tabs-component-button" data-tab-button>
        Pestaña 2
      </button>
    </div>
  </div>

  <div class="tabs-component-contents">
    <div class="tabs-component-content active" data-tab-content>
      Contenido de la pestaña 1
    </div>
    <div class="tabs-component-content" data-tab-content>
      Contenido de la pestaña 2
    </div>
  </div>
</tabs-component>
```

## Ejemplos

### Ejemplo 1: Tabs básico con contenido simple

```html
<tabs-component>
  <div class="tabs-component-buttons">
    <div class="tabs-component-buttons-wrapper">
      <button type="button" class="tabs-component-button active" data-tab-button>
        Información
      </button>
      <button type="button" class="tabs-component-button" data-tab-button>
        Características
      </button>
      <button type="button" class="tabs-component-button" data-tab-button>
        Reseñas
      </button>
    </div>
  </div>

  <div class="tabs-component-contents">
    <div class="tabs-component-content active" data-tab-content>
      <h3>Información del producto</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, nisl at ultricies mattis, velit magna bibendum justo, at egestas nibh nisi a nisl.</p>
    </div>
    <div class="tabs-component-content" data-tab-content>
      <h3>Características principales</h3>
      <ul>
        <li>Característica 1</li>
        <li>Característica 2</li>
        <li>Característica 3</li>
      </ul>
    </div>
    <div class="tabs-component-content" data-tab-content>
      <h3>Reseñas de clientes</h3>
      <div class="review">
        <div class="stars">★★★★★</div>
        <p>"Gran producto, muy satisfecho con mi compra."</p>
      </div>
    </div>
  </div>
</tabs-component>
```

### Ejemplo 2: Tabs con nombres personalizados

```html
<tabs-component>
  <div class="tabs-component-buttons">
    <div class="tabs-component-buttons-wrapper">
      <button type="button" class="tabs-component-button active" data-tab-button="descripcion">
        Descripción
      </button>
      <button type="button" class="tabs-component-button" data-tab-button="especificaciones">
        Especificaciones
      </button>
      <button type="button" class="tabs-component-button" data-tab-button="garantia">
        Garantía
      </button>
    </div>
  </div>

  <div class="tabs-component-contents">
    <div class="tabs-component-content active" data-tab-content="descripcion">
      <h3>Descripción completa</h3>
      <p>Este producto de alta calidad está diseñado para ofrecer el mejor rendimiento en su categoría.</p>
    </div>
    <div class="tabs-component-content" data-tab-content="especificaciones">
      <h3>Especificaciones técnicas</h3>
      <table>
        <tr>
          <td>Dimensiones:</td>
          <td>10 x 15 x 2 cm</td>
        </tr>
        <tr>
          <td>Peso:</td>
          <td>250g</td>
        </tr>
        <tr>
          <td>Material:</td>
          <td>Aluminio</td>
        </tr>
      </table>
    </div>
    <div class="tabs-component-content" data-tab-content="garantia">
      <h3>Información de garantía</h3>
      <p>Este producto incluye 2 años de garantía contra defectos de fabricación.</p>
    </div>
  </div>
</tabs-component>
```

### Ejemplo 3: Múltiples contenidos sincronizados

```html
<tabs-component data-aditional-contents="data-tab-related, data-tab-extra">
  <!-- Botones de pestañas -->
  <div class="tabs-component-buttons">
    <div class="tabs-component-buttons-wrapper">
      <button type="button" class="tabs-component-button active" data-tab-button="seccion1">
        Sección 1
      </button>
      <button type="button" class="tabs-component-button" data-tab-button="seccion2">
        Sección 2
      </button>
    </div>
  </div>

  <!-- Contenido principal -->
  <div class="tabs-component-contents">
    <div class="tabs-component-content active" data-tab-content="seccion1">
      Contenido principal de la sección 1
    </div>
    <div class="tabs-component-content" data-tab-content="seccion2">
      Contenido principal de la sección 2
    </div>
  </div>

  <!-- Contenido relacionado (se sincroniza con las pestañas) -->
  <div class="contenido-relacionado">
    <div class="active" data-tab-related="seccion1">
      Contenido relacionado para la sección 1
    </div>
    <div data-tab-related="seccion2">
      Contenido relacionado para la sección 2
    </div>
  </div>

  <!-- Contenido extra (también se sincroniza) -->
  <div class="contenido-extra">
    <div class="active" data-tab-extra="seccion1">
      Contenido extra para la sección 1
    </div>
    <div data-tab-extra="seccion2">
      Contenido extra para la sección 2
    </div>
  </div>
</tabs-component>
```

## Opciones de configuración

### Atributos

| Atributo | Descripción |
|----------|-------------|
| `data-aditional-contents` | Lista de atributos de datos separados por coma para identificar contenidos adicionales que deben sincronizarse con las pestañas principales |

### Selectores de datos

| Selector | Descripción |
|----------|-------------|
| `[data-tab-button]` | Elemento botón que activa una pestaña. Puede incluir un valor personalizado (ej: `data-tab-button="nombre"`) |
| `[data-tab-content]` | Contenido asociado a una pestaña. Puede incluir un valor personalizado que debe coincidir con su botón (ej: `data-tab-content="nombre"`) |
| `[data-tab-related]`, `[data-tab-extra]`, etc. | Contenidos adicionales que se sincronizarán con las pestañas principales (definidos en `data-aditional-contents`) |

## Eventos

El componente emite los siguientes eventos:

| Evento | Descripción |
|--------|-------------|
| `init` | Se dispara cuando el componente se ha inicializado |
| `change` | Se dispara cuando cambia la pestaña activa. Incluye información sobre el índice y nombre de la pestaña en el objeto `event.detail` |

### Ejemplo de uso con eventos

```javascript
// Referencia al componente
const tabsComponent = document.querySelector('tabs-component');

// Escuchar el evento de inicialización
tabsComponent.addEventListener('init', () => {
  console.log('Componente inicializado');
});

// Escuchar el evento de cambio de pestaña
tabsComponent.addEventListener('change', (event) => {
  console.log('Pestaña activa:', event.detail.index);
  console.log('Nombre de la pestaña:', event.detail.name);
});
```

## Funcionalidades

- **Navegación intuitiva**: El usuario puede cambiar de pestaña haciendo clic en los botones correspondientes.
- **Sincronización de múltiples contenidos**: Permite sincronizar varios bloques de contenido con las pestañas principales.
- **Soporte para identificadores por nombre o índice**: Las pestañas pueden identificarse tanto por nombres personalizados como por su posición en la secuencia.
- **Personalización flexible**: Amplia capacidad de personalización visual mediante CSS.

## Estilización

### Personalización con CSS

El componente permite una personalización completa mediante CSS, con clases específicas para cada elemento:

```css
/* Ejemplo de personalización */
tabs-component {
  --content-display-active: flex; /* Cambiar display para contenido activo */
}

.tabs-component-buttons-wrapper {
  display: flex;
  border-bottom: 2px solid #eaeaea;
}

.tabs-component-button {
  padding: 10px 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tabs-component-button.active {
  font-weight: bold;
  border-bottom: 2px solid #0066cc;
  margin-bottom: -2px;
}

.tabs-component-content {
  padding: 20px;
}

.tabs-component-content.active {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Estructura de clases CSS

| Clase | Descripción |
|-------|-------------|
| `tabs-component` | Contenedor principal del componente |
| `tabs-component-buttons` | Contenedor de los botones de navegación |
| `tabs-component-buttons-wrapper` | Wrapper interno para los botones |
| `tabs-component-button` | Botón individual de cada pestaña |
| `tabs-component-button.active` | Botón de la pestaña actualmente activa |
| `tabs-component-contents` | Contenedor de todos los contenidos |
| `tabs-component-content` | Contenido individual de cada pestaña |
| `tabs-component-content.active` | Contenido actualmente visible |
