import React from 'react'

//components
import Slideshow from "./components/Slideshow/Slideshow"
import Strip from "../Misc/components/Strip"
import ServicesPreview from './components/ServicesPreview'
import Review from './components/Review'

function Home(){
    return (
        <div className='home-page'>
            <Slideshow />
            <Strip text={0} />
            <ServicesPreview />
            <Strip text={1} />
            <Review />
        </div>
    );
}

export default Home;
