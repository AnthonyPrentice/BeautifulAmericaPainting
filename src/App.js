import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./Home"
import InteriorServices from "./InteriorServices"
import ExteriorServices from "./ExteriorServices"
import About from "./About"
import Gallery from "./Gallery"


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/Interior_Services" element={<InteriorServices />} />

                    <Route path="/Exterior_Services" element={<ExteriorServices />} />

                    <Route path="/About" element={<About />} />

                    <Route path="/Gallery" element={<Gallery />} />
                </Routes>
            </Router>
        </div>
  );
}

export default App;
