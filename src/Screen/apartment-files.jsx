import React from 'react'
import Navbar from '../Components/navbar'
import Hero3 from '../Components/hero-3'
import ApartmentDetails from '../Components/apartment-details'
import SimilarApartments from '../Components/democards'
import Footer from '../Components/footer'

const ApartmentFiles = () => {

    return (
      <div>
        <Navbar />
        <Hero3 />
        <ApartmentDetails />
        <SimilarApartments />
        <Footer />
      </div>
    )
  }
export default ApartmentFiles;
