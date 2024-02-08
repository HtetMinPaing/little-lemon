import React from 'react'
import '../styles/modules/components/highlight.scss'
import Card from './Card'

const Highlight = () => {
  return (
    <div className='highlight_container'>
      <div className='highlight_header'>
        <div className='highlight_title'>Special</div>
        <button className='highlight_button'>Order Online</button>
      </div>
      <div className='highlight_card_wrapper'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Highlight