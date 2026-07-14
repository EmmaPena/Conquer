import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Hoodies from "../pages/Hoodies";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Gym from "../pages/Gym";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import SearchResults from "../pages/SearchResults";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/hoodies" element={<Hoodies />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/gym" element={<Gym />} />{/*hkhbb */}
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/search" element={<SearchResults />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}