//libs
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { helmet } from 'react-helmet'

//pages
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import NotFound from "./pages/NotFound"
import Estimate from "./pages/Estimate"

//components
import Header from "./components/Header"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

//styles
import "./App.css"

function App() {
    return (
        <div className="app">
            <helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" /> 
            </helmet>
            <Router>
                <Header />
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/Services" element={<Services />} />

                        <Route path="/About" element={<About />} />

                        <Route path="/Gallery" element={<Gallery />} />

                        <Route path="/Estimate" element={<Estimate />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
  );
}

export default App;
