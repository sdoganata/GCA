import React from 'react'
import netlab_banner from '../../assets/logo.png'
import hero_image from '../../assets/ku-bilim-kapisi.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero-image' src={hero_image}/>
      <div className='div-hero-banner'>
        <img className='banner-hero' src={netlab_banner} alt="Netlab Banner" />
      </div>
      {/*<div className='div-hero-link'>
        {!token && (
          <>
            <Link to='/login' className='hero-link'>Submit Job</Link>
            <Link to='/anonymous-job' className='hero-link'>Submit Anonymous Job</Link>
          </>
          )}
      </div>*/}
    </div>
    
  )
}

export default Hero