import React from 'react';
import './Hero.css';
import heroImg from '../Footer/WhoAreWe/assets/images/hero-img.jpeg';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-container-vertical">
                <p className="hero-label">UNLOCKING DIGITAL VALUE</p>
                <h1>
                    Turn Your <span className="highlight-text">Microsoft Environment</span> Into a Growth Engine
                </h1>
                <div className="hero-split-layout">
                    <div className="hero-text-column">
                        <p className="hero-subheader">
                            We help businesses and partners convert Microsoft technologies into measurable business success.
                        </p>
                        <p className="hero-description">
                            Prenaya works with organizations to transform Microsoft platforms into real, scalable outcomes. By combining deep technical expertise with strategic insight, we help you move faster, operate smarter, and deliver consistent value across your entire Microsoft ecosystem.
                        </p>
                        <button className="cta-button">Explore our Services</button>
                        <p className="hero-footer-text">
                            From strategy to support — one trusted partner, complete solutions.
                        </p>
                    </div>
                    <div className="hero-image-column">
                        <img src={heroImg} alt="Microsoft Environment Growth Engine" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
