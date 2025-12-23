import React from "react";
import "./WhoAreWe.css";

import heroImage from "./assets/images/hero-cloud.jpeg";
import logo from "./assets/images/logo.png";

import MeetPrenaya from "./MeetPrenaya";
import MissionVision from "./MissionVision";
import OurExpertise from "./OurExpertise";
import WhyChooseUs from "./WhyChooseUs";
import OurJourney from "./OurJourney";
import MeetTeam from "./MeetTeam";
import CallToAction from "./CallToAction";

const WhoAreWe = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="wp-hero">
        <div className="wp-hero-content">
          <img src={logo} alt="Prenaya Logo" className="wp-logo" />

          <h1>We Build the Future of Digital</h1>

          <p>
            Prenaya is built with a clear mission – to help businesses embrace
            digital transformation and unlock their full potential through
            innovative technology solutions.
          </p>

          <button className="wp-btn">Learn More</button>
        </div>

        <div className="wp-hero-image">
          <img src={heroImage} alt="Cloud Technology" />
        </div>
      </section>

      {/* SECTION NAVIGATION (like screenshot) */}
      <div className="whoarewe-tabs">
        <a href="#meet-prenaya">Meet Prenaya</a>
        <a href="#mission-vision">Mission & Vision</a>
        <a href="#expertise">Our Expertise</a>
        <a href="#why-choose-us">Why Choose Us</a>
        <a href="#journey">Our Journey</a>
        <a href="#team">Meet Team</a>
      </div>

      {/* PAGE CONTENT */}
      <section id="meet-prenaya">
        <MeetPrenaya />
      </section>

      <section id="mission-vision">
        <MissionVision />
      </section>

      <section id="expertise">
        <OurExpertise />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="journey">
        <OurJourney />
      </section>

      <section id="team">
        <MeetTeam />
      </section>

      <CallToAction />
    </div>
  );
};

export default WhoAreWe;
