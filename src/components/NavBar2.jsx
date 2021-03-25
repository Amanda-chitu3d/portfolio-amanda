import React from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
import '../css/style.css';
import '../css/utilities.css';

function NavBar2() {
    return (
        <div>
             <header className="container mx-auto flex justify-between">
             <nav className="navbar">
            {/* <div className="container mx-auto flex justify-between"> */}
                
                <NavLink to="/" exact 
                activeClassName="text-white"
                className="logo"
                >Amanda</NavLink>
                <NavLink to="/post" 
                className="navbarInactive"
                activeClassName="navbarActive"
                >Post</NavLink>
                <NavLink to="/project" 
                className="navbarInactive"
                activeClassName="navbarActive"
                >Projects</NavLink>
                <NavLink to="/feature" 
                className="navbarInactive"
                activeClassName="navbarActive"
                >Features</NavLink>
                <NavLink to="/docs" 
                className="navbarInactive"
                activeClassName="navbarActive"
                >Docs</NavLink>
                <NavLink to="/about" 
                className="navbarInactive"
                activeClassName="navbarActive"
                >About Me</NavLink>
                {/* </div> */}
                </nav>

                
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
                
            
        </header>
            
        </div>
    )
}

export default NavBar2
