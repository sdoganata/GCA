import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/ui components/Navbar';
import Footer from './components/ui components/Footer';
import Home from './components/pages/Home';


const App = () => {
    return (
        <div className='container'>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
        </div>
    )
}

export default App