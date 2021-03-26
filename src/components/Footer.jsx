import React from 'react';
import {Link} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

const Footer = () => {
    return ( 
            <footer class="footer grid bg-dark py-5">
            <div className="container grid grid-3">
                <div>
                <p>Copyright &copy; 2021 Amanda Portfolio. All Rights Reserved.
                </p>
                </div>

            {/* <div className="flex mx-auto justify-between">
                <Link to="/static/term-of-service" className="inline-flex items-center py-1 px-1 mr-1 rounded text-red-200 hover:text-green-800"
                activeClassName="text-red-100 bg-red-700">Term Of Service</Link>
                <Link to="/static/policy" className="inline-flex items-center py-1 px-1 mr-1 rounded text-red-200 hover:text-green-800" activeClassName="text-red-100 bg-red-700">Privacy Policy</Link>
                <Link to="/static/feedform" className="inline-flex items-center py-1 px-1 mr-1 rounded text-red-200 hover:text-green-800" activeClassName="text-red-100 bg-red-700">Feed Form</Link>
                <Link to="/static/faq" className="inline-flex items-center py-1 px-1 mr-1 rounded text-red-200 hover:text-green-800" activeClassName="text-red-100 bg-red-700">FAQs</Link>
            </div> */}
       
                    
            <div className="footerTerm flex">
            <Link to="/static/term-of-service"> Term Of Service </Link>
            <Link to="/static/policy"> Private Policy </Link>
            <Link to="/static/feedform"> Feed Form </Link>
            <Link to="/static/faq">FAQs </Link>
            </div>

            <div className="download">
                <p>Scan QR code to download App Now !</p>
                <div className="inline-flex py-1 px-3 my-2">
                    <SocialIcon url="https://twitter.com/mimifeelee?lang=en" 
                    className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.youtube.com/channel/UCWDG36a7Q9pYcTQD7Uv_Bdg" 
                    className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/amanda2007/" 
                    className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://github.com/Amanda-chitu3d" 
                    className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    </div>
             </div>
            
            
            {/* <div className="social">
            <Link to="/"> <i class="fab fa-github fa-2x"></i> </Link>
            <Link to="/"> <i class="fab fa-twitter fa-2x"></i> </Link>
            <Link to="/"> <i class="fab fa-instagram fa-2x"></i> </Link>
            <Link to="/"> <i class="fab fa-facebook fa-2x"></i> </Link>
        
            </div> */}
            </div>
            </footer>
           
       
       
        
     );
}
 
export default Footer;