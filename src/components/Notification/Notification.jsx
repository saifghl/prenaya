import React, { useState } from 'react';
import './Notification.css';
import { FaUserPlus, FaExclamationTriangle, FaHeadset, FaSync, FaPlus, FaBell, FaSearch } from 'react-icons/fa';

const Notification = ({ setActivePage }) => {
    const [activeTab, setActiveTab] = useState('all');

    const notifications = [
        {
            id: 1,
            type: 'lead',
            title: 'New Lead: Acme Corporation',
            description: 'A new enterprise inquiry has been submitted by John Doe (CTO). The client is interested in cloud migration and digital transformation services.',
            time: 'Just now',
            tags: ['Lead', 'High Value'],
            icon: <FaUserPlus />,
            borderColor: '#3182CE' // Blue
        },
        {
            id: 2,
            type: 'alert',
            title: 'High CPU Usage Warning',
            description: 'Server prod-db-01 is currently running at 92% CPU load. Immediate review of active processes is recommended to prevent performance issues.',
            time: '15 minutes ago',
            tags: ['System Alert', 'Critical'],
            icon: <FaExclamationTriangle />,
            borderColor: '#E53E3E' // Red
        },
        {
            id: 3,
            type: 'support',
            title: 'New Support Ticket #2891',
            description: 'A new support ticket has been raised by TechSolutions Ltd regarding API integration and response delays.',
            time: '1 hour ago',
            tags: ['Support'],
            icon: <FaHeadset />,
            borderColor: '#805AD5' // Purple
        },
        {
            id: 4,
            type: 'system',
            title: 'System Update Completed',
            description: 'Patch version v2.4.1 has been successfully deployed across all production servers with no reported issues.',
            time: 'Yesterday, 10:00 PM',
            tags: ['System'],
            icon: <FaSync />,
            borderColor: '#CBD5E0' // Gray
        },
        {
            id: 5,
            type: 'lead',
            title: 'New Lead: Startup Inc',
            description: 'A new newsletter subscription has been received from mike@startupinc.com.',
            time: 'Yesterday, 4:30 PM',
            tags: ['Lead'],
            icon: <FaUserPlus />,
            borderColor: '#CBD5E0' // Gray (or generic)
        }
    ];

    return (
        <main className="main-content">
            {/* Top Header */}
            <div className="top-header">
                <div className="search-container">
                    <input type="text" placeholder="Search By Name Or Description" className="top-search-input" />
                    <FaSearch className="search-icon-top" />
                </div>
                <div className="header-actions">
                    <div className="icon-wrapper-header">
                        <FaBell className="header-icon" />
                    </div>
                    <div className="user-profile">
                        <img src="https://ui-avatars.com/api/?name=Admin+User&background=random" alt="Profile" className="avatar" />
                    </div>
                </div>
            </div>

            <header className="page-header notification-header">
                <div className="header-left">
                    <h1 className="page-title">Notification Center</h1>
                    <p className="page-subtitle">Manage all your alerts, leads, and system updates in one place. Stay informed and take action instantly.</p>
                </div>
                <button className="add-btn" onClick={() => setActivePage && setActivePage('add-service')}>
                    <FaPlus className="btn-icon" /> Add New Service
                </button>
            </header>

            <div className="notification-controls">
                <div className="tabs">
                    <button
                        className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveTab('all')}
                    >All</button>
                    <button
                        className={`tab-btn ${activeTab === 'unread' ? 'active' : ''}`}
                        onClick={() => setActiveTab('unread')}
                    >Unread</button>
                    <button
                        className={`tab-btn ${activeTab === 'read' ? 'active' : ''}`}
                        onClick={() => setActiveTab('read')}
                    >Read</button>
                </div>
                <div className="filters">
                    <select className="filter-select">
                        <option>Filter by Type</option>
                        <option>Leads</option>
                        <option>Alerts</option>
                        <option>System</option>
                    </select>
                    <select className="filter-select">
                        <option>Newest First</option>
                        <option>Oldest First</option>
                    </select>
                </div>
            </div>

            <div className="notification-list">
                {notifications.map((item) => (
                    <div key={item.id} className="notification-item" style={{ borderLeftColor: item.borderColor }}>
                        <div className="notification-icon-wrapper" style={{ color: item.borderColor === '#CBD5E0' ? '#718096' : item.borderColor }}>
                            {item.icon}
                        </div>
                        <div className="notification-content">
                            <h3 className="notification-title">{item.title}</h3>
                            <p className="notification-desc">{item.description}</p>
                            <div className="notification-tags">
                                {item.tags.map((tag, idx) => (
                                    <span key={idx} className={`tag ${tag.toLowerCase().replace(' ', '-')}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="notification-time">{item.time}</div>
                    </div>
                ))}
            </div>

            <div className="load-more">
                <button className="load-more-btn">Load earlier notifications</button>
            </div>
        </main>
    );
};

export default Notification;
