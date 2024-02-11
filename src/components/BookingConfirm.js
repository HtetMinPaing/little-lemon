import React from 'react'
import "../styles/modules/components/bookingConfirm.scss"
import image from "../assets/Logo.svg"

const BookingConfirm = () => {
  return (
    <div className='confirm_wrapper'>
        <img src={image} alt='' className='image' />
        <div className='title'>Reservation confirm</div>
        <div className='text'>You have sucessfully reserves the tables.</div>
    </div>
  )
}

export default BookingConfirm