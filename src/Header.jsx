import React, { useState } from 'react';
import './menu.css'

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNavWithDelay = () => {
        setTimeout(() => {
            openNav();
        }, 300);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            {/* The overlay */}
            <div id="myNav" className={`overlay ${isNavOpen ? 'open' : ''}`} style={{ width: isNavOpen ? '89%' : '0' }}>

              
            
                {/* Overlay content */}
                <div className="overlay-content">
                    <a href="#">Intro</a>
                    <a href="#">Gallery</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
        
            </div>
        
            {/* Navigation menu icon*/}
            <button id="menuButton" onClick={toggleNav}>&#9776;</button>
            <h1 id="heading">Adrian Lamour - Web Portfolio</h1>
        </header>
    );
}

export default Header;
