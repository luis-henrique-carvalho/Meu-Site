import React from 'react'
import {BsLinkedin , BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/luis-henrique-072244213/" ><BsLinkedin/></a>
      <a href="https://github.com/luis-henrique-carvalho" ><BsGithub/></a>
      
    </div>
  )
}

export default HeaderSocial