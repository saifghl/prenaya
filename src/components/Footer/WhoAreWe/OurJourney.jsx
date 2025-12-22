import React from "react";
import "./WhoAreWe.css";

const OurJourney = () => {
  return (
    <section className="journey-section">
      <h2 className="section-title">Our Journey</h2>

      <div className="journey-container">
        <div className="journey-card">
          <h3>2019</h3>
          <p>
            Prenaya was founded with a vision to deliver reliable and
            innovative digital solutions.
          </p>
        </div>

        <div className="journey-card">
          <h3>2020</h3>
          <p>
            Expanded our services and successfully delivered multiple web and
            mobile projects.
          </p>
        </div>

        <div className="journey-card">
          <h3>2022</h3>
          <p>
            Built strong partnerships and scaled our team with skilled
            professionals.
          </p>
        </div>

        <div className="journey-card">
          <h3>2024</h3>
          <p>
            Continuing to innovate with advanced technologies and global client
            collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
