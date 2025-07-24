import "./Hero.css"
import logo from '../../assets/asd.png'

export default function SiteHero() {
    return (
        <section className="site-hero">
            <div className="site-hero__container">
                <div className="site-hero__content">
                    <div className="site-hero__left">
                        <div className="site-hero__subtitle">NEXT GENERATION PLATFORM</div>
                        <h1 className="site-hero__title">
                            Artificial intelligence
                            <br />& Syber security
                        </h1>
                        <p className="site-hero__description">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                            previewing layouts and visual mockups.
                        </p>
                        <div className="site-hero__buttons">
                            <button className="btn btn--primary">Get Started</button>
                            <button className="btn btn--secondary">
                                <span className="btn__icon">▶</span>
                                Watch Video
                            </button>
                        </div>
                    </div>

                    <div className="site-hero__right">
                        <div className="site-hero__illustration">
                            <img src={logo} alt="AI Illustration" className="site-hero__illustration-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
