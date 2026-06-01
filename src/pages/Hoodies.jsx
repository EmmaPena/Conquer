import products from "../data/products";
import ProductsPage from "../components/ProductsPage";

export default function Hoodies() {

    const hoodies = products.filter(
        (product) => product.category === "Sudaderas"
    );

    return (
        <ProductsPage
            title="SUDADERAS"
            products={hoodies}
        />
    );
}