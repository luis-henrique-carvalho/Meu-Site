import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LuisDev</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiencias</a></li>
        <li><a href="#portifolio">Portifólio</a></li>
        <li><a href="#contact">Contato</a></li>
        
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/luis-henrique-072244213/"><BsLinkedin/></a>
        <a href="https://github.com/luis-henrique-carvalho"><BsGithub/></a>
        <a href="https://www.instagram.com/luis_henrique_75/?hl=pt"><GrInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy, LuisDev. Todos os direitos reservados</small>
      </div>
    </footer>
  )
}

export default Footer