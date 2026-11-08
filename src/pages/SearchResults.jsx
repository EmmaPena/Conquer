import { useLocation } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../css/SearchResults.css";

export default function SearchResults() {

    const { search } = useLocation();

    const query =
        new URLSearchParams(search).get("q")?.trim() || "";

    const [sortBy, setSortBy] = useState("relevance");
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedCollections, setSelectedCollections] = useState([]);
    const [onlyNew, setOnlyNew] = useState(false);
    const [onlyFeatured, setOnlyFeatured] = useState(false);

    // Normalizar texto para facilitar las coincidencias.
    const normalizeText = (text) =>
        String(text ?? "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    const normalizedQuery = normalizeText(query);

    // Buscar productos.
    const searchResults = products.filter((product) => {

        const searchableText = [
            product.name,
            product.category,
            product.code,
            ...(product.colors || []),
            ...(product.collection || [])
        ].join(" ");

        return normalizeText(searchableText).includes(normalizedQuery);
    });

    // Obtener tallas disponibles en los resultados.
    const availableSizes = [
        ...new Set(
            searchResults.flatMap((product) => product.sizes || [])
        )
    ].sort();

    // Aplicar filtros.
    const filteredProducts = searchResults.filter((product) => {

        const matchesSize =
            selectedSizes.length === 0 ||
            selectedSizes.some((size) =>
                product.sizes?.includes(size)
            );

        const matchesCollection =
            selectedCollections.length === 0 ||
            selectedCollections.some((collection) =>
                product.collection?.includes(collection)
            );

        const matchesNew = !onlyNew || product.isNew;

        const matchesFeatured = !onlyFeatured || product.featured;

        return (
            matchesSize &&
            matchesCollection &&
            matchesNew &&
            matchesFeatured
        );
    });

    // Ordenar resultados.
    const sortedProducts = [...filteredProducts].sort((a, b) => {

        switch (sortBy) {

            case "price-low":
                return a.price - b.price;

            case "price-high":
                return b.price - a.price;

            case "newest":
                return Number(b.isNew) - Number(a.isNew);

            default:
                return 0;
        }

    });

    // Seleccionar o deseleccionar filtros.
    const toggleFilter = (value, setSelected) => {

        setSelected((previous) =>
            previous.includes(value)
                ? previous.filter((item) => item !== value)
                : [...previous, value]
        );

    };

    // Limpiar filtros.
    const clearFilters = () => {
        setSortBy("relevance");
        setSelectedSizes([]);
        setSelectedCollections([]);
        setOnlyNew(false);
        setOnlyFeatured(false);
    };

    if (!query) {
        return (
            <main className="search-empty">
                <h1>BUSCAR PRODUCTOS</h1>

                <p>
                    UTILIZA EL BUSCADOR PARA ENCONTRAR
                    LO QUE ESTÁS BUSCANDO.
                </p>
            </main>
        );
    }

    return (
        <main className="search-results-page">
            <aside className="search-sidebar">
                <div className="search-heading">
                    <span>RESULTADOS DE BÚSQUEDA</span>
                    <h1>"{query}"</h1>

                    <p>
                        {sortedProducts.length} PRODUCTO
                        {sortedProducts.length !== 1 ? "S" : ""}
                    </p>

                </div>

                <div className="filter-heading">

                    <h2>FILTRAR Y ORDENAR</h2>

                    <button onClick={clearFilters}>
                        ELIMINAR TODO
                    </button>
                </div>

                <section className="filter-section">
                    <h3>ORDENAR POR</h3>

                    <label>
                        <input
                            type="radio"
                            name="sort"
                            value="relevance"
                            checked={sortBy === "relevance"}
                            onChange={(e) => setSortBy(e.target.value)}
                        />
                        RELEVANCIA
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="sort"
                            value="price-low"
                            checked={sortBy === "price-low"}
                            onChange={(e) => setSortBy(e.target.value)}
                        />
                        PRECIO: MENOR A MAYOR
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="sort"
                            value="price-high"
                            checked={sortBy === "price-high"}
                            onChange={(e) => setSortBy(e.target.value)}
                        />
                        PRECIO: MAYOR A MENOR
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="sort"
                            value="newest"
                            checked={sortBy === "newest"}
                            onChange={(e) => setSortBy(e.target.value)}
                        />
                        MÁS NUEVOS
                    </label>
                </section>

                <section className="filter-section">
                    <h3>TALLA</h3>

                    {availableSizes.map((size) => (
                        <label key={size}>

                            <input
                                type="checkbox"
                                checked={selectedSizes.includes(size)}
                                onChange={() =>
                                    toggleFilter(size, setSelectedSizes)
                                }
                            />

                            {size}

                        </label>
                    ))}
                </section>

                <section className="filter-section">
                    <h3>GÉNERO</h3>

                    {["Hombre", "Mujer"].map((collection) => (
                        <label key={collection}>

                            <input
                                type="checkbox"
                                checked={selectedCollections.includes(collection)}
                                onChange={() =>
                                    toggleFilter(
                                        collection,
                                        setSelectedCollections
                                    )
                                }
                            />
                            {collection.toUpperCase()}
                        </label>
                    ))}
                </section>

                <section className="filter-section">
                    <h3>CARACTERÍSTICAS</h3>

                    <label>
                        <input
                            type="checkbox"
                            checked={onlyNew}
                            onChange={(e) => setOnlyNew(e.target.checked)}
                        />
                        NUEVOS
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={onlyFeatured}
                            onChange={(e) => setOnlyFeatured(e.target.checked)}
                        />
                        DESTACADOS
                    </label>
                </section>
            </aside>

            <section className="search-products">

                <div className="search-products-header">
                    <span>
                        {sortedProducts.length} PRODUCTOS
                    </span>
                </div>

                {sortedProducts.length > 0 ? (

                    <div className="search-product-grid">
                        {sortedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                ) : (

                    <div className="search-no-results">
                        <h2>NO HAY PRODUCTOS</h2>

                        <p>
                            NO ENCONTRAMOS PRODUCTOS CON
                            LOS FILTROS SELECCIONADOS.
                        </p>

                        <button onClick={clearFilters}>
                            LIMPIAR FILTROS
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}