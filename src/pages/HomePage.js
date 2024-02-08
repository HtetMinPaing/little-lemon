import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Highlight from '../components/Highlight'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div style={{marginTop: "7rem"}}>
      <Hero />
      <Highlight />
      <Testimonials />
      <About />
    </div>
  )
}

export default HomePage