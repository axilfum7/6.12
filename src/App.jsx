import SiteHeader from "./components/header/Header"
import SiteHero from "./components/hero/Hero"
import SiteFooter from "./components/footer/Footer"
import SiteHeroAlt from "./components/heroSection/HeroSection"
import SiteAwards from "./components/awards/AwardsSection"

function App() {
  return (
    <>
      <div>
        <SiteHeader />
        <SiteHero />
        <SiteFooter />
        <SiteHeroAlt />
        <SiteAwards />
      </div>
    </>
  )
}

export default App
