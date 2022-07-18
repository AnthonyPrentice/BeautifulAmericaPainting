import React, { useState } from 'react'
import '../css/EstimateContent.css'

function EstimateContent(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='estimate-content-wrapper'>
            <div className='estimate-description-wrapper'>
                <p className='estimate-description-title'>
                    Free Quote
                </p>
                <p className='estimate-description'>
                    Request now for a free estimate and we'll get back to you 
                    within 24 hours. You can also call 602-228-1729 for more 
                    information. Please indicate which services you need and 
                    sq/ft of your property. Thank you.
                </p>
            </div>
            <form className='estimate-form'>
                <label className='form-item'>Name:</label>
                <input 
                    className='form-item'
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <label className='form-item'>Email:</label>
                <input 
                    className='form-item'
                    type='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <label className='form-item'>Message:</label>
                <textarea
                    className='form-item'
                    type='text'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                ></textarea>
                <button className='form-item'>Submit</button>
            </form>
        </div>
    );
}

export default EstimateContent;
