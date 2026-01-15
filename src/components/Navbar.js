import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/images/logo.png";
import "./css/navBar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ContactUsModal from "../screens/ContactUsModal";

// Enhanced navigation configuration
// Navigation config
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    // subPaths: [
    //   { name: "Web Development", path: "/services/web-dev" },
    //   { name: "App Development", path: "/services/app-dev" },
    // ],
  },
  { name: "Products", path: "/Product" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>

      <nav className="navbar " role="navigation" aria-label="Main navigation">
        <div className="navbar-logo">
          <NavLink to="/" aria-label="Homepage">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </a>


        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="nav-item"
              aria-haspopup={link.subPaths ? "true" : undefined}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-expanded={link.subPaths ? "false" : undefined}
              >
                {link.name}
              </NavLink>
              {link.subPaths && (
                <ul className="dropdown" role="menu" aria-label={`${link.name} submenu`}>
                  {link.subPaths.map((sub, subIdx) => (
                    <li key={subIdx} role="none">
                      <NavLink
                        to={sub.path}
                        className={({ isActive }) =>
                          isActive ? "nav-link dropdown-link active" : "nav-link dropdown-link"
                        }
                        role="menuitem"
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setContactModalOpen(true)}
          className="hidden md:inline-flex group items-center gap-2 rounded-xl px-5 py-2 
             border border-brand-secondary-hover 
             text-brand-secondary 
             hover:bg-brand-secondary-hover 
             shadow-glow transition"
        >
          Get in Touch
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavbar}
          className="menu-btn"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <button className="close-btn" onClick={toggleNavbar} aria-label="Close menu">
          <XMarkIcon className="h-6 w-6" />
        </button>
        <ul>
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className="nav-link"
                onClick={toggleNavbar}
                role="menuitem"
              >
                {link.name}
              </NavLink>
              {link.subPaths && (
                <ul className="mobile-submenu">
                  {link.subPaths.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <NavLink
                        to={sub.path}
                        className="nav-link"
                        onClick={toggleNavbar}
                        role="menuitem"
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}

      {isOpen && <div className="overlay" onClick={toggleNavbar} tabIndex={-1}></div>}

      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      {isOpen && <div className="overlay" onClick={toggleNavbar}></div>}

    </>
  );
};

export default Navbar;
