import React from "react";

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Meu projetos</h5>
      <h2>Portifólio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Este é o titulo do Portifólio</h3>
          <a
            href="https://github.com/luis-henrique-carvalho/Cust"
            className="btn"
          >
            Github
          </a>
          <a
            href="https://github.com/luis-henrique-carvalho/Cust"
            className="btn btn-primary"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portifolio;
