import React from "react";
import "./about.css";
import ME from "../../asset/me-about.jpg";
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
          <img className="about_me-image" src={ME} alt="me" />
        </div>

        <div className="about_content">
          <div className="about_cards">
          <article className="about_card">
                <RiAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years in coding</small>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem porro saepe necessitatibus libero quod aperiam, quia dolor cumque voluptate laborum odio temporibus sint voluptates quisquam quo soluta consequatur minima expedita!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
