import "./AwardsSection.css"
import svg1 from '../../assets/1.svg'
import svg2 from '../../assets/2.svg'
import svg3 from '../../assets/3.svg'
import svg4 from '../../assets/4.svg'
import svg5 from '../../assets/5.svg'

const SiteAwards = () => {
    const awards = [
        {
            id: 1,
            icon: svg1,
            title: "Naxly as the Winners in Global Agency Awards",
            description: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            id: 2,
            icon: svg2,
            title: "Expert Prespective Agency Awards",
            description: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            id: 3,
            icon: svg3,
            title: "Business Prespective Global Agency Awards",
            description: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            id: 4,
            icon: svg4,
            title: "Value for Results in Global Agency Awards",
            description: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            id: 5,
            icon: svg5,
            title: "Global Experience in Agency Awards",
            description: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
    ]

    return (
        <section className="site-awards">
            <div className="site-awards__container">
                <div className="site-awards__grid">
                    {awards.map((award) => (
                        <div key={award.id} className="site-awards__card">
                          <div className="site-awards__icon">
                                <img src={award.icon || "/placeholder.svg"} alt={award.title} />
                            </div>
                            <h3 className="site-awards__title">{award.title}</h3>
                           <p className="site-awards__description">{award.description}</p>
                        </div>
                    ))}
                </div>
               <div className="site-awards__pagination">
                    <span className="site-awards__dot active"></span>
                   <span className="site-awards__dot"></span>
                    <span className="site-awards__dot"></span>
                </div>
            </div>
        </section>
    )
}

export default SiteAwards
