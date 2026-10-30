# CONQUER

**CONQUER** es un proyecto de comercio electrónico desarrollado con React y Vite para una marca de ropa deportiva y fitness.

El objetivo es ofrecer una experiencia de navegación moderna, minimalista y responsiva, permitiendo a los usuarios explorar colecciones, consultar productos, seleccionar tallas y colores, gestionar un carrito de compras persistente y realizar pedidos directamente mediante WhatsApp.

---

# 1. Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React | Construcción de interfaces |
| Vite | Entorno de desarrollo |
| JavaScript (ES6+) | Lógica de la aplicación |
| CSS3 | Diseño y estilos |
| React Router DOM | Navegación entre páginas |
| React Context API | Administración global del carrito |
| localStorage | Persistencia local del carrito |
| React Icons | Iconografía |
| WhatsApp API (wa.me) | Generación de pedidos |

---

# 2. Instalación y ejecución

## Requisitos

- Node.js.
- npm.
- Editor de código (recomendado: Visual Studio Code).

## Instalación

Clonar o descargar el repositorio y acceder a la carpeta del proyecto.

```bash
cd CONQUER
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite proporcionará una dirección local para visualizar la aplicación desde el navegador.

---

# 3. Arquitectura del proyecto

El proyecto utiliza una arquitectura modular basada en componentes reutilizables, separación de responsabilidades y centralización de los datos de productos.

## Estructura de directorios

```text
CONQUER/
│
├── public/
│   └── images/
│       ├── prime/
│       ├── ramon/
│       ├── frank/
│       └── ...
│
├── src/
│   │
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── CartItem.jsx
│   │   ├── CategoryNav.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewArrivals.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductsPage.jsx
│   │   └── PromoBanner.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── css/
│   │   ├── AboutSection.css
│   │   ├── Cart.css
│   │   ├── CartItem.css
│   │   ├── CategoryNav.css
│   │   ├── Footer.css
│   │   ├── HeroSection.css
│   │   ├── Navbar.css
│   │   ├── NewArrivals.css
│   │   ├── ProductCard.css
│   │   ├── ProductDetail.css
│   │   ├── ProductGrid.css
│   │   ├── ProductsPage.css
│   │   ├── PromoBanner.css
│   │   └── SearchResults.css
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Gym.jsx
│   │   ├── Home.jsx
│   │   ├── Hoodies.jsx
│   │   ├── Men.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── SearchResults.jsx
│   │   └── Women.jsx
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

*Nota: la estructura representa la organización de referencia. Los archivos adicionales pueden incorporarse conforme se desarrollen nuevas funcionalidades.*

---

# 4. Sistema de navegación

La navegación está implementada mediante **React Router DOM**, permitiendo cambiar entre páginas sin recargar completamente el sitio.

## Rutas disponibles

| Ruta | Descripción | Estado |
|---|---|---|
| `/` | Página principal | Implementada |
| `/hoodies` | Catálogo de sudaderas | Implementada |
| `/men` | Colección para hombre | Implementada |
| `/women` | Colección para mujer | Implementada |
| `/product/:id` | Detalle individual del producto | Implementada |
| `/contact` | Página de contacto | Implementada |
| `/cart` | Carrito de compras | Implementada |
| `/search` | Resultados de búsqueda | Implementada |
| `/gym` | Catálogo de ropa deportiva | Pendiente de habilitar |
| `*` | Página de error 404 | Implementada |

## Layout principal

El componente `MainLayout.jsx` centraliza los elementos que se mantienen durante la navegación:

- Navbar.
- Contenido de la página mediante `Outlet`.
- Footer.

Esto permite mantener una estructura consistente en las diferentes secciones del sitio.

---

# 5. Página principal (Home)

La página principal funciona como punto de entrada a la tienda.

## Estructura

```text
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

## 5.1 Hero Section

Sección principal de presentación de la marca.

Características:

- Diseño de pantalla completa.
- Soporte para video de fondo.
- Overlay para contenido promocional.
- Mensaje de identidad de marca.
- Botón de llamada a la acción.
- Diseño adaptable a dispositivos móviles.

## 5.2 Novedades

Sección destinada a mostrar los lanzamientos recientes.

Características:

- Obtención de productos desde `products.js`.
- Filtrado mediante la propiedad `isNew`.
- Renderizado dinámico con `.map()`.
- Reutilización de `ProductCard`.

## 5.3 Promo Banner

Sección promocional de la marca.

Características:

- Imagen de campaña.
- Texto promocional.
- Botón CTA.
- Diseño responsive.

## 5.4 Colecciones

Sección que permite acceder a las principales líneas de productos.

Colecciones contempladas:

- Sudaderas.
- Hombre.
- Mujer.
- Gym.

Características:

- Tarjetas visuales.
- Navegación mediante React Router.
- Efectos hover.
- Diseño adaptable.

## 5.5 About Section

Sección institucional dedicada a presentar la identidad de CONQUER.

Características:

- Filosofía de la marca.
- Mensaje institucional.
- Identidad visual.
- Diseño minimalista.

---

# 6. Catálogo de productos

El catálogo utiliza un sistema reutilizable que permite mostrar productos de diferentes categorías sin duplicar componentes.

## Componentes principales

- `ProductsPage.jsx`
- `ProductGrid.jsx`
- `ProductCard.jsx`

## Características

- Renderizado dinámico de productos.
- Filtrado por categoría.
- Filtrado por colección.
- Navegación al detalle individual.
- Diseño responsive.

## Categorías

- Sudaderas.
- Playeras.
- Joggers.
- Ropa deportiva.

Las categorías se administran mediante la propiedad `category` de cada producto.

---

# 7. Modelo de datos

La información de los productos se encuentra centralizada en:

```text
src/data/products.js
```

## Estructura de un producto

```javascript
{
    id: 10,
    name: "PRIME EDITION",
    category: "Sudaderas",
    collection: ["Hombre", "Mujer"],
    featured: true,
    isNew: true,
    description: "Descripción del producto",
    code: "AB1201-326",
    colors: ["NEGRO", "BLANCO"],
    sizes: ["S", "M", "L", "XL"],
    price: 599,
    images: [
        "/images/prime/prime_1.jpg",
        "/images/prime/prime_2.jpg",
        "/images/prime/prime_3.jpg"
    ]
}
```

## Descripción de propiedades

| Propiedad | Descripción |
|---|---|
| `id` | Identificador único del producto |
| `name` | Nombre comercial |
| `category` | Categoría principal |
| `collection` | Colecciones a las que pertenece |
| `featured` | Indica si es un producto destacado |
| `isNew` | Indica si es una novedad |
| `description` | Descripción detallada |
| `code` | Código interno |
| `colors` | Colores disponibles |
| `sizes` | Tallas disponibles |
| `price` | Precio del producto |
| `images` | Rutas de las imágenes |

## Colecciones múltiples

La propiedad `collection` utiliza un arreglo para permitir que una misma prenda pertenezca a diferentes colecciones.

Ejemplos:

```javascript
collection: ["Hombre"]

collection: ["Mujer"]

collection: ["Hombre", "Mujer"]
```

Esto permite administrar productos unisex sin duplicar registros.

**Importante:** cada producto debe tener un `id` único.

Las imágenes se almacenan dentro de `public/images/` y se referencian mediante rutas relativas a `public`.

---

# 8. Página de detalle del producto

Cada producto dispone de una página individual.

Ruta:

```text
/product/:id
```

Archivo principal:

```text
src/pages/ProductDetail.jsx
```

Características implementadas:

- Información individual del producto.
- Galería de imágenes.
- Imagen principal dinámica.
- Miniaturas seleccionables.
- Selector de colores.
- Selector de tallas.
- Vista previa de las opciones seleccionadas.
- Precio.
- Descripción.
- Integración con el carrito.

La información se obtiene directamente desde `products.js`, utilizando el identificador recibido mediante React Router.

---

# 9. Sistema de carrito de compras

El carrito está implementado mediante **React Context API**, lo que permite compartir su información entre diferentes componentes.

## Archivos involucrados

```text
src/context/CartContext.jsx
src/pages/Cart.jsx
src/components/CartItem.jsx
```

## Funcionalidades implementadas

### Agregar productos

- Agregar productos desde el detalle.
- Guardar el identificador del producto.
- Guardar color seleccionado.
- Guardar talla seleccionada.
- Guardar precio e imagen.
- Asignar cantidad inicial.

### Administrar productos

- Incrementar cantidades.
- Disminuir cantidades.
- Eliminar productos.
- Agrupar productos con la misma combinación de producto, talla y color.
- Calcular automáticamente los subtotales.
- Calcular el total del pedido.

### Persistencia mediante localStorage

El carrito cuenta con persistencia local mediante `localStorage`.

Características:

- Guardado automático cuando cambia el contenido del carrito.
- Recuperación de los productos al iniciar la aplicación.
- Conservación de los productos al actualizar la página.
- Conservación de las cantidades y opciones seleccionadas.
- Persistencia entre sesiones del navegador.

La clave utilizada para almacenar la información es:

```javascript
conquer-cart
```

La persistencia se administra desde `CartContext.jsx`, evitando duplicar la lógica en los componentes que utilizan el carrito.

---

# 10. Pedidos mediante WhatsApp

CONQUER utiliza WhatsApp como medio principal para recibir pedidos.

No se contempla una pasarela de pago tradicional dentro de esta etapa del proyecto.

## Flujo de compra

```text
Usuario
   ↓
Selecciona un producto
   ↓
Selecciona talla y color
   ↓
Agrega al carrito
   ↓
Modifica cantidades
   ↓
Revisa el resumen
   ↓
Genera el pedido
   ↓
WhatsApp
```

## Características implementadas

- Generación dinámica del mensaje.
- Nombre de cada producto.
- Talla seleccionada.
- Color seleccionado.
- Cantidad solicitada.
- Subtotal por producto.
- Total general.
- Codificación del mensaje para URL.
- Apertura de WhatsApp mediante `wa.me`.

El número telefónico de destino se configura dentro del componente del carrito.

**Nota:** no se administra inventario ni disponibilidad de existencias mediante el sistema.

---

# 11. Sistema de búsqueda

El sitio cuenta con un buscador integrado en el Navbar y una página dedicada a mostrar los resultados.

## Archivos involucrados

- `Navbar.jsx`
- `Navbar.css`
- `SearchResults.jsx`
- `SearchResults.css`

## Funcionamiento

1. El usuario introduce el nombre o término de búsqueda.
2. El buscador genera una consulta mediante parámetros URL.
3. React Router navega hacia `/search?q=termino`.
4. `SearchResults.jsx` obtiene el parámetro mediante `useLocation`.
5. Se filtran los productos disponibles.
6. Los resultados se muestran mediante `ProductsPage`.

## Campos de búsqueda

El sistema contempla coincidencias en:

- Nombre.
- Categoría.
- Descripción.
- Código.
- Colores.
- Colecciones.

También contempla la normalización de texto para facilitar las coincidencias independientemente de las mayúsculas y los acentos.

## Interfaz de resultados

La página de resultados utiliza una distribución inspirada en catálogos de marcas deportivas.

Características:

- Panel lateral para opciones de filtrado y ordenamiento.
- Área principal para mostrar los productos.
- Distribución adaptable a diferentes tamaños de pantalla.
- Reutilización de componentes del catálogo.

## Búsqueda en Navbar

El buscador está integrado en la navegación principal.

Características:

- Barra de búsqueda estilizada para escritorio.
- Efecto visual al enfocar el campo.
- Búsqueda mediante la tecla Enter.
- Botón para ejecutar la búsqueda.
- Diseño adaptado a dispositivos móviles.
- Panel desplegable de búsqueda en móvil.
- Navegación directa hacia la página de resultados.

## Estados de búsqueda

- Resultados encontrados.
- Ningún producto encontrado.
- Consulta vacía.

---

# 12. Componentes globales

## Navbar

Responsable de la navegación principal.

Características:

- Acceso a las principales colecciones.
- Logotipo central.
- Menú adaptable a dispositivos móviles.
- Iconografía mediante React Icons.
- Barra de búsqueda funcional.
- Panel de búsqueda desplegable en móvil.
- Acceso al carrito.
- Indicador dinámico de cantidad de productos.

El contador del carrito obtiene la información directamente desde `CartContext` y muestra la cantidad total de unidades agregadas.

## Footer

Componente global ubicado al final de las páginas.

Características:

- Información de la marca.
- Acceso a Instagram.
- Derechos reservados.

## ProductCard

Componente reutilizable para representar cada producto.

Características:

- Imagen principal.
- Nombre.
- Descripción.
- Información básica.
- Precio.
- Navegación hacia el detalle del producto.

---

# 13. Diseño y experiencia de usuario

El diseño busca mantener una identidad visual minimalista, inspirada en la disciplina, el entrenamiento y el estilo de vida deportivo.

Características:

- Diseño responsive.
- Organización modular de estilos.
- Tipografía Cinzel para elementos destacados.
- Paleta de colores propia de la marca.
- Transiciones y efectos visuales.
- Adaptación a dispositivos móviles.
- Componentes reutilizables.
- Navegación adaptable a escritorio y móvil.

---

# 14. Funcionalidades pendientes

Las siguientes características se contemplan para futuras etapas.

## Catálogo

- Cambio automático de imagen al pasar el cursor.
- Carrusel interactivo de productos.
- Mejoras en los filtros avanzados.
- Productos relacionados.

## Detalle del producto

- Zoom de imágenes.
- Compartir productos.
- Productos relacionados.

## Favoritos

- Agregar y eliminar favoritos.
- Página de productos favoritos.
- Persistencia local.

## Búsqueda

- Sugerencias de búsqueda.
- Historial de búsquedas.
- Mejoras adicionales en los filtros.

## Contacto

- Formulario funcional.
- Validación de campos.
- Integración con correo electrónico.

## Experiencia visual

- Animaciones de entrada.
- Transiciones entre secciones.
- Mejoras del Hero.
- Carruseles interactivos.

---

# 15. Objetivo final

Desarrollar una plataforma digital para CONQUER que permita presentar y comercializar prendas deportivas mediante una experiencia moderna, intuitiva y visualmente atractiva.

El proyecto busca combinar:

- Identidad de marca.
- Diseño minimalista.
- Navegación intuitiva.
- Catálogo escalable.
- Experiencia responsive.
- Gestión sencilla de pedidos.
- Persistencia local del carrito.
- Comunicación directa mediante WhatsApp.

---

**CONQUER — DISCIPLINE. CONSISTENCY. CONQUER.**