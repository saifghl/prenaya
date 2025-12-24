import React from 'react';
import './Dashboard.css';
import { FaBell, FaUsers, FaServer, FaExclamationTriangle, FaBars } from 'react-icons/fa';

const Dashboard = ({ toggleSidebar, setActivePage }) => {
    return (
        <>
            {/* Main Content */}
            <main className="main-content">
                <header className="dashboard-header">
                    <div className="header-left">
                        <button className="menu-toggle" onClick={toggleSidebar}>
                            <FaBars />
                        </button>
                        <div>
                            <h1>Dashboard</h1>
                            <p>Welcome back, here's what's happening with your site today.</p>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="icon-wrapper-header" onClick={() => setActivePage && setActivePage('notifications')} style={{ cursor: 'pointer' }}>
                            <FaBell className="header-icon" />
                        </div>
                        <div className="user-profile">
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=random" alt="Profile" className="avatar" />
                        </div>
                    </div>
                </header>

                <div className="stats-cards">
                    {/* Card 1 */}
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="icon-wrapper blue-bg">
                                <FaUsers className="stat-icon blue-text" />
                            </div>
                            <span className="stat-badge green">+12%</span>
                        </div>
                        <div className="stat-info">
                            <p className="stat-label">Total Users</p>
                            <h3 className="stat-value">14,258</h3>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="icon-wrapper purple-bg">
                                <FaServer className="stat-icon purple-text" />
                            </div>
                            <span className="stat-badge green">+4%</span>
                        </div>
                        <div className="stat-info">
                            <p className="stat-label">Total Users</p>
                            <h3 className="stat-value">99.98%</h3>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="stat-card" onClick={() => setActivePage && setActivePage('notifications')} style={{ cursor: 'pointer' }}>
                        <div className="stat-header">
                            <div className="icon-wrapper orange-bg">
                                <FaExclamationTriangle className="stat-icon orange-text" />
                            </div>
                            <span className="stat-badge red">+2</span>
                        </div>
                        <div className="stat-info">
                            <p className="stat-label">Pending Alert</p>
                            <h3 className="stat-value">5</h3>
                        </div>
                    </div>
                </div>

                <div className="secondary-stats">
                    <div className="big-stat-card">
                        <p className="big-stat-label">TOTAL LEADS COUNT</p>
                        <h3 className="big-stat-value">1,245</h3>
                        <p className="stat-subtext green-text">+12% these month</p>
                    </div>
                    <div className="big-stat-card">
                        <p className="big-stat-label">TOTAL SERVICES COUNT</p>
                        <h3 className="big-stat-value">18</h3>
                    </div>
                </div>

                <section className="recent-inquiries">
                    <h3>Recent Inquiries</h3>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kartik Sharma</td>
                                    <td>kartik@gmail.com</td>
                                    <td>Service inquiry for web and mobile application development. Please contact us to discuss project details.</td>
                                    <td>01/02/2025</td>
                                </tr>
                                <tr>
                                    <td>Anuj Jadhav</td>
                                    <td>anuj@gmail.com</td>
                                    <td>Service inquiry regarding web and mobile app development. We are looking for a reliable IT company to support our project.</td>
                                    <td>01/02/2025</td>
                                </tr>
                                <tr>
                                    <td>Radha Purohit</td>
                                    <td>radha@gmail.com</td>
                                    <td>Service inquiry for custom web and mobile application development. We would like to understand your services, timelines, and pricing. Please get in touch with us.</td>
                                    <td>01/02/2025</td>
                                </tr>
                                <tr>
                                    <td>Ajay Shah</td>
                                    <td>ajay@gmail.com</td>
                                    <td>Service inquiry for web and mobile application development. Please contact us to discuss project details.</td>
                                    <td>01/02/2025</td>
                                </tr>
                                <tr>
                                    <td>Ansar Shekh</td>
                                    <td>ansar@gmail.com</td>
                                    <td>Service inquiry regarding web and mobile app development. We are looking for a reliable IT company to support our project.</td>
                                    <td>01/02/2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Dashboard;
