import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./TeamCard.css"; // Separate CSS for styling individual cards

const TeamCard = ({ initial, name, role, description }) => {
  return (
    <div className="team-card">
      <div className="team-initial">{initial}</div>
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      <p className="team-description">{description}</p>
      <div className="team-socials">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default TeamCard;
