import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FaCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './AddContactUsContent.css';

const AddContactUsContent = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState("At.ABC XYZ MAHARASHTRA");
    const [email, setEmail] = useState("abc@gmail.com");
    const [phone, setPhone] = useState("1234567890");
    const [heading, setHeading] = useState("Contact Us");
    const [introText, setIntroText] = useState("Here is contact details");
    const [mapLink, setMapLink] = useState("http://abc.com");

    const handleCancel = () => {
        navigate('/admin/content-management/contact');
    };

    const handleSave = () => {
        console.log("Saving Contact content:", { address, email, phone, heading, introText, mapLink });
        navigate('/admin/content-management/contact');
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="main-content">
                <div className="header-section flex-between">
                    <div>
                        <h1>Website Content Management</h1>
                        <p>Update and manage public-facing website text content. Changes made here are reflected immediately on the production site after saving.</p>
                    </div>
                    <button className="view-live-site-btn">View Live Site</button>
                </div>

                <div className="content-card">
                    <div className="card-header">
                        <h2>Contact Us</h2>
                        <span className="status-badge live">
                            <FaCircle size={8} /> Live
                        </span>
                    </div>
                    <p className="card-subtitle">Update Contact information displayed on contact us page</p>

                    <div className="form-group">
                        <label>Company address</label>
                        <textarea
                            rows="2"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-row">
                        <div className="form-group half-width">
                            <label>Email Address</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group half-width">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Page Heading</label>
                        <input
                            type="text"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Intro Text</label>
                        <textarea
                            rows="3"
                            value={introText}
                            onChange={(e) => setIntroText(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label>Google map link</label>
                        <input
                            type="text"
                            value={mapLink}
                            onChange={(e) => setMapLink(e.target.value)}
                        />
                    </div>

                    <div className="form-actions">
                        <button className="btn cancel-btn" onClick={handleCancel}>Cancel</button>
                        <button className="btn save-btn" onClick={handleSave}>Save Benefits</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddContactUsContent;
