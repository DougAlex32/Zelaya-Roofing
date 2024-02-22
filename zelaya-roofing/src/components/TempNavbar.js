import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

import './NavbarStyles.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)



  return (
    <div className='header'>
      <Link to='/'><h1>Zelaya Roofing</h1></Link>
      <ul className='nav-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/service'>Services</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
       {click ? (<FaTimes style={{color: 'red'}}/>) : (<FaBars style={{color: 'red'}} />)} 

        
      </div>
    </div>
  )
}

export default Navbar
