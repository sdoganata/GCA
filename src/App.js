import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/ui-components/Navbar';
import Footer from './components/ui-components/Footer';
import Home from './components/pages/Home';


const App = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Routes>
                <Route path="/GCA/" element={<Home/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App