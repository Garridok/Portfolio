import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id="services">
          <h5>What I Offer</h5>
          <h2>Services</h2>

          <div className='container services_container'>
              <article className='service'>
                  <div className='services_head'>
                      <h3>UI/UX Design</h3>
                  </div>

                  <ul className="service_list">
                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Creative of new web Designs</p>
                    </li>

                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Control colors and their palettes</p>
                    </li>

                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Responsive Positioning</p>
                    </li>
                  </ul>
              </article>

              <article className='service'>
                  <div className='services_head'>
                      <h3>Web Development</h3>
                  </div>

                  <ul className="service_list">
                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Full-Stack Web Developer, with 3 years coding</p>
                    </li>

                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Border-radius as life style</p>
                    </li>

                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Minimalist as a passion</p>
                    </li>
                  </ul>
              </article>
          </div>
    </section>
  )
}

export default Services