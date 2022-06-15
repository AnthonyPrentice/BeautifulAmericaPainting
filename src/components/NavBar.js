import React from 'react'
import { NavLink } from "react-router-dom"

import "../styles/NavBar.css"
import Logo from "../img/Logo.png"

function NavBar(){
    return (
        <div className="navbar">
            <img src={Logo} className="logo" width="150" height="75"/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Gallery">Gallery</NavLink>
            <NavLink to="/Estimate">Estimate</NavLink>
        </div>
    );
}

export default NavBar;
