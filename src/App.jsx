import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import "./App.css";
import Footer from "./components/Footer";
import ClickGlow from "./components/ClickGlow";
import SmoothScroll from "./components/SmoothScroll";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/viking-toggle.css";

/* ── Section ornament (reusable divider component) ── */
function SectionDivider({ variant = "quatrefoil" }) {
  return (
    <div className="section-divider">
      <div className={`ornament ornament--${variant}`} />
      <div className="ornament ornament--hairline" />
    </div>
  );
}

/**
 * Root component for the portfolio single‑page app.
 * Renders the fixed Navbar and each page section with
 * ornamental dividers between them.
 */
function App() {
  return (
    <ThemeProvider>
      <ClickGlow />
      <SmoothScroll />
      <Navbar />
      <main>
        <Home />

        <SectionDivider variant="fleur" />

        <TechStack />

        <SectionDivider variant="fleur" />

        <Experience />

        <SectionDivider variant="fleur" />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
