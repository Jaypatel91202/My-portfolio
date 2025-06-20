import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;
      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(`#${section.id}`);
        }
      });
      if (window.scrollY === 0) {
        setActiveSection("#home");
      }
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);
  const toggleHeader = () => setHeaderVisible(!isHeaderVisible);
  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    );
  };
  const handleNavigation = (href) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href);
      }
    }, 100);
  };

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        isHeaderVisible ? "header-show" : ""
      }`}
      ref={headerRef}
    >
      <i
        className={`header-toggle d-xl-none bi ${
          isHeaderVisible ? "bi-x" : "bi-list"
        }`}
        onClick={toggleHeader}
      ></i>
     
      <Link
        to="/"
        className="logo d-flex align-items-center justify-content-center"
        style={{ textDecoration: "none" }}
      >
        <h1 className="sitename mt-5">Deep Patel</h1>
      </Link>
      <div className="social-links text-center">
        <a
          href="mailto:jaypatel91202@gmail.com"
          className="icon gmail"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email Jay"
        >
          <i className="bi bi-envelope-fill"></i>
        </a>
        <a
          href="https://github.com/Jaypatel91202"
          className="icon github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Jay patel's GitHub profile"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jay-patel09/"
          className="icon linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Jay on LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          {[
            { href: "#home", icon: "house", label: "Home" },
            { href: "#about", icon: "person", label: "About" },
            { href: "#resume", icon: "file-earmark-text", label: "Resume" },
            { href: "#contact", icon: "envelope", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                to="/"
                onClick={() => {
                  setHeaderVisible(false);
                  handleNavigation(item.href);
                }}
                className={activeSection === item.href ? "active" : ""}
                style={{ textDecoration: "none" }}
              >
                <i className={`bi bi-${item.icon} navicon`}></i> {item.label}
              </Link>
            </li>
          ))}
          <li className="theme-toggle">
            <span id="theme-label" className="toggle-label">
              Theme
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleThemeChange}
                aria-labelledby="theme-label"
              />
              <span className="slider"></span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
