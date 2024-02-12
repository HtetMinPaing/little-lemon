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
          <li><a href={'/'}>Home</a></li>
          <li><a href={'/about'}>About</a></li>
          <li><a href={'/menu'}>Menu</a></li>
          <li><a href={'/book'}>Reservation</a></li>
          <li><a href={'/order-online'}>order Online</a></li>
          <li><a href={'/login'}>Login</a></li>
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