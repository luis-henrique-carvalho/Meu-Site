import React from "react";
import Projeto from "../../assets/projeto.png";
import Projeto2 from "../../assets/projeto2.jpg";
import Projeto3 from "../../assets/projeto3.jpg";
import Projeto4 from "../../assets/projeto4.png";

import "./portifolio.css";

const Portifolio = () => {
  const data = [
    {
      id: 1,
      image: Projeto,
      title: "Cust",
      small: 'Desenvolvimento web',
      github: "https://github.com/luis-henrique-carvalho/Cust",
      demo: "https://github.com/luis-henrique-carvalho/Cust",
      button: 'GitHub'
    },
    {
      id: 2,
      image: Projeto2,
      title: "Página de Login",
      small: 'Desenvolvimento web',
      github: "https://github.com/luis-henrique-carvalho/Login-page-in-react",
      demo: "https://github.com/luis-henrique-carvalho/Login-page-in-react",
      button: 'GitHub'
    },

    {
      id: 3,
      image: Projeto3,
      title: "Social Média Selaria",
      small: 'Designe Social Media',
      github: "https://www.behance.net/gallery/135456645/SOCIAL-MEDIA-SELARIA",
      demo: "https://www.behance.net/gallery/135456645/SOCIAL-MEDIA-SELARIA",
      button: 'Behance'
    },

    {
      id: 4,
      image: Projeto4,
      title: "Página de Login Responsiva",
      small: 'Desenvolvimento web',
      github: "https://github.com/luis-henrique-carvalho/TELA-DE-LOGIN-COM-TEMA-DARK---HTML---CSS",
      demo: "https://github.com/luis-henrique-carvalho/TELA-DE-LOGIN-COM-TEMA-DARK---HTML---CSS",
      button: 'GitHub'
    },
  ];
  return (
    <section id="portifolio">
      <h5>Meus projetos</h5>
      <h2>Portifólio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title,small, github, demo, button }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="cost" />
              </div>
              <h3>{title}</h3>
              <small>{small}</small>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {button}
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;
