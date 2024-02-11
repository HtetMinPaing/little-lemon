import React, { useEffect, useState } from 'react'
import "../styles/modules/components/bookingForm.scss"

const BookingForm = ({availableTimes, setAvailableTimes, submitForm}) => {

    const [formData, setFormData] = useState({
        booking_date: "",
        booking_time: availableTimes[0],
        guests: 0,
        ocassions: "normal"
    });

    const isformValid = (
        formData.booking_date &&
        formData.booking_time &&
        formData.guests &&
        formData.ocassions
    )
    const handleEvent = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData)
        setFormData({
            booking_date: "",
            booking_time: availableTimes[0],
            guests: 0,
            ocassions: "normal"
        });
    }

    useEffect(()=>{
        setAvailableTimes(formData.booking_date)
    },[formData])
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <h1>Reserve your table Now!</h1>
            <div className="dataInput">
                <label htmlFor='booking_date' >Choose Date</label>
                <input
                    id='booking_date'
                    type='date'
                    value={formData.booking_date}
                    onChange={e => handleEvent(e)}
                />
            </div>

            <div className="dataInput">
                <label htmlFor='booking_time' >Choose Time</label>
                <select
                    id='booking_time'
                    value={formData.booking_time}
                    onChange={e => handleEvent(e)}
                >
                    {
                        availableTimes.map((time) => (
                            <option value={time}>{time}</option>
                        ))
                    }
                </select>
            </div>

            <div className="dataInput">
                <label htmlFor='guests' >Number of Guests</label>
                <input id='guests' type='number' min="1" max="10"
                    value={formData.guests}
                    onChange={e => handleEvent(e)}
                />
            </div>

            <div className="dataInput">
                <label htmlFor='ocassions' >Ocassion</label>
                <select
                    id='ocassions'
                    value={formData.ocassions}
                    onChange={e => handleEvent(e)}
                >
                    <option value="anniversary">Anniversary</option>
                    <option value="birthday">Birthday</option>
                    <option value="normal">Normal</option>
                </select>
            </div>

            <input className='submitButton' type='submit' value="Make Your reservation" disabled={!isformValid} />
        </form>
    )
}

export default BookingForm