import { Link } from "react-router-dom";
import "../css/ProductCardd.css";

export default function ProductCard({ product }) {
    const firstImage = product.images?.[0] || "";
    const secondImage = product.images?.[1] || firstImage;

    return (
        <article className="product-card">
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