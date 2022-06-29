import React, { useState }from 'react'
import Images from './SlideshowData'
import '../../styles/Slideshow.css'

function Slideshow(){
    //state of current img
    //button to switch between img
    //perhaps a timer to automatically swtich between img
    /**
    return (
        <div className='slideshow'>
            {Images.map((img) => (
                <img key={img} src={img} className='slideshow-img' />
            ))}
        </div>
    );
    **/
    return (
        <span className='slideshow'>
                <img key={Images[0]} src={Images[0]} className='slideshow-img' />
        </span>
    );
}

export default Slideshow;
