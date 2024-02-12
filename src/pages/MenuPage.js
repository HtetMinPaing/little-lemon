import React, { useEffect, useState } from 'react'
import { desserts } from '../data/Desserts';
import { beverages } from '../data/Beverages';
import Card from '../components/Card';
import "../styles/modules/pages/menuPage.scss"

const MenuPage = () => {

  const [foodType, setFoodType] = useState("desserts")

  const preFood = ["all","desserts","beverages"]
  return (
    <div className='menu_page'>
      <div className='menu_button_wrapper'>
        {
          preFood.map((i) => (
            <button onClick={() => setFoodType(i)} id={`${i===foodType?"":"button_active"}`}>{i}</button>
          ))
        }
      </div>
      <div className='menu_wrapper'>
        {
          foodType==="desserts" 
          ?
          desserts.map((dessert) => {
            return (
              <Card dessert={dessert} key={dessert.id} />
            )
          }) 
          :
          beverages.map((dessert) => {
            return (
              <Card dessert={dessert} key={dessert.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default MenuPage