import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

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

    const closeNav = () => {
        setIsNavOpen(false);
    }; 

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling behavior
        });
    };

    return (
        <header>
            {/* The overlay */}
            <div id="myNav" className={`overlay ${isNavOpen ? 'open' : ''}`} style={{ width: isNavOpen ? '350px' : '0' }}>

              
            
                {/* Overlay content */}
                {/* <div className="overlay-content">
                    <a href="#">Intro</a>
                    <a href="#">Gallery</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                   
                </div> */}

                <nav>
                    <ul>
                    <li><Link to="/" onClick={() => { closeNav(); scrollToTop(); }}>Home</Link></li>
                    <li><Link to="/gallery" onClick={() => { closeNav(); scrollToTop(); }} >Projects</Link></li>
                    <li><a href="#contact" onClick={closeNav}>Contact</a></li>
                    </ul>
                </nav>
        
            </div>
        
            {/* Navigation menu icon*/}
            <button id="menuButton" onClick={toggleNav}>&#9776;</button>
            <h1 id="heading" style={{ fontFamily: 'ubuntu' }}>Adrian Lamour - Web Portfolio</h1>
        </header>
    );
}

export default Header;
