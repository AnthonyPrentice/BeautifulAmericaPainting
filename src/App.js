//libs
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

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
import "./styles/App.css"

function App() {
    return (
        <div className="app">
            <Router>
                <header>
                    <Header />
                    <NavBar />
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/Services" element={<Services />} />

                    <Route path="/About" element={<About />} />

                    <Route path="/Gallery" element={<Gallery />} />

                    <Route path="/Estimate" element={<Estimate />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </div>
  );
}

export default App;
