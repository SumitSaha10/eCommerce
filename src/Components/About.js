import React from 'react'
import './About.css'
import p from '../Assets/hero.jpg'

export default function About() {
 
  return (
    <>
        <div className='about'>
            <p className='about-para p-2 fs-1 fw-bold'>About Us</p>
            <img src={p} alt="images"/>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
            </p>
            
        </div>
    </>
  )
}
