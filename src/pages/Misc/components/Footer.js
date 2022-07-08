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
                        <h3>Contact</h3>
                        <p>602-228-1729</p>
                    </span>
                    <span className="services">
                        <NavLink to='/Services'>
                            <h3>Services</h3>
                            <ul>
                                <li>Exterior/Interior Painting</li>
                                <li>Drywall/Stucco Repair</li>
                                <li>Epoxy</li>
                            </ul>
                        </NavLink>
                    </span> 
                </div>
                <div className="center-contents">
                    <NavLink to='/' className='center-contents'>
                        <img src={Logo} className="footer-logo" width="150" height="75" alt="Logo"/> 
                        <p className="slogan">Making America Beautiful One House At A Time</p>
                    </NavLink>
                </div>
                <div className="right-contents">
                    <span className="estimate">
                        <h3>Estimate</h3>
                        <NavLink to="/Estimate">
                            <p>Schedule for a free estimate today!</p>
                        </NavLink>
                    </span>
                    <span className="business-hours">
                        <h3>Business Hours</h3>
                        <p>Monday - Friday</p>
                        <p>9:00AM - 5:00PM</p>
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
