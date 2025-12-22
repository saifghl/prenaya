import React from 'react';
import './Footer.css';
import logo from '../../logo.svg'; // Using existing logo.svg as placeholder for logo.png
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Description */}
        <div className="footer-col logo-section">
          <div className="footer-logo">
            <img src={logo} alt="Prenaya Logo" />
            <span className="logo-text">Prenaya</span>
          </div>
          <p className="footer-description">
            Delivering smart, reliable digital solutions that simplify processes and power business growth.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Who we Are</a></li>
            <li><a href="#">What We Provided</a></li>
            <li><a href="#">Why Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="footer-col contact-section">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <MdEmail className="contact-icon" />
            <div>
              <strong>Email:</strong>
              <p>contact@prenayasoftch.com</p>
            </div>
          </div>
          <div className="contact-item">
            <MdPhone className="contact-icon" />
            <div>
              <strong>Phone:</strong>
              <p>+91 9359830852 | +91 7588529311</p>
            </div>
          </div>
          <div className="contact-item">
            <MdLocationOn className="contact-icon" />
            <div>
              <strong>Location:</strong>
              <p>Yeola, Nashik, Maharashtra<br/>Kopargaon, Ahmednagar, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Proudly Powered by Prenaya Softech Solution. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
