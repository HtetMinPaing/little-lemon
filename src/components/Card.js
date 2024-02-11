import React from 'react'
import foodOne from '../assets/lemon dessert.jpg'
import '../styles/modules/components/card.scss'
import customer from '../assets/Basket.svg'

/* Card component for the highlight section */
const Card = ({ dessert }) => {
    return (
        <div className='cardContainer'>
            <img src={dessert.img[0].sm} alt='' className='cardImage' />
            <div className='cardDetails'>
                <div className='cardHeader'>
                    <div className='cardTitle'>
                        {dessert.name.length > 15 ? dessert.name.slice(0, 15) + "..." : dessert.name}
                    </div>
                    <div className='cardPrice'>$ {dessert.price}</div>
                </div>
                <p className='cardDescription'>
                    {
                        dessert.desc.length > 140 ? dessert.desc.slice(0, 140) + "..." : dessert.desc
                    }
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
    return (
        <div className='ratingcard_container'>
            <div className='ratings'>@ @ @ @ $</div>
            <div className='customer_details'>
                <img src={customer} alt='' className='customer_img' />
                <div className='customer_name'>Kevin Joe</div>
            </div>
            <div className='review'>I really like to eat and buy food from here. It's so delicious</div>
        </div>
    )
}

export default Card