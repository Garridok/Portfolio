import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
   <footer>
      <a href="#" className='footer_logo'>GarridoK</a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Porfolio</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/antonio-garrido-carranza-2a021b210/" target="_blank"><BsLinkedin  /></a>
        <a href="https://github.com/Garridok" target="_blank"><BsGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; GarridoK</small>
      </div>
   </footer>
  )
}

export default Footer