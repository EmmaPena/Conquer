import products from "../data/products";
import ProductsPage from "../components/ProductsPage";

export default function Gym() {

    const gymProducts = products.filter(
        (product) => product.category === "Gym"
    );

    return (
        <ProductsPage
            title="GYM"
            products={gymProducts}
        />
    );
}