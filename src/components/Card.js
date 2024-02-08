import React from 'react'
import foodOne from '../assets/lemon dessert.jpg'
import '../styles/modules/components/card.scss'
import customer from '../assets/Basket.svg'

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

/* Card components for testimonials */
export const RatingCard = () => {
    return(
        <div className='ratingcard_container'>
            <div className='ratings'>@ @ @ @ $</div>
            <div className='customer_details'>
                <img src={customer} alt='' className='customer_img'/>
                <div className='customer_name'>Kevin Joe</div>
            </div>
            <div className='review'>I really like to eat and buy food from here. It's so delicious</div>
        </div>
    )
}

export default Card