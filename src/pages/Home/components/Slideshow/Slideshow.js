import React, { useState, useEffect }from 'react'
import Images from './SlideshowData'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { IconContext } from "react-icons";
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import '../../css/Slideshow.css'

function Slideshow(){
    //current image
    const [curImg, setCurImg] = useState(0) 
    
    function SlideshowNext() {
        setCurImg((curImg+1)%Images.length)
    }

    function SlideshowPrev() {
        setCurImg((Images.length-((curImg-1)*-1))%Images.length)
    }
   
    function SlideshowAuto() {
        setCurImg(prevCurImg => (prevCurImg+1)%Images.length)
    }

    useEffect(() => {
        const interval = setInterval(SlideshowAuto, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className='slideshow'>

            {/*Preload images in a hidden div to disable flickering*/}
            <div className='hidden'>
                <img src={Images[0].img} alt='slideshow-img' />
                <img src={Images[1].img} alt='slideshow-img' />
                <img src={Images[2].img} alt='slideshow-img' />
            </div>
            
            <TransitionGroup className='transition-wrapper-img'>
                <CSSTransition className='slideshow-img' key={Images[curImg].img} timeout={1}>
                    <img src={Images[curImg].img} alt='slideshow-img' />
                </CSSTransition>
            </TransitionGroup>

            <TransitionGroup className='transition-wrapper-text'>
                <CSSTransition className='slideshow-img-text' key={Images[curImg].text} timeout={1}>
                    <p>{Images[curImg].text}</p>
                </CSSTransition>
            </TransitionGroup>

            <IconContext.Provider value={{color: "grey", size: "2em"}}>
                <button className='btn-next' onClick={SlideshowNext}>
                    <FiChevronRight />
                </button>
                <button className='btn-prev' onClick={SlideshowPrev}>
                    <FiChevronLeft />
                </button>
            </IconContext.Provider>

        </span>
    );
}

export default Slideshow;
