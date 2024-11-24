import React from "react";
import "./Project.css";
import Proyecto1 from "../../images/burger.jpg";
import Proyecto2 from "../../images/superhero.jpg";
import Proyecto3 from "../../images/educationapp.jpg";
import Proyecto4 from "../../images/landing-podcast.jpg";
import Proyecto5 from "../../images/landingpage.jpg";
import Proyecto6 from "../../images/surveyform.jpg";
import Proyecto7 from "../../images/documentpage.jpg";
import Array from "./Array";

const Project = () => {
      const cards = [{
          titulo: "Burger Quiz",
          imagen: Proyecto1,
          
        },
        {
          titulo: "Super Hero",
          imagen: Proyecto2,
          
        },
        {
          titulo: "Education App",
          imagen: Proyecto3,
          
        },
        {
          titulo: "Landing podcast",
          imagen: Proyecto4,
         
        },
        {
          titulo: "Landing page",
          imagen: Proyecto5,
          
        },
        {
          titulo: "Survey form",
          imagen: Proyecto6,
          
        },
        {
          titulo: "Document pages",
          imagen: Proyecto7,
          
        },
      ]
    return (
      <div className="proyectos" id="projects">
        <h2>Proyectos</h2>
        <div className="retos">
          {cards.map((card, index) => {
            return <Array key={index} titulo={card.titulo} imagen={card.imagen} link={card.link}/>;
          })}
        </div>
      </div>
    );
  }

export default Project
