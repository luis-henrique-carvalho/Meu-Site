import React from 'react'
import CV from '../../assets/CV.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Dawnload CV</a>
      <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
    </div>
  )
}
