import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md' 
import {BsWhatsapp} from 'react-icons/bs' 
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qz77nxm', 'template_n3wvfwh', form.current, 'fE6CDGlBRUzLdhz3v')
  
    e.target.reset();
  };

    
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
              <article className="contact_option">
                <MdOutlineEmail className='contact_option-icon'/>
                  <h4>Email</h4>
                  <h5>garridokprogrammer</h5>
                  <a href="mailto:garridokprogrammer@gmail.com">Send a email</a>
              </article>

              <article className="contact_option">
                <BsWhatsapp className='contact_option-icon'/>
                  <h4>WhatsApp and Call</h4>
                  <h5>+34 615686213</h5>
                  <a href="https://wa.me/34615686213" target="_blank">Send a message</a>
              </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email'  required/>
                <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
      </section>
  )
}

export default Contact