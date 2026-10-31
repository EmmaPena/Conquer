import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useFavorites } from "../context/FavoritesContext";
import "../css/Favorites.css";

export default function Favorites() {
    const { favoriteIds } = useFavorites();

    // Recuperar los productos completos a partir de sus IDs
    const favoriteProducts = products.filter((product) =>
        favoriteIds.includes(product.id)
    );

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
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
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