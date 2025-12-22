import React from 'react';
import './Navbar.css';
import logo from '../Footer/WhoAreWe/assets/images/logo.png'; // Implementing path to existing logo

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Prenaya" />
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#who-are-we">Who Are We</a></li>
                <li><a href="#what-we-provide">What We Provide</a></li>
                <li><a href="#why-us">Why US</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-actions">
                <button className="login-btn">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
