import { Link } from "react-router-dom";
import "../css/Collections.css";

export default function Collections() {

    const collections = [
        {
            title: "SUDADERAS",
            image: "/images/collections/hoodies.jpg",
            path: "/hoodies"
        },
        {
            title: "HOMBRE",
            image: "/images/collections/men.jpg",
            path: "/men"
        },
        {
            title: "MUJER",
            image: "/images/collections/women.jpg",
            path: "/women"
        },
        {
            title: "GYM",
            image: "/images/collections/gym.jpg",
            path: "/gym"
        }
    ];

    return (
        <section className="collections">
            <h2>
                COLECCIONES
            </h2>
            
            <div className="collections-grid">
                {collections.map((collection) => (
                    <Link
                        key={collection.title}
                        to={collection.path}
                        className="collection-card"
                    >
                        <img
                            src={collection.image}
                            alt={collection.title}
                        />

                        <div className="collection-overlay">
                            <span>
                                {collection.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}