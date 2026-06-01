import ProductCard from "./ProductCard";
import "../css/ProductGrid.css";

export default function ProductsPage({
    title,
    products
}) {
    return (
        <main className="products-page">
            <h1 className="page-title">
                {title}
            </h1>

            <section className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </section>
        </main>
    );
}