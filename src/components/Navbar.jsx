import { useState } from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

/**
 * Navbar component – fixed at the top of the page.
 * Desktop: links + toggle inline. Mobile: hamburger toggle + slide-out menu.
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">JeypiiDev</div>

      {/* Nav links + toggle (desktop) */}
      <ul className={`nav-list ${menuOpen ? "is-open" : ""}`}>
        <li>
          <a href="#home" onClick={(e) => handleClick(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#TechStack" onClick={(e) => handleClick(e, "TechStack")}>
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#experience" onClick={(e) => handleClick(e, "experience")}>
            Exp.
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleClick(e, "footer")}>
            Contact Me
          </a>
        </li>
        <li className="nav-toggle-desktop">
          <ThemeToggle />
        </li>
      </ul>

      {/* Right side: toggle + hamburger (both on mobile, toggle hidden on desktop) */}
      <div className="navbar-right">
        <div className="nav-toggle-mobile">
          <ThemeToggle />
        </div>
        <button
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
