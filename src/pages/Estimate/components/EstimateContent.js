import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../css/EstimateContent.css'

function EstimateContent(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const form = useRef();

    //taken from docs if need context
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_xkw6cvz', 'template_yfetzgl', form.current, 'WC8j6zWaxvl7LgMx9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setName('');
        setEmail('');
        setMessage('');
        setConfirmation('Your request has been sumbitted.');
    }

    return (
        <div className='estimate-content-wrapper'>
            <div className='estimate-content'>
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
                <form onSubmit={sendEmail} className='estimate-form' ref={form}>
                    <label className='form-item'>Name:</label>
                    <input 
                        className='form-item'
                        name='name'
                        type='text'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />

                    <label className='form-item'>Email:</label>
                    <input 
                        className='form-item'
                        name='email'
                        type='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label className='form-item'>Message:</label>
                    <textarea
                        className='form-item'
                        name='message'
                        type='text'
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        rows='5'
                        required
                    ></textarea>
                    <button 
                        type='submit' 
                        className='form-item form-submit'>
                            Submit
                    </button>
                    <p className='form-confirmation'>{confirmation}</p>
                </form>
            </div>
        </div>
    );
}

export default EstimateContent;
