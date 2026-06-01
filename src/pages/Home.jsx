import HeroSection from "../components/HeroSection";
import NewArrivals from "../components/NewArrivals";
import PromoBanner from "../components/PromoBanner";
import Collections from "../components/Collections";
import AboutSection from "../components/AboutSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <NewArrivals />
            <PromoBanner />
            <Collections />
            <AboutSection />
        </>
    );
}