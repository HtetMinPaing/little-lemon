import React, { useEffect } from 'react'
import '../styles/modules/components/highlight.scss'
import Card from './Card'
import { desserts } from '../data/Desserts'

const Highlight = () => {

  const highlightDesserts = desserts.slice(0,3);

  return (
    <div className='highlight_container'>
      <div className='highlight_header'>
        <div className='highlight_title'>Special</div>
        <button className='highlight_button'>
          <a href={"/order-online"}>Order Online</a>
        </button>
      </div>
      <div className='highlight_card_wrapper'>
        {
          highlightDesserts.map((dessert) => (
            <Card dessert={dessert} />
          ))
        }
      </div>
    </div>
  )
}

export default Highlight