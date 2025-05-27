import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import "./Payroll.css";
import {
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP,
} from "react-icons/fa";
import { IoLogoFlickr, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

// Main illustration
import payrollImage from "./assets/imgs/payroll.png";
// Salary Structure illustration
import salaryStructureImg from "./assets/imgs/salary.png";
// Salary Deductions illustration
import salaryDeductionsImg from "./assets/imgs/tax.png";

// --- MODIFIED useScrollAnimation with IntersectionObserver for in/out animation ---
function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate');
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

export default function Payroll() {
  useScrollAnimation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="payroll-page">
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
      {/* NavBar */}
      <Navbar onSearchClick={() => setShowSearch((prev) => !prev)} />
      {showSearch && (
        <div className="search-bar-overlay" onClick={() => setShowSearch(false)}>
          <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
            <SearchBar onClose={() => setShowSearch(false)} />
          </div>
        </div>
      )}
      {/* Animated Background */}
      <div className="payroll-bg scroll-animate">
        <div className="payroll-main scroll-animate">
          <div className="payroll-header-row">
            <div className="payroll-header-col">
              <div className="payroll-title">Payroll Processing</div>
              <div className="payroll-desc">
                Payroll in our company refers to the systematic process of calculating and disbursing employee salaries,
                which includes basic pay, allowances, deductions (like taxes and PF), and benefits.<br />
                It ensures timely, accurate payments while maintaining compliance with legal and organizational policies.
              </div>
              <ol className="payroll-features-list">
                <li className="payroll-feature">
                  <span className="feature-title">Automated Salary Processing</span>
                  <ul>
                    <li>
                      Calculates salaries accurately based on attendance, leave, overtime, and predefined salary structures.
                    </li>
                  </ul>
                </li>
                <li className="payroll-feature">
                  <span className="feature-title">Statutory Compliance Management</span>
                  <ul>
                    <li>
                      Handles PF, ESI, TDS, and other legal deductions with automated filings and reports.
                    </li>
                  </ul>
                </li>
                <li className="payroll-feature">
                  <span className="feature-title">Pay Slip Generation & Distribution</span>
                  <ul>
                    <li>
                      Generate detailed monthly pay slips for employees and makes them accessible through the self-service portal.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="payroll-img-col">
              <img
                src={payrollImage}
                className="payroll-illustration"
                alt="Payroll Illustration"
              />
            </div>
          </div>
        </div>

        {/* Salary Structure Section */}
        <div className="salary-structure-section scroll-animate">
          <div className="salary-structure-row">
            <div className="salary-structure-img-col">
              <img
                src={salaryStructureImg}
                className="salary-structure-illustration"
                alt="Salary Structure"
              />
            </div>
            <div className="salary-structure-timeline-col">
              <div className="salary-structure-title">Salary Structure</div>
              <div className="salary-structure-timeline">
                {/* Timeline vertical */}
                <div className="timeline-line" />
                {/* Timeline items */}
                <div className="timeline-item timeline-item-1">
                  <div className="timeline-content">
                    <div className="timeline-heading1">Basic Salary</div>
                    <div className="timeline-desc1">
                      Typically 40-50% of the gross salary.<br />
                      It's the core of the salary and<br />
                      forms the basis for other components.
                    </div>
                  </div>
                  <div className="timeline-circle">01</div>
                </div>
                <div className="timeline-item timeline-item-2">
                  <div className="timeline-content">
                    <div className="timeline-heading2">House Rent Allowance (HRA)</div>
                    <div className="timeline-desc2">
                      Provided to employees to<br />
                      meet housing expenses.<br />
                      It's usually a percentage<br />
                      of the basic salary.
                    </div>
                  </div>
                  <div className="timeline-circle">02</div>
                </div>
                <div className="timeline-item timeline-item-3">
                  <div className="timeline-content">
                    <div className="timeline-heading1">Conveyance Allowance</div>
                    <div className="timeline-desc1">
                      Given to employees to<br />
                      cover transportation costs.
                    </div>
                  </div>
                  <div className="timeline-circle">03</div>
                </div>
                <div className="timeline-item timeline-item-4">
                  <div className="timeline-content">
                    <div className="timeline-heading2">Bonuses and Incentives</div>
                    <div className="timeline-desc2">
                      Performance-based pay.
                    </div>
                  </div>
                  <div className="timeline-circle">04</div>
                </div>
              </div>
              <div className="timeline-bottom-text">
                <span className="timeline-heading">Gross Salary</span>
                <br />
                Sum of all the above components before deductions.
              </div>
            </div>
          </div>
        </div>
        {/* End Salary Structure Section */}

        {/* Salary Deductions Section */}
        <div className="salary-structure-section scroll-animate">
          <div className="salary-structure-row">
            {/* Timeline and Text on the left */}
            <div className="salary-structure-timeline-col">
              <div className="salary-structure-title">Salary Deductions</div>
              <div className="salary-structure-timeline">
                <div className="timeline-line" />
                <div className="timeline-item timeline-item-1">
                  <div className="timeline-content">
                    <div className="timeline-heading1">Provident Fund (PF)</div>
                    <div className="timeline-desc1">
                      A mandatory retirement savings scheme<br />
                      where both employer and employee<br />
                      contribute 12% of the basic salary.
                    </div>
                  </div>
                  <div className="timeline-circle">01</div>
                </div>
                <div className="timeline-item timeline-item-2">
                  <div className="timeline-content">
                    <div className="timeline-heading2">Employees' State Insurance (ESI)</div>
                    <div className="timeline-desc2">
                      Applicable to employees earning ₹21,000<br />
                      or less per month. The employee<br />
                      contributes 0.75% and the employer<br />
                      3.25% of the gross salary.
                    </div>
                  </div>
                  <div className="timeline-circle">02</div>
                </div>
                <div className="timeline-item timeline-item-3">
                  <div className="timeline-content">
                    <div className="timeline-heading1">Professional Tax (PT)</div>
                    <div className="timeline-desc1">
                      Levied by state governments,<br />
                      the amount varies by state but is typically<br />
                      a nominal amount deducted monthly.
                    </div>
                  </div>
                  <div className="timeline-circle">03</div>
                </div>
                <div className="timeline-item timeline-item-4">
                  <div className="timeline-content">
                    <div className="timeline-heading2">Tax Deducted at Source (TDS)</div>
                    <div className="timeline-desc2">
                      Income tax deducted by the<br />
                      employer based on the employee's<br />
                      applicable tax slab.
                    </div>
                  </div>
                  <div className="timeline-circle">04</div>
                </div>
              </div>
            </div>
            {/* Image on the right */}
            <div className="salary-structure-img-col salary-deductions-img-col">
              <img
                src={salaryDeductionsImg}
                className="salary-structure-illustration"
                alt="Salary Deductions"
              />
            </div>
          </div>
        </div>
        {/* End Salary Deductions Section */}

        {/* Salary Table Section */}
        <div className="salary-structure-section scroll-animate">
          <div className="salary-structure-row salary-table-row">
            {/* Table on left, (no image for table) */}
            <div className="salary-table-col">
              <div className="salary-structure-title">Sample Salary Breakup Table</div>
              <div className="salary-table-wrapper">
                <table className="salary-table">
                  <thead>
                    <tr>
                      <th>Emp ID</th>
                      <th>Basic Salary</th>
                      <th>HRA</th>
                      <th>Conveyance Allowance</th>
                      <th>Special Allowance</th>
                      <th>Gross Salary</th>
                      <th>PF (12%)</th>
                      <th>ESI (0.75%)</th>
                      <th>PT</th>
                      <th>TDS</th>
                      <th>Total Deductions</th>
                      <th>Net Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>811</td>
                      <td>25,000</td>
                      <td>10,000</td>
                      <td>2,000</td>
                      <td>3,000</td>
                      <td>40,000</td>
                      <td>3,000</td>
                      <td>300</td>
                      <td>180</td>
                      <td>0</td>
                      <td>3,480</td>
                      <td>36,520</td>
                    </tr>
                    <tr>
                      <td>812</td>
                      <td>30,000</td>
                      <td>12,000</td>
                      <td>2,500</td>
                      <td>3,500</td>
                      <td>48,000</td>
                      <td>3,600</td>
                      <td>360</td>
                      <td>200</td>
                      <td>0</td>
                      <td>4,160</td>
                      <td>43,840</td>
                    </tr>
                    <tr>
                      <td>813</td>
                      <td>28,000</td>
                      <td>11,000</td>
                      <td>2,200</td>
                      <td>3,300</td>
                      <td>44,500</td>
                      <td>3,360</td>
                      <td>334</td>
                      <td>190</td>
                      <td>0</td>
                      <td>3,884</td>
                      <td>40,616</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* No image on right for this section */}
          </div>
        </div>
        {/* End Salary Table Section */}
      </div>
    </div>
  );
}