import "../css/ProductCard.css";

export default function ProductCard({ product }) {
    return (
        <section className="product-card">

            {/* Contenedor */}
            <div className="product-images">
                {product.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={product.name}
                        className="product-image"
                    />
                ))}
            </div>

            {/* informacion */}
            <div className="product-info">
                <h2>{product.name}</h2>

                <p className="description">
                    {product.description}
                </p>

                <ul>
                    <li><strong>CÓDIGO:</strong> {product.code}</li>
                    <li><strong>COLOR:</strong> {product.color}</li>
                </ul>

                <span className="price">{product.price}</span>
            </div>
        </section>
        
    );
}
