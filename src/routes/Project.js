import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroTexts from '../components/HeroText'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroTexts heading="PROJECTS" text="Some of my most recent works."/>
      <Footer/>
    </div>
  )
}

export default Project
