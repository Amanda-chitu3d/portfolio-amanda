import React from 'react';
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-blue-900">
            <div className="navbar container mx-auto flex justify-between">
                <nav className="flex">
                <NavLink to="/" exact 
                activeClassName="text-white"
                className="inline-flex items-center py-4 px-3 mr-6 text-blue-100 hover:text-blue-300 text-4xl font-bold cursive tracking-widest"
                >FalconWin</NavLink>
                <NavLink to="/" exact 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-blue-300"
                activeClassName="text-blue-100 bg-blue-700"
                >Home</NavLink>
                {/* <NavLink to="/post" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-blue-300"
                activeClassName="text-blue-100 bg-blue-700"
                >Post</NavLink> */}
                <NavLink to="/project" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-blue-300"
                activeClassName="text-blue-100 bg-blue-700"
                >Projects</NavLink>
                <NavLink to="/feature" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-blue-300"
                activeClassName="text-blue-100 bg-blue-700"
                >Features</NavLink>
                <NavLink to="/docs" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-blue-300"
                activeClassName="text-blue-100 bg-blue-700"
                >Docs</NavLink>
                <NavLink to="/about" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-blue-300"
                activeClassName="text-blue-100 bg-blue-700"
                >About Me</NavLink>

                </nav>
                
            </div>
        </header>
    )
}
