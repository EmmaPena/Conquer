# CONQUER

Sitio web desarrollado con React + Vite para la marca de ropa **CONQUER**.

El objetivo principal es crear una experiencia moderna para mostrar colecciones de ropa deportiva, sudaderas, playeras y prendas de entrenamiento, manteniendo una identidad visual enfocada en disciplina, rendimiento y estilo de vida fitness.

---

# Tecnologías Utilizadas

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3

---

# Arquitectura del Proyecto

El proyecto sigue una arquitectura modular basada en componentes reutilizables.

```txt
src/
│
├── components/
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

- Navegación SPA mediante React Router.
- Layout principal reutilizable.
- Página Home.
- Catálogos por categoría.
- Página de detalle de producto.
- Página de contacto.
- Página 404 personalizada.
- Footer global.
- Diseño responsive.

---

# Sistema de Navegación

Se utiliza React Router para manejar la navegación entre pantallas.

## Rutas disponibles

| Ruta         | Descripción           |
| ------------ | --------------------- |
| /            | Inicio                |
| /hoodies     | Catálogo de sudaderas |
| /men         | Colección hombre      |
| /women       | Colección mujer       |
| /gym         | Ropa deportiva        |
| /contact     | Contacto              |
| /product/:id | Detalle de producto   |
| /*           | Página 404            |

---

# Home Page

La página principal está compuesta por las siguientes secciones:

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

- Pantalla completa (fullscreen).
- Soporte para video de fondo.
- Overlay con contenido promocional.
- Diseño responsive.
- Preparado para animaciones futuras.

---

## Novedades

Muestra los productos marcados como nuevos.

Características:

- Datos obtenidos desde products.js.
- Renderizado dinámico.
- Componentes reutilizables.
- Preparado para evolucionar a carrusel.

---

## Promo Banner

Sección promocional utilizada para campañas y lanzamientos.

Características:

- Imagen destacada.
- Texto promocional.
- Botón CTA.
- Diseño responsive.

---

## Colecciones

Permite navegar rápidamente entre categorías principales.

Categorías actuales:

- Sudaderas
- Hombre
- Mujer
- Gym

Características:

- Tarjetas visuales.
- Navegación mediante React Router.
- Hover con efecto zoom.
- Responsive.

---

## About Section

Sección institucional de la marca.

Características:

- Filosofía de CONQUER.
- Misión.
- Identidad visual.
- Diseño minimalista.

---

# Catálogo de Productos

Se implementó un sistema reutilizable para mostrar productos según filtros y categorías.

Componentes involucrados:

- ProductsPage.jsx
- ProductCard.jsx

Características:

- Reutilizable.
- Escalable.
- Sin duplicación de código.
- Filtrado dinámico.

---

# Página de Producto

Cada producto cuenta con una página independiente.

Ruta:

```txt
/product/:id
```

Actualmente muestra:

- Nombre.
- Imagen principal.
- Descripción.
- Precio.

Preparada para futuras mejoras:

- Galería de imágenes.
- Selector de talla.
- Selector de color.
- Productos relacionados.
- Agregar al carrito.

---

# Modelo de Producto

Todos los productos se almacenan en:

```txt
src/data/products.js
```

Estructura actual:

```js
{
  id: 10,
  name: "PRIME EDITION",
  category: "Sudaderas",
  collection: ["Hombre","Mujer"],
  featured: true,
  isNew: true,
  description: "",
  code: "AB1201-326",
  colors: ["NEGRO","BLANCO"],
  sizes: ["S","M","L","XL"],
  price: 599,
  images: [
    "/images/prime/prime_1.jpg",
    "/images/prime/prime_2.jpg",
    "/images/prime/prime_3.jpg"
  ]
}
```

---

## Campos

| Campo       | Descripción           |
| ----------- | --------------------- |
| id          | Identificador único   |
| name        | Nombre del producto   |
| category    | Categoría principal   |
| collection  | Colecciones asociadas |
| featured    | Producto destacado    |
| isNew       | Producto nuevo        |
| description | Descripción           |
| code        | Código interno        |
| colors      | Colores disponibles   |
| sizes       | Tallas disponibles    |
| price       | Precio                |
| images      | Galería de imágenes   |

---

## Collection

El campo collection utiliza un arreglo para permitir productos unisex.

Ejemplos:

```js
collection: ["Hombre"];
collection: ["Mujer"];
collection: ["Hombre", "Mujer"];
```

Esto evita duplicar productos dentro del catálogo.

---

# Componentes Actuales

## Navbar

Responsable de la navegación principal.

Funciones futuras:

- Buscador.
- Favoritos.
- Carrito.

---

## ProductCard

Tarjeta reutilizable para mostrar productos.

Características:

- Imagen principal.
- Información resumida.
- Navegación al detalle.
- Diseño responsive.

---

## Footer

Componente global persistente.

Actualmente incluye:

- Enlace a Instagram.
- Información de marca.
- Derechos reservados.

---

# Sistema de Compra (Planeado)

La tienda no utilizará pasarela de pago tradicional.

Flujo previsto:

```txt
Usuario
↓
Selecciona productos
↓
Carrito
↓
Generar pedido
↓
Enviar pedido por WhatsApp
```

Por esta razón actualmente no se maneja inventario ni stock.

---

# Próximas Funcionalidades

## Catálogo

- Hover entre imagen 1 e imagen 2.
- Galería de imágenes.
- Productos relacionados.
- Filtros avanzados.

## Producto

- Selector de talla.
- Selector de color.
- Vista completa de galería.

## Carrito

- Agregar productos.
- Actualizar cantidades.
- Eliminar productos.
- Persistencia local.

## WhatsApp

- Generación automática del pedido.
- Mensaje dinámico.
- Envío directo al número de la marca.

## Navbar

- Buscador funcional.
- Favoritos.
- Indicador de carrito.

---

# Objetivo del Proyecto

Crear una plataforma moderna para la marca CONQUER que combine diseño minimalista, rendimiento y una experiencia de compra sencilla mediante pedidos directos por WhatsApp.
