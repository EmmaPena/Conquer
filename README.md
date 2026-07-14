# CONQUER

Sitio web desarrollado con React + Vite para la marca de ropa **CONQUER**.

El objetivo del proyecto es crear una experiencia moderna para mostrar y comercializar prendas deportivas, sudaderas, playeras y ropa fitness mediante una interfaz minimalista y pedidos directos por WhatsApp.

---

# Tecnologías Utilizadas

* React
* Vite
* React Router DOM
* Context API
* JavaScript (ES6+)
* CSS3

---

# Arquitectura del Proyecto

```txt
src/
│
├── components/
├── context/
├── css/
├── data/
├── layouts/
├── pages/
├── router/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Estado Actual

Actualmente el proyecto cuenta con:

* Navegación SPA.
* Layout principal.
* Página Home.
* Catálogos por categoría.
* Página de detalle de producto.
* Carrito global.
* Pedido mediante WhatsApp.
* Página de contacto.
* Página 404.
* Diseño responsive.

---

# Sistema de Navegación

React Router es utilizado para gestionar toda la navegación del sitio.

## Rutas

| Ruta         | Descripción         |
| ------------ | ------------------- |
| /            | Inicio              |
| /hoodies     | Sudaderas           |
| /men         | Hombre              |
| /women       | Mujer               |
| /gym         | Gym                 |
| /contact     | Contacto            |
| /cart        | Carrito             |
| /product/:id | Detalle de producto |
| *            | Página 404          |

---

# Home Page

## Estructura

```txt
Navbar
↓
Hero Section
↓
Novedades
↓
Promo Banner
↓
Colecciones
↓
About Section
↓
Footer
```

---

## Hero Section

Características:

* Fullscreen.
* Preparado para video.
* Responsive.
* Overlay promocional.

---

## Novedades

Características:

* Productos nuevos.
* Renderizado dinámico.
* Uso de ProductCard.
* Preparado para carrusel.

---

## Promo Banner

Características:

* Imagen promocional.
* Texto destacado.
* CTA.
* Responsive.

---

## Colecciones

Categorías:

* Sudaderas
* Hombre
* Mujer
* Gym

Características:

* Navegación mediante React Router.
* Hover visual.
* Responsive.

---

## About Section

Características:

* Filosofía de la marca.
* Misión.
* Identidad visual.
* Diseño minimalista.

---

# Catálogo

Sistema reutilizable para mostrar productos.

## Componentes

* ProductsPage.jsx
* ProductCard.jsx

## Características

* Reutilizable.
* Escalable.
* Filtrado dinámico.
* Responsive.

---

# Modelo de Producto

Archivo:

```txt
src/data/products.js
```

## Estructura

```js
{
  id: 10,
  name: "PRIME EDITION",
  category: "Sudaderas",
  collection: ["Hombre", "Mujer"],
  featured: true,
  isNew: true,
  description: "",
  code: "AB1201-326",
  colors: ["NEGRO", "BLANCO"],
  sizes: ["S", "M", "L", "XL"],
  price: 599,
  images: []
}
```

## Campos

| Campo       | Descripción         |
| ----------- | ------------------- |
| id          | Identificador único |
| name        | Nombre              |
| category    | Categoría principal |
| collection  | Colecciones         |
| featured    | Destacado           |
| isNew       | Nuevo               |
| description | Descripción         |
| code        | Código              |
| colors      | Colores             |
| sizes       | Tallas              |
| price       | Precio              |
| images      | Imágenes            |

---

## Collection

Permite productos unisex.

Ejemplos:

```js
collection: ["Hombre"]

collection: ["Mujer"]

collection: ["Hombre", "Mujer"]
```

---

# Página de Producto

Ruta:

```txt
/product/:id
```

## Componentes

* ProductDetail.jsx
* ProductDetail.css

## Características

* Galería de imágenes.
* Imagen principal dinámica.
* Selector de colores.
* Selector de tallas.
* Vista previa de selección.
* Información completa del producto.
* Responsive.
* Integración con carrito.

---

# Sistema de Carrito

Implementado mediante Context API.

## Archivos

* CartContext.jsx
* Cart.jsx
* CartItem.jsx

---

## Funcionalidades

### Agregar productos

* Guarda producto.
* Guarda color.
* Guarda talla.

### Gestión de cantidades

* Incrementar cantidad.
* Disminuir cantidad.
* Eliminar producto.

### Lógica de carrito

* Evita duplicados.
* Actualiza cantidades automáticamente.
* Calcula total automáticamente.

---

## Flujo

```txt
Producto
↓
Agregar al carrito
↓
Carrito
↓
Resumen
↓
WhatsApp
```

---

# Pedido por WhatsApp

La tienda utiliza WhatsApp como método principal de compra.

## Características

* Generación automática de mensaje.
* Productos seleccionados.
* Tallas.
* Colores.
* Cantidades.
* Total calculado.
* Apertura automática mediante wa.me.

---

# Componentes Globales

## Navbar

Funciones actuales:

* Navegación principal.

Preparado para:

* Buscador.
* Favoritos.
* Indicador visual de carrito.

---

## Footer

Funciones actuales:

* Instagram.
* Información de marca.
* Copyright.

---

# Diseño Responsive

Actualmente implementado en:

* Navbar.
* Hero.
* ProductCard.
* ProductGrid.
* ProductDetail.
* Footer.
* Catálogo.

---

# Próximas Funcionalidades

## Home

* Video real en Hero.
* Carrusel automático.
* Animaciones de entrada.

## Catálogo

* Hover imagen 1 → imagen 2.
* Productos relacionados.
* Filtros avanzados.

## Producto

* Zoom de imágenes.
* Productos relacionados.
* Compartir producto.

## Carrito

* Persistencia con localStorage.
* Indicador de cantidad en navbar.

## Navbar

* Buscador funcional.
* Favoritos.

## Contacto

* Formulario funcional.
* Integración con correo.

---

# Objetivo Final

Crear una plataforma moderna para CONQUER que combine:

* Diseño minimalista.
* Rendimiento.
* Experiencia responsive.
* Catálogo escalable.
* Compra simplificada mediante WhatsApp.
