import products from "../data/products";
import ProductsPage from "../components/ProductsPage";

export default function Women() {
    const womenProducts = products.filter(
        (product) =>
            product.collection?.includes("Mujer")
    );

    return (
        <ProductsPage
            title="MUJER"
            products={womenProducts}
        />
    );
}