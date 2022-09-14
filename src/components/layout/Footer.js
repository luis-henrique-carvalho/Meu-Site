import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a href="https://www.linkedin.com/in/luis-henrique-072244213/"><BsLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/luis-henrique-carvalho"><BsGithub /></a>  
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Luis Henrique</span> &copy; 2022
      </p>
    </footer>
  );
};

export default Footer;
