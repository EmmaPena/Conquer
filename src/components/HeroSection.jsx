import "../css/HeroSection.css";

export default function HeroSection() {
    return (
        <section className="hero">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video"
            >
                <source src="video/Viltrumite.mp4" type="video/mp4" />
            </video>

            <div className="hero-overlay">
                <h1>
                    CONQUER
                </h1>

                <p>
                    BUILT FOR DISCIPLINE
                </p>

                <button>
                    VER COLECCIÓN
                </button>
            </div>

        </section>
    );
}