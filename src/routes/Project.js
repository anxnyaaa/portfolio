import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroTexts from '../components/HeroText'
import PricingCard from '../components/PricingCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroTexts heading="PROJECTS" text="Some of my most recent works."/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
