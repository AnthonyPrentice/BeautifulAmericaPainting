import React from 'react'
import "../css/EstimateImage.css"
import EstimateImg from '../img/EstimateImage/pexels-mart-production-resized.png'

function EstimateImage(){
    return (
        <div className='estimate-img-wrapper'>
            <img src={EstimateImg} className='estimate-img' alt='estimate-img' />
            <p className='estimate-img-description'>
                Beautiful America Painting
            </p>
        </div>
    );
}

export default EstimateImage;
