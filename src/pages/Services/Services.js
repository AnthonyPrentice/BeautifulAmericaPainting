import React from 'react'
import ServicesContent from './components/ServicesContent'
import Strip from '../Home/components/Strip'
import './css/Services.css'

function Services(){
    return (
        <div className='services-page'>
            <ServicesContent />
            <Strip text={1} />
        </div>
    );
}

export default Services;
