import React from 'react'
import { CTA } from './CTA'
import './header.css'
import ME from '../../assets/foto.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Luis Henrique</h1>
        <h5 className='text-light'>Desenvolvedor Front-end</h5>
        <CTA/>
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scrol Down</a>
      </div>
    </header>
  )
}

export default Header