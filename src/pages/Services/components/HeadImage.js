import React from 'react'
import "../css/HeadImage.css"
import HeadImg from '../img/ServicesContent/pexels-tima-miroshnichenko-resized.png'

function HeadImage(){
    return (
        <div className='head-img-wrapper'>
            <img src={HeadImg} className='head-img' alt='head-img' />
            <p className='head-img-description'>
                We offer a variety of services to meet the needs of any client. 
            </p>
        </div>
    );
}

export default HeadImage;
