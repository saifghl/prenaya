import React from 'react';
import './Add Services.css';
import { FaCloudUploadAlt} from 'react-icons/fa';

const AddServices = ({ setActivePage }) => {
    return (
        <main className="main-content">
            <header className="page-header">
                <div className="header-left">
                    <h1 className="page-title">Add /Edit Services</h1>
                    <p className="page-subtitle">Create New Service Offering for the website.</p>
                </div>
            </header>

            <div className="add-service-card">
                <div className="form-group row-group">
                    <div className="input-split">
                        <label className="input-label">Service Name</label>
                        <input type="text" placeholder="e.g. Cloud Migration" className="text-input" />
                    </div>
                    <div className="status-split">
                        <label className="input-label">Status</label>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label className="input-label">Short Description</label>
                    <textarea
                        className="text-area"
                        placeholder="Briefly describe the service offering..."
                        rows="4"
                    ></textarea>
                </div>

                <div className="form-group">
                    <div className="file-upload-container">
                        <div className="upload-box">
                            <div className="upload-icon-wrapper">
                                <FaCloudUploadAlt className="upload-icon" />
                            </div>
                            <p className="upload-text">Click to upload or drag and drop</p>
                            <p className="upload-subtext">SVG, PNG, JPG (MAX. 2MB)</p>
                            <input type="file" className="file-input-hidden" />
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button className="btn cancel" onClick={() => setActivePage('services')}>Cancel</button>
                    <button className="btn save">
                        Save Changes
                    </button>
                </div>
            </div>
        </main>
    );
};

export default AddServices;
