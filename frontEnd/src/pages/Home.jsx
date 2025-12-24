import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestListings from '../components/LatestListings.jsx'
import Plans from '../components/Plans.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestListings/>
      <Plans></Plans>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}

export default Home
