import "../css/CartItem.css";

export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {

    return (
        <article className="cart-item">

            <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
            />

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>COLOR: {item.color}</p>
                <p>TALLA: {item.size}</p>
                <p>${item.price}</p>
            </div>

            <div className="cart-controls">
                <button
                    onClick={() =>
                        decreaseQuantity(
                            item.productId,
                            item.color,
                            item.size
                        )
                    }
                >
                    -
                </button>

                <span>{item.quantity}</span>
                <button
                    onClick={() =>
                        increaseQuantity(
                            item.productId,
                            item.color,
                            item.size
                        )
                    }
                >
                    +
                </button>
            </div>

            <button
                className="remove-btn"
                onClick={() =>
                    removeFromCart(
                        item.productId,
                        item.color,
                        item.size
                    )
                }
            >
                ELIMINAR
            </button>
        </article>
    );
}