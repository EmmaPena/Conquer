import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductsPage from "../components/ProductsPage";

export default function SearchResults() {

    const { search } = useLocation();

    const query =
        new URLSearchParams(search)
            .get("q")
            ?.toLowerCase() || "";

    const results = products.filter((product) =>
        product.name.toLowerCase().includes(query)
    );

    return (
        <ProductsPage
            title={`RESULTADOS PARA "${query}"`}
            products={results}
        />
    );
}