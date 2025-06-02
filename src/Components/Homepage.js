import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

import CountUpOnView from "./pages/CountUpOnView";
import SearchBar from "./pages/SearchBar";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

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

const reviews = [
  {
    text: "The level of expertise and customer service provided was outstanding. The team was responsive to our needs and always available to answer our questions, making the process efficient and stress-free.",
  },
  {
    text: "Working with this team has been a seamless experience from start to finish. Their professionalism, attention to detail, and commitment to delivering on time exceeded our expectations. We look forward to collaborating again in the future.",
  },
  {
    text: "We were impressed by the quality of service and the tailored solutions offered to meet our specific requirements. The company demonstrated reliability, transparency, and a genuine care for client satisfaction.",
  },
  {
    text: "Excellent communication, timely delivery, and exceptional results! We highly recommend their services to anyone seeking a trustworthy and capable partner for their business needs.",
  },
];

const whoWeAreFeatures = [
  {
    icon: <span role="img" aria-label="target">🎯</span>,
    title: "Reliable and Efficient",
    desc: "Professionals who consistently deliver high-quality work on time with precision and accountability."
  },
  {
    icon: <span role="img" aria-label="stability">⚖️</span>,
    title: "Stability",
    desc: "Maintaining the same relationship manager over time ensures consistency and fosters trust, supported by strong employee retention and effective HR practices."
  },
  {
    icon: <span role="img" aria-label="client-focused">🤝</span>,
    title: "Client-Focused",
    desc: "A client-focused culture is fostered through HR-driven training in customer service and empathy, ensuring employees consistently prioritize client needs and address concerns effectively."
  },
  {
    icon: <span role="img" aria-label="innovation">💡</span>,
    title: "Innovation-Driven",
    desc: "We embrace modern technology and continuous improvement, delivering creative solutions that keep clients ahead in a fast-changing world."
  },
  {
    icon: <span role="img" aria-label="integrity">🛡️</span>,
    title: "Integrity & Trust",
    desc: "Honesty and transparency are at the heart of our business, building long-term relationships based on trust and ethical conduct."
  },
  {
    icon: <span role="img" aria-label="support">🧑‍💼</span>,
    title: "Responsive Support",
    desc: "Our team provides prompt, attentive support to every client, ensuring quick resolutions and continuous satisfaction at all times."
  }
];

const Homepage = () => {
  useScrollAnimation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
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
        className="homepage"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
      <div className="hero-section">
        <h1>Empowering Your Workforce With Smart HR Solutions</h1>
        <p>Streamline HR Operations with our intuitive and efficient HRMS Platform.</p>
        <div className="services">
          <div className="service scroll-animate">
            <img src={employeeIcon} alt="Employee Management" loading="lazy" />
            <div className="service-title">Employee Management</div>
          </div>
          <div className="service scroll-animate">
            <img src={timeIcon} alt="Time Office" loading="lazy" />
            <div className="service-title">Time Office</div>
          </div>
          <div className="service scroll-animate">
            <img src={payrollIcon} alt="Payroll" loading="lazy" />
            <div className="service-title">Payroll</div>
          </div>
          <div className="service scroll-animate">
            <img src={leaveIcon} alt="Leave Management" loading="lazy" />
            <div className="service-title">Leave Management</div>
          </div>
          <div className="service scroll-animate">
            <img src={recruitmentIcon} alt="Recruitment" loading="lazy" />
            <div className="service-title">Recruitment</div>
          </div>
        </div>
      </div>

      {/* --- Who We Are Section --- */}
      <section className="about-section-v2 scroll-animate">
        <div className="about-v2-header">
          <h2 className="about-title-v2">Who We Are</h2>
          <p className="about-desc-v2">
            Our finance company is backed by a team of experienced, reliable professionals committed to delivering
            precise, timely, and personalized financial solutions. With a strong focus on consistency and client care,
            our staff ensures a seamless and trustworthy experience at every step.
          </p>
        </div>
        <div className="about-v2-features-grid who-we-are-rows">
          {whoWeAreFeatures.map((feature, idx) => (
            <div className="about-v2-feature who-we-are-feature" key={idx}>
              <div className="about-v2-feature-circle">
                {feature.icon}
              </div>
              <div>
                <div className="about-v2-feature-title">{feature.title}</div>
                <div className="about-v2-feature-desc">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* --- Proven by Numbers Card */}
        <div className="about-v2-stats-card about-v2-stats-modern about-v2-stats-below">
          <div className="about-v2-stats-title about-v2-stats-modern-title">Proven by Numbers</div>
          <div className="about-v2-stats-modern-grid stats-four-in-row">
            <div className="about-v2-stats-modern-item">
              <div className="about-v2-stats-modern-icon">⏳</div>
              <div className="about-v2-stats-modern-value">
                <CountUpOnView end={5} />
              </div>
              <div className="about-v2-stats-modern-label">Years of Experience</div>
            </div>
            <div className="about-v2-stats-modern-item">
              <div className="about-v2-stats-modern-icon">📁</div>
              <div className="about-v2-stats-modern-value">
                <CountUpOnView end={200} suffix="+" />
              </div>
              <div className="about-v2-stats-modern-label">Total Projects</div>
            </div>
            <div className="about-v2-stats-modern-item">
              <div className="about-v2-stats-modern-icon">🆕</div>
              <div className="about-v2-stats-modern-value">
                <CountUpOnView end={10} suffix="+" />
              </div>
              <div className="about-v2-stats-modern-label">New Client Every Year</div>
            </div>
            <div className="about-v2-stats-modern-item">
              <div className="about-v2-stats-modern-icon">😊</div>
              <div className="about-v2-stats-modern-value">
                <CountUpOnView end={50} suffix="+" />
              </div>
              <div className="about-v2-stats-modern-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
      {/* --- End About Section --- */}

      {/* --- Why Smart HRMS Works --- */}
      <section className="why-hrms-section scroll-animate">
        <h2 className="why-hrms-title">From Chaos to Clarity:<br />Why 360 HRMS Works</h2>
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
              Grows with your organization and can be tailored to meet the specific needs of a finance company like 360 HRMS.
            </div>
          </div>
        </div>
      </section>
      {/* --- End Why Smart HRMS Section --- */}

      {/* --- What Sets Us Apart Section --- */}
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
                <p>As part of the reputable 360 HRMS Group, our credibility and long-standing client relationships speak for themselves. Partner with us for reliable, future-ready HR tech.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* --- End What Sets Us Apart Section --- */}

      {/* --- Client Portfolio Section --- */}
      <section className="client-section scroll-animate">
        <h2 className="client-title">Our Client Portfolio</h2>
        <p className="client-desc">
          360 HRMS has established itself as a reliable IT partner for a wide range of clients.<br />
          360 HRMS continues to be a key player in Chennai’s IT services sector, with a proven track record and a diverse client base.
        </p>
        <div className="client-logos">
          <img src={ntcLogo} alt="NTC" className="client-logo" loading="lazy" />
          <img src={iljinLogo} alt="ILJIN" className="client-logo" loading="lazy" />
          <img src={zensys} alt="Client 3" className="client-logo" loading="lazy" />
          <img src={sbltLogo} alt="SBLT" className="client-logo" loading="lazy" />
          <img src={svcLogo} alt="SVC" className="client-logo" loading="lazy" />
        </div>
      </section>
      {/* --- End Client Portfolio Section --- */}

      {/* --- Voices of Trust Section --- */}
      <section className="testimonial-section-v2 scroll-animate">
        <h2 className="testimonial-title-v2">Voices of Trust</h2>
        <div className="testimonial-grid-v2">
          {reviews.map((review, idx) => (
            <div className="testimonial-card-v2" key={idx}>
              <div className="testimonial-quote-icon-v2">
                <FaQuoteLeft />
              </div>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* --- End Testimonial Section --- */}
      <br /> <br />
      <Footer />
    </motion.div>
    </div>
  );
};

export default Homepage;