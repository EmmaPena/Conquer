import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "../css/ProductDetail.css";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(
        (p) => p.id === Number(id)
    );

    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
    const [activeImage, setActiveImage] = useState(product?.images?.[0] || "");
    const { addToCart } = useCart();

    if (!product) {
        return (
            <main className="product-not-found">
                <h1>PRODUCTO NO ENCONTRADO</h1>
            </main>
        );
    }

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
                            onClick={() =>
                                setActiveImage(image)
                            }
                        />
                    ))}
                </div>
            </section>

            <section className="product-content">
                <h1>{product.name}</h1>
                <p className="price">
                    ${product.price}
                </p>
                <p className="description">
                    {product.description}
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

                <div className="selection-preview">
                    <p>
                        <strong>COLOR:</strong>{" "}
                        {selectedColor}
                    </p>
                    <p>
                        <strong>TALLA:</strong>{" "}
                        {selectedSize}
                    </p>
                </div>

                <button
                    className="add-cart-btn"
                    onClick={() => {

                        if (!selectedColor || !selectedSize) {
                            alert("SELECCIONA COLOR Y TALLA");
                            return;
                        }

                        addToCart(
                            product,
                            selectedColor,
                            selectedSize
                        );

                        //alert("PRODUCTO AGREGADO AL CARRITO");
                    }}
                >
                    AGREGAR AL CARRITO
                </button>
            </section>
        </main>
    );
}
