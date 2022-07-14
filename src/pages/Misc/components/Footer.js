import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from "../img/Logo.png"
import "../css/Footer.css"

function Footer(){
    return (
        <div className="footer-wrapper">
            <div className="pre-footer">

                <div className="left-contents">
                    <span className="contact">
                        <h3 className='pre-footer-content'>Contact</h3>
                        <p className='pre-footer-content'>602-228-1729</p>
                        <p className='pre-footer-content'>christhianvasquez@yahoo.com</p>
                    </span>
                    <span className="services">
                        <NavLink to='/Services' className='pre-footer-link'>
                            <h3 className='pre-footer-content'>Services</h3>
                            <ul className='pre-footer-content pre-footer-list'>
                                <li>Exterior/Interior Painting</li>
                                <li>Drywall/Stucco Repair</li>
                                <li>Epoxy</li>
                            </ul>
                        </NavLink>
                    </span> 
                </div>

                <div className="center-contents">
                    <NavLink to='/' className='center-contents pre-footer-link'>
                        <img src={Logo} className="footer-logo" width="150" height="75" alt="Logo"/> 
                        <p className="slogan">Making America Beautiful One House At A Time</p>
                    </NavLink>
                </div>

                <div className="right-contents">
                    <span className="estimate">
                        <h3 className='pre-footer-content'>Estimate</h3>
                        <NavLink to="/Estimate" className='pre-footer-link'>
                            <p className='pre-footer-content'>Schedule for a free estimate today!</p>
                        </NavLink>
                    </span>
                    <span className="business-hours">
                        <h3 className='pre-footer-content'>Business Hours</h3>
                        <p className='pre-footer-content'>Monday - Friday</p>
                        <p className='pre-footer-content'>9:00AM - 5:00PM</p>
                    </span>
                </div>
            </div>
            <div className="footer">
                <span className="copyright">Copyright All Rights Reserved © 2022. Beautiful America Painting</span>
            </div>
        </div>
    );
}

export default Footer;
