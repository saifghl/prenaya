import React from "react";
import "./WhoAreWe.css";

// images
import heroImg from "./assets/images/hero-cloud.jpeg";
import buildingImg from "./assets/images/building.jpeg";
import logo from "./assets/images/logo.jpeg";


const MeetPrenaya = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="wp-hero">
        <div className="wp-hero-content">
          <img src={logo} alt="Prenaya Logo" className="wp-logo" />

          <h1>
            We Build the Future <br /> of Digital
          </h1>

          <p>
            Prenaya is built with a clear mission — to help businesses embrace
            digital transformation and unlock their full potential through
            innovative technology solutions.
          </p>

          <button className="wp-btn">Learn More</button>
        </div>

        <div className="wp-hero-image">
          <img src={heroImg} alt="Digital Cloud" />
        </div>
      </section>

      {/* MEET PRENAYA SECTION */}
      <section className="wp-meet">
        <div className="wp-meet-text">
          <h2>Meet Prenaya Softech</h2>
          <p>
            Prenaya is a modern software development company delivering
            innovative, user-focused digital solutions. We combine smart
            technology, creative thinking, and reliable engineering to help
            businesses simplify processes and achieve scalable growth.
          </p>
        </div>

        <div className="wp-meet-image">
          <img src={buildingImg} alt="Company Building" />
        </div>
      </section>
    </>
  );
};

export default MeetPrenaya;
