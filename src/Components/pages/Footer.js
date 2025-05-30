import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import Logo from "./assets/icons/logo.png"; // Save the logo (as visible in the screenshot) in this path, or adjust the path as necessary.

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-col footer-about">
          <img src={Logo} alt="Logo" className="footer-logo" loading="lazy" onClick={() => navigate("/")} />
          <div className="footer-about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </div>
        </div>
        {/* Head Office */}
        <div className="footer-col">
          <div className="footer-col-title">Head Office</div>
          <div className="footer-col-content">
            <strong>Lorem ipsum</strong><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        {/* Branch Office */}
        <div className="footer-col">
          <div className="footer-col-title">Branch Office</div>
          <div className="footer-col-content">
            <strong>Lorem ipsum</strong><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        {/* Contact */}
        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <div className="footer-col-content">
            <strong>Phone:</strong> +91 00000 00000<br/>
            <strong>E-Mail:</strong> <a href="mailto:ask@cafsinfotech.com">sample@sample.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}