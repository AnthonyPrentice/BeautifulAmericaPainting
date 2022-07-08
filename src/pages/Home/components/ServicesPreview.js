import React from 'react'
import { NavLink } from "react-router-dom"
import HouseImg from '../img/ServicesPreview/pexels-binyamin-mellish-resized.png'
import BuildingImg from '../img/ServicesPreview/pexels-pixabay-resized.png'
import '../css/ServicesPreview.css'

function ServicesPreview(){
    return (
            <div className='services-preview-wrapper'>
                <div className='services-preview-item'>
                    <div className='services-preview-img-wrapper'>
                        <img src={HouseImg} className='services-preview-img' alt='house-img' />
                        <p className='services-preview-title'>Interior & Exterior Painting</p>
                        <NavLink to='/Services'>
                            <p className='services-preview-btn'>More Info</p> 
                        </NavLink>
                    </div>
                </div>
                <div className='services-preview-item'>
                    <div className='services-preview-img-wrapper'>
                        <img src={BuildingImg} className='services-preview-img' alt='building-img' />
                        <p className='services-preview-title'>Commercial Painting</p>
                        <NavLink to='/Services'>
                            <p className='services-preview-btn'>More Info</p> 
                        </NavLink>
                    </div>
                </div>
            </div>
    );
}

export default ServicesPreview;
