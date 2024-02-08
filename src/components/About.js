import React from 'react'
import '../styles/modules/components/about.scss'
import img from '../assets/restauranfood.jpg'

const About = () => {
  return (
    <div className='about_wrapper'>
      <div className='about_details'>
        <div className='about_header'>
          <div className='about_title'>Little Lemon</div>
          <div className='about_location'>Chicago</div>
        </div>
        <div className='about_description'>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
      <div className='about_photo_wrapper'>
        <img className='about_photo about_photo_down' src={img} alt='' />
        <img className='about_photo about_photo_up' src={img} alt='' />
      </div>
    </div>
  )
}

export default About