import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroTexts from '../components/HeroText'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroTexts heading="PROJECTS" text="Some of my most recent works."/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
