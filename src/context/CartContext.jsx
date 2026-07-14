import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

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