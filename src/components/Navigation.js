import React, { useEffect, useState } from 'react'
import "../styles/modules/components/navigation.scss"
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import hamburgerIcon from "../assets/icon_hamburger_menu.svg"
import homeIcon from "../assets/home_icon.svg"
import xmarkIcon from "../assets/xmark-solid.svg"

const Navigation = () => {

  const [expandedMenu, setExpandedMenu] = useState(false);

  const openDropDown = () => {
    let menuIcon = document.querySelector('.menuIcon');
    let navList = document.querySelector('.navList');
    menuIcon.onclick=()=>{
      navList.classList.toggle('active');
      setExpandedMenu(!expandedMenu);
    }
  }

  useEffect(() => {
    let menuIcon = document.querySelector('.menuIcon');
    let navList = document.querySelector('.navList');

    window.onscroll = () => {
      navList.classList.remove('active');
      setExpandedMenu(false)
    }
  },[]);

  return (
    <header>
      <div className='navBar'>
        <img src={homeIcon} alt='|||' className='icon' />
        <img src={logo} alt='logo' className='logo' />
        <img src={expandedMenu?xmarkIcon:hamburgerIcon} alt='|||' className='icon menuIcon' onClick={openDropDown}/>
        <nav className='navList'>
          <Link className='navLink' to={"/"}>Home</Link>
          <Link className='navLink' to={"/about"}>About</Link>
          <Link className='navLink' to={"/menu"}>Menu</Link>
          <Link className='navLink' to={"/book"}>Book</Link>
          <Link className='navLink' to={"/order"}>Order</Link>
          <Link className='navLink' to={"/online"}>Online</Link>
          <Link className='navLink' to={"/login"}>Login</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navigation