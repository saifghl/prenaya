import React from "react";
import "./WhoAreWe.css";

// image
import chooseImg from "./assets/images/why-choose.jpeg";

const WhyChooseUs = () => {
  return (
    <section className="choose-section">
      <div className="choose-text">
        <h2>Why Choose Us</h2>

        <ul>
          <li>✔ Experienced and skilled development team</li>
          <li>✔ Client-focused and result-driven approach</li>
          <li>✔ High-quality, scalable solutions</li>
          <li>✔ On-time delivery and transparent communication</li>
          <li>✔ Continuous support and maintenance</li>
        </ul>
      </div>

      <div className="choose-image">
        <img src={chooseImg} alt="Why Choose Prenaya" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
