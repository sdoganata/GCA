import React from 'react'
import netlab_banner from '../../assets/netlab_banner-3.png'
import { Link } from 'react-router-dom'

const Navbar = ({token, handleLogout}) => {
  return (
    <nav className={'netlab-navbar'}>
      <a className='a-navbar' href="https://netlab.ku.edu.tr/">
        <img className='banner-navbar' src={netlab_banner} alt="Netlab Banner" />
      </a>
      <div className='navbar-links'>
        <Link to="/" className={'navbar-link'}>Home</Link>
      </div>
    </nav>
  )
}

export default Navbar