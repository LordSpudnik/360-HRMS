import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ContactUs.css";
import {
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP
} from "react-icons/fa";
import { IoLogoFlickr, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import SearchBar from "./SearchBar";

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

export default function ContactUs() {
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const containerVariants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
  };

  const successVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 1800);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData((fd) => ({
      ...fd,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="contactus-page">
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
        className="contact-container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          minHeight: "560px",
          width: "100vw",
          overflowX: "hidden"
        }}
      >
        <div className="contact-main scroll-animate">
          <h1 className="contact-title">Send us a Message</h1>
          <p className="contact-desc scroll-animate">
            We'd love to hear from you! Fill out the form below and our team will get back to you shortly.
          </p>
          {submitted ? (
            <motion.div
              className="contact-success scroll-animate"
              variants={successVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p>Thank you for contacting us! We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form className="contact-form" autoComplete="off">
              <label ref={nameRef} className="scroll-animate">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name *"
                  autoComplete="off"
                />
              </label>
              <label ref={emailRef} className="scroll-animate">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email *"
                  autoComplete="off"
                />
              </label>
              <label ref={subjectRef} className="scroll-animate">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  autoComplete="off"
                />
              </label>
              <label ref={messageRef} className="scroll-animate">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Message"
                  autoComplete="off"
                />
              </label>
              <button type="button" className="contact-submit-btn scroll-animate">Submit</button>
            </form>
          )}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}