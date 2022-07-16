import React from 'react'
import "../css/GalleryImage.css"
import GalleryImg from '../img/GalleryImage/pexels-sorapong-chaipanya-resized.png'

function GalleryImage(){
    return (
        <div className='gallery-img-wrapper'>
            <img src={GalleryImg} className='gallery-img' alt='gallery-img' />
            <p className='gallery-img-description'>
                Beautiful America Painting
            </p>
        </div>
    );
}

export default GalleryImage;
