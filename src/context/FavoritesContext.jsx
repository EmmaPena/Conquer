import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();
const STORAGE_KEY = "conquer-favorites";

export function FavoritesProvider({ children }) {

    // Recuperar los favoritos guardados al iniciar la aplicación.
    const [favoriteIds, setFavoriteIds] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem(STORAGE_KEY);

            if (savedFavorites) {
                const parsedFavorites = JSON.parse(savedFavorites);
                
                // Comprobar que los datos sean un arreglo.
                if (Array.isArray(parsedFavorites)) {
                    return parsedFavorites;
                }
            }

            return [];
        } catch (error) {
            console.error("Error al recuperar favoritos:", error);
            return [];
        }
    });

    // Guardar favoritos automáticamente.
    useEffect(() => {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(favoriteIds)
            );
        } catch (error) {
            console.error("Error al guardar favoritos:", error);
        }
    }, [favoriteIds]);

    // Comprobar si un producto es favorito.
    const isFavorite = (productId) => {
        return favoriteIds.includes(productId);
    };

    // Agregar un producto a favoritos.
    const addFavorite = (productId) => {
        setFavoriteIds((prev) => {
            if (prev.includes(productId)) return prev;

            return [...prev, productId];
        });
    };

    // Eliminar un producto de favoritos.
    const removeFavorite = (productId) => {
        setFavoriteIds((prev) =>
            prev.filter((id) => id !== productId)
        );
    };

    // Alternar entre agregar y eliminar.
    const toggleFavorite = (productId) => {
        setFavoriteIds((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    // Eliminar todos los favoritos.
    const clearFavorites = () => {
        setFavoriteIds([]);
    };

    const value = {
        favoriteIds,
        favoritesCount: favoriteIds.length,
        isFavorite,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        clearFavorites
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error(
            "useFavorites debe utilizarse dentro de FavoritesProvider"
        );
    }
    return context;
}