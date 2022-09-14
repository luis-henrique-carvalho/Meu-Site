import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/logo.png'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/home"> <img src={logo} alt="Costs" /> </Link>

        <ul className={styles.list}>
          <li className={styles.iten}><Link to="./home">Home</Link></li>
          <li className={styles.iten}><Link to="./sobre">Sobre</Link></li>
          
        </ul>
          
      </Container>
    </nav>
  )
}

export default NavBar