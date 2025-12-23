import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-content">
                    {/* Left Side: Contact Info & Map */}
                    <div className="contact-info-section">
                        <h2>Contact Information</h2>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h3>Email:</h3>
                                <p>contact@prenayashoftech.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhoneAlt className="info-icon" />
                            <div>
                                <h3>Phone:</h3>
                                <p>+91 9359830852 | +91 7588529311</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h3>Location:</h3>
                                <p>Yeola, Nashik, Maharashtra<br />Kopargaon, Ahmednagar, Maharashtra</p>
                            </div>
                        </div>

                        {/* Map Integration for Yeola */}
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14995.828236776963!2d74.47895475!3d20.0416965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5a478546123b%3A0xcb163351d5c2e55d!2sYeola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703318000000!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Yeola location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="contact-form-section">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your full name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" placeholder="you@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="+91 XXXXX XXXXX" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Type your message here..."></textarea>
                            </div>

                            <button type="submit" className="send-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
