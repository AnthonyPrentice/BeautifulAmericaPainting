//libs
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Helmet } from 'react-helmet'

//pages
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import About from "./pages/About/About"
import Gallery from "./pages/Gallery/Gallery"
import NotFound from "./NotFound"
import Estimate from "./pages/Estimate/Estimate"

//components
import Header from "./pages/Misc/components/Header"
import Footer from "./pages/Misc/components/Footer"
import NavBar from "./pages/Misc/components/NavBar"

const SEOKeywords = 'beautiful america painting house interior exterior arizona ' +
                    'phoenix gilbert scottsdale tempe chandler queen creek vally wide ' +
                    'free estimate power washing color matching drywall stucco repair ' +
                    'trim installation epoxy cabinet staining pool deck contractor ';

function App() {
    return (
        <div className="app">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" /> 
                <title>Beautiful America Painting</title>
                <meta name='description' content={SEOKeywords}/>
            </Helmet>
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
