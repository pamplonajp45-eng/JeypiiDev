import { useState } from "react";
import "./Home.css";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaArrowDown,
  FaLinkedin,
} from "react-icons/fa";
import Resume from "./Resume";
import codeLogo from "./../assets/code_logo.svg";

const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="home" className="home-section">
      {/* Background decorative orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      <div className="home-container">
        <div className="home-grid">
          {/* Left: Text Content */}
          <div className="home-content">
            <div className="home-intro">
              <h1 className="home-title">Jordan O.</h1>
              <h1 className="home-title-surname">Pamplona</h1>
              <div className="role-pill">
                <span className="role-dot"></span>
                Associate Full-Stack Developer
              </div>
            </div>

            <p className="home-description">
              I build production-ready web applications that prioritize
              performance, usability, and scalability. As an aspiring{" "}
              <span className="highlight">Full-Stack Developer</span>, I enjoy
              solving real-world problems through clean code, intuitive user
              experiences, and continuous learning. My goal is to create
              reliable digital solutions that will make a meaningful impact.
            </p>

            {/* CTA Buttons */}
            <div className="button-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsResumeOpen(true)}
              >
                View Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="home-socials">
              <a
                href="https://github.com/pamplonajp45-eng"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/jordanpamplonaNIGHTMARE05/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/jeypii_dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/pamplona-jordan-o-627445332"
                target="_blank"
                rel="noreferrer"
                aria-label="Linked In"
                className="social-icon social-icon-linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.codebility.tech/profiles/4cf944a5-266b-417e-aae4-d3e28975f272"
                target="_blank"
                rel="noreferrer"
                aria-label="Codebility Profile"
                className="codebility-icon"
              >
                <img
                  src={codeLogo}
                  alt="Codebility"
                  className="codebility-logo"
                />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="image-container">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <img
                src="profile2.png"
                alt="Jordan Pamplona"
                className="profile-image"
              />
              {/* Floating badge */}

              <span className="badge-dot"></span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <FaArrowDown className="scroll-arrow" />
          <span>Scroll to explore</span>
        </div>

        <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </section>
  );
};

export default Home;
