import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'

const App = () => {
    return (
        <Router>
            {/* navbar */}
            <Navbar />
            {/* routes */}
            <Routes>
                {/* home page */}
                <Route path="/" element={<Home />} />
            </Routes>

            {/* footer */}
            <Footer />
        </Router>
    )
}

export default App
