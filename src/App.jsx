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

/**
 * Root component for the portfolio single‑page app.
 * Renders the fixed Navbar and each page section.
 */
function App() {
  return (
    <ThemeProvider>
      <ClickGlow />
      <SmoothScroll />
      <Navbar />
      <main>
        <Home />
        <TechStack />
        <Experience />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
