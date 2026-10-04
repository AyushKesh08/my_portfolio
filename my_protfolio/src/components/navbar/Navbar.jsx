import "./Navbar.css";
import { useState } from "react";
import profileImage from "../../assets/ayush.jpeg";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <a href="#hero" className="nav-logo">
        <img src={profileImage} alt="Ayush" />
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a>
        <a href="#leetcode" onClick={() => setMenuOpen(false)}>LeetCode</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

      </div>

      <a
        href="/Ayush_Resume.pdf"
        className="resume-btn"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;