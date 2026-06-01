import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>PÁGINA NO ENCONTRADA</p>
            <Link to="/">
                VOLVER AL INICIO
            </Link>
        </div>
    );
}