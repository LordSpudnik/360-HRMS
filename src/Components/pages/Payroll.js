import React from "react";
import { motion } from "framer-motion";
import "./Payroll.css";

export default function Payroll() {
  return (
    <motion.div
      className="payroll-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      style={{ minHeight: "80vh", padding: "3rem" }}
    >
      <h1>Payroll Page</h1>
      {/* Payroll component content here */}
    </motion.div>
  );
}