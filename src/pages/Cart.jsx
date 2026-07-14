import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../css/Cart.css";

export default function Cart() {
    const { cartItems, total, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

    const generateWhatsAppMessage = () => {
        let message =
            "HOLA 👋\n\n" +
            "QUIERO REALIZAR EL SIGUIENTE PEDIDO:\n\n";
        cartItems.forEach((item) => {
            message +=
                //"--------------------------------\n\n" +
                "\n" +
                `PRODUCTO: ${item.name}\n` +
                `COLOR: ${item.color}\n` +
                `TALLA: ${item.size}\n` +
                `CANTIDAD: ${item.quantity}\n`;/*+
                `SUBTOTAL: $${item.price * item.quantity}\n\n`;*/
        });

        message +=
            "\n\n" +
            `TOTAL: $${total}`;
        return encodeURIComponent(message);
    };

    const whatsappNumber = "5217222034684"/*""*/;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`;

    return (
        <main className="cart-page">
            <h1>CARRITO</h1>

            {cartItems.length === 0 ? (
                <p>TU CARRITO ESTÁ VACÍO</p>
            ) : (

                <>
                    <section className="cart-list">
                        {cartItems.map((item) => (
                            <CartItem
                                key={`${item.productId}-${item.color}-${item.size}`}
                                item={item}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                removeFromCart={removeFromCart}
                            />
                        ))}
                    </section>

                    <section className="cart-summary">
                        <h2>
                            TOTAL:
                            ${total}
                        </h2>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn"
                        >
                            PEDIR POR WHATSAPP
                        </a>
                    </section>
                </>
            )}
        </main>
    );
}