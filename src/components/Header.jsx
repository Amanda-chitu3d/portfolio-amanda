import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
           <div className="header-wraper">
               <div className="main-info">
                   <h1 >Website and Mobile App Develop</h1>
                   <p>
                   Our business is to deliver high quality IT solutions and maintain a company’s IT infrastructure.
                   </p>
                   <Link to="/services" className="btn-main-offer text-white border border-warning" 
                   > Read More</Link>
               </div>
           </div>
        </div>
    )
}

export default Header
