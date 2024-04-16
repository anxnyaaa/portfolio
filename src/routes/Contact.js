import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroTexts from '../components/HeroText'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroTexts heading="CONTACTS" text="Feel free to reach out."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
