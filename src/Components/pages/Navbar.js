import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Employees", to: "/employees" },
  { label: "Time Office", to: "/time-office" },
  { label: "Payroll", to: "/payroll" },
  { label: "Leave Management", to: "/leave-management" },
  { label: "Recruitment", to: "/recruitment" },
  { label: "About Us", to: "/about-us" }
];

export default function Navbar({ onSearchClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">360<span>HRMS</span></div>
      <div className="nav-links">
        {navItems.map(item => (
          <a
            key={item.to}
            href={item.to}
            className={location.pathname === item.to || (item.to === "/" && location.pathname === "/") ? "active" : ""}
            onClick={e => {
              e.preventDefault();
              navigate(item.to);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
      <FaSearch
        style={{ fontSize: "1.3rem", cursor: "pointer" }}
        onClick={onSearchClick}
        aria-label="Open search"
      />
    </div>
  );
}