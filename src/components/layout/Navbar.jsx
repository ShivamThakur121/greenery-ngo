import { useState, useEffect } from "react";
import { FaLeaf, FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Mission", href: "#mission" },
  { name: "Causes", href: "#causes" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [mobile, setMobile] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
      
      // Determine active section for scroll highlights
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="bg-green-600 dark:bg-green-500 p-2.5 rounded-2xl shadow-md group-hover:scale-110 transition duration-300">
            <FaLeaf className="text-white text-xl animate-pulse-slow" />
          </div>
          <div>
            <h2 className="font-extrabold text-2xl tracking-tight text-green-800 dark:text-green-400">
              Nitya Niroopam Foundation
            </h2>
            <p className="text-[10px] tracking-widest text-gray-500 dark:text-gray-400 font-bold uppercase">
              Conservation NGO In Delhi
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 items-center">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 text-sm font-medium hover:text-green-600 dark:hover:text-green-400 relative py-1 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-green-700 dark:text-green-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 dark:bg-green-400 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-800 pl-6">
            {/* Dark Mode Toggle */}

            <a
              href="#donate"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all duration-300 px-6 py-2.5 rounded-full text-white text-sm font-bold shadow-lg shadow-green-600/10 hover:shadow-green-600/25 active:scale-95"
            >
              Donate
            </a>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition duration-300"
            aria-label="Toggle theme mode"
          >
            {darkMode ? (
              <FaMoon className="text-lg text-yellow-500" />
            ) : (
              <FaMoon className="text-lg text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => setMobile(!mobile)}
            className="text-2xl p-2 text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobile ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white dark:bg-gray-950 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobile ? "max-h-[500px] border-b border-gray-100 dark:border-gray-800" : "max-h-0"
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-1">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobile(false)}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.name.toLowerCase()
                  ? "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="#donate"
              onClick={() => setMobile(false)}
              className="block w-full text-center bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-3.5 rounded-full font-bold shadow-md"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
