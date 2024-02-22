import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'
import roofingVideo from '../assets/roofing.mp4'


const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={roofingVideo} type="video/mp4" />
        </video>
    <div className='content'>
        <h1>Zelaya Roofing</h1>
        <p>Building Homes with A Foundation In God.</p>
    </div>
      <div>
        <Link to='/about' className='btn'>Learn More</Link>
        <Link to='/contact' className='btn btn-light'>Let's Talk</Link>
      </div>
    </div>
  )
}

export default Video
