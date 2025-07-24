import "./Header.css"
import robot from '../../assets/robot.svg'

export default function SiteHeader() {
    return (
  <header className="site-header">
            <div className="site-header__container">
           <div className="site-header__content">
                <div className="site-header__logo">
                    <div className="site-header__logo-box">
                            <div className="site-header__logo-icon">
                               <img src={robot} alt="AI logo" />
                            </div>
                            <span className="site-header__logo-text">Artificial Intelligence</span>
                        </div>
                    </div>

      <nav className="site-header__nav">
                <ul className="site-header__nav-list">
                     <li>
                          <a href="#" className="site-header__nav-link">Home</a>
                            </li>
                            <li>
                          <a href="#" className="site-header__nav-link">About</a>
                            </li>
                            <li>
                          <a href="#" className="site-header__nav-link">Services</a>
                            </li>
                            <li>
                        <a href="#" className="site-header__nav-link">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="site-header__nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="site-header__auth">
                        <button className="site-header__sign-in-btn">Sign In</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
