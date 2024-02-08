import React from 'react'
import foodOne from '../assets/lemon dessert.jpg'
import '../styles/modules/components/card.scss'

/* Card component for the highlight section */
const Card = () => {
    return (
        <div className='cardContainer'>
            <img src={foodOne} alt='' className='cardImage' />
            <div className='cardDetails'>
                <div className='cardHeader'>
                    <div className='cardTitle'>Greek Salad</div>
                    <div className='cardPrice'>$ 12.99</div>
                </div>
                <p className='cardDescription'>The famous greek salad of crispy lettuce,
                    peppers, olives and our Chicago style feta
                    cheese, garnished with crunchy garlic and
                    rosemary croutons.
                </p>
            </div>
            <div>
                <div className='cardButton'>Order a delivery</div>
            </div>
        </div>
    )
}

export default Card