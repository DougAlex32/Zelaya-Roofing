import React from 'react'
import './FooterStyles.css'
import { FaMailBulk, FaPhone,FaSearchLocation } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#aa0909',marginRight: '2rem'}}/>
                    <div>
                        <h4>5609 Tourist Dr</h4>
                        <h4>Fort Worth, Tx</h4>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color: '#aa0909',marginRight: '2rem'}} />(682)552-2320</h4>
                        <h4>English</h4>
                        <h4><FaPhone size={20} style={{color: '#aa0909',marginRight: '2rem'}} />(682)552-2382</h4>
                        <h4>Spanish</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color: '#aa0909',marginRight: '2rem'}}/>ZelayaNurys@gmail.com</h4>

                    </div>
                </div>
                <div className='right'>
                    <h4>Est. 2013</h4>
                    <p>20+ years of long service helping communities all over Texas!</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
