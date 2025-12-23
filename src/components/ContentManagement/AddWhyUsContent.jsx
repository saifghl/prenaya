import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FaFileImage, FaCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './AddWhyUsContent.css';

const AddWhyUsContent = () => {
    const navigate = useNavigate();
    const [benefit, setBenefit] = useState("Over 15 years of industry experience delivering top-tier software solutions to Fortune 500 companies.");
    const [description, setDescription] = useState("24/7 dedicated support team ensuring your operations never skip a beat.");

    const handleCancel = () => {
        navigate('/admin/content-management/why-us');
    };

    const handleSave = () => {
        // Logic to save content would go here
        console.log("Saving Why Us content:", { benefit, description });
        navigate('/admin/content-management/why-us');
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
                        <h2>Why Choose Us Content</h2>
                        <span className="status-badge live">
                            <FaCircle size={8} /> Live
                        </span>
                    </div>
                    <p className="card-subtitle">Value propositions and key benefits</p>

                    <div className="form-row">
                        <div className="form-group half-width">
                            <label>Benefit 1: Expertise</label>
                            <textarea
                                rows="3"
                                value={benefit}
                                onChange={(e) => setBenefit(e.target.value)}
                                className="benefit-input"
                            ></textarea>
                            <span className="helper-text">10 / 150 chars</span>
                        </div>

                        <div className="form-group half-width">
                            <label>Description</label>
                            <textarea
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                            <span className="helper-text">72 / 150 chars</span>
                        </div>
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
                        <button className="btn save-btn" onClick={handleSave}>Save benefits</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddWhyUsContent;
