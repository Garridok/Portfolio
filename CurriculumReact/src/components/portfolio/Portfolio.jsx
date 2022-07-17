import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/crypto.png'
import IMG2 from '../../asset/seguimiento.png'
import IMG3 from '../../asset/planificador.png'
import IMG4 from '../../asset/bienesraices.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Consultor de valores de Criptos Monedas',
    github: '',
    liveDemo: 'https://cryptogarrido.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Seguimiento de Pacientes para veterinarios',
    github: '#',
    liveDemo: 'https://citasveterinariogarrido.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Planificador de Gastos Personales',
    github: '#',
    liveDemo: 'https://planificadorgastogarrido.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Proyecto de Bienes Raices',
    github: '#',
    liveDemo:'https://1proyectogarrido.netlify.app/'
  },
]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container"> 
       {
          data.map(({id, image, title, github, liveDemo}) => {
            return (
              <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={image} alt="portfolio" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={liveDemo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          }
          )
        }


      </div>

    </section>
  )
}

export default Portfolio