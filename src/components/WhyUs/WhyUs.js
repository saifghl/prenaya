import React from 'react';
import './WhyUs.css';

// Importing images
import rapidDevImg from './assets/images/rapid-devlopment.jpeg';
import securityImg from './assets/images/security-first.jpeg';
import supportImg from './assets/images/24-7-support.jpeg';
import scalableImg from './assets/images/scalable-solution.jpeg';
import expertTeamImg from './assets/images/expert-team.jpeg';
import costEffectiveImg from './assets/images/cost-effective.jpeg';

const cards = [
    {
        id: 1,
        title: 'Rapid Development',
        description: 'Faster time-to-market with high quality results.',
        image: rapidDevImg
    },
    {
        id: 2,
        title: 'Security First',
        description: 'Industry-leading practices ensure top-notch security.',
        image: securityImg
    },
    {
        id: 3,
        title: '24/7 Support',
        description: 'Round-the-clock assistance to keep your business running.',
        image: supportImg
    },
    {
        id: 4,
        title: 'Scalable Solution',
        description: 'Future-ready, scalable solutions built to grow with your business.',
        image: scalableImg
    },
    {
        id: 5,
        title: 'Expert Team',
        description: 'Expert professionals delivering reliable solutions with proven technical excellence.',
        image: expertTeamImg
    },
    {
        id: 6,
        title: 'Cost Effective',
        description: 'Cost-effective development without compromising on quality or performance.',
        image: costEffectiveImg
    }
];

const WhyUs = () => {
    return (
        <section className="why-us-section">
            <div className="why-us-header">
                <h2>Why Companies Trust Us</h2>
                <p>
                    At Prenaya, we combine deep technical expertise with a clear understanding of
                    business needs. Our team delivers reliable, scalable, and secure digital solutions
                    by following proven processes, transparent communication, and a quality-first
                    approach. Clients trust us because we don't just build software—we build long-
                    term partnerships.
                </p>
            </div>

            <div className="why-us-grid-container">
                <div className="why-us-grid">
                    {cards.map(card => (
                        <div key={card.id} className="why-us-card">
                            <div className="card-image-wrapper">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
