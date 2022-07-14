import React from 'react'
import '../css/AboutContent.css'

function AboutContent(){
    return (
        <div className='about-content-wrapper'>
            <span className='about-content-title'>About Us</span>
            <span className='about-content-paragraph'>
                We are a local, family-owned business based in Gilbert, Arizona. 
                We are passionate on providing families and commercial businesses
                with high quality services. We believe a beautiful home not only impacts 
                the lives of home owners, but also the community around them.
                With us, you are guaranteed excellent service, resilient products, 
                and efficient use of your time.
            </span>

            <span className='about-content-title'>Contact</span>
            <span className='about-content-paragraph'>
                <p className='about-list-title'>Phone</p>
                    <p className='about-list-item'>602-228-1729</p>
                <p className='about-list-title'>Email</p>
                    <p className='about-list-item'>christhianvasquez@yahoo.com</p>
                <p className='about-list-title'>ROC#</p>
                    <p className='about-list-item'>318539</p>
                <p className='about-list-title'>Business Hours</p>
                    <p className='about-list-item'>Monday - Friday</p>
                    <p className='about-list-item'>9:00AM - 5:00Pm</p>
            </span>

            <span className='about-content-title'>Why Us</span>
            <span className='about-content-paragraph'>
                    <p className='about-list-title'>HOA Approved</p> 
                    <p className='about-list-title'>Insurance Approved</p>
                    <p className='about-list-title'>Background Checks On All Employees</p>
                    <p className='about-list-title'>E-Verify On All Employees</p>
                    <p className='about-list-title'>Non-Smokers</p>
                    <p className='about-list-title'>Drug Free</p>
            </span> 

            <span className='about-content-title'>Supported Locations</span>
            <span className='about-content-paragraph'>
                    <p className='about-list-title'>Vally Wide:</p> 
                    <p className='about-list-item'>Ahwatukee</p>
                    <p className='about-list-item'>Anthem</p>
                    <p className='about-list-item'>Avondale</p>
                    <p className='about-list-item'>Carefree</p>
                    <p className='about-list-item'>Cave Creek</p>
                    <p className='about-list-item'>Chandler</p>
                    <p className='about-list-item'>Fountain Hills</p>
                    <p className='about-list-item'>Gilbert</p>
                    <p className='about-list-item'>Glendale</p>
                    <p className='about-list-item'>Goodyear</p>
                    <p className='about-list-item'>Laveen</p>
                    <p className='about-list-item'>Litchfield Park</p>
                    <p className='about-list-item'>Mesa</p>
                    <p className='about-list-item'>Paradise Valley</p>
                    <p className='about-list-item'>Peoria</p>
                    <p className='about-list-item'>Phoenix</p>
                    <p className='about-list-item'>Queen Creek</p>
                    <p className='about-list-item'>San Tan Valley</p>
                    <p className='about-list-item'>Scottsdale</p>
                    <p className='about-list-item'>Surprise</p>
                    <p className='about-list-item'>Tempe</p>
            </span>
        </div>
    );
}

export default AboutContent;
