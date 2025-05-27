import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./Employees.css";
import {
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP
} from "react-icons/fa";
import { IoLogoFlickr, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import SearchBar from "./SearchBar";

import performanceImg from "./assets/imgs/employees_performance.png";
import complianceImg from "./assets/imgs/employees_compliance.png";

// Scroll animation hook (same logic as homepage)
function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate');
    const hysteresisRatioIn = 0.18;
    const hysteresisRatioOut = 0.02;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > hysteresisRatioIn) {
            entry.target.classList.add('scrolled');
          } else if (entry.intersectionRatio < hysteresisRatioOut) {
            entry.target.classList.remove('scrolled');
          }
        });
      },
      {
        threshold: [0, 0.02, 0.18, 0.5, 0.8, 1],
        rootMargin: "0px 0px 0px 0px"
      }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Employees() {
  useScrollAnimation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="employees-page">
      <div className="topbar">
        <div className="contact-info">
          <span><FaPhoneAlt /> +91 78452 80780</span>
          <span><FaEnvelope /> hr@cafsinfotech.com</span>
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

      <Navbar onSearchClick={() => setShowSearch((prev) => !prev)} />

      {showSearch && (
        <div className="search-bar-overlay" onClick={() => setShowSearch(false)}>
          <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
            <SearchBar onClose={() => setShowSearch(false)} />
          </div>
        </div>
      )}

      <motion.div
        className="emp-bg"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        style={{ minHeight: "100vh", width: "100vw", overflowX: "hidden" }}
      >
        <div className="emp-main scroll-animate">
          <h1 className="emp-title">Employee Management and Tracking</h1>
          <div className="emp-desc">
            Employee tracking and management refers to the systematic processes, tools, and policies used by an organization to monitor, record, and manage employee data throughout the employment lifecycle.<br />
            This includes personal records, job history, performance, training, payroll, and compliance information.
          </div>

          <h2 className="emp-section-title scroll-animate">Employee Data Management</h2>
          <div className="emp-card-row">
            <div className="emp-card scroll-animate">
              <div className="emp-card-icon">
                <span role="img" aria-label="database">🗄️</span>
              </div>
              <div className="emp-card-title">Data Collection<br />and Storage</div>
              <div className="emp-card-text">
                Employee data is securely stored<br />
                in a cloud-based HRMS, accessible<br />
                only to authorized HR and<br />
                management personnel.<br />
                <br />
                Strong security protocols protect<br />
                against unauthorized access,<br />
                and data is retained according to<br />
                company policy and legal requirements.
              </div>
            </div>
            <div className="emp-card scroll-animate">
              <div className="emp-card-icon">
                <span role="img" aria-label="document">📄</span>
              </div>
              <div className="emp-card-title">Employee Record<br />Maintenance</div>
              <div className="emp-card-text">
                The HR department maintains<br />
                updated employee records,<br />
                including role changes,<br />
                training, and performance appraisals.<br />
                <br />
                Regular audits ensure data accuracy<br />
                and compliance with legal and<br />
                company standards.
              </div>
            </div>
            <div className="emp-card scroll-animate">
              <div className="emp-card-icon">
                <span role="img" aria-label="search">📄🔍</span>
              </div>
              <div className="emp-card-title">Employee Lifecycle<br />Tracking</div>
              <div className="emp-card-text">
                The HRMS manages the entire<br />
                employee life cycle, including<br />
                onboarding, role changes,<br />
                performance management,<br />
                and exit processes.<br />
                <br />
                All updates and formalities are<br />
                systematically recorded<br />
                within the system.
              </div>
            </div>
          </div>
        </div>

        {/* --- Employee Monitoring and Reporting Section --- */}
        <div className="emp-monitoring-section scroll-animate">
          <div className="emp-monitoring-main-title">Employee Monitoring and Reporting</div>

          <div className="emp-monitoring-row">
            {/* Performance Tracking: image left, card right */}
            <div className="emp-monitoring-img-col">
              <img src={performanceImg} alt="Performance and Tracking" className="emp-monitoring-img" />
            </div>
            <div className="emp-monitoring-text-col">
              <div className="emp-monitoring-title">Performance and Engagement Tracking</div>
              <div className="emp-monitoring-content">
                <ul>
                  <li>
                    Performance reviews, training participation, and employee engagement survey results are tracked to support talent management and organizational development.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="emp-monitoring-row">
            {/* Compliance: card left, image right */}
            <div className="emp-monitoring-text-col">
              <div className="emp-monitoring-title">Compliance and Confidentiality</div>
              <div className="emp-monitoring-content">
                <ul>
                  <li>
                    The HR department ensures all employee management practices comply with relevant labor laws and data protection regulations.
                  </li>
                  <li>
                    Confidentiality agreements and access controls are enforced to protect employee privacy.
                  </li>
                </ul>
              </div>
            </div>
            <div className="emp-monitoring-img-col">
              <img src={complianceImg} alt="Compliance and Confidentiality" className="emp-monitoring-img" />
            </div>
          </div>
        </div>
        {/* --- End Employee Monitoring and Reporting Section --- */}
      </motion.div>
    </div>
  );
}