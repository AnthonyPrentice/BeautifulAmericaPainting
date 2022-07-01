import React from 'react'
import './css/Home.css'

//components
import Slideshow from "../components/Slideshow/Slideshow"

function Home(){
    return (
        <div className='home'>
            <Slideshow />
        </div>
    );
}

export default Home;
