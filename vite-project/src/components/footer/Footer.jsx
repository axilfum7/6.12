import "./Footer.css"
import ipsum1 from '../../assets/Tach_co.svg'
import ipsum2 from '../../assets/LogoIpsum.svg'
import ipsum3 from '../../assets/logo_blue.svg'
import ipsum4 from '../../assets/logoipsum*.svg'

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="site-footer__container">
                <div className="site-footer__logos">
                    <div className="site-footer__logo-item">
                        <img src={ipsum1} alt="" />
                    </div>

                    <div className="site-footer__logo-item">
                        <img src={ipsum2} alt="" />
                    </div>

                    <div className="site-footer__logo-item">
                        <img src={ipsum3} alt="" />
                    </div>

                    <div className="site-footer__logo-item">
                        <img src={ipsum4} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
