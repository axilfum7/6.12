import "./HeroSection.css"
import brain from '../../assets/techbrain.png'

const SiteHeroAlt = () => {
    return (
        <section className="site-hero-alt">
            <div className="site-hero-alt__container">
                <div className="site-hero-alt__content">
                    <div className="site-hero-alt__illustration">
                        <img
                            src={brain}
                            alt="AI Brain Technology Illustration"
                            className="site-hero-alt__brain-img"
                        />
                    </div>
                    <div className="site-hero-alt__text">
                        <h1 className="site-hero-alt__title">
                            Apply AI, Deep Learning
                            <br />
                            and Data Science to solve
                        </h1>
                        <p className="site-hero-alt__description">
                            Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                            previewing layouts and visual mockups.
                        </p>
                        <button className="site-hero-alt__btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteHeroAlt
