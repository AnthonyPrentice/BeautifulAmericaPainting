import React from 'react'
import "../css/AboutImage.css"
import AboutImg from '../img/AboutImage/pexels-joão-jesus-resized.png'

function AboutImage(){
    return (
        <div className='about-img-wrapper'>
            <img src={AboutImg} className='about-img' alt='about-img' />
            <p className='about-img-description'>
                Beautiful America Painting
            </p>
        </div>
    );
}

export default AboutImage;
