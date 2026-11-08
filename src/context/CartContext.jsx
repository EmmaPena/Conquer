import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();
const CART_STORAGE_KEY = "conquer-cart";

export function CartProvider({ children }) {

    // Recuperar el carrito guardado al iniciar la aplicación.
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);

            // Si hay información guardada, recuperarla.
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);

                // Comprobar que los datos sean un arreglo.
                if (Array.isArray(parsedCart)) {
                    return parsedCart;
                }
            }

            return [];
        } catch (error) {
            console.error("Error al recuperar el carrito:", error);
            return [];
        }
    });

    // Guardar automáticamente cada cambio del carrito.
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

    // Agregar un producto al carrito.
    const addToCart = (product, color = "", size = "") => {

        const existingItem = cartItems.find(
            (item) =>
                item.productId === product.id &&
                item.color === color &&
                item.size === size
        );

        // Si ya existe la misma combinación, aumentar cantidad.
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

        // Crear un nuevo elemento para el carrito.
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

    // Aumentar la cantidad de un producto.
    const increaseQuantity = (productId, color, size) => {
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

    // Disminuir la cantidad de un producto.
    const decreaseQuantity = (productId, color, size) => {
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

    // Eliminar un producto del carrito.
    const removeFromCart = (productId, color, size) => {
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

    // Calcular el total del carrito.
    const total = useMemo(() => {
        return cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
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