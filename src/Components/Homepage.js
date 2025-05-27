import React, { useState } from "react";
import "./Homepage.css";
import {
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn,
  FaPinterestP, FaLock, FaCogs,
  FaBalanceScale, FaHandsHelping, FaChartBar, FaPuzzlePiece, FaAward, FaQuoteLeft
} from "react-icons/fa";
import { IoLogoFlickr, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import employeeIcon from "./pages/assets/icons/employees.png";
import timeIcon from "./pages/assets/icons/time.png";
import payrollIcon from "./pages/assets/icons/payroll.png";
import leaveIcon from "./pages/assets/icons/view doc.png";
import recruitmentIcon from "./pages/assets/icons/add candidate.png";

import ntcLogo from "./pages/assets/icons/NTC.png";
import iljinLogo from "./pages/assets/icons/ILJIN.png";
import zensys from "./pages/assets/icons/zensys.png";
import sbltLogo from "./pages/assets/icons/SBLT.png";
import svcLogo from "./pages/assets/icons/SVC.png";

import CountUpOnView from "./CountUpOnView";
import SearchBar from "./pages/SearchBar";
import Navbar from "./pages/Navbar";
import { useEffect } from "react";

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");
    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scrolled");
        } else {
          entry.target.classList.remove("scrolled");
        }
      });
    }
    // Lower threshold for snappier trigger, can be tuned
    const observer = new window.IntersectionObserver(callback, { threshold: 0.13 });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Homepage = () => {
  useScrollAnimation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="homepage">
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

      <div className="hero-section">
        <h1>Empowering Your Workforce With Smart HR Solutions</h1>
        <p>Streamline HR Operations with our intuitive and efficient HRMS Platform.</p>
        <div className="services">
          <div className="service scroll-animate">
            <img src={employeeIcon} alt="Employee Management" />
            <div className="service-title">Employee Management</div>
          </div>
          <div className="service scroll-animate">
            <img src={timeIcon} alt="Time Office" />
            <div className="service-title">Time Office</div>
          </div>
          <div className="service scroll-animate">
            <img src={payrollIcon} alt="Payroll" />
            <div className="service-title">Payroll</div>
          </div>
          <div className="service scroll-animate">
            <img src={leaveIcon} alt="Leave Management" />
            <div className="service-title">Leave Management</div>
          </div>
          <div className="service scroll-animate">
            <img src={recruitmentIcon} alt="Recruitment" />
            <div className="service-title">Recruitment</div>
          </div>
        </div>
      </div>

      {/* --- Scroll-animated About Section --- */}
      <section className="about-section scroll-animate">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-desc">
          Our finance company is backed by a team of experienced, reliable professionals committed to delivering
          precise, timely, and personalized financial solutions. With a strong focus on consistency and client care,
          our staff ensures a seamless and trustworthy experience at every step.
        </p>
        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-icon">
              <span role="img" aria-label="target">🎯</span>
            </div>
            <div className="about-card-title">Reliable and Efficient</div>
            <div className="about-card-desc">
              Professionals who consistently deliver high-quality work on time with precision and accountability.
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-icon">
              <span role="img" aria-label="stability">⚖️</span>
            </div>
            <div className="about-card-title">Stability</div>
            <div className="about-card-desc">
              Maintaining the same relationship manager over time ensures consistency and fosters trust, supported by strong employee retention and effective HR practices.
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-icon">
              <span role="img" aria-label="client-focused">🤝</span>
            </div>
            <div className="about-card-title">Client-Focused</div>
            <div className="about-card-desc">
              A client-focused culture is fostered through HR-driven training in customer service and empathy, ensuring employees consistently prioritize client needs and address concerns effectively.
            </div>
          </div>
        </div>
        <div className="about-numbers-label">Proven by Numbers</div>
        <div className="about-numbers scroll-animate">
          <div className="about-number-item">
            <div className="about-number-title">Years of Experience</div>
            <div className="about-number-value">
              <CountUpOnView end={5} />
            </div>
          </div>
          <div className="about-number-item">
            <div className="about-number-title">Total Projects</div>
            <div className="about-number-value">
              <CountUpOnView end={200} suffix="+" />
            </div>
          </div>
          <div className="about-number-item">
            <div className="about-number-title">New Client Every Year</div>
            <div className="about-number-value">
              <CountUpOnView end={10} suffix="+" />
            </div>
          </div>
          <div className="about-number-item">
            <div className="about-number-title">Happy Clients</div>
            <div className="about-number-value">
              <CountUpOnView end={50} suffix="+" />
            </div>
          </div>
        </div>
      </section>
      {/* --- End About Section --- */}

      {/* --- Scroll-animated Why Smart HRMS Works Section --- */}
      <section className="why-hrms-section scroll-animate">
        <h2 className="why-hrms-title">From Chaos to Clarity:<br />Why Smart HRMS Works</h2>
        <div className="why-hrms-cards">
          <div className="why-hrms-card">
            <div className="why-hrms-icon">📈</div>
            <div className="why-hrms-card-title">Better<br />Decision-Making</div>
            <div className="why-hrms-card-desc">
              Provides data-driven insights that help in workforce planning and management.
            </div>
          </div>
          <div className="why-hrms-card">
            <div className="why-hrms-icon">👔</div>
            <div className="why-hrms-card-title">Centralized Employee<br />Data</div>
            <div className="why-hrms-card-desc">
              Stores all HR data (attendance, leave, performance, etc.) in one place, making HR processes efficient and organized.
            </div>
          </div>
          <div className="why-hrms-card">
            <div className="why-hrms-icon">⭐️⭐️⭐️</div>
            <div className="why-hrms-card-title">Enhanced Employee<br />Experience</div>
            <div className="why-hrms-card-desc">
              Offers self-service options and smoother communication, improving satisfaction.
            </div>
          </div>
          <div className="why-hrms-card">
            <div className="why-hrms-icon">☁️</div>
            <div className="why-hrms-card-title">Cloud-Based<br />Access</div>
            <div className="why-hrms-card-desc">
              Enables secure access from anywhere—ideal for hybrid work models and branch-level coordination.
            </div>
          </div>
          <div className="why-hrms-card">
            <div className="why-hrms-icon">⚙️</div>
            <div className="why-hrms-card-title">Improved<br />Efficiency</div>
            <div className="why-hrms-card-desc">
              Automates routine HR tasks, saving time and reducing manual work.
            </div>
          </div>
          <div className="why-hrms-card">
            <div className="why-hrms-icon">🗄️</div>
            <div className="why-hrms-card-title">Scalable &<br />Customizable</div>
            <div className="why-hrms-card-desc">
              Grows with your organization and can be tailored to meet the specific needs of a finance company like CAFS.
            </div>
          </div>
        </div>
      </section>
      {/* --- End Why Smart HRMS Section --- */}

      {/* --- Scroll-animated What Sets Us Apart Section --- */}
      <section className="apart-section scroll-animate">
        <h2 className="apart-title">What Sets Us Apart</h2>
        <div className="apart-list-wrapper">
          <ul className="apart-list">
            <li>
              <FaChartBar className="apart-icon" />
              <div>
                <span className="apart-list-title">Deep Domain Expertise</span>
                <p>With strong roots in the finance industry, our solutions are designed to meet the unique needs of HR and payroll teams—ensuring relevance, precision, and industry compliance.</p>
              </div>
            </li>
            <li>
              <FaBalanceScale className="apart-icon" />
              <div>
                <span className="apart-list-title">Built-In Regulatory Compliance</span>
                <p>Stay stress-free with automated adherence to Indian labor laws—covering PF, ESI, TDS, gratuity, and more—minimizing risk and ensuring audit-readiness.</p>
              </div>
            </li>
            <li>
              <FaLock className="apart-icon" />
              <div>
                <span className="apart-list-title">Strong Data Security</span>
                <p>Your data is safe with us. We ensure robust encryption, secure access controls, and best-in-class data protection protocols—perfect for handling sensitive HR and payroll information.</p>
              </div>
            </li>
            <li>
              <FaCogs className="apart-icon" />
              <div>
                <span className="apart-list-title">Cost-Effective Automation</span>
                <p>Cut down on manual work and operational costs. Our smart automation tools improve accuracy, boost productivity, and deliver real ROI.</p>
              </div>
            </li>
          </ul>
          <ul className="apart-list">
            <li>
              <FaPuzzlePiece className="apart-icon" />
              <div>
                <span className="apart-list-title">All-in-One HRMS Platform</span>
                <p>From payroll and attendance to appraisals and compliance, our comprehensive HRMS helps you streamline all HR operations on a single, unified platform.</p>
              </div>
            </li>
            <li>
              <FaChartBar className="apart-icon" />
              <div>
                <span className="apart-list-title">Customizable & Scalable</span>
                <p>Whether you're a startup, SME, or expanding enterprise, our solutions adapt to your size, sector, and pace making growth seamless and sustainable.</p>
              </div>
            </li>
            <li>
              <FaHandsHelping className="apart-icon" />
              <div>
                <span className="apart-list-title">Ongoing Support & Training</span>
                <p>We go beyond software. Our team provides continuous support, onboarding, and user training to ensure smooth implementation and user confidence.</p>
              </div>
            </li>
            <li>
              <FaAward className="apart-icon" />
              <div>
                <span className="apart-list-title">Trust Backed by Experience</span>
                <p>As part of the reputable CAFS Group, our credibility and long-standing client relationships speak for themselves. Partner with us for reliable, future-ready HR tech.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* --- End What Sets Us Apart Section --- */}

      {/* --- Scroll-animated Client Portfolio Section --- */}
      <section className="client-section scroll-animate">
        <h2 className="client-title">Our Client Portfolio</h2>
        <p className="client-desc">
          CAFS Infotech has established itself as a reliable IT partner for a wide range of clients.<br />
          CAFS Infotech continues to be a key player in Chennai’s IT services sector, with a proven track record and a diverse client base.
        </p>
        <div className="client-logos">
          <img src={ntcLogo} alt="NTC" className="client-logo" />
          <img src={iljinLogo} alt="ILJIN" className="client-logo" />
          <img src={zensys} alt="Client 3" className="client-logo" />
          <img src={sbltLogo} alt="SBLT" className="client-logo" />
          <img src={svcLogo} alt="SVC" className="client-logo" />
        </div>
      </section>
      {/* --- End Client Portfolio Section --- */}

      {/* --- Scroll-animated Voices of Trust (Testimonial) Section --- */}
      <section className="testimonial-section scroll-animate">
        <h2 className="testimonial-title">Voices of Trust</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <FaQuoteLeft className="testimonial-quote-icon" />
            <p>
              CAFS Infotech work on our website and Internet marketing has made a significant difference to our business.<br /><br />
              We’ve seen a 425% increase in quote requests from the website which has been remarkable.
            </p>
          </div>
          <div className="testimonial-card">
            <FaQuoteLeft className="testimonial-quote-icon" />
            <p>
              I have been involved in big projects for major corporations and the team at CAFS Infotech is the best that I have worked with.<br /><br />
              They are timely, efficient and use best practices in their development work. They move our project along quickly and keep us agile enough to be competitive. I would recommend them to anyone.
            </p>
          </div>
          <div className="testimonial-card">
            <FaQuoteLeft className="testimonial-quote-icon" />
            <p>
              Our company product is successfully completed with 100% satisfaction. Overall, it’s pleasant to work with you. Undoubtedly suggested and thank you for the work.
            </p>
          </div>
          <div className="testimonial-card">
            <FaQuoteLeft className="testimonial-quote-icon" />
            <p>
              Thank you so much for your help in creating our new website. Your expertise and professionalism were second to none.<br /><br />
              The resulting website looks amazing, and we can’t wait to use it as the primary source of information for our customers.
            </p>
          </div>
        </div>
      </section>
      {/* --- End Testimonial Section --- */}
    </div>
  );
};

export default Homepage;