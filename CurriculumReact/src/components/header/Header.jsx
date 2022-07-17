import React from 'react'
import CTA from './CTA'
import './header.css'
import PPEE from "../../asset/PP4.png"
import HeaderMedias from './HeaderMedias'


const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Antonio Garrido</h1>
            <h5 className='text-ligth'>FrontEnd Developer</h5>
            <CTA />
            <HeaderMedias />
            <div className="me">
              <img src={PPEE} alt="me" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header