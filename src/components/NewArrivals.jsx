import products from "../data/products";
import ProductCard from "./ProductCardd";
import "../css/NewArrivals.css";

export default function NewArrivals() {
    const featuredProducts = products.slice(0, 4);

    return (
        <section className="new-arrivals">
            <div className="new-arrivals-header">
                <h2>NOVEDADES</h2>
                <p>Descubre los lanzamientos más recientes de CONQUER.</p>
            </div>

            <div className="new-arrivals-grid">
                {featuredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
            
        </section>
    );
}