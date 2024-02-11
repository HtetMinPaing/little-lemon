import React, { useEffect, useReducer, useState } from 'react'
import BookingForm from '../components/BookingForm'
import restaurant from "../assets/restaurant.jpg"
import restauranta from "../assets/restaurant chef B.jpg"
import "../styles/modules/pages/bookingPage.scss"
import { fetchAPI, submitAPI } from '../testing/fetchAPI'
import { useNavigate } from 'react-router-dom'

const BookingPage = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.payload;
      default:
        return state;
    }
  }

  const [availableTimes,dispatchAvailableTimes] = useReducer(reducer,[]);
  const navigate = useNavigate();

  const updateTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(new Date(selectedDate));
      dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: times });
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  const initializeTimes = async () => {
    try {
      const today = new Date(); // Get today's date
      const times = await fetchAPI(today);
      dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: times });
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  const submitForm = (formData) => {
    try {
      const formSubmit = submitAPI(formData);
      if (formSubmit) navigate("confirm")
    } catch (error) {
      console.error("Error handling in submitting the form data.")
    }
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div className='booking_wrapper'>
      <div className='booking_image_wrapper'>
        <img className='booking_image up' src={restauranta} alt='' />
        <img className='booking_image down' src={restaurant} alt='' />
      </div>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={updateTimes} submitForm={submitForm} />
    </div>
  )
}

export default BookingPage