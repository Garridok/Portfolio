import React from "react";
import "./about.css";
import PPP from "../../asset/p2.png"
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {BiFolderOpen} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img className="about_me-image" src={PPP} alt="me" />
        </div>

        <div className="about_content">
          <div className="about_cards">
          <article className="about_card">
                <RiAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years in coding</small>
            </article>

            <article className="about_card">
                <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>2+ Clients</small>
            </article>

            <article className="about_card">
                <BiFolderOpen className="about_icon" />
              <h5>Proyects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Hi everyone, my name is  Antonio Garrido, I'm from Huelva, Spain, I love Code, and spend time on the beach. Also I'm a Web Developer, who mainly code in FrontEnd.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
