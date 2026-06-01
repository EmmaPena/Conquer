import "../css/PromoBanner.css";

export default function PromoBanner() {
    return (
        <section className="promo-banner">

            <div className="promo-image">
                <img
                    src="/images/banner/banner.jpg"
                    alt="Conquer Campaign"
                />
            </div>

            <div className="promo-content">
                <h2>
                    WE DON'T FOLLOW TRENDS
                </h2>

                <p>
                    Conquer nace para quienes buscan construir disciplina,
                    superar límites y desarrollar una mejor versión de sí mismos.
                </p>

                <button>
                    CONOCER MÁS
                </button>
            </div>
        </section>
    );
}