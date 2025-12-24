import React from 'react';
import './Service Management.css';
import { FaSearch, FaPlus, FaPen, FaTrash } from 'react-icons/fa';

const ServiceManagement = ({ setActivePage }) => {
    return (
        <main className="main-content">
            <header className="page-header">
                <div className="header-left">
                    <h1 className="page-title">Service Management</h1>
                    <p className="page-subtitle">Manage Your Service offering, Descriptions ,and visibility.</p>
                </div>
                <button className="add-btn" onClick={() => setActivePage('add-service')}>
                    <FaPlus className="btn-icon" /> Add New Service
                </button>
            </header>

            <div className="filters-section">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search By Name Or Description" className="search-input" />
                </div>
                <div className="filter-dropdown">
                    <select className="status-select">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>

            <div className="table-container">
                <div className="table-responsive">
                    <table className="service-table">
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Service Name</th>
                                <th style={{ width: '45%' }}>Description</th>
                                <th style={{ width: '15%' }}>Status</th>
                                <th style={{ width: '15%' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="service-name">Microsoft Information Protection</td>
                                <td className="service-desc">Microsoft Information Protection (MIP) helps organizations discover, classify, label, and protect sensitive data across emails, documents, and cloud services</td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                                <td>
                                    <div className="actions">
                                        <button className="icon-btn edit"><FaPen /></button>
                                        <button className="icon-btn delete"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="service-name">Advanced Threat Protection</td>
                                <td className="service-desc">Advanced Threat Protection (ATP) provides proactive security by detecting, investigating, and responding to advanced cyber threats</td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                                <td>
                                    <div className="actions">
                                        <button className="icon-btn edit"><FaPen /></button>
                                        <button className="icon-btn delete"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="service-name">Data Loss Prevention</td>
                                <td className="service-desc">Data Loss Prevention (DLP) helps organizations prevent sensitive data from being leaked, shared, or misused by monitoring, detecting, and controlling</td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                                <td>
                                    <div className="actions">
                                        <button className="icon-btn edit"><FaPen /></button>
                                        <button className="icon-btn delete"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="service-name">Privileged Identity Management</td>
                                <td className="service-desc">Privileged Identity Management (PIM) helps organizations control, monitor, and secure privileged access by granting just-in-time permissions</td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                                <td>
                                    <div className="actions">
                                        <button className="icon-btn edit"><FaPen /></button>
                                        <button className="icon-btn delete"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="service-name">Copilot Enablement</td>
                                <td className="service-desc">Copilot Enablement helps organizations deploy, configure, and adopt Microsoft Copilot effectively,</td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                                <td>
                                    <div className="actions">
                                        <button className="icon-btn edit"><FaPen /></button>
                                        <button className="icon-btn delete"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default ServiceManagement;
