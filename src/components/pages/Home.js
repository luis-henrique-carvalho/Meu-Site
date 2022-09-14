import React from "react";
import Container from "../layout/Container";
import styles from './Home.module.css'
import Sobre from "./Sobre";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_container}>
        <h1>Olá, seja bem vindo ao meu site de portifólio</h1>
        <p>
          Brasileiro nascido na Bahia, sou um jovem apaixonado pela tecnologia e
          entusiasta no mundo da programação, disposto a aprender e evoluir cada
          vez mais. Possuo experiência nas seguintes tecnologias: HTML, CSS (com
          SASS), Bootstrap, JavaScript, ReactJS.
        </p>
      </div>

      <div className={styles.home_container}>
      <h1>Olá, seja bem vindo ao meu site de portifólio</h1>
        <p>
          Brasileiro nascido na Bahia, sou um jovem apaixonado pela tecnologia e
          entusiasta no mundo da programação, disposto a aprender e evoluir cada
          vez mais. Possuo experiência nas seguintes tecnologias: HTML, CSS (com
          SASS), Bootstrap, JavaScript, ReactJS.
        </p>
      </div>

      
    </div>
  );
};

export default Home;
