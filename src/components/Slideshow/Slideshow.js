import React, { useState }from 'react'
import Images from './SlideshowData'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { IconContext } from "react-icons";
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import '../css/Slideshow.css'

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

            {/*Preload images in a hidden div to disable flickering*/}
            <div className='hidden'><img src={Images[0]} /><img src={Images[1]} /><img src={Images[2]} /></div>

            <TransitionGroup>
                <CSSTransition className='slideshow-img' key={Images[curImg]}>
                    <img src={Images[curImg]} />
                </CSSTransition>
            </TransitionGroup>

            <IconContext.Provider value={{color: "grey", size: "2em"}}>
                <button className='btn-next' onClick={SlideshowNext}><FiChevronRight /></button>
                <button className='btn-prev' onClick={SlideshowPrev}><FiChevronLeft /></button>
            </IconContext.Provider>

        </span>
    );
}

export default Slideshow;
