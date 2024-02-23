import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ServiceCard from '../components/Service'

const Service = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading='Services' text='Metal Roofs,Asphalt Shingles,Wood Shingles, TPO'/>
      <ServiceCard/>
      <Footer/>
    </div>
  )
}

export default Service
