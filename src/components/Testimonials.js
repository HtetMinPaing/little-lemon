import React from 'react'
import { RatingCard } from './Card'
import "../styles/modules/components/testimonials.scss"

const Testimonials = () => {
  return (
    <div className='testimonials_wrapper' >
      <div className='testimonials_title'>
        Testimonials
      </div>
      <div className='ratingcard_wrapper'>
      <RatingCard />
      <RatingCard />
      <RatingCard />
      <RatingCard />
      </div>
    </div>
  )
}

export default Testimonials