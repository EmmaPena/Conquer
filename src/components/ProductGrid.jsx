import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import CategoryNav from "./CategoryNav";
import "../css/ProductGrid.css";

export default function ProductGrid() {
    const [category, setCategory] = useState("Todos");
    const filteredProducts =
        category === "Todos"
            ? products
            : products.filter((p) => p.category === category);

    return (
        <section className="product-grid">
            <CategoryNav active={category} onChange={setCategory} />
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </section>
    );
}
