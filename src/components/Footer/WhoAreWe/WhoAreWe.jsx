import React from "react";

// CSS
import "./WhoAreWe.css";

// Components
import MeetPrenaya from "./MeetPrenaya";
import MissionVision from "./MissionVision";
import OurExpertise from "./OurExpertise";
import WhyChooseUs from "./WhyChooseUs";
import OurJourney from "./OurJourney";
import MeetTeam from "./MeetTeam";
import CallToAction from "./CallToAction";

// Images
import heroImage from "./assets/images/hero-cloud.jpeg";
import buildingImage from "./assets/images/building.jpeg";
import logoImage from "./assets/images/logo.png";

const WhoAreWe = () => {
  return (
    <div className="who-are-we-page" id="who-are-we">

      {/* HERO SECTION */}
      <section className="wp-hero">
        <div className="wp-hero-content">
          <img src={logoImage} alt="Prenaya Logo" className="wp-logo" />
          <h1>Welcome to Prenaya</h1>
          <p>
            Delivering smart, reliable digital solutions that simplify processes
            and power business growth.
          </p>
          <a href="#meetprenaya">
            <button className="wp-btn">Know More</button>
          </a>
        </div>
        <div className="wp-hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      {/* MEET PRENAYA */}
      <MeetPrenaya image={buildingImage} />

      {/* MISSION & VISION */}
      <MissionVision />

      {/* OUR EXPERTISE */}
      <OurExpertise />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* OUR JOURNEY */}
      <OurJourney />

      {/* MEET TEAM */}
      <MeetTeam />

      {/* CALL TO ACTION */}
      <CallToAction />

    </div>
  );
};

export default WhoAreWe;
