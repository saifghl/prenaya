import React from "react";
import "./WhoAreWe.css";

// images
import missionImg from "./assets/images/building.jpeg";
import visionImg from "./assets/images/building.jpeg";

const MissionVision = () => {
  return (
    <section className="mv-section">
      <div className="mv-card">
        <img src={missionImg} alt="Our Mission" />
        <h3>Our Mission</h3>
        <p>
          Our mission is to deliver high-quality, innovative, and reliable
          digital solutions that empower businesses to grow, adapt, and succeed
          in a rapidly evolving technological world.
        </p>
      </div>

      <div className="mv-card">
        <img src={visionImg} alt="Our Vision" />
        <h3>Our Vision</h3>
        <p>
          Our vision is to become a trusted technology partner by creating
          future-ready solutions that add real value, inspire innovation, and
          drive long-term success.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
