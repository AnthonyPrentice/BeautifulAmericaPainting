import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import "../styles/NavBar.css"
import Logo from "../img/Logo.png"

function NavBar() {
    //dynamic components: bars-icon, exit-icon, bars-menu
    const [BarsMenu, setBarsMenu] = useState(() => {
        return {
            barsIcon: "bars-icon",
            exitIcon: "hidden",
            barsMenu: "hidden"
        };
    });

    function BarsMenuClicked() {
        if(BarsMenu.barsMenu === "hidden") {
            setBarsMenu(prevBarsMenu => ({
                ...prevBarsMenu,
                barsIcon: "hidden",
                exitIcon: "exit-icon",
                barsMenu: "bars-menu"
            }));
        } else{
            setBarsMenu(prevBarsMenu => ({
                ...prevBarsMenu,
                barsIcon: "bars-icon",
                exitIcon: "hidden",
                barsMenu: "hidden"
            }));
        }
    }

    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <img src={Logo} className="logo" width="150" height="75" alt="Logo"/>
                <NavLink className="navbar-links" to="/">Home</NavLink>
                <NavLink className="navbar-links" to="/Services">Services</NavLink>
                <NavLink className="navbar-links" to="/About">About</NavLink>
                <NavLink className="navbar-links" to="/Gallery">Gallery</NavLink>
                <NavLink className="navbar-links" to="/Estimate">Estimate</NavLink>
                <IconContext.Provider value={{color: "black", size: "2em"}}>
                    <button className={BarsMenu.barsIcon} onClick={BarsMenuClicked}><FiMenu /></button>
                    <button className={BarsMenu.exitIcon} onClick={BarsMenuClicked}><FiX /></button> 
                </IconContext.Provider>
            </div>
            <div className={BarsMenu.barsMenu}>
                <NavLink className="bars-links" to="/">Home</NavLink>
                <NavLink className="bars-links" to="/Services">Services</NavLink>
                <NavLink className="bars-links" to="/About">About</NavLink>
                <NavLink className="bars-links" to="/Gallery">Gallery</NavLink>
                <NavLink className="bars-links" to="/Estimate">Estimate</NavLink>                
            </div>
        </div>
    );
}

export default NavBar;
