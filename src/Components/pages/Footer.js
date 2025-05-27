import React from "react";
import "./Footer.css";
import cafsLogo from "./assets/icons/logo.png"; // Save the logo (as visible in the screenshot) in this path, or adjust the path as necessary.

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-col footer-about">
          <img src={cafsLogo} alt="CAFS Infotech Logo" className="footer-logo" />
          <div className="footer-about-text">
            CAFSInfotech is the fastest emerging Web and Mobile App Development Company in India known for delivering the most innovative software solutions and engaging mobile apps.
          </div>
        </div>
        {/* Head Office */}
        <div className="footer-col">
          <div className="footer-col-title">Head Office</div>
          <div className="footer-col-content">
            <strong>CAFSInfotech</strong><br/>
            CAFS, SPENCER PLAZA, Unit No O-515, 5th floor, Phase 2, Annasalai, Chennai – 600 002.
          </div>
        </div>
        {/* Branch Office */}
        <div className="footer-col">
          <div className="footer-col-title">Branch Office</div>
          <div className="footer-col-content">
            <strong>CAFSInfotech</strong><br/>
            No:15/03 S.J Pride Building, 1st floor, Hosur Main Road, Madiwala, Bengaluru-560068<br/>
            LM: Opposite to Hotel Krishna sagar.
          </div>
        </div>
        {/* Contact */}
        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <div className="footer-col-content">
            <strong>Phone:</strong> +91 7845280780<br/>
            <strong>E-Mail:</strong> <a href="mailto:ask@cafsinfotech.com">ask@cafsinfotech.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}