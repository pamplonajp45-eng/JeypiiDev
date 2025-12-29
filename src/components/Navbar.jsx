import React from "react";
import "./Navbar.css";

/**
 * Navbar component – fixed at the top of the page.
 * Clicking a link scrolls smoothly to the corresponding section.
 */
const Navbar = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">JeypiiDev</div>
      <ul className="nav-list">
        <li>
          <a href="#home" onClick={(e) => handleClick(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleClick(e, "about")}>
            Who's JeypiiDev?
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => handleClick(e, "portfolio")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" onClick={(e) => handleClick(e, "experience")}>
            Exp.
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleClick(e, "contact")}>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
