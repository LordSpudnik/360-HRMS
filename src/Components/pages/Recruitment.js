import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import "./Recruitment.css";
import {
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP,
  FaUserCheck, FaClipboardList, FaUserFriends, FaBullhorn, FaUserTie, FaIdBadge, FaHandshake, FaUserPlus,
  FaCloud, FaRegAddressCard, FaLock, FaUserCog, FaAward,
  FaArrowRight, FaArrowDown, FaArrowLeft
} from "react-icons/fa";
import { IoLogoFlickr, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "./Footer";

// Scroll animation hook (same logic as homepage/employees)
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

export default function Recruitment() {
  useScrollAnimation();
  const [showSearch, setShowSearch] = useState(false);

  // Helper for arrow between cards
  const ArrowRightIcon = () => (
    <span className="recruitment-arrow-icon"><FaArrowRight /></span>
  );
  const ArrowDownIcon = () => (
    <div className="recruitment-arrow-row"><FaArrowDown /></div>
  );
  const ArrowLeftIcon = () => (
    <span className="recruitment-arrow-icon"><FaArrowLeft /></span>
  );

  return (
    <div className="recruitment-page">
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

      <div className="recruitment-bg">
        <div className="recruitment-main scroll-animate">
          <h1 className="recruitment-title">Recruitment</h1>
          <div className="recruitment-desc">
            Our company follows a structured recruitment process led by HR, involving need assessment, job posting, screening, interviews, and thorough background checks to hire qualified candidates for our Sales, IT, and HR teams. The process ensures each new hire aligns with our performance standards, company culture, and commitment to delivering excellent client service.
          </div>
          {/* Recruitment Process Flow */}
          <div className="recruitment-flow scroll-animate">
            {/* Row 1 */}
            <div className="recruitment-row">
              <div className="recruitment-card scroll-animate">
                <div className="recruitment-card-title">Identify hiring needs</div>
                <div className="recruitment-card-icon"><FaUserCheck /></div>
                <div className="recruitment-card-desc">
                  Department heads assess staffing requirements based on business growth, performance gaps, or new project demands. These needs are communicated to HR.
                </div>
              </div>
              <ArrowRightIcon />
              <div className="recruitment-card scroll-animate">
                <div className="recruitment-card-title">Job Description & Approval</div>
                <div className="recruitment-card-icon"><FaClipboardList /></div>
                <div className="recruitment-card-desc">
                  HR collaborates with the relevant team to define role responsibilities, qualifications, and expectations. The finalized job description is approved for posting.
                </div>
              </div>
            </div>
            <div className="Down1">
              <ArrowDownIcon />
            </div>
            {/* Row 2 */}
            <div className="recruitment-row">
              <div className="recruitment-card scroll-animate">
                <div className="recruitment-card-title">Application Screening</div>
                <div className="recruitment-card-icon"><FaUserFriends /></div>
                <div className="recruitment-card-desc">
                  HR shortlists candidates based on experience, communication skills, industry knowledge, and alignment with the role’s requirements.
                </div>
              </div>
              <ArrowLeftIcon />
              <div className="recruitment-card scroll-animate">
                <div className="recruitment-card-title">Job Posting &<br />Candidate Sourcing</div>
                <div className="recruitment-card-icon"><FaBullhorn /></div>
                <div className="recruitment-card-desc">
                  Roles are advertised on job portals, professional networks (like LinkedIn), and through employee referrals. For sales roles, we also tap into local recruitment drives and industry-specific channels.
                </div>
              </div>
            </div>
            <div className="Down2">
              <ArrowDownIcon />
            </div>
            {/* Row 3 */}
            <div className="recruitment-row">
              <div className="recruitment-card scroll-animate">
                <div className="recruitment-card-title">Interview Process</div>
                <div className="recruitment-card-icon"><FaUserTie /></div>
                <div className="recruitment-card-desc">
                  <b>Sales Team:</b> Focus on communication, persuasion skills, industry knowledge, and target-driven mindset.<br />
                  <b>IT Team:</b> Includes technical assessments, problem-solving tasks, and project experience evaluation.<br />
                  <b>HR Team:</b> Evaluated on people management, compliance knowledge, and organizational skills.<br />
                  All candidates also undergo behavioral interviews to ensure cultural fit.
                </div>
              </div>
              <ArrowRightIcon />
              <div className="recruitment-card scroll-animate">
                <div className="recruitment-card-title">Background Checks</div>
                <div className="recruitment-card-icon"><FaIdBadge /></div>
                <div className="recruitment-card-desc">
                  We conduct thorough checks on employment history, qualifications, and, where applicable, industry certifications (especially for sales and IT roles).
                </div>
              </div>
            </div>
            <div className="Down1">
              <ArrowDownIcon />
            </div>
            {/* Row 4 */}
            <div className="recruitment-row">
              <div className="recruitment-card scroll-animate">
                <div className="recruitment-card-title">Onboarding</div>
                <div className="recruitment-card-icon"><FaUserPlus /></div>
                <div className="recruitment-card-desc">
                  New hires go through an orientation program that includes company values, policies, compliance training, and team integration.
                </div>
              </div>
              <ArrowLeftIcon />
              <div className="recruitment-card scroll-animate">
                <div className="recruitment-card-title">Final Selection & Offer</div>
                <div className="recruitment-card-icon"><FaHandshake /></div>
                <div className="recruitment-card-desc">
                  After management review, selected candidates receive an offer. HR handles negotiations, documentation, and joining formalities.
                </div>
              </div>
            </div>
          </div>

          {/* Candidate Tracking Section */}
          <div className="candidate-tracking-section scroll-animate">
            <h2 className="candidate-tracking-title">Candidate Tracking</h2>
            <div className="candidate-tracking-desc">
              <ul>
                <li>
                  Throughout the recruitment process, all candidate interactions, application statuses, and assessment results are tracked systematically.
                  This ensures that the HR team can monitor each candidate’s progress through the various stages of hiring.
                </li>
              </ul>
            </div>
            <div className="candidate-tracking-cards">
              <div className="candidate-tracking-card">
                <div className="candidate-tracking-icon"><FaCloud /></div>
                <div className="candidate-tracking-card-title">Cloud Storage</div>
                <div className="candidate-tracking-card-desc">
                  All data, including applications, resumes, interview notes, and assessment results, are stored in secure cloud storage.
                  This allows authorized HR personnel to access candidate information from any location with internet connectivity.
                </div>
              </div>
              <div className="candidate-tracking-card">
                <div className="candidate-tracking-icon"><FaUserCog /></div>
                <div className="candidate-tracking-card-title">HRMS Functions</div>
                <div className="candidate-tracking-card-desc">
                  The HRMS integrates recruitment, employee data management, payroll, attendance, and performance analysis,
                  ensuring a centralized and organized data repository.
                </div>
              </div>
              <div className="candidate-tracking-card">
                <div className="candidate-tracking-icon"><FaLock /></div>
                <div className="candidate-tracking-card-title">Data Security</div>
                <div className="candidate-tracking-card-desc">
                  Internal policies and controls are in place to prevent unauthorized access, loss, or misuse of candidate data.
                  Only authorized HR and recruitment team members can access sensitive information.
                </div>
              </div>
              <div className="candidate-tracking-card">
                <div className="candidate-tracking-icon"><FaRegAddressCard /></div>
                <div className="candidate-tracking-card-title">Data Retention</div>
                <div className="candidate-tracking-card-desc">
                  Unsuccessful candidate data is typically retained for a set period (e.g., six months) after the recruitment process,
                  after which it is deleted or destroyed unless the candidate provides consent for longer retention.
                </div>
              </div>
              <div className="candidate-tracking-card">
                <div className="candidate-tracking-icon"><FaAward /></div>
                <div className="candidate-tracking-card-title">Successful Candidates</div>
                <div className="candidate-tracking-card-desc">
                  For those hired, their data is transferred to the employee HR file and retained for the duration of employment.
                </div>
              </div>
            </div>
          </div>
          {/* End Candidate Tracking Section */}
        </div>
      </div>
      <Footer />
    </div>
  );
}