
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "conquer-cart";

export function CartProvider({ children }) {

    // Recuperar el carrito guardado al iniciar la aplicación
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);

            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Error al recuperar el carrito:", error);
            return [];
        }
    });

    // Guardar automáticamente cada cambio del carrito
    useEffect(() => {
        try {
            localStorage.setItem(
                CART_STORAGE_KEY,
                JSON.stringify(cartItems)
            );
        } catch (error) {
            console.error("Error al guardar el carrito:", error);
        }
    }, [cartItems]);

    const addToCart = (product, color, size) => {

        const existingItem = cartItems.find(
            (item) =>
                item.productId === product.id &&
                item.color === color &&
                item.size === size
        );

        if (existingItem) {
            setCartItems((prev) =>
                prev.map((item) =>
                    item.productId === product.id &&
                        item.color === color &&
                        item.size === size
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
            );

            return;
        }

        const newItem = {
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0],
            color,
            size,
            quantity: 1
        };

        setCartItems((prev) => [...prev, newItem]);
    };

    const increaseQuantity = (
        productId,
        color,
        size
    ) => {

        setCartItems((prev) =>
            prev.map((item) =>
                item.productId === productId &&
                    item.color === color &&
                    item.size === size
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (
        productId,
        color,
        size
    ) => {

        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.productId === productId &&
                        item.color === color &&
                        item.size === size
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (
        productId,
        color,
        size
    ) => {

        setCartItems((prev) =>
            prev.filter(
                (item) =>
                    !(
                        item.productId === productId &&
                        item.color === color &&
                        item.size === size
                    )
            )
        );
    };

    // Calcular el total automáticamente
    const total = useMemo(() => {
        return cartItems.reduce(
            (acc, item) =>
                acc + item.price * item.quantity,
            0
        );
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
