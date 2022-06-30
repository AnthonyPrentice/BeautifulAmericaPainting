import React, { useState }from 'react'
//import {} from 'react-transition-group'
import Images from './SlideshowData'
import '../../styles/Slideshow.css'

function Slideshow(){
    //current image
    const [curImg, setCurImg] = useState(0) 
    
    function SlideshowNext() {
        setCurImg((curImg+1)%3)
    }

    function SlideshowPrev() {
        setCurImg((Images.length-((curImg-1)*-1))%Images.length)
    }

    return (
        <span className='slideshow'>
            <img key={Images[curImg]} src={Images[curImg]} className='slideshow-img' />
            <button className='btn-next' onClick={SlideshowNext}></button>
            <button className='btn-prev' onClick={SlideshowPrev}></button>
        </span>
    );
}

export default Slideshow;
