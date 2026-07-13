import { useTheme } from "../context/ThemeContext";

const VIKING_TOGGLE_STYLE_ID = "viking-toggle-style";

function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <label className="viking-toggle">
      <input
        type="checkbox"
        className="viking-toggle__checkbox"
        checked={!isDark}
        onChange={toggle}
        aria-label="Toggle theme"
      />
      <div className="viking-toggle__track">
        <div className="viking-toggle__chain viking-toggle__chain--left"></div>
        <div className="viking-toggle__chain viking-toggle__chain--right"></div>
        <div className="viking-toggle__inner">
          <span className="viking-toggle__runes">ᛟ ᛏ ᛞ ᛁ ᚾ</span>
        </div>
        <div className="viking-toggle__glow"></div>
        <div className="viking-toggle__embers">
          <span className="viking-toggle__ember"></span>
          <span className="viking-toggle__ember"></span>
          <span className="viking-toggle__ember"></span>
          <span className="viking-toggle__ember"></span>
        </div>
        <svg
          className="viking-toggle__icon viking-toggle__icon--left"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.92 5L5 6.92l5.79 5.79L4.5 19H8l4-4 3.08 3.08L16.92 19l-5.79-5.79L18 6.5V3l-6.29 6.29L6.92 5z"></path>
        </svg>
        <svg
          className="viking-toggle__icon viking-toggle__icon--right"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7l3 2-3 6 6-2 4 9 4-9 6 2-3-6 3-2-10-5zm0 4l4 2-4 8-4-8 4-2z"></path>
        </svg>
        <div className="viking-toggle__knob">
          <div className="viking-toggle__shield"></div>
        </div>
      </div>
    </label>
  );
}

export default ThemeToggle;
