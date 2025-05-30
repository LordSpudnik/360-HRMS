import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import Logo from "./assets/icons/logo.png"; // Adjust as needed

export default function Footer() {
  const navigate = useNavigate();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 180px (adjust as desired)
      setShowTop(window.scrollY > 180);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-col footer-about">
          <img
            src={Logo}
            alt="Logo"
            className="footer-logo"
            loading="lazy"
            onClick={() => navigate("/")}
          />
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
          <div className="footer-col-title">Get in Touch</div>
          <div className="footer-col-content">
            <strong>Phone Us:</strong> +91 00000 00000<br/>
            <strong>Mail Us:</strong> <a href="mailto:ask@cafsinfotech.com">sample@sample.com</a>
          </div>
        </div>
      </div>
      <button
        className={`footer-scroll-top-btn${showTop ? " show" : ""}`}
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        type="button"
        tabIndex={showTop ? 0 : -1}
      >
        ⬆ Top
      </button>
    </footer>
  );
}