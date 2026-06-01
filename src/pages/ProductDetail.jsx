import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "../css/ProductDetail.css";

export default function ProductDetail() {

    const { id } = useParams();

    const product = products.find(
        (p) => p.id === Number(id)
    );

    if (!product) {
        return <h1>PRODUCTO NO ENCONTRADO</h1>;
    }

    const [activeImage, setActiveImage] =
useState(product.images?.[0]);

    return (
        <main className="product-detail">

            <section className="product-gallery">

                <img
                    src={activeImage}
                    alt={product.name}
                    className="main-image"
                />

                <div className="thumbnail-container">

                    {product.images.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt={product.name}
                            className="thumbnail"
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

                <div className="product-colors">

                    <h3>COLORES</h3>

                    {product.colors.map((color) => (
                        <span key={color}>
                            {color}
                        </span>
                    ))}

                </div>

                <div className="product-sizes">

                    <h3>TALLAS</h3>

                    {product.sizes.map((size) => (
                        <button key={size}>
                            {size}
                        </button>
                    ))}

                </div>

                <button className="add-cart-btn">
                    AGREGAR AL CARRITO
                </button>

            </section>

        </main>
    );
}