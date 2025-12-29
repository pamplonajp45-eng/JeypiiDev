import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
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
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
