import React from "react";
import "./experience.css";
import {HiBadgeCheck} from 'react-icons/hi'



const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
            <h3>FrontEnd Development</h3>
            <div className="experience_content">
              <article></article>
            </div>
        </div>

        <div className="experience_backend">

        </div>
      </div>
    </section>
  );
};

export default Experience;
