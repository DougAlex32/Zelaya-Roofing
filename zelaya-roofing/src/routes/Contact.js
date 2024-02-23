import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading= 'CONTACT' text='Get your Free Estimate Today!'/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
