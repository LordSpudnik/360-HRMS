import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "./Components/Homepage";
import Payroll from "./Components/pages/Payroll";
import Employees from "./Components/pages/Employees";
import TimeOffice from "./Components/pages/TimeOffice";
import LeaveManagement from "./Components/pages/LeaveManagement";
import Recruitment from "./Components/pages/Recruitment";
import AboutUs from "./Components/pages/AboutUs";
import ContactUs from "./Components/pages/ContactUs";
import ScrollToTop from "./Components/pages/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/time-office" element={<TimeOffice />} />
        <Route path="/leave-management" element={<LeaveManagement />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}