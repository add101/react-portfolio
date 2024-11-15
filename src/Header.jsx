import React, { useState } from 'react';
import './header.css';
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
            <div id="myNav" className={`overlay ${isNavOpen ? 'open' : ''}`} style={{ width: isNavOpen ? '25%' : '0' }}>
                <nav>
                    <ul>
                    <li><Link to="/" onClick={() => { closeNav(); scrollToTop(); }}>Home</Link></li>
                    <li><Link to="/gallery" onClick={() => { closeNav(); scrollToTop(); }} >Projects</Link></li>
                    {/* <li><a href="#contact" onClick={closeNav}>Contact</a></li> */}
                    </ul>
                </nav>        
            </div>
        
            {/* Navigation menu icon*/}
            <button id="menuButton" onClick={toggleNav}>&#9776;</button>
                     

        </header>
    );
}

export default Header;
