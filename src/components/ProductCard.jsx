
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useFavorites } from "../context/FavoritesContext";
import "../css/ProductCard.css";

export default function ProductCard({ product }) {
    const { isFavorite, toggleFavorite } = useFavorites();

    const favorite = isFavorite(product.id);

    return (
        <div className="product-card-wrapper">
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

            <button
                type="button"
                className={`favorite-button ${favorite ? "is-favorite" : ""}`}
                onClick={() => toggleFavorite(product.id)}
                aria-label={
                    favorite
                        ? `Quitar ${product.name} de favoritos`
                        : `Agregar ${product.name} a favoritos`
                }
                aria-pressed={favorite}
            >
                <FiHeart />
            </button>
        </div>
    );
}
