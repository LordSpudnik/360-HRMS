import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import "./TimeOffice.css";
import {
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP,
} from "react-icons/fa";
import { IoLogoFlickr, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import timeOfficeImage from "./assets/imgs/time office.png";
import attendanceIcon from "./assets/icons/attendance.png";
import overtimeIcon from "./assets/icons/overtime.png";
import reportIcon from "./assets/icons/report.png";
import lateArrivalImg from "./assets/imgs/time office_late.png";
import overtimeSectionImg from "./assets/imgs/time office_overtime.png";
import payrollImg from "./assets/imgs/time office_payroll.png";
import complianceImg from "./assets/imgs/time office_compliance.png";

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

export default function TimeOffice() {
  useScrollAnimation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="timeoffice-page">
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
      <Navbar onSearchClick={() => setShowSearch((prev) => !prev)} />
      {showSearch && (
        <div className="search-bar-overlay" onClick={() => setShowSearch(false)}>
          <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
            <SearchBar onClose={() => setShowSearch(false)} />
          </div>
        </div>
      )}

      <div className="timeoffice-bg">
        <div className="timeoffice-main scroll-animate">
          <div className="timeoffice-header-row">
            <h1 className="timeoffice-title">Time Office</h1>
          </div>
          <div className="timeoffice-desc scroll-animate">
            The Time Office in our company is<br/>
            responsible for monitoring employee attendance,<br/>
            work hours, and leave records.<br/>
            It ensures accurate tracking through bio-metric systems<br/>
            and attendance software,<br/>
            supporting payroll processing and compliance with company policies.<br/>
            This function helps maintain discipline,<br/>
            transparency, and efficient workforce management.
            <div className="timeoffice-img-illus scroll-animate">
              <img src={timeOfficeImage} alt="Time Office illustration" className="timeoffice-img-main" />
            </div>
          </div>

          <h2 className="timeoffice-keyfeatures-title scroll-animate">Key Features</h2>
          <div className="timeoffice-features-row">
            {/* Attendance & Shift Management */}
            <div className="timeoffice-feature-card scroll-animate">
              <div className="timeoffice-feature-icon">
                <img src={attendanceIcon} alt="Attendance & Shift Icon" className="timeoffice-feature-img" />
              </div>
              <div className="timeoffice-feature-title">Attendance &<br/>Shift Management</div>
              <div className="timeoffice-feature-desc">
                Tracks employee check-in/out,<br/>
                manages shifts,<br/>
                handles late/early logins,<br/>
                and supports biometric<br/>
                or manual attendance.
              </div>
            </div>
            {/* Overtime Management */}
            <div className="timeoffice-feature-card scroll-animate">
              <div className="timeoffice-feature-icon">
                <img src={overtimeIcon} alt="Overtime Management Icon" className="timeoffice-feature-img" />
              </div>
              <div className="timeoffice-feature-title">Overtime Management</div>
              <div className="timeoffice-feature-desc">
                Allows approvals,<br/>
                balance tracking, and logs<br/>
                overtime hours for<br/>
                payroll integration.
              </div>
            </div>
            {/* Employee Self-Service & Reports */}
            <div className="timeoffice-feature-card scroll-animate">
              <div className="timeoffice-feature-icon">
                <img src={reportIcon} alt="Reports Icon" className="timeoffice-feature-img" />
              </div>
              <div className="timeoffice-feature-title">Employee Self-Service<br/>& Reports</div>
              <div className="timeoffice-feature-desc">
                Employees can regularize attendance,<br/>
                view history, and generate<br/>
                reports for attendance,<br/>
                leave, and shift trends.
              </div>
            </div>
          </div>

          {/* --- SECTION: Late Arrival & Overtime Details --- */}
          <div className="timeoffice-lateovertime-section">
            {/* Late Arrival and Early Leaving */}
            <div className="late-early-box scroll-animate">
              <div className="late-early-content">
                <div className="late-early-title">Late Arrival and Early Leaving</div>
                <div className="late-early-list">
                  <b>• Policy and Recording:</b>
                  <ul>
                    <li>Late arrivals and early departures are recorded in the HRMS.</li>
                    <li>Company policy may allow a certain number of late arrivals or early leaves per month; excesses are reported to managers and may result in disciplinary action or loss of pay.</li>
                  </ul>
                  <b>• Approval Workflow:</b>
                  <ul>
                    <li>Employees must provide valid reasons for late arrival or early leaving, which are reviewed and approved/rejected by their reporting manager.</li>
                    <li>All exceptions are documented for audit and compliance purposes.</li>
                  </ul>
                </div>
              </div>
              <div className="late-early-image">
                <img src={lateArrivalImg} alt="Late Arrival illustration" className="late-early-illus-img" />
              </div>
            </div>

            {/* Overtime Management Details */}
            <div className="overtime-detail-box scroll-animate">
              <div className="overtime-image">
                <img src={overtimeSectionImg} alt="Overtime illustration" className="overtime-illus-img" />
              </div>
              <div className="overtime-content">
                <div className="overtime-title">Overtime Management</div>
                <div className="overtime-list">
                  <b>Overtime Calculation:</b>
                  <ul>
                    <li>Overtime is tracked automatically when employees work beyond standard hours or on holidays/weekends.</li>
                    <li>Overtime hours are approved by the reporting manager and recorded in the HRMS for payroll processing.</li>
                  </ul>
                  <b>Compensatory Off:</b>
                  <ul>
                    <li>Employees may opt for compensatory off (Comp Off) instead of overtime pay, subject to approval and company policy.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* --- END Late Arrival & Overtime Section --- */}


          {/* --- OD SECTION remains unchanged --- */}
          <div className="od-section scroll-animate">
            <div className="od-header-row">
              <div className="od-title-desc">
                <h2 className="od-title">On Duty (OD)</h2>
                <div className="od-desc">
                  Employees typically avail On Duty (OD) for official work conducted outside the office premises during working hours &mdash; such as client meetings, training, seminars, recruitment drives, etc. The OD ensures the employee is marked present despite not being physically in the office.
                </div>
              </div>
            </div>
            <div className="od-steps-row">
              <div className="od-step-left">
                <div className="od-step-block">
                  <div className="od-step-title">Pre-Approval Required</div>
                  <div className="od-step-desc">
                    The employee should inform their<br/>
                    reporting manager or HR in advance about<br/>
                    the need for OD and mention the reason,<br/>
                    date, time, and expected duration.
                  </div>
                </div>
                <div className="od-step-block">
                  <br/><br/><br/>
                  <div className="od-step-title">Get Manager/HR Approval</div>
                  <div className="od-step-desc">
                    The OD request must be approved by<br/>
                    the immediate manager or HR.<br/>
                    Without approval, it may be considered<br/>
                    a leave or absence.
                  </div>
                </div>
                <div className="od-step-block">
                  <br/><br/><br/>
                  <div className="od-step-title">Post-OD Reporting</div>
                  <div className="od-step-desc">
                    Submit a brief report confirming<br/>
                    the activity completed.<br/>
                    Managers may request feedback,<br/>
                    especially for client visits or external representation.
                  </div>
                </div>
              </div>
              <div className="od-vertical-line-wrap">
                {/* Numbered vertical line */}
                <div className="od-vertical-line">
                  <div className="od-step-circle">01</div>
                  <div className="od-step-line"></div>
                  <div className="od-step-circle">02</div>
                  <div className="od-step-line"></div>
                  <div className="od-step-circle">03</div>
                  <div className="od-step-line"></div>
                  <div className="od-step-circle">04</div>
                  <div className="od-step-line"></div>
                  <div className="od-step-circle">05</div>
                </div>
              </div>
              <div className="od-step-right">
                <div className="od-step-block">
                  <br/><br/><br/><br/><br/><br/><br/>
                  <div className="od-step-title">Submit OD Request</div>
                  <div className="od-step-desc">
                    Fill out the OD request form<br/>
                    (manual or digital) and include:<br/>
                    Employee name and ID, Department<br/>
                    and designation, Date and time of OD,<br/>
                    Purpose of OD, Venue (if applicable),<br/>
                    Approving authority's name
                  </div>
                </div>
                <div className="od-step-block">
                  <br/><br/><br/>
                  <div className="od-step-title">Marking OD in Attendance System</div>
                  <div className="od-step-desc">
                    The OD should be recorded separately<br/>
                    (as "On Duty" instead of Absent)<br/>
                    in the HRMS portal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --- END OD SECTION --- */}
          
          {/* --- NEW SECTION: Integration & Compliance --- */}
          <div className="timeoffice-integration-compliance-section">
            {/* Integration with Payroll */}
            <div className="integration-payroll-row scroll-animate">
              <div className="integration-payroll-card">
                <div className="integration-payroll-title">Integration with Payroll</div>
                <div className="integration-payroll-list">
                  <b>• Data Flow:</b>
                  <ul>
                    <li>Attendance, leave, and overtime data are critical inputs for payroll processing.</li>
                    <li>The HRMS ensures that only approved attendance and overtime are considered for salary calculation, deductions, and statutory compliance.</li>
                  </ul>
                </div>
              </div>
              <div className="integration-payroll-imgwrap">
                <img src={payrollImg} alt="Payroll Integration illustration" className="integration-payroll-img" />
              </div>
            </div>
            {/* Reporting and Compliance */}
            <div className="reporting-compliance-row scroll-animate">
              <div className="reporting-compliance-imgwrap">
                <img src={complianceImg} alt="Regulatory Compliance illustration" className="reporting-compliance-img" />
              </div>
              <div className="reporting-compliance-card">
                <div className="reporting-compliance-title">Reporting and Compliance</div>
                <div className="reporting-compliance-list">
                  <b>• Regular Reporting:</b>
                  <ul>
                    <li>The Time Office generates regular reports on attendance trends, absenteeism, overtime, and shift compliance for management review.</li>
                    <li>These reports support workforce planning, productivity analysis, and legal compliance.</li>
                  </ul>
                  <b>• Data Security:</b>
                  <ul>
                    <li>All attendance and time-related data are stored securely in the HRMS, with access restricted to authorized personnel.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* --- END Integration & Compliance Section --- */}
        </div>
      </div>
    </div>
  );
}