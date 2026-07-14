import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import "../css/Navbar.css";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleSearch = (e) => {

        if (e.key === "Enter" && search.trim()) {

            navigate(
                `/search?q=${encodeURIComponent(search)}`
            );

            setSearch("");
        }
    };

    return (
        <header className="navbar">
            <button
                className="navbar-burger"
                onClick={toggleMenu}
            >
                {menuOpen
                    ? <FiX />
                    : <FiMenu />}
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
                <div className="navbar-search" >
                    <FiSearch />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        onKeyDown={handleSearch}
                    />
                </div>

                <button
                    className="icon-btn"
                    aria-label="Favoritos"
                >
                    <FiHeart />
                </button>

                <Link
                    to="/cart"
                    className="icon-btn cart-btn"
                >
                    <FiShoppingBag />
                </Link>

            </div>
        </header >
    );
}
