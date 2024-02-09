import React from 'react'
import BookingForm from '../components/BookingForm'
import restaurant from "../assets/restaurant.jpg"
import restauranta from "../assets/restaurant chef B.jpg"
import "../styles/modules/pages/bookingPage.scss"

const BookingPage = () => {
  return (
    <div className='booking_wrapper'>
      <div className='booking_image_wrapper'>
        <img className='booking_image up' src={restauranta} alt='' />
        <img className='booking_image down' src={restaurant} alt='' />
      </div>
      <BookingForm />
    </div>
  )
}

export default BookingPage