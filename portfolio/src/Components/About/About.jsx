import React from "react";
import "./About.css";
import Me from "../../images/me.jpg";
import SAM from "../../pdf/SAM.docx";

const About = () => {
  return (
    <section className="perfil" id="sobremi">
      <div className="container">
        <img src={Me} className="imagen" alt="SANTIAGO" />
        <div className="texto">
          <p className="title1">Santiago Muñoz Cuartas</p>
          <p className="description">
            Mi nombre es Santiago muñoz cuartas, tengo 23 años. estudiante del pascual bravo tecnologia en desarrollo de software
            <a href={SAM} target="_blank" rel="noopener noreferrer">
              Ver mi hoja de vida
            </a>
          </p>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default About;
