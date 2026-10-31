# CONQUER — Tienda de ropa deportiva

CONQUER es una tienda en línea de ropa deportiva desarrollada con React. El proyecto busca ofrecer una experiencia de navegación sencilla, visual y adaptable a dispositivos móviles, permitiendo explorar colecciones, consultar productos, guardar favoritos y preparar pedidos mediante WhatsApp.

---

## 1. Tecnologías utilizadas

- **React:** construcción de interfaces mediante componentes.
- **Vite:** entorno de desarrollo y compilación.
- **JavaScript (ES6+):** lógica de la aplicación.
- **React Router DOM:** navegación entre páginas.
- **Context API:** administración global del carrito y favoritos.
- **React Icons:** iconografía.
- **CSS3:** estilos, animaciones y diseño responsivo.
- **LocalStorage:** persistencia de información en el navegador.
- **WhatsApp:** canal para enviar pedidos.

---

## 2. Estructura del proyecto

La organización general del proyecto es la siguiente:

```text
CONQUER/
│
├── public/
│   └── images/
│       ├── collections/
│       └── ... imágenes de productos
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Collections.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── CartItem.jsx
│   │   └── ... otros componentes
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── FavoritesContext.jsx
│   │
│   ├── css/
│   │   └── ... hojas de estilos
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Hoodies.jsx
│   │   ├── Men.jsx
│   │   ├── Women.jsx
│   │   ├── Gym.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Favorites.jsx
│   │   ├── SearchResults.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── router/
│   │   └── AppRouter.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

La estructura puede ampliarse conforme se incorporen nuevas funcionalidades.

---

## 3. Instalación y ejecución

### Requisitos

- Node.js
- npm
- Visual Studio Code (recomendado)

### Instalar dependencias

Desde la terminal, dentro de la carpeta del proyecto:

```bash
npm install
```

### Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará una dirección local para abrir la aplicación en el navegador.

### Compilar para producción

```bash
npm run build
```

---

## 4. Navegación y rutas

La navegación se administra mediante **React Router DOM**, utilizando `BrowserRouter`, `Routes` y `Route`.

Actualmente se encuentran configuradas las siguientes rutas:

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Home | Página principal |
| `/hoodies` | Hoodies | Colección de sudaderas |
| `/men` | Men | Colección para hombre |
| `/women` | Women | Colección para mujer |
| `/gym` | Gym | Colección de ropa para entrenamiento |
| `/product/:id` | ProductDetail | Detalles de un producto |
| `/contact` | Contact | Página de contacto |
| `/cart` | Cart | Carrito de compras |
| `/search` | SearchResults | Resultados de búsqueda |
| `/favorites` | Favorites | Productos favoritos |
| `*` | NotFound | Página para rutas inexistentes |

Las páginas principales utilizan `MainLayout`, que permite compartir elementos generales de navegación y estructura.

La ruta `/gym` está activa, pero no se muestra como un enlace independiente en el Navbar. Se accede desde la sección de colecciones de la página principal.

---

## 5. Página principal

La página Home funciona como punto de entrada a la tienda.

Entre sus secciones se encuentran:

- **Hero Section:** presentación visual de la marca.
- **Novedades:** productos destacados o recientes.
- **Promo Banner:** espacio para comunicar promociones.
- **Collections:** acceso visual a las diferentes colecciones.
- **About:** presentación de la identidad de CONQUER.

La sección Collections contiene accesos a:

- Sudaderas.
- Hombre.
- Mujer.
- Gym.

Cada tarjeta utiliza `Link` de React Router para navegar a su colección correspondiente.

---

## 6. Catálogo de productos

La información de los productos se centraliza en:

```text
src/data/products.js
```

Esto permite reutilizar los mismos datos en diferentes páginas y componentes.

### Modelo de producto

Los productos utilizan propiedades como:

| Propiedad | Descripción |
|---|---|
| `id` | Identificador único |
| `name` | Nombre del producto |
| `category` | Categoría |
| `collection` | Colecciones a las que pertenece |
| `featured` | Indica si es destacado |
| `isNew` | Indica si es novedad |
| `description` | Descripción |
| `code` | Código del producto |
| `colors` | Colores disponibles |
| `sizes` | Tallas disponibles |
| `price` | Precio |
| `images` | Imágenes del producto |

### Componentes del catálogo

- `ProductCard.jsx`: representa cada producto.
- `ProductGrid.jsx`: organiza los productos en una cuadrícula.
- `ProductDetail.jsx`: muestra información completa del producto.

La separación entre datos y componentes facilita agregar, modificar o eliminar productos sin tener que reconstruir las tarjetas manualmente.

---

## 7. Detalle del producto

La página de detalle utiliza la ruta dinámica:

```text
/product/:id
```

A partir del identificador, se obtiene el producto correspondiente desde `products.js`.

Entre sus funcionalidades se encuentran:

- Visualización de imágenes del producto.
- Galería mediante miniaturas.
- Nombre y descripción.
- Código del producto.
- Precio.
- Selección de color.
- Selección de talla.
- Integración con el carrito.

Esto permite que cada producto tenga una página individual sin necesidad de crear un archivo diferente para cada uno.

---

## 8. Carrito de compras

El carrito se administra mediante:

```text
src/context/CartContext.jsx
```

Se utiliza Context API para compartir el estado del carrito entre los diferentes componentes de la aplicación.

### Funcionalidades implementadas

- Agregar productos.
- Aumentar cantidades.
- Disminuir cantidades.
- Eliminar productos.
- Calcular el total.
- Diferenciar productos según su color y talla.
- Mostrar el contador de productos en el Navbar.

### Persistencia con LocalStorage

El carrito utiliza la clave:

```js
"conquer-cart"
```

Los datos se guardan en `localStorage`, por lo que permanecen disponibles después de actualizar o cerrar y volver a abrir la página en el mismo navegador.

La información se recupera al iniciar la aplicación y se actualiza cuando cambia el contenido del carrito.

---

## 9. Sistema de favoritos

Los favoritos se administran mediante:

```text
src/context/FavoritesContext.jsx
```

Este contexto permite compartir la lista de productos favoritos entre las tarjetas, el Navbar y la página de favoritos.

### Funcionalidades implementadas

- Agregar productos a favoritos.
- Quitar productos de favoritos.
- Identificar si un producto ya está guardado.
- Mostrar el contador en el Navbar.
- Consultar los productos guardados desde `/favorites`.
- Mostrar un mensaje cuando la lista está vacía.
- Mantener los favoritos después de recargar la página.

### Persistencia con LocalStorage

Los favoritos utilizan la clave:

```js
"conquer-favorites"
```

Se almacenan los identificadores de los productos, evitando duplicar toda la información de cada producto.

### Integración visual

El corazón de `ProductCard.jsx` permite agregar o quitar productos de favoritos.

El corazón del Navbar dirige a `/favorites` y muestra la cantidad de productos guardados.

El contador de favoritos es independiente del contador del carrito.

---

## 10. Búsqueda de productos

La aplicación cuenta con una funcionalidad de búsqueda integrada al Navbar y una página de resultados.

La búsqueda utiliza la ruta:

```text
/search
```

La página `SearchResults.jsx` se encarga de mostrar los resultados correspondientes.

También se contempla la organización de resultados mediante opciones de filtrado, clasificación y navegación.

---

## 11. Pedidos mediante WhatsApp

CONQUER utiliza WhatsApp como canal para gestionar los pedidos.

Desde el carrito, el usuario puede preparar un mensaje con los detalles de su compra.

El mensaje incluye información como:

- Productos seleccionados.
- Color.
- Talla.
- Cantidad.
- Subtotal por producto.
- Total de la compra.

Al continuar con el pedido, se abre WhatsApp mediante un enlace `wa.me` con el mensaje preparado.

**Importante:** abrir WhatsApp no elimina automáticamente los productos del carrito. El contenido permanece guardado hasta que el usuario lo modifique.

---

## 12. Navbar y navegación global

El Navbar funciona como elemento de navegación compartido.

Entre sus elementos se encuentran:

- Acceso a las principales secciones.
- Búsqueda de productos.
- Acceso al carrito.
- Acceso a favoritos.
- Contador dinámico del carrito.
- Contador dinámico de favoritos.
- Menú adaptable a dispositivos móviles.

Los contadores se actualizan de acuerdo con los cambios realizados en sus respectivos contextos.

---

## 13. Diseño y experiencia de usuario

La identidad visual de CONQUER busca mantener una apariencia minimalista, deportiva y moderna.

Algunos elementos de diseño utilizados son:

- Tipografía Cinzel para encabezados destacados.
- Fondos en tonos beige y colores neutros.
- Texto en tonos oscuros.
- Imágenes como elemento principal del catálogo.
- Transiciones y animaciones CSS.
- Diseño adaptable a diferentes tamaños de pantalla.
- Navegación mediante componentes reutilizables.

La intención es mantener una identidad visual consistente entre las distintas páginas.

---

## 14. Estado actual del proyecto

### Funcionalidades implementadas

- [x] Estructura inicial con React y Vite.
- [x] Navegación con React Router DOM.
- [x] Página principal.
- [x] Secciones de colecciones.
- [x] Colección de sudaderas.
- [x] Colección para hombre.
- [x] Colección para mujer.
- [x] Ruta Gym activa.
- [x] Catálogo de productos.
- [x] Tarjetas reutilizables.
- [x] Página de detalle de producto.
- [x] Selección de color y talla.
- [x] Carrito de compras.
- [x] Modificación de cantidades.
- [x] Cálculo del total.
- [x] Persistencia del carrito con LocalStorage.
- [x] Contador dinámico del carrito.
- [x] Pedidos mediante WhatsApp.
- [x] Búsqueda de productos.
- [x] Página de favoritos.
- [x] Agregar y quitar favoritos.
- [x] Persistencia de favoritos con LocalStorage.
- [x] Contador dinámico de favoritos.
- [x] Navbar con acceso a favoritos.
- [x] Contadores independientes para carrito y favoritos.

### Mejoras y funcionalidades pendientes

Las siguientes son posibilidades de desarrollo y no deben considerarse implementadas todavía:

- [ ] Integrar la opción de agregar productos al carrito directamente desde favoritos.
- [ ] Ampliar y organizar el catálogo de productos.
- [ ] Mejorar los filtros y opciones de clasificación.
- [ ] Revisar y optimizar la experiencia móvil.
- [ ] Implementar validaciones adicionales en el proceso de pedido.
- [ ] Optimizar imágenes y rendimiento.
- [ ] Revisar accesibilidad y navegación con teclado.
- [ ] Evaluar una futura integración con backend y base de datos.
- [ ] Evaluar una futura pasarela de pago, si el proyecto lo requiere.

---

## 15. Objetivo general

El objetivo de CONQUER es desarrollar una tienda en línea de ropa deportiva que combine una identidad visual propia con una experiencia de compra clara y funcional.

El proyecto se construye de manera progresiva, priorizando la organización del código, la reutilización de componentes y la implementación de funcionalidades que permitan evolucionar la aplicación sin perder su estructura.

**CONQUER — Built for those who conquer.**