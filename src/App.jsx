import { useEffect } from "react";
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
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
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
