import React from 'react';
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-green-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                <NavLink to="/" exact 
                activeClassName="text-white"
                className="inline-flex items-center py-4 px-3 mr-6 text-green-100 hover:text-blue-300 text-4xl font-bold cursive tracking-widest"
                >FalconWin</NavLink>
                <NavLink to="/" exact 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-green-200 hover:text-blue-300"
                activeClassName="text-green-100 bg-green-700"
                >Home</NavLink>
                {/* <NavLink to="/post" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-green-200 hover:text-blue-300"
                activeClassName="text-green-100 bg-green-700"
                >Post</NavLink> */}
                <NavLink to="/project" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-green-200 hover:text-blue-300"
                activeClassName="text-green-100 bg-green-700"
                >Projects</NavLink>
                <NavLink to="/feature" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-green-200 hover:text-blue-300"
                activeClassName="text-green-100 bg-green-700"
                >Features</NavLink>
                <NavLink to="/docs" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-green-200 hover:text-blue-300"
                activeClassName="text-green-100 bg-green-700"
                >Docs</NavLink>
                <NavLink to="/about" 
                className="inline-flex items-center py-3 px-3 mr-6 rounded text-green-200 hover:text-blue-300"
                activeClassName="text-green-100 bg-green-700"
                >About Me</NavLink>

                </nav>
                
            </div>
        </header>
    )
}