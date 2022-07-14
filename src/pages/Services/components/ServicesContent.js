import React from 'react'
import { NavLink } from "react-router-dom"
import '../css/ServicesContent.css'
import ServicesData from './ServicesData'

function ServicesContent(){
    return (
        <div className='services-content-wrapper'>
            {ServicesData.map(item => {
                return (
                    <div className='services-content-item'>
                        <div className='services-content-img-wrapper'>
                            <img src={item.img} className='services-content-img' alt='services-content-img' />
                        </div>
                        <p className='services-content-title'>
                            {item.title}
                        </p>
                        <p className='services-content-description'>
                            {item.description}
                        </p>
                        <NavLink to='/Estimate' className='services-content-btn'>
                            <p className='services-content-btn-text'>Schedule Now</p>
                        </NavLink>
                        {item.src==='' ? '': 
                            <a href={item.src} className='services-content-src'>
                                Modified From |  
                                <a href='https://creativecommons.org/licenses/by/2.0/' className='license'>
                                    License
                                </a>
                            </a>
                        }
                    </div>           
                )
            })} 
        </div>
    );
}

export default ServicesContent;
