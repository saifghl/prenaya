import React from 'react';
import { FaSearch, FaTrash, FaBell, FaBars, FaEye } from 'react-icons/fa';
import '../Dashboard/Dashboard.css'; // Import shared styles
import './Leads management.css';

const LeadsManagement = ({ toggleSidebar, setActivePage }) => {
    // Mock data based on the design
    const recentInquiries = [
        {
            id: 1,
            name: 'Kartik Sharma',
            email: 'kartik@gmail.com',
            phone: '+91 9854634665',
            message: '"Hi, I\'m interested in your enterprise cloud..."',
            date: '01/02/2025',
            status: 'New'
        },
        {
            id: 2,
            name: 'Anuj Jadhav',
            email: 'anuj@gmail.com',
            phone: '+91 9489600465',
            message: '"Looking for a quote regarding the website..."',
            date: '01/02/2025',
            status: 'Contacted'
        },
        {
            id: 3,
            name: 'Radha Purohit',
            email: 'radha@gmail.com',
            phone: '+91 8010452662',
            message: '"Thank you for the information, we have..."',
            date: '01/02/2025',
            status: 'New'
        },
        {
            id: 4,
            name: 'Ajay Shah',
            email: 'ajay@gmail.com',
            phone: '+91 7248617844',
            message: '"Request for Proposal: IT Infrastructure..."',
            date: '01/02/2025',
            status: 'Closed'
        }
    ];

    return (
        <main className="main-content leads-container-wrapper">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-left">
                    <button className="menu-toggle" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <div>
                        <h1>Leads Management</h1>
                        <p>View and manage all incoming enquiries</p>
                    </div>
                </div>
                <div className="header-right">
                    <FaBell className="header-icon" />
                    <div className="user-profile">
                        <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="User" className="avatar" />
                    </div>
                </div>
            </header>

            {/* Statistics Cards - Using similar structure to Dashboard secondary-stats for the 2-column look */}
            <div className="secondary-stats">
                <div className="big-stat-card">
                    <p className="big-stat-label">TOTAL LEADS</p>
                    <h3 className="big-stat-value">1,248</h3>
                    <p className="stat-subtext green-text">+12%</p>
                </div>
                <div className="big-stat-card">
                    <p className="big-stat-label">New Enquiries</p>
                    <h3 className="big-stat-value">45</h3>
                    <p className="stat-subtext green-text">+5%</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="search-section">
                <div className="search-input-wrapper">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search By Name Or Description"
                    />
                </div>
            </div>

            {/* Recent Inquiries Table */}
            <section className="recent-inquiries-section">
                <h3>Recent Inquiries</h3>

                <div className="table-wrapper">
                    <table className="inquiries-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Message Preview</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentInquiries.map((inquiry) => (
                                <tr key={inquiry.id}>
                                    <td>
                                        <div className="user-info">
                                            <span className="name">{inquiry.name}</span>
                                            <span className="email">{inquiry.email}</span>
                                            <span className="phone">{inquiry.phone}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="message-preview">{inquiry.message}</div>
                                    </td>
                                    <td>
                                        <span className="date">{inquiry.date}</span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${inquiry.status.toLowerCase()}`}>
                                            <span className="status-dot"></span>
                                            {inquiry.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="action-btn" onClick={() => setActivePage && setActivePage('lead-details')}>
                                            <FaEye />
                                        </button>
                                        <button className="action-btn">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="table-footer">
                    <div className="results-count">Showing 1 to 4 of 1,248 results</div>
                    <div className="pagination">
                        <button className="page-btn">&lt;</button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">4</button>
                        <button className="page-btn">5</button>
                        <span>...</span>
                        <button className="page-btn">1,248</button>
                        <button className="page-btn">&gt;</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LeadsManagement;

