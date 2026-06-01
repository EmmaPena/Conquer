import { Link } from "react-router-dom";
import "../css/ProductCardd.css";

export default function ProductCard({ product }) {
    // Nos aseguramos de tener al menos una imagen por defecto
    const firstImage = product.images?.[0] || "";
    // Si no hay segunda imagen, repetimos la primera para que no falle
    const secondImage = product.images?.[1] || firstImage;

    return (
        <article className="product-card">
            {/* Contenedor de imágenes que maneja el efecto Hover */}
            <div className="product-images">
                <img
                    src={firstImage}
                    alt={product.name}
                    className="product-image primary"
                />
                <img
                    src={secondImage}
                    alt={`${product.name} alternate`}
                    className="product-image secondary"
                />
            </div>

            {/* Información simplificada debajo */}
            <div className="product-info">
                <h2>{product.name}</h2>
                <span className="price">{product.price}</span>
            </div>
        </article>
    );
}