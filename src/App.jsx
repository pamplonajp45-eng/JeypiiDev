import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import "./App.css";
import Footer from "./components/Footer";

/**
 * Root component for the portfolio single‑page app.
 * Renders the fixed Navbar and each page section.
 */
function App() {
  return (
    <>
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
