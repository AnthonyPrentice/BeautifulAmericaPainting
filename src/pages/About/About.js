import React from 'react'
import './css/About.css'
import AboutImage from './components/AboutImage'
import AboutContent from './components/AboutContent'

function About(){
    return (
        <div className='about-page'>
            <AboutImage />
            <AboutContent />
        </div>
    )
}

export default About;
