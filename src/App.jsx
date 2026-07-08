import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Mission from "./components/sections/Mission";
import Impact from "./components/sections/Impact";
import Causes from "./components/sections/Causes";
import Projects from "./components/sections/Projects";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Volunteer from "./components/sections/Volunteer";
import Donate from "./components/sections/Donate";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Mission />
      <Causes />
      <Impact />
      <Projects />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Volunteer />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;