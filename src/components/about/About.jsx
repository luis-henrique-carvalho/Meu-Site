import React from "react";
import Foto from "../../assets/fotoperfil.jpg";
import { FaAward } from "react-icons/fa";

import { BiCodeBlock } from "react-icons/bi";
import "./about.css";

const about = () => {

  
  return (
    <section id="about">
      <h5>Conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Foto} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencias</h5>
              <small>1 ano de Experiencia</small>
            </article>

            <article className="about__card">
              <BiCodeBlock className="about__icon" />
              <h5>Tecnologias</h5>
              <small>HTML, CSS, JAVASCRIPT, REACT.JS, BOOTSTRAP, TAILWIND CSS, API, GIT e GIT HUB</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projetos</h5>
              <small>Participação em <br/> mais de 10 projetos</small>
            </article>
          </div>
          
          <p>
            Brasileiro nascido na Bahia, sou um jovem apaixonado pela tecnologia
            e entusiasta no mundo da programação, disposto a aprender e evoluir
            cada vez mais. Possuo experiência nas seguintes tecnologias: HTML,
            CSS (com SASS), Bootstrap, JavaScript, ReactJS.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
