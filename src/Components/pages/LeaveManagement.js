import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import "./LeaveManagement.css";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { IoLogoFlickr, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import leaveImg from "./assets/imgs/leave.png"; // Add your SVG/PNG here

// Scroll animation hook (same logic as homepage)
function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate');

    // We'll track state for each element to avoid jitter
    const hysteresisRatioIn = 0.18;  // When to add (section is at least 18% visible)
    const hysteresisRatioOut = 0.02; // When to remove (section is less than 2% visible)

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > hysteresisRatioIn) {
            entry.target.classList.add('scrolled');
          } else if (entry.intersectionRatio < hysteresisRatioOut) {
            entry.target.classList.remove('scrolled');
          }
          // If in between, leave the class as it was (prevents jitter)
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

export default function LeaveManagement() {
  useScrollAnimation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="leave-page">
      {/* Topbar */}
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

      {/* Navbar with search */}
      <Navbar onSearchClick={() => setShowSearch((prev) => !prev)} />

      {showSearch && (
        <div className="search-bar-overlay" onClick={() => setShowSearch(false)}>
          <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
            <SearchBar onClose={() => setShowSearch(false)} />
          </div>
        </div>
      )}

      <div className="leave-bg">
        <div className="leave-main scroll-animate">
          <h1 className="leave-title">Leave Management</h1>
          <div className="leave-desc">
            Leave management refers to the policies, processes, and tools used by a company to manage employee time off.<br />
            It includes applying, approving, tracking, and reporting various types of employee leaves.
          </div>
          <div className="leave-content-row">
            {/* Left: Types of Leave Card */}
            <div className="leave-types-card scroll-animate">
              <div className="leave-types-title">Common Types of Leave</div>
              <ul className="leave-types-list">
                <li>
                  <b>Casual Leave (CL):</b><br />
                  <span>For personal needs or emergencies. Usually limited to 8–12 days per year.</span>
                </li>
                <li>
                  <b>Sick Leave (SL):</b><br />
                  <span>For health-related issues. Often 10–12 days annually.</span>
                </li>
                <li>
                  <b>Earned Leave (EL) or Privilege Leave (PL):</b><br />
                  <span>Accrued monthly and used for planned vacations. Usually 10–12 days annually.</span>
                </li>
                <li>
                  <b>Maternity Leave:</b><br />
                  <span>For female employees, up to 26 weeks as per law.</span>
                </li>
                <li>
                  <b>Paternity Leave:</b><br />
                  <span>Generally 5–15 days depending on company policy.</span>
                </li>
                <li>
                  <b>Compensatory Off (Comp Off):</b><br />
                  <span>Time off granted in lieu of extra work on holidays/weekends.</span>
                </li>
                <li>
                  <b>Loss of Pay (LOP):</b><br />
                  <span>Leave taken beyond entitlement, resulting in salary deduction.</span>
                </li>
              </ul>
            </div>
            {/* Right: Illustration */}
            <div className="leave-illustration-col scroll-animate">
              <img src={leaveImg} alt="Leave Management Illustration" className="leave-illustration-img" />
              <div className="leave-illustration-title">
              </div>
            </div>
          </div>
          {/* How to Apply Section */}
          <div className="leave-apply-section scroll-animate">
            <div className="leave-apply-title">How to Apply for Leave</div>
            <div className="leave-apply-desc">
              Employees typically apply for leave through the company’s HRMS (Human Resource Management System) portal.<br />
              The leave request should include dates, reason for leave, and type of leave.
            </div>
          </div>
        </div>

        {/* Leave Approval Workflow */}
        <div className="leave-workflow-section scroll-animate">
          <h2 className="leave-workflow-title">Leave Approval Workflow</h2>
          <div className="leave-workflow-graphic">
            <div className="leave-workflow-step step-1">
              <div className="workflow-desc left">Employee submits the<br />leave application.</div>
              <div className="workflow-circle">01</div>
            </div>
            <div className="leave-workflow-step step-2">
              <div className="workflow-desc right">Reporting Manager receives a<br />notification and reviews the leave.</div>
              <div className="workflow-circle">02</div>
            </div>
            <div className="leave-workflow-step step-3">
              <div className="workflow-desc left">The manager approves or rejects<br />the leave based on workload,<br />reason, and leave balance.</div>
              <div className="workflow-circle">03</div>
            </div>
            <div className="leave-workflow-step step-4">
              <div className="workflow-desc right">If approved, HR is notified,<br />and the leave is recorded in<br />the HRMS.</div>
              <div className="workflow-circle">04</div>
            </div>
            <div className="leave-workflow-step step-5">
              <div className="workflow-desc left">If rejected, the employee<br />is informed with a reason.</div>
              <div className="workflow-circle last">05</div>
              <div className="workflow-line-end"></div>
            </div>
            {/* Vertical workflow line */}
            <div className="workflow-vertical-line"></div>
          </div>
        </div>

        {/* Approval Authority Section */}
        <div className="leave-authority-section scroll-animate">
          <div className="leave-authority-card">
            <div className="leave-authority-title">Approval Authority</div>
            <ul className="leave-authority-list">
              <li>
                <b>Reporting Manager:</b><br />
                <span>Primary authority to approve or reject leaves.</span>
              </li>
              <li>
                <b>HR Department:</b><br />
                <span>
                  Maintains leave records and ensures policy compliance.<br />
                  May intervene in case of special approval or disputes.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}