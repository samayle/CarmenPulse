import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
      <div className="portfolio-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-logo">SG</div>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </div>

          <div className="nav-actions">
            <a
              href="https://github.com/samayle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samantha-gayle-o-402718278/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
            >
              LinkedIn
            </a>

            <button
              className={`theme-switch ${darkMode ? "active" : ""}`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className="theme-switch-thumb"></span>
            </button>

            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="hero-subtitle">I am Samantha Gayle Oliveros</p>
            <h1 className="hero-title">
              BSIT Student &<br />
              UI/UX Developer
            </h1>
            <p className="hero-desc">
              Detail-oriented 3rd-year IT student at Liceo de Cagayan University
              combining 6+ years of freelance writing and editorial precision
              with hands-on full-stack development.
            </p>
            <a href="#projects" className="hero-cv-btn">
              View Projects
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="content-section">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle-center">
            Designing clean, scalable, responsive digital experiences
          </p>
          <div className="cards-grid">
            <div className="card">
              <h3>UI/UX Design</h3>
              <p>
                Creating user-focused layouts with clear structure, smooth
                navigation, and strong visual hierarchy.
              </p>
            </div>
            <div className="card">
              <h3>Full-Stack & Frontend</h3>
              <p>
                Building responsive interfaces using Angular, Hono, and clean
                component architecture.
              </p>
            </div>
            <div className="card">
              <h3>Editorial & Content</h3>
              <p>
                Delivering high-quality technical writing, proofreading, and
                structured documentation.
              </p>
            </div>
            <div className="card">
              <h3>Virtual Assistance</h3>
              <p>
                Managing administrative tasks, calendar organization, and
                reliable professional client support.
              </p>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="content-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            Versatile 3rd-year Information Technology student and seasoned
            Freelance Writer with an extensive background in client-focused
            content creation, administrative support, and leadership as the SBO
            Secretary. Adept at translating complex requirements into polished,
            user-friendly digital solutions.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="content-section">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle-center">
            Crafting seamless UI/UX and clean code
          </p>

          <div className="cards-grid">
            <div className="card">
              <h3>Frontend & UI/UX</h3>
              <div className="pill-container">
                <span className="skill-pill">Angular</span>
                <span className="skill-pill">Figma</span>
                <span className="skill-pill">Responsive Design</span>
                <span className="skill-pill">SCSS Layouts</span>
              </div>
            </div>

            <div className="card">
              <h3>Backend & APIs</h3>
              <div className="pill-container">
                <span className="skill-pill">Hono Framework</span>
                <span className="skill-pill">RESTful APIs</span>
                <span className="skill-pill">Signals-based APIs</span>
              </div>
            </div>

            <div className="card">
              <h3>Design Tools</h3>
              <div className="pill-container">
                <span className="skill-pill">Canva</span>
                <span className="skill-pill">Adobe Lightroom</span>
                <span className="skill-pill">Graphic Design</span>
              </div>
            </div>

            <div className="card">
              <h3>Tools & Editorial</h3>
              <div className="pill-container">
                <span className="skill-pill">Git / GitHub</span>
                <span className="skill-pill">VS Code</span>
                <span className="skill-pill">Technical Writing</span>
                <span className="skill-pill">Proofreading</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="content-section">
          <h2 className="section-title">Projects</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>LiceoScholar Hub</h3>
              <p className="project-role">Figma Designer & Co-Developer</p>
              <p>
                Designed interactive UI/UX prototypes in Figma and co-developed
                full-stack architecture using Angular and Hono.
              </p>
            </div>
            <div className="card">
              <h3>Furever Care</h3>
              <p className="project-role">
                Figma Designer & Frontend Developer
              </p>
              <p>
                Conceptualized UI branding and translated mockups into a
                responsive web interface via Git.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
