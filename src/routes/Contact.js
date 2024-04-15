import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroTexts from '../components/HeroText'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroTexts heading="CONTACTS" text="Feel free to reach out."/>
      <Footer/>
    </div>
  )
}

export default Contact
