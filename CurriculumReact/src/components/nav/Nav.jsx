import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactMail} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {

  const [activeNav,setActiveNav ] = useState('#');


  return (
    <nav>
        <a href="#" className={activeNav === '#' ? 'active' : ' '} onClick={() => setActiveNav('#') }><BiHomeAlt /></a>
        <a href="#about" className={activeNav === '#about' ? 'active' : ' '} onClick={() => setActiveNav('#about') } ><BiUser /></a>
        <a href="#experience" className={activeNav === '#experience' ? 'active' : ' '} onClick={() => setActiveNav('#experience') }><BiBookAlt /></a>
        <a href="#services" className={activeNav === '#services' ? 'active' : ' '} onClick={() => setActiveNav('#services') }><RiServiceLine /></a>
        <a href="#contact" className={activeNav === '#contact' ? 'active' : ' '} onClick={() => setActiveNav('#contact') }><MdContactMail /></a>
       
    </nav>
  )
}

export default Nav