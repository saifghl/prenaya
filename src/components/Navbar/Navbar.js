import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Footer/WhoAreWe/assets/images/logo.png'; // Implementing path to existing logo

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Prenaya" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><a href="#who-are-we">Who Are We</a></li>
                <li><Link to="/what-we-provide">What We Provide</Link></li>
                <li><Link to="/why-us">Why US</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-actions">
                <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
