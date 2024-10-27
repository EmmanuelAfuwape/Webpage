import React from 'react';
import  "./pag.css";
import Logo from "./images/pic3.png";

const Page = ({ setCurrentPage }) => {
    return (
            <nav className="navbar">
            <img src= {Logo} alt ="Logo" className ='logo'/>
                <ul>
                    <li>
                        <a href="#" onClick={() => setCurrentPage('dashboard')}>Dashbord</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setCurrentPage('about')}>About</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setCurrentPage('help')}>Help</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setCurrentPage('support')}>Support</a>
                    </li>
                </ul>
            </nav>
    
    )
};

export default Page;