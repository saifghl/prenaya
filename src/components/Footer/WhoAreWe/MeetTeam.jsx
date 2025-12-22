import React from "react";
import "./MeetTeam.css";
import TeamCard from "./TeamCard";

const MeetTeam = () => {
  return (
    <section className="meet-team-section">
      <h2 className="meet-title">Meet Our Team</h2>
      <p className="meet-subtitle">
        The talented individuals behind our success
      </p>

      <div className="team-wrapper">

        <TeamCard
          initial="A"
          name="Altamash Shaikh"
          role="Co-Founder & CEO - Technologies And Business Strategy"
          description="Dynamic leader with a strong foundation in technology and business strategy. BTech in Computer Science with 3+ years of experience in full-stack development, product innovation, and business growth initiatives."
        />

        <TeamCard
          initial="Y"
          name="Yashvardhan Shinde"
          role="Co-Founder & CEO - Technologies And Production"
          description="An expert in transforming technical strategy into high-quality products. Passionate about steering the production pipeline from initial code to final deployment with precision and excellence."
        />

      </div>
    </section>
  );
};

export default MeetTeam;
