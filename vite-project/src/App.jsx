// import React from 'react'
// import Header from "./components/header/Header";

// const App = () => {
//   return (
//     <div>
//       <Header/>
//     </div>
//   )
// }

// export default App

import SiteHeader from "./components/header/Header"
import SiteHero from "./components/hero/Hero"
import SiteFooter from "./components/footer/Footer"
import SiteHeroAlt from "./components/heroSection/HeroSection"
import SiteAwards from "./components/awards/AwardsSection"
import "./globals.css"

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
