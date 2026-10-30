
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiHeart,
    FiMenu,
    FiSearch,
    FiShoppingBag,
    FiX
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import "../css/Navbar.css";

export default function Navbar() {

    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const navigate = useNavigate();
    const { cartItems } = useCart();

    const cartCount = cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    const handleSearch = (e) => {
        e.preventDefault();

        if (!search.trim()) return;

        navigate(`/search?q=${encodeURIComponent(search.trim())}`);

        setSearch("");
        setMenuOpen(false);
        setMobileSearchOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
        setMobileSearchOpen(false);
    };

    const toggleMobileSearch = () => {
        setMobileSearchOpen((prev) => !prev);
        setMenuOpen(false);
    };

    return (
        <header className="navbar">

            <button
                className="navbar-burger"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

                <Link to="/hoodies" onClick={() => setMenuOpen(false)}>
                    Sudaderas
                </Link>

                <Link to="/men" onClick={() => setMenuOpen(false)}>
                    Hombre
                </Link>

                <Link to="/women" onClick={() => setMenuOpen(false)}>
                    Mujer
                </Link>

            </nav>

            <div className="navbar-logo">
                <Link to="/">CONQUER</Link>
            </div>

            <div className="navbar-actions">

                {/* BÚSQUEDA DESKTOP */}
                <form className="navbar-search desktop-search" onSubmit={handleSearch}>

                    <FiSearch className="search-icon" />

                    <input
                        type="search"
                        placeholder="Buscar productos..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Buscar productos"
                    />

                    <button
                        type="submit"
                        className="search-submit"
                        aria-label="Buscar"
                    >
                        <FiSearch />
                    </button>

                </form>

                {/* BÚSQUEDA MÓVIL */}
                <button
                    className="mobile-search-toggle"
                    onClick={toggleMobileSearch}
                    aria-label={mobileSearchOpen ? "Cerrar búsqueda" : "Abrir búsqueda"}
                >
                    {mobileSearchOpen ? <FiX /> : <FiSearch />}
                </button>

                <button
                    className="icon-btn"
                    aria-label="Favoritos"
                >
                    <FiHeart />
                </button>

                <Link
                    to="/cart"
                    className="icon-btn cart-btn"
                    aria-label={`Bolsa de compras, ${cartCount} productos`}
                >
                    <FiShoppingBag />

                    {cartCount > 0 && (
                        <span className="cart-count">
                            {cartCount > 99 ? "99+" : cartCount}
                        </span>
                    )}
                </Link>

            </div>

            {/* BARRA DESPLEGABLE MÓVIL */}
            <div className={`mobile-search-panel ${mobileSearchOpen ? "open" : ""}`}>

                <form className="mobile-search-form" onSubmit={handleSearch}>

                    <FiSearch />

                    <input
                        type="search"
                        placeholder="¿Qué estás buscando?"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Buscar productos"
                    />

                    <button type="submit" aria-label="Buscar">
                        Buscar
                    </button>

                </form>

            </div>

        </header>
    );
}
