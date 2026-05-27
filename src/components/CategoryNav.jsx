import React from 'react'
import "./../css/CategoryNav.css";

export default function CategoryNav({ active, onChange }) {
    const categories = ["Todos", "Sudaderas", "Playeras"];

    return (
        <nav className="category-nav">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={active === cat ? "active" : ""}
                    onClick={() => onChange(cat)}
                >

                    {cat}
                </button>
            ))}
        </nav>
    );
}
