import React from 'react'
import ReactDOM from "react-dom";
import './css/Home.css'

//components
import Slideshow from "../components/Slideshow/Slideshow"
import Strip from "../components/Strip"
import ServicesPreview from '../components/ServicesPreview'

function Home(){
    return (
        <div className='home'>
            <Slideshow />
            <Strip text={0} />
            <ServicesPreview />
        </div>
    );
}

export default Home;
