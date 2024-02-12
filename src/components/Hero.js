import React from 'react'
import homeImage from '../assets/restauranfood.jpg'
import '../styles/modules/components/hero.scss'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className='leftBox'>
        <h1 className='title'>Little Lemon</h1>
        <p className='subtitle'>Chicago</p>
        <p className='description'>
          <p>Lorem ipsum dolor sit amet, consectetur</p> 
          <p>adipiscing elit, sed do eiusmod tempor</p> 
          <p>incididunt ut labore et dolore magna aliqua.</p>
          <button className='button'>
            <a href={'/book'}>Reserve a Table</a>
          </button>
        </p>
      </div>
      <div className='rightBox'>
        <img src={homeImage} alt='restaurant' />
      </div>
    </div>
  )
}

export default Hero