import React from "react";
import "./Footer.module.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contacts">
        <p>
          <a href="#home">Home</a> | <a href="#about">About</a> |{" "}
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="partners">
        <p>Our Partners</p>
        <img
          src="https://via.placeholder.com/150"
          alt="partner logo"
          className="partner-logo"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="partner logo"
          className="partner-logo"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="partner logo"
          className="partner-logo"
        />
      </div>
      <div className="rights">
        <p>Kaliningrad | 2022 Blogget. All rights reserved.</p>
      </div>
    </div>
  );
}
