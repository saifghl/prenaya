import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FaFileImage, FaCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './AddWhoWeAreContent.css';

const AddWhoWeAreContent = () => {
    const navigate = useNavigate();
    const [headline, setHeadline] = useState("Innovating the Future of Tech Solutions");
    const [subtext, setSubtext] = useState("We deliver cutting-edge software solutions designed to propel your business forward. Our team of experts is dedicated to transforming your digital presence with scalable, secure, and intuitive technology.");

    const handleCancel = () => {
        navigate('/admin/content-management/who-we-are');
    };

    const handleSave = () => {
        // Logic to save content would goes here
        console.log("Saving Who We Are content:", { headline, subtext });
        navigate('/admin/content-management/who-we-are');
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
                        <h2>Who we are Content</h2>
                        <span className="status-badge live">
                            <FaCircle size={8} /> Live
                        </span>
                    </div>
                    <p className="card-subtitle">Main information about company</p>

                    <div className="form-group">
                        <label>Headline</label>
                        <input
                            type="text"
                            value={headline}
                            onChange={(e) => setHeadline(e.target.value)}
                        />
                        <span className="helper-text">Recommended length: 30-60 characters</span>
                    </div>

                    <div className="form-group">
                        <label>Introductory Subtext</label>
                        <textarea
                            rows="4"
                            value={subtext}
                            onChange={(e) => setSubtext(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="upload-area">
                        <div className="upload-content">
                            <div className="file-icon">
                                <FaFileImage />
                            </div>
                            <h3>Click to upload or drag and drop</h3>
                            <p>SVG, PNG, JPG (MAX. 2MB)</p>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button className="btn cancel-btn" onClick={handleCancel}>Cancel</button>
                        <button className="btn save-btn" onClick={handleSave}>Save Home Content</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddWhoWeAreContent;
