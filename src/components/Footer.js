import React from 'react'
import img from '../assets/footerLogo.png'
import '../styles/modules/components/footer.scss'

const Footer = () => {
  return (
    <footer>
      <img className='footer_image' src={img} alt='' />
      <div className='wrapper'>
        <div className='title'>Navigation</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>LogIn</li>
        </ul>
      </div>
      <div className='wrapper'>
        <div className='title'>Contact</div>
        <ul>
          <li>No,1 Califonia, USA</li>
          <li>+959123456789</li>
          <li>littlelemon123@gmail.com</li>
        </ul>
      </div>
      <div className='wrapper'>
        <div className='title'>Social Media Links</div>
        <ul>
          <li>www.facebook.com</li>
          <li>www.instragram.com</li>
          <li>www.tiktok.com</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer