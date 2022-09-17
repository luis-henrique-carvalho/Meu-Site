import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/luis-henrique-072244213/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>

      <a href="https://github.com/luis-henrique-carvalho" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>

      <a
        href="https://www.instagram.com/luis_henrique_75/?hl=pt"
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram />
      </a>

      <a href="mailto:luisdev9225@gmail.com" className="email"><MdOutlineEmail/></a>
    </div>
  );
};

export default HeaderSocial;
