import { Link } from "react-router-dom";
import "../css/ProductCard.css";

export default function ProductCard({ product }) {
    return (
        <Link
            to={`/product/${product.id}`}
            className="product-link"
        >
            <section className="product-card">
                <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="product-image"
                />

                <div className="product-info">
                    <h2>{product.name}</h2>
                    <p className="description">
                        {product.description}
                    </p>
                    <ul>
                        <li>
                            <strong>CÓDIGO:</strong> {product.code}
                        </li>
                        <li>
                            <strong>COLOR:</strong>{" "}
                            {product.colors?.join(", ") || product.color}
                        </li>
                    </ul>
                    <span className="price">
                        ${product.price}
                    </span>
                </div>
            </section>
        </Link>
    );
}
