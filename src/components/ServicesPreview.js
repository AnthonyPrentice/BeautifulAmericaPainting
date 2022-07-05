import React from 'react'
import ReactDOM from "react-dom";
import './css/ServicesPreview.css'
import HouseImg from './img/ServicesPreview/pexels-binyamin-mellish-resized.png'
import BuildingImg from './img/ServicesPreview/pexels-pixabay-resized.png'

function ServicesPreview(){
    return (
            <div className='services-preview-wrapper'>
                <div className='services-preview-item'>
                    <div className='services-preview-img-wrapper'>
                        <img src={HouseImg} className='services-preview-img' />
                    </div>
                </div>
                <div className='services-preview-item'>
                    <div className='services-preview-img-wrapper'>
                        <img src={BuildingImg} className='services-preview-img' />
                    </div>
                </div>
            </div>
    );
}

export default ServicesPreview;
