import products from "../data/products";
import ProductsPage from "../components/ProductsPage";

export default function Men() {

    const menProducts = products.filter(
        (product) =>
            product.collection?.includes("Hombre")
    );

    return (
        <ProductsPage
            title="HOMBRE"
            products={menProducts}
        />
    );
}