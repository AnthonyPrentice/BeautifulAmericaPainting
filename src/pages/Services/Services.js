import React from 'react'
import ServicesContent from './components/ServicesContent'
import Strip from '../Misc/components/Strip'
import HeadImage from './components/HeadImage'

function Services(){
    return (
        <div className='services-page'>
            <HeadImage />
            <ServicesContent />
            <Strip text={1} />
        </div>
    );
}

export default Services;
