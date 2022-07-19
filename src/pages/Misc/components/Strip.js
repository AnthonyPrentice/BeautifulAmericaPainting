import React from 'react'
import '../css/Strip.css'

function Strip({text}){
    const StripData = [
        'Services Provided Valley Wide, Arizona',
        'Call Now for a Free Estimate'
    ];

    return (
        <span className='strip'>
            <p className='strip-text'>{StripData[text]}</p>
        </span>
    );
}

export default Strip;
