import React from 'react'
import { NavLink } from "react-router-dom"

import "../styles/NavBar.css"
import Logo from "../img/Logo.png"

function NavBar(){
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <img src={Logo} className="logo" width="150" height="75"/>
                <NavLink className="navbar-links" to="/">Home</NavLink>
                <NavLink className="navbar-links" to="/Services">Services</NavLink>
                <NavLink className="navbar-links" to="/About">About</NavLink>
                <NavLink className="navbar-links" to="/Gallery">Gallery</NavLink>
                <NavLink className="navbar-links" to="/Estimate">Estimate</NavLink>
            </div>
            <div className="burger-menu">
                
            </div>
        </div>
    );
}

export default NavBar;
