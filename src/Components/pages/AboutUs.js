import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import CountUpOnView from "./CountUpOnView";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { IoLogoFlickr, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

// Example illustration images (replace with your own or URLs if needed)
import aboutHero from "./assets/imgs/aboutUs.png";
import missionIcon from "./assets/icons/consistent.png";
import visionIcon from "./assets/icons/vision.png";
import teamwork from "./assets/icons/teamwork.png";
import integrity from "./assets/icons/integrity.png";
import innovation from "./assets/icons/idea.png";
import customerFocus from "./assets/icons/handshake.png";

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");
    const hysteresisRatioIn = 0.18;
    const hysteresisRatioOut = 0.02;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > hysteresisRatioIn) {
            entry.target.classList.add("scrolled");
          } else if (entry.intersectionRatio < hysteresisRatioOut) {
            entry.target.classList.remove("scrolled");
          }
        });
      },
      {
        threshold: [0, 0.02, 0.18, 0.5, 0.8, 1],
        rootMargin: "0px 0px 0px 0px",
      }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function AboutUs() {
  useScrollAnimation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="aboutus-root">
      {/* Topbar */}
      <div className="topbar">
        <div className="contact-info">
          <span>
            <FaPhoneAlt /> +91 78452 80780
          </span>
          <span>
            <FaEnvelope /> hr@cafsinfotech.com
          </span>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/14573120/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://x.com/cafs_infotech" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://www.facebook.com/CAFSInfo/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/cafsinfotech/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://in.pinterest.com/cafsinfotech/" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
          <a href="https://www.flickr.com/photos/157372462@N04/albums" target="_blank" rel="noopener noreferrer"><IoLogoFlickr /></a>
          <a href="https://web.whatsapp.com/send?phone=+919500088633&text=Hi" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
        </div>
      </div>

      {/* Navbar */}
      <Navbar onSearchClick={() => setShowSearch((prev) => !prev)} />

      {showSearch && (
        <div
          className="search-bar-overlay"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="search-bar-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <SearchBar onClose={() => setShowSearch(false)} />
          </div>
        </div>
      )}

      {/* Main About Us Content with scroll animation */}
      <motion.div
        className="about-us-page scroll-animate"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <section className="about-hero scroll-animate">
          <div className="about-hero-text">
            <h1>About CAFS Infotech</h1>
            <p>
              <strong>CAFS Infotech</strong> is a leading web and mobile app development company based in Chennai, India. Powered by a passionate team and a commitment to excellence, we help businesses of all sizes turn ideas into impactful digital products and experiences.
            </p>
          </div>
          <div className="about-hero-img">
            <img src={aboutHero} alt="CAFS Infotech Teamwork" />
          </div>
        </section>

        <section className="about-numbers-section scroll-animate">
          <div className="about-number-card">
            <div className="about-number-head">
              <CountUpOnView end={10} suffix="+" />
            </div>
            <div className="about-number-label">Years of Experience</div>
          </div>
          <div className="about-number-card">
            <div className="about-number-head">
              <CountUpOnView end={200} suffix="+" />
            </div>
            <div className="about-number-label">Projects Delivered</div>
          </div>
          <div className="about-number-card">
            <div className="about-number-head">
              <CountUpOnView end={50} suffix="+" />
            </div>
            <div className="about-number-label">Satisfied Clients</div>
          </div>
          <div className="about-number-card">
            <div className="about-number-head">
              <CountUpOnView end={20} suffix="+" />
            </div>
            <div className="about-number-label">Expert Team Members</div>
          </div>
        </section>

        <section className="about-mission-vision scroll-animate">
          <div className="about-mission">
            <img src={missionIcon} alt="Mission" className="about-icon" />
            <h2>Our Mission</h2>
            <p>
              To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation. We believe in building lasting partnerships by delivering quality, reliability, and outstanding customer service.
            </p>
          </div>
          <div className="about-vision">
            <img src={visionIcon} alt="Vision" className="about-icon" />
            <h2>Our Vision</h2>
            <p>
              To be recognized globally as a trusted partner for web and mobile app development, creating digital products that inspire, engage, and make a difference.
            </p>
          </div>
        </section>

        <section className="about-values scroll-animate">
          <h2>Our Core Values</h2>
          <div className="about-values-list">
            <div className="about-value-card">
              <img src={teamwork} alt="Teamwork" className="about-icon" />
              <div className="about-value-title">Collaboration</div>
              <div className="about-value-desc">We work as one team—internally and with our clients—to achieve shared goals.</div>
            </div>
            <div className="about-value-card">
              <img src={integrity} alt="Integrity" className="about-icon" />
              <div className="about-value-title">Integrity</div>
              <div className="about-value-desc">Honesty, transparency, and accountability are at the heart of everything we do.</div>
            </div>
            <div className="about-value-card">
              <img src={innovation} alt="Innovation" className="about-icon" />
              <div className="about-value-title">Innovation</div>
              <div className="about-value-desc">We embrace new ideas and technologies to deliver creative, future-ready solutions.</div>
            </div>
            <div className="about-value-card">
              <img src={customerFocus} alt="Customer Focus" className="about-icon" />
              <div className="about-value-title">Customer Focus</div>
              <div className="about-value-desc">Our clients’ success is our success. We listen, adapt, and go above and beyond.</div>
            </div>
          </div>
        </section>

        <section className="about-why-cafs scroll-animate">
          <h2>Why Choose CAFS Infotech?</h2>
          <ul className="about-why-list">
            <li>
              <span className="about-why-label">Proven Expertise:</span> We have a strong track record in web and mobile app development for startups, SMEs, and enterprises.
            </li>
            <li>
              <span className="about-why-label">Custom Solutions:</span> Every project is tailored to your business needs—no templates, no shortcuts.
            </li>
            <li>
              <span className="about-why-label">End-to-End Support:</span> From ideation and design to development, launch, and support—we’re with you at every step.
            </li>
            <li>
              <span className="about-why-label">Transparent Communication:</span> We believe in open, honest, and timely communication.
            </li>
            <li>
              <span className="about-why-label">Affordable Quality:</span> Get world-class solutions at competitive rates.
            </li>
          </ul>
        </section>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}