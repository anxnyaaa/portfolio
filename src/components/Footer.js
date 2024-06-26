import React from 'react'

import './FooterStyles.css'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                        +91 1234567890
                    </h4>
                </div>
                <div className='mail'>
                    <h4>
                        <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                        palananya08@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>This is Ananya Pal. Developer by profession, Designer by passion!</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    <FaInstagram size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Footer
