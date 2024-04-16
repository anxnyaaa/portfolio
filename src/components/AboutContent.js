import React from 'react'
import './AboutContentStyles.css'
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Voluptate proident qui enim do magna ullamco proident aliquip culpa ad. Ea cillum ut ex aliqua irure amet. Ea excepteur Lorem nisi et excepteur consequat. Tempor pariatur enim cupidatat laboris eiusmod et. Aliqua mollit occaecat ullamco sunt nostrud culpa officia excepteur laboris. Laborum cupidatat esse irure aute ea.</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt='true'></img>
                </div>
                <div className='img-stack bottom'>
                    <img src={React2} className='img' alt='true'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent