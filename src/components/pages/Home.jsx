import React from 'react'
import Hero from '../ui components/Hero';
import About from '../ui components/About';
import HomeTitle from '../ui components/HomeTitle';

const Home = ({ token }) => {
  return (
    <div>
      <Hero />
      <About />
    </div>
  )
}

export default Home