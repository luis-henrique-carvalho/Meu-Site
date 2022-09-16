import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais </h5>
      <h2>Minha Experiência</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvedor Front-end</h3>
          <div className="experience__content">
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>JAVA SCRIPT</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>REACT.JS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Estudando</small>
              </div>
            </article>
          </div>
        </div>

        {/* DESIGNER GRAFICO EXPERIENCIAS */}
        <div className="experience__designer">
          <h3>Designer Gráfico</h3>

          <div className="experience__content">
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>PHOTOSHOP</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>COREW DRAW</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>ILLUSTRATOR</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>AFTER EFECT</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__detailes">
              <BsPatchCheckFill />
              <div>
                <h4>FIGMA</h4>
                <small className="text-light">Estudando</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
