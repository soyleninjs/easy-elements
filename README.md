# Biblioteca de Componentes Web

Una colección de componentes web personalizados, independientes y reutilizables creados con JavaScript nativo, sin dependencias externas. Estos componentes están diseñados para ser fácilmente integrados en cualquier proyecto web.

![Easy Elements - Biblioteca de Componentes Web](https://placehold.co/1200x400/333/fff?text=Easy+Elements)

## 📋 Contenido

- [Descripción](#descripción)
- [Componentes](#componentes)
- [Instalación](#instalación)
- [Uso](#uso)
- [Personalización](#personalización)
- [Contribución](#contribución)
- [Licencia](#licencia)

## 🚀 Descripción

Esta biblioteca ofrece componentes web personalizados que pueden ser utilizados en cualquier proyecto web. Cada componente está construido con JavaScript nativo, HTML y CSS, sin dependencias de frameworks o librerías externas, lo que garantiza máxima compatibilidad y rendimiento.

Características principales:

- **Sin dependencias externas**: Componentes construidos con JavaScript vanilla
- **Altamente personalizables**: Fáciles de adaptar a cualquier diseño
- **Accesibles**: Diseñados siguiendo las mejores prácticas de accesibilidad web
- **Responsivos**: Funcionan perfectamente en dispositivos móviles y de escritorio
- **Fácil integración**: Simplemente importa el JavaScript y CSS del componente que necesites

## 🧩 Componentes

La biblioteca incluye los siguientes componentes:

### UI Components

- **[Popup Component](https://github.com/soyleninjs/easy-elements/tree/master/popup-component)**: Ventanas emergentes modales con animaciones suaves, fondos personalizables y múltiples opciones de contenido.
- **[Tooltip Component](https://github.com/soyleninjs/easy-elements/tree/master/tooltip-component)**: Muestra información adicional al pasar el cursor o hacer clic sobre un elemento.

### Navegación

- **[Sidebar Component](https://github.com/soyleninjs/easy-elements/tree/master/sidebar-component)**: Barras laterales deslizantes con animaciones fluidas, que pueden abrirse desde cualquier lado de la pantalla.
- **[Tabs Component](https://github.com/soyleninjs/easy-elements/tree/master/tabs-component)**: Sistema de pestañas accesible y personalizable para organizar contenido en espacios limitados.

### Formularios

- **[Select Component](https://github.com/soyleninjs/easy-elements/tree/master/select-component)**: Control de selección avanzado que mejora el elemento select nativo con funcionalidades adicionales.
- **[Quantity Component](https://github.com/soyleninjs/easy-elements/tree/master/quantity-component)**: Control numérico interactivo para incrementar o decrementar valores fácilmente.

### Contenido

- **[Accordions Component](https://github.com/soyleninjs/easy-elements/tree/master/accordions-component)**: Acordeones expandibles que permiten mostrar u ocultar contenido en secciones plegables.
- **[Show More Content](https://github.com/soyleninjs/easy-elements/tree/master/show-more-content)**: Permite mostrar gradualmente más contenido al hacer clic en un botón "Ver más".
- **[Zoom Image Component](https://github.com/soyleninjs/easy-elements/tree/master/zoom-image-component)**: Aplica efecto de zoom en imágenes mediante click o hover, con seguimiento del cursor.

## 💻 Instalación

Para utilizar estos componentes en tu proyecto, puedes:

### Opción 1: Descargar componentes específicos

1. Navega al directorio del componente que necesitas en [https://github.com/soyleninjs/easy-elements](https://github.com/soyleninjs/easy-elements)
2. Descarga los archivos `index.js` y `index.css` del componente
3. Incluye estos archivos en tu proyecto

### Opción 2: Clonar el repositorio completo

```bash
git clone https://github.com/soyleninjs/easy-elements.git
cd easy-elements
```

## 🔧 Uso

Cada componente tiene su propia documentación detallada y ejemplos de uso. En general, para usar un componente:

1. Importa el JavaScript y CSS del componente en tu HTML:

```html
<!-- Importar el componente -->
<link rel="stylesheet" href="ruta/al/componente/index.css">
<script src="ruta/al/componente/index.js"></script>
```

2. Utiliza el componente en tu HTML siguiendo la estructura documentada:

```html
<!-- Ejemplo para Popup Component -->
<popup-component>
  <div class="popup-component-content">
    <h2>Título del Popup</h2>
    <p>Contenido del popup...</p>
  </div>
</popup-component>
```

3. Personaliza el componente según tus necesidades utilizando CSS y los atributos disponibles.

## 🎨 Personalización

Todos los componentes pueden personalizarse mediante:

- **Variables CSS**: Cada componente define variables CSS que pueden sobrescribirse
- **Atributos personalizados**: Configura el comportamiento mediante atributos HTML
- **Eventos**: Interactúa con los componentes mediante eventos JavaScript

Ejemplo de personalización con CSS:

```css
/* Personalizar el Popup Component */
popup-component {
  --popup-background-color: rgba(0, 0, 0, 0.8);
  --popup-content-background: #ffffff;
  --popup-border-radius: 8px;
}
```

## 👥 Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio [soyleninjs/easy-elements](https://github.com/soyleninjs/easy-elements)
2. Crea una nueva rama (`git checkout -b feature/nuevo-componente`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Añade nuevo componente'`)
5. Haz push a la rama (`git push origin feature/nuevo-componente`)
6. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](https://github.com/soyleninjs/easy-elements/blob/master/LICENSE) para más detalles.

---

Creado con ❤️ por [@soyleninjs](https://github.com/soyleninjs) 