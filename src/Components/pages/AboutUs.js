import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import Navbar from "./Navbar"; // adjust if your Navbar path is different
import SearchBar from "./SearchBar"; // adjust if your SearchBar path is different
import Footer from "./Footer"; // adjust if your Footer path is different
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
          <a
            href="https://www.linkedin.com/company/14573120/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/cafs_infotech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/CAFSInfo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/cafsinfotech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://in.pinterest.com/cafsinfotech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterestP />
          </a>
          <a
            href="https://www.flickr.com/photos/157372462@N04/albums"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFlickr />
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=+919500088633&text=Hi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
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
        <h1>About Us Page</h1>
        <div className="aboutus-content">
          {/* Add your About Us text and sections here */}
          <p>
            We are a team of experienced professionals committed to delivering innovative web and mobile solutions.
            Our focus is on consistency, client care, and excellence in every project we undertake.
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}