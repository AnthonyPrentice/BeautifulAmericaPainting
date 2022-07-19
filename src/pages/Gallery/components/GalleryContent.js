import React from 'react'
import '../css/GalleryContent.css'
import GalleryData from './GalleryData'

function GalleryContent(){
    return (
        <div className='gallery-content-wrapper'>
            
            {GalleryData.map(item => {
                return (
                    <div className='gallery-content-img-wrapper'>
                        <img src={item.img} className='gallery-content-img' alt='gallery-content-img' />
                    </div>
                )
            })} 

        </div>
    );
}

export default GalleryContent;
