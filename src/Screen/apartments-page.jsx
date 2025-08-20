import React from 'react'
import Navbar2 from '../Components/navbar-2'
import Hero2 from '../Components/hero-2'
import Apartments from '../Components/deatils-section'
import OverView from '../Components/overview'
import Footer from '../Components/footer'

const ApartmentsPage = () => {
    return (
      <div>
        <Navbar2 />
        <Hero2 />
        <Apartments />
        <OverView />
        <Footer />
      </div>
    )
}

export default ApartmentsPage