import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Highlight from '../components/Highlight'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <div style={{marginTop: "7rem"}}>
      <Hero />
      <Highlight />
      <Testimonials />
    </div>
  )
}

export default HomePage