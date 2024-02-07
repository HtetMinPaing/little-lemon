import React from 'react'
import foodOne from '../assets/lemon dessert.jpg'
import '../styles/modules/components/card.scss'

const Highlight = () => {
  return (
    <section>
      <div style={{
        display: "flex",
        justifyContent: "space-evenly"
      }}>
        <div className='cardHeader'>Highlight Foods</div>
        <button className='cardButton'>Order Online</button>
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem"
      }}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

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
      <button className='cardButton'>Order a delivery</button>
    </div>
  )
}

export default Highlight