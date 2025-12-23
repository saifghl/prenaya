import React from "react";
import "./WhoAreWe.css";

// images
import webImg from "./assets/images/hero-cloud.jpeg";
import mobileImg from "./assets/images/hero-cloud.jpeg";
import cloudImg from "./assets/images/hero-cloud.jpeg";
import uiuxImg from "./assets/images/hero-cloud.jpeg";

const OurExpertise = () => {
  return (
    <section className="expertise-section">
      <h2 className="section-title">Our Expertise</h2>

      <div className="expertise-grid">
        <div className="expertise-card">
          <img src={webImg} alt="Web Development" />
          <h4>Web Development</h4>
          <p>
            Building responsive, scalable, and high-performance web applications
            using modern technologies.
          </p>
        </div>

        <div className="expertise-card">
          <img src={mobileImg} alt="Mobile App Development" />
          <h4>Mobile App Development</h4>
          <p>
            Creating intuitive and reliable mobile applications for Android and
            iOS platforms.
          </p>
        </div>

        <div className="expertise-card">
          <img src={cloudImg} alt="Cloud Solutions" />
          <h4>Cloud Solutions</h4>
          <p>
            Offering secure, scalable cloud services that enhance performance
            and flexibility.
          </p>
        </div>

        <div className="expertise-card">
          <img src={uiuxImg} alt="UI/UX Design" />
          <h4>UI / UX Design</h4>
          <p>
            Designing visually appealing and user-friendly interfaces that
            improve user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
