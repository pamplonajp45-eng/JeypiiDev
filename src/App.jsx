import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import "./App.css";
import Footer from "./components/Footer";
import ClickGlow from "./components/ClickGlow";

/**
 * Root component for the portfolio single‑page app.
 * Renders the fixed Navbar and each page section.
 */
function App() {
  return (
    <>
      <ClickGlow />
      <Navbar />
      <main>
        <Home />
        <TechStack />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;
