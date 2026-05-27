import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <ProductGrid />
        <Footer />
      </main>
    </>
  );
}

export default App;