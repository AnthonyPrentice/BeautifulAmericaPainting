import React from 'react'
import ReactDOM from "react-dom";
import './css/Strip.css'

function Strip({text}){
    const StripData = [
        'Services Provided Valley Wide, Arizona',
    ];

    return (
        <span className='strip'>
            <p className='strip-text'>{StripData[text]}</p>
        </span>
    );
}

export default Strip;
