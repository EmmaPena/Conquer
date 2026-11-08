import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "../css/ProductDetail.css";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {

    const { id } = useParams();
    // Buscar el producto utilizando su ID de texto.
    const product = products.find((p) => p.id === id);

    const [selectedColor, setSelectedColor] = useState(
        product?.colors?.[0] || ""
    );

    const [selectedSize, setSelectedSize] = useState(
        product?.sizes?.[0] || ""
    );

    const [activeImage, setActiveImage] = useState(
        product?.images?.[0] || ""
    );

    const { addToCart } = useCart();

    if (!product) {
        return (
            <main className="product-not-found">
                <h1>PRODUCTO NO ENCONTRADO</h1>
            </main>
        );
    }

    // Agregar producto al carrito.
    const handleAddToCart = () => {

        // Validar color solamente si el producto tiene colores.
        if (product.colors?.length > 0 && !selectedColor) {
            alert("SELECCIONA UN COLOR");
            return;
        }

        // Validar talla solamente si el producto tiene tallas.
        if (product.sizes?.length > 0 && !selectedSize) {
            alert("SELECCIONA UNA TALLA");
            return;
        }

        addToCart(
            product,
            selectedColor,
            selectedSize
        );
    };

    return (
        <main className="product-detail">

            <section className="product-gallery">

                <img
                    src={activeImage}
                    alt={product.name}
                    className="main-image"
                />

                <div className="thumbnail-container">
                    {product.images?.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt={product.name}
                            className={
                                activeImage === image
                                    ? "thumbnail active"
                                    : "thumbnail"
                            }
                            onClick={() => setActiveImage(image)}
                        />
                    ))}
                </div>
            </section>

            <section className="product-content">
                <h1>{product.name}</h1>

                <p className="price">
                    ${product.price}
                </p>

                {product.colors?.length > 0 && (
                    <div className="product-colors">

                        <h3>COLORES</h3>

                        <div className="options-container">

                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    className={
                                        selectedColor === color
                                            ? "color-btn active"
                                            : "color-btn"
                                    }
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {product.sizes?.length > 0 && (
                    <div className="product-sizes">

                        <h3>TALLAS</h3>

                        <div className="options-container">

                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={
                                        selectedSize === size
                                            ? "size-btn active"
                                            : "size-btn"
                                    }
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="selection-preview">

                    {product.colors?.length > 0 && (
                        <p>
                            <strong>COLOR:</strong>{" "}
                            {selectedColor}
                        </p>
                    )}

                    {product.sizes?.length > 0 && (
                        <p>
                            <strong>TALLA:</strong>{" "}
                            {selectedSize}
                        </p>
                    )}

                </div>

                <button
                    className="add-cart-btn"
                    onClick={handleAddToCart}
                >
                    Agregar a mi bolsa
                </button>

            </section>

        </main>
    );
}