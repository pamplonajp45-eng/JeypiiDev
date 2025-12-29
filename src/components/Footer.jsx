import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export default function Footer() {
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=devjp35@gmail.com&su=${encodeURIComponent(
    "Service Inquiry - JeypiiDev"
  )}&body=${encodeURIComponent(
    "Hello JeypiiDev Team,\n\nI am interested in learning more about your services.\n\nService Interest: [Web Development / Consulting]\nProject Description: \n\nName: \nContact Number: \n\nThank you!"
  )}`;

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>JeypiiDev</h3>
          <p className="footer-tagline">JeypiiDev. JeypiiDone. JeypiiDeliver</p>
          <p className="footer-description">
            I create full-stack web projects using React, Node.js, Express, and
            MongoDB, focusing on clean code, responsive design, and seamless
            user experiences. I also handle deployment, API integrations, and
            performance optimization to make projects production-ready.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#materials">About</a>
            </li>
            <li>
              <a href="#products">Experience</a>
            </li>
            <li>
              <a href="#gallery">Portfolio</a>
            </li>
            <li>
              <a href="#faqs">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Me</h4>
          <ul className="footer-contact">
            <li>
              <FaPhone className="footer-icon" />
              <a href="tel:+639563293943">+63 956 329 3943</a>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <a href={mailtoLink} target="_blank" rel="noreferrer">
                devjp35@gmail.com
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Tanauan City, Batangas, PH</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="footer-socials">
            <a
              href="https://github.com/pamplonajp45-eng"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaGithub />
            </a>
          </div>
          <p className="footer-social-text">
            Stay updated with our latest projects and innovations!
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 JeypiiDev — All Rights Reserved</p>
      </div>
    </footer>
  );
}
