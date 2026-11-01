import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

import "../css/Favorites.css";

export default function Favorites() {
    // Obtenemos los IDs de los productos guardados en favoritos.
    const { favoriteIds } = useFavorites();

    // Reutilizamos la función del contexto para agregar productos al carrito.
    const { addToCart } = useCart();

    // Guarda el ID del producto que tiene abiertas sus opciones.
    // Solo mostraremos las opciones de un producto a la vez.
    const [selectedProductId, setSelectedProductId] = useState(null);

    // Guardan las opciones elegidas por el usuario.
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    // Guarda el ID del último producto agregado para mostrar una confirmación.
    const [addedProductId, setAddedProductId] = useState(null);

    // Recuperamos los objetos completos usando los IDs de favoritos.
    const favoriteProducts = products.filter((product) =>
        favoriteIds.includes(product.id)
    );

    // Buscamos el producto que actualmente tiene abierto el selector.
    const selectedProduct = favoriteProducts.find(
        (product) => product.id === selectedProductId
    );

    // Abre o cierra el selector de color y talla de un producto.
    function toggleProductOptions(product) {
        // Si pulsamos el mismo producto, cerramos sus opciones.
        if (selectedProductId === product.id) {
            setSelectedProductId(null);
            setSelectedColor("");
            setSelectedSize("");
            return;
        }

        // Inicializamos las opciones con el primer color y talla disponibles.
        setSelectedProductId(product.id);
        setSelectedColor(product.colors?.[0] || "");
        setSelectedSize(product.sizes?.[0] || "");

        // Limpiamos el mensaje de confirmación anterior.
        setAddedProductId(null);
    }

    // Agrega el producto seleccionado al carrito.
    function handleAddToCart() {
        if (!selectedProduct) return;

        // Comprobamos que se hayan elegido las variantes disponibles.
        if (
            (selectedProduct.colors?.length > 0 && !selectedColor) ||
            (selectedProduct.sizes?.length > 0 && !selectedSize)
        ) {
            alert("SELECCIONA COLOR Y TALLA");
            return;
        }

        // Usamos la función existente de CartContext.
        // No creamos un carrito nuevo ni duplicamos su lógica.
        addToCart(selectedProduct, selectedColor, selectedSize);

        // Guardamos el ID para mostrar que se agregó correctamente.
        setAddedProductId(selectedProduct.id);

        // Cerramos el selector después de agregar el producto.
        setSelectedProductId(null);
        setSelectedColor("");
        setSelectedSize("");
    }

    return (
        <main className="favorites-page">
            <header className="favorites-header">
                <h1>TUS FAVORITOS</h1>

                <p>
                    {favoriteProducts.length}{" "}
                    {favoriteProducts.length === 1
                        ? "PRODUCTO GUARDADO"
                        : "PRODUCTOS GUARDADOS"}
                </p>
            </header>

            {favoriteProducts.length > 0 ? (
                <section className="favorites-grid">
                    {favoriteProducts.map((product) => (
                        <article
                            className="favorite-product-item"
                            key={product.id}
                        >
                            {/* Tarjeta original del producto.
                                Conserva su imagen, información y botón de favoritos. */}
                            <ProductCard product={product} />

                            {/* Botón para mostrar las opciones de compra. */}
                            <button
                                type="button"
                                className="favorite-add-btn"
                                onClick={() => toggleProductOptions(product)}
                            >
                                {selectedProductId === product.id
                                    ? "CANCELAR"
                                    : "AGREGAR A LA BOLSA"}
                            </button>

                            {/* Selector inline: aparece debajo de la tarjeta. */}
                            {selectedProductId === product.id && (
                                <div className="favorite-product-options">
                                    <h3>PERSONALIZA TU PRODUCTO</h3>

                                    {/* Opciones de color, si el producto las tiene. */}
                                    {product.colors?.length > 0 && (
                                        <div className="favorite-option-group">
                                            <h4>COLOR</h4>

                                            <div className="favorite-options-list">
                                                {product.colors.map((color) => (
                                                    <button
                                                        type="button"
                                                        key={color}
                                                        className={
                                                            selectedColor === color
                                                                ? "favorite-option-btn active"
                                                                : "favorite-option-btn"
                                                        }
                                                        onClick={() =>
                                                            setSelectedColor(color)
                                                        }
                                                    >
                                                        {color}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Opciones de talla, si el producto las tiene. */}
                                    {product.sizes?.length > 0 && (
                                        <div className="favorite-option-group">
                                            <h4>TALLA</h4>

                                            <div className="favorite-options-list">
                                                {product.sizes.map((size) => (
                                                    <button
                                                        type="button"
                                                        key={size}
                                                        className={
                                                            selectedSize === size
                                                                ? "favorite-option-btn active"
                                                                : "favorite-option-btn"
                                                        }
                                                        onClick={() =>
                                                            setSelectedSize(size)
                                                        }
                                                    >
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Confirmamos la selección y agregamos al carrito. */}
                                    <button
                                        type="button"
                                        className="favorite-confirm-btn"
                                        onClick={handleAddToCart}
                                    >
                                        CONFIRMAR Y AGREGAR
                                    </button>
                                </div>
                            )}

                            {/* Mensaje que aparece después de agregar el producto. */}
                            {addedProductId === product.id && (
                                <p className="favorite-added-message">
                                    PRODUCTO AGREGADO A LA BOLSA
                                </p>
                            )}
                        </article>
                    ))}
                </section>
            ) : (
                <section className="favorites-empty">
                    <h2>NO HAY FAVORITOS TODAVÍA</h2>

                    <p>
                        Guarda los productos que más te gusten
                        y los encontrarás aquí.
                    </p>

                    <Link to="/hoodies" className="favorites-explore">
                        EXPLORAR PRODUCTOS
                    </Link>
                </section>
            )}
        </main>
    );
}
