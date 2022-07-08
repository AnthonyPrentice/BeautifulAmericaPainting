import React from 'react'
import './css/Home.css'

//components
import Slideshow from "./components/Slideshow/Slideshow"
import Strip from "./components/Strip"
import ServicesPreview from './components/ServicesPreview'
import Review from './components/Review'

function Home(){
    return (
        <div className='home'>
            <Slideshow />
            <Strip text={0} />
            <ServicesPreview />
            <Strip text={1} />
            <Review />
        </div>
    );
}

export default Home;
