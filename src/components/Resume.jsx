import { useEffect } from "react";
import "./Resume.css";

function Resume({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className="resume-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="resume-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="resume-header">
          <div className="resume-header-info">
            <h2 className="resume-title">Jordan O. Pamplona</h2>
            <p className="resume-subtitle">Aspiring Full-Stack Developer</p>
          </div>
          <a
            href="Pamplona_Resume_(2026).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-action-btn"
          >
            Open in New Tab
          </a>
        </div>
        <div className="resume-iframe-container">
          <iframe
            src="Pamplona_Resume_(2026).pdf"
            title="Resume"
            className="resume-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Resume;
