import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'; // Reusing Home.css for consistent styling

const WhoWeAre = () => {
    const navigate = useNavigate();
    const [sections, setSections] = useState([
        { id: 1, name: "About Hero Section", preview: "Who We Are & What We Do", position: 1, status: true },
        { id: 2, name: "Company Overview", preview: "Modern IT Solutions Provider", position: 2, status: true },
        { id: 3, name: "Mission & Vision", preview: "Our Purpose & Direction", position: 3, status: true },
        { id: 4, name: "Core Values", preview: "Trust, Innovation, Excellence", position: 4, status: true },
    ]);

    const toggleStatus = (id) => {
        setSections(sections.map(section =>
            section.id === id ? { ...section, status: !section.status } : section
        ));
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="main-content">
                <div className="header-section">
                    <h1>Website Content Management</h1>
                    <p>Update and manage public-facing website text content. Changes made here are reflected immediately on the production site after saving.</p>
                </div>

                <div className="tabs">
                    <button className="tab" onClick={() => navigate('/admin/content-management')}>Home</button>
                    <button className="tab active">Who We Are</button>
                    <button className="tab" onClick={() => navigate('/admin/content-management/why-us')}>Why Us</button>
                    <button className="tab" onClick={() => navigate('/admin/content-management/contact')}>Contact</button>
                </div>

                <div className="content-table-container">
                    <div className="search-bar">
                        <input type="text" placeholder="Search By Name Or Description" />
                    </div>

                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Section name</th>
                                <th>Content Preview</th>
                                <th>Position</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sections.map((section) => (
                                <tr key={section.id}>
                                    <td>{section.name}</td>
                                    <td>{section.preview}</td>
                                    <td>{section.position}</td>
                                    <td>
                                        <div className="toggle-switch" onClick={() => toggleStatus(section.id)}>
                                            <div className={`switch ${section.status ? 'on' : 'off'}`}></div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="actions">
                                            <button className="icon-btn edit" onClick={() => navigate('/admin/content-management/who-we-are/add')}><FaEdit /></button>
                                            <button className="icon-btn delete"><FaTrash /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="add-btn-container">
                        <button className="add-new-btn" onClick={() => navigate('/admin/content-management/who-we-are/add')}>+ Add New</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
