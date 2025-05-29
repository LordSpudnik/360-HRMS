import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
          <span><FaPhoneAlt /> +91 00000 00000</span>
          <span><FaEnvelope /> sample@sample.com</span>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
          <a href="https://www.flickr.com/" target="_blank" rel="noopener noreferrer"><IoLogoFlickr /></a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
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

          {/* --- Employee Table Section --- */}
          <div className="emp-table-section scroll-animate">
            <h2 className="employee-table-heading">Sample Employee Data</h2>
            <div className="emp-table-wrapper">
              <table className="employee-table">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Full Name</th>
                    <th>Date Of Birth</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td>
                    <td>Alice Johnson</td>
                    <td>1990-05-12</td>
                    <td>
                      <a href="mailto:alice.johnson@xyz.com" className="emp-table-link">alice.johnson@xyz.com</a>
                    </td>
                    <td>9876543210</td>
                    <td>123 Maple St,<br />New York, NY</td>
                    <td>HR</td>
                    <td>HR Manager</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>Bob Smith</td>
                    <td>1985-09-30</td>
                    <td>
                      <a href="mailto:bob.smith@xyz.com" className="emp-table-link">bob.smith@xyz.com</a>
                    </td>
                    <td>9123456780</td>
                    <td>456 Oak Rd,<br />Chicago, IL</td>
                    <td>IT</td>
                    <td>Software Engg.</td>
                  </tr>
                  <tr>
                    <td>103</td>
                    <td>Clara<br />Fernandez</td>
                    <td>1993-02-17</td>
                    <td>
                      <a href="mailto:clara.f@xyz.com" className="emp-table-link">clara.f@xyz.com</a>
                    </td>
                    <td>9988776655</td>
                    <td>789 Pine Ave,<br />Austin, TX</td>
                    <td>Marketing</td>
                    <td>Digital Analyst</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* --- End Employee Table Section --- */}

        </div>

        {/* --- Employee Monitoring and Reporting Section --- */}
        <div className="emp-monitoring-section scroll-animate">
          <div className="emp-monitoring-main-title">Employee Monitoring and Reporting</div>

          <div className="emp-monitoring-row">
            {/* Performance Tracking: image left, card right */}
            <div className="emp-monitoring-img-col">
              <img src={performanceImg} alt="Performance and Tracking" className="emp-monitoring-img"  loading="lazy" />
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
              <img src={complianceImg} alt="Compliance and Confidentiality" className="emp-monitoring-img"  loading="lazy" />
            </div>
          </div>
        </div>
        {/* --- End Employee Monitoring and Reporting Section --- */}
      </motion.div>
      <Footer />
    </div>
  );
}