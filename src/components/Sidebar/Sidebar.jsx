import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaThLarge, FaServicestack, FaGlobe, FaUserFriends, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import './Sidebar.css';
//import logo from '../../logo.svg'; // Assuming logo is in src/logo.svg

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems = [
        {
            path: "/admin/dashboard",
            name: "Dashboard",
            icon: <FaThLarge />
        },
        {
            path: "/admin/services",
            name: "Services",
            icon: <FaServicestack />
        },
        {
            path: "/admin/content-management",
            name: "Website Content",
            icon: <FaGlobe />
        },
        {
            path: "/admin/leads",
            name: "Leads",
            icon: <FaUserFriends />
        }
    ];

    return (
        <>
            <div className={`sidebar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo-text">
                        <h2 style={{ color: '#005b96' }}>Prenaya</h2>
                    </div>
                </div>
                <div className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
                </div>
                <div className="sidebar-footer">
                    <div className="logout-btn">
                        <FaSignOutAlt />
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
