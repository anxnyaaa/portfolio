import React from 'react'

import './HeroHomeStyles.css'

import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg'/>
        </div>  
        <div className='content'>
            <p>HI, I AM ANANYA PAL.</p>
            <h1>Software Developer.</h1>
            <div style={{display: 'flex'}}>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contacts</Link>
            </div>
        </div>    
    </div>
  )
}

export default HeroImg
