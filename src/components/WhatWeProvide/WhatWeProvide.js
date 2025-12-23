import React from 'react';
import './WhatWeProvide.css';
import placeholder from '../Footer/WhoAreWe/assets/images/hero-img.jpeg'; // Placeholder for top cards

const WhatWeProvide = () => {
    return (
        <div className="what-we-provide-page">
            <header className="wwp-header">
                <h1>Our Services</h1>
                <p>
                    We deliver smart, scalable, and secure digital solutions designed to help businesses grow, adapt, and succeed in a fast-changing digital world.
                </p>
            </header>

            <div className="wwp-container">
                {/* Main Services */}
                <section className="wwp-section main-services">
                    <div className="main-service-card">
                        <div className="main-card-image">
                            <img src={placeholder} alt="App and Web Development" />
                        </div>
                        <h3>Application and Web Development</h3>
                    </div>
                    <div className="main-service-card">
                        <div className="main-card-image">
                            <img src={placeholder} alt="Digital Marketing" />
                        </div>
                        <h3>Digital Marketing</h3>
                    </div>
                </section>

                {/* Microsoft 365 Section */}
                <section className="wwp-section">
                    <h2 className="section-title">Microsoft 365 Security & Productivity</h2>
                    <p className="section-subtitle">
                        We help organizations secure identities, data, and devices while enabling modern workplace productivity.
                    </p>
                    <div className="service-grid">
                        <div className="service-button">Microsoft Information Protection</div>
                        <div className="service-button">Advanced Threat Protection</div>
                        <div className="service-button">Data Loss Prevention</div>
                        <div className="service-button">Privileged Identity Management</div>
                        <div className="service-button">Intune Device Management</div>
                        <div className="service-button">Copilot Enablement</div>
                    </div>
                </section>

                {/* Azure Services Section */}
                <section className="wwp-section">
                    <h2 className="section-title">Microsoft Azure Services</h2>
                    <p className="section-subtitle">
                        From cloud migration to advanced AI solutions, we design, deploy, and manage scalable Azure architectures.
                    </p>
                    <div className="service-grid">
                        <div className="service-button">Azure Synapse Analytics</div>
                        <div className="service-button">Azure IoT Solutions</div>
                        <div className="service-button">Azure DevOps</div>
                        <div className="service-button">Azure AI & Machine Learning</div>
                        <div className="service-button">Data Warehousing</div>
                        <div className="service-button">Cloud Migration</div>
                    </div>
                </section>

                {/* Dynamics 365 Services */}
                <section className="wwp-section">
                    <h2 className="section-title">Dynamics 365 Services</h2>
                    <p className="section-subtitle">
                        We implement and customize Dynamics 365 solutions to streamline business processes and improve customer engagement.
                    </p>
                    <div className="service-grid">
                        <div className="service-button">HR Management</div>
                        <div className="service-button">Sales Automation</div>
                        <div className="service-button">Marketing Automation</div>
                        <div className="service-button">Business Central</div>
                        <div className="service-button">Finance & Operations</div>
                        <div className="service-button">Field Service Management</div>
                    </div>
                </section>

                <section className="wwp-section">
                    <h2 className="section-title">Power Platform & SharePoint Services</h2>
                    <p className="section-subtitle">
                        We help organizations automate workflows, visualize data, and build powerful low-code solutions using Microsoft Power Platform and SharePoint.
                    </p>
                    <div className="soc-layout">
                        <div className="soc-top-row">
                            <div className="service-button">Power BI – Interactive dashboards and real-time business insights</div>
                            <div className="service-button">SharePoint – Collaboration portals, document management & intranets</div>
                            <div className="service-button">Power Apps – Custom low-code business applications</div>
                        </div>
                        <div className="soc-bottom-row">
                            <div className="service-button">Power Automate – Workflow automation and process optimization</div>
                            <div className="service-button">Power Virtual Agents – AI-powered chatbots for support and operations</div>
                        </div>
                    </div>
                </section>

                {/* SOC Section */}
                <section className="wwp-section">
                    <h2 className="section-title">SOC (Security Operations Center)</h2>
                    <p className="section-subtitle">
                        Our SOC services ensure continuous monitoring, threat prevention, and rapid incident response to protect your digital assets.
                    </p>
                    <div className="soc-layout">
                        <div className="soc-top-row">
                            <div className="service-button">SOC Advisory & Maturity Assessment</div>
                            <div className="service-button">Threat Detection & Response (24/7 Monitoring)</div>
                            <div className="service-button">Threat & Vulnerability Management</div>
                        </div>
                        <div className="soc-bottom-row">
                            <div className="service-button">Advanced Incident Response</div>
                            <div className="service-button">Threat Intelligence & Analysis</div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Why Trust Us Footer */}
            <section className="trust-footer">
                <div className="trust-container">
                    <h2 className="trust-title">Why Microsoft partners trust Prenaya</h2>
                    <div className="trust-items">
                        <div className="trust-item">
                            <div className="trust-icon-placeholder">👥</div>
                            <div className="trust-text">
                                <h3>We're Your Remote Team</h3>
                                <p>Prenaya Works as a remote, white-labeled extension of your team, blending seamlessly into your brand.</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon-placeholder">⚙️</div>
                            <div className="trust-text">
                                <h3>Microsoft Expertise</h3>
                                <p>Our Deep knowledge of microsoft tools and best practices ensure success at every stage.</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon-placeholder">📊</div>
                            <div className="trust-text">
                                <h3>Proven Results</h3>
                                <p>We've helped Microsoft partners grow faster, win more deals, and strengthen customer relationships-all while working remotely.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatWeProvide;
