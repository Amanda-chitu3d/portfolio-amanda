import React from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
import logo from "../image/logo-pen.png";

import '../css/style.css';
import '../css/utilities.css';

function NavBar2() {
    return (
        <div>
             <nav className="navbar mx-auto flex justify-between">
            {/* <div className="container mx-auto flex justify-between"> */}
            <NavLink className="navbar-brand" to="/"> <img className="logo" src={logo} alt="Navbar"/></NavLink>
                <NavLink to="/" exact
                >Home</NavLink>
                <NavLink to="/services" 
                >Services</NavLink>
                <NavLink to="/project" 
                >Projects</NavLink>
                <NavLink to="/feature" 
                >Features</NavLink>
                <NavLink to="/docs" 
                >Docs</NavLink>
                <NavLink to="/about" 
                >About Me</NavLink>
               
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/mimifeelee?lang=en" 
                    className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.youtube.com/channel/UCWDG36a7Q9pYcTQD7Uv_Bdg" 
                    className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/amanda2007/" 
                    className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://github.com/Amanda-chitu3d" 
                    className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    
                </div>
                </nav>
            
        </div>
    )
}

export default NavBar2
