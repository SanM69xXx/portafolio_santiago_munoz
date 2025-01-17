import React from "react";
import "./Main.css";
import About from "../About/About";
import Project from "../Projects/Project";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import ScrollToUp from "../ScrollToUp/ScrollToup"

const Main = ()=> {
  const skills =[
    {
    icon : "fab fa-html5",
    language: "Html",
  },
  {
    icon:  "fab fa-css3-alt",
    language: "Css",
  },
  {
    icon: "fab fa-js",
    language: "Js"
  },
  {
    icon: "fab fa-react",
    language: "React"
  },
  {
    icon: "fab fa-git-square",
    language: "Git"
  }
]

    return (
      <main>
        <section className="imagen" id="inicio">
          <div className="title">
            <h1>Desarrollador Frontend</h1>
            <p>Santiago muñoz cuartas</p>
            <div className="container6">
            {skills.map((skill, index) => {
              return (
              <ul className="lista" key={index}>
                <li className="skill">
                  <i className={skill.icon} aria-hidden="true">
                    <h4>{skill.language}</h4>
                  </i>
                </li>
              </ul>
              )})}
            </div>
          </div>
        </section>
        <About />
        <Project />
        <Experience/>
        <ScrollToUp/>
        <Contact />
      </main>
    );
}

export default Main;
