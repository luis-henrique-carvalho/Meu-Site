import React from "react";
import Projeto from "../../assets/projeto.png";
import Projeto2 from "../../assets/projeto2.jpg";

import "./portifolio.css";

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Meus projetos</h5>
      <h2>Portifólio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Projeto} alt="cost" />
          </div>
          <h3>Este é o titulo do Portifólio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/luis-henrique-carvalho/Cust"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/luis-henrique-carvalho/Cust"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Projeto2} alt="cost" />
          </div>
          <h3>Este é o titulo do Portifólio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/luis-henrique-carvalho/Login-page-in-react"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/luis-henrique-carvalho/Login-page-in-react"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portifolio;
