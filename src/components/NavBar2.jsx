import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar2() {
    return (
        <div>
             <nav className="navbar mx-auto flex justify-between">
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
                </nav>
           
            
        </div>
    )
}

export default NavBar2
