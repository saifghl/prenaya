import React from 'react';
import { FaClock, FaPhoneAlt, FaArrowLeft } from 'react-icons/fa';
import './LeadDetails.css';

const LeadDetails = ({ onBack, lead }) => {
    // Default mock data if no lead is passed (for development)
    const leadData = lead || {
        id: '#L-29402',
        receivedDate: 'Oct 24, 2023 at 10:45 AM',
        status: 'New',
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '+1 (555) 000-0000',
        message: {
            intro: 'Hi team,',
            body: 'I am interested in learning more about your cloud migration services for our enterprise infrastructure. We are currently scaling our operations and need a robust solution that can handle high traffic while ensuring data security.',
            listTitle: 'We are specifically looking for:',
            listItems: [
                'AWS Migration strategies',
                'Database optimization',
                'Security compliance auditing'
            ],
            closing: 'Could you please provide a quote or schedule a demo? We are looking to move fast on this initiative.'
        }
    };

    return (
        <div className="lead-details-container">
            {/* Header */}
            <div className="details-header">
                <h2>Lead Details</h2>
                <div className="timestamp">
                    <FaClock />
                    <span>Received: {leadData.receivedDate}</span>
                </div>
            </div>

            {/* Status Section */}
            <div className="details-section-card">
                <div className="status-controls">
                    <div className="status-group">
                        <label className="input-label">Lead Status</label>
                        <select className="status-select" defaultValue={leadData.status}>
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                    <div className="action-buttons">
                        <button className="btn btn-outline">Mark as Read</button>
                        <button className="btn btn-primary">Save Status</button>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <h3 className="section-title">Contact Information</h3>
            <div className="details-section-card">
                <div className="form-grid">
                    <div className="form-group">
                        <label className="input-label">Full Name<span className="required-star">*</span></label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="e.g. John Doe"
                            defaultValue={leadData.fullName}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label className="input-label">Email Address<span className="required-star">*</span></label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="john@example.com"
                            defaultValue={leadData.email}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label className="input-label">Phone Number<span className="required-star">*</span></label>
                        <div className="input-icon-wrapper">
                            <FaPhoneAlt className="input-icon" />
                            <input
                                type="tel"
                                className="form-input has-icon"
                                placeholder="+1 (555) 000-0000"
                                defaultValue={leadData.phone}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Message Content */}
            <h3 className="section-title">Message Content</h3>
            <div className="details-section-card">
                <div className="message-box">
                    <p>{leadData.message.intro}</p>
                    <p>{leadData.message.body}</p>
                    <p>{leadData.message.listTitle}</p>
                    <ol className="message-list">
                        {leadData.message.listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                    <p>{leadData.message.closing}</p>
                </div>
            </div>

            {/* Footer */}
            <div className="details-footer">
                <button className="back-link" onClick={onBack}>
                    <FaArrowLeft />
                    <span>Back to Leads</span>
                </button>
                <div className="lead-id">Lead ID: {leadData.id}</div>
            </div>
        </div>
    );
};

export default LeadDetails;
