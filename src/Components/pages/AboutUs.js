import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <motion.div
      className="about-us-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      style={{ minHeight: "80vh", padding: "3rem" }}
    >
      <h1>About Us Page</h1>
      {/* About Us component content here */}
    </motion.div>
  );
}