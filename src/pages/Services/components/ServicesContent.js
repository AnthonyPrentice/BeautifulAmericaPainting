import React from 'react'
import '../css/ServicesContent.css'
import HeadImg from '../img/ServicesContent/pexels-ksenia-chernaya-2-resized.png'
import ServicesData from './ServicesData'

function ServicesContent(){
    return (
        <div className='services-content-wrapper'>

            <div className='head-img-wrapper'>
                <img src={HeadImg} className='head-img' alt='head-img' />
            </div>

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
