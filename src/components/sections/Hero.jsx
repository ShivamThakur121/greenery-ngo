import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaArrowRight, FaPlay } from "react-icons/fa";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50/50 via-white to-green-100/50 dark:from-gray-950 dark:via-gray-900 dark:to-green-950/20 py-24"
    >
      {/* Background Media with Parallax Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 dark:from-gray-950 dark:via-gray-950/95 dark:to-gray-950/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
          alt="Lush green forest floor with light rays breaking through"
          className="w-full h-full object-cover object-center opacity-30 dark:opacity-20 scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Ambient Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {/* Interactive Layered Parallax Leaves */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Leaf 1 */}
        <motion.div
          className="absolute top-1/4 left-[10%] text-green-500/20 dark:text-green-400/15 animate-float-1"
          style={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
        >
          <FaLeaf className="text-6xl md:text-8xl rotate-45" />
        </motion.div>

        {/* Leaf 2 */}
        <motion.div
          className="absolute bottom-1/4 right-[12%] text-emerald-500/20 dark:text-emerald-400/15 animate-float-2"
          style={{ x: -mousePos.x * 1.2, y: -mousePos.y * 1.2 }}
        >
          <FaLeaf className="text-7xl md:text-9xl -rotate-12" />
        </motion.div>

        {/* Leaf 3 */}
        <motion.div
          className="absolute top-1/3 right-[20%] text-green-600/15 dark:text-green-500/10 animate-float-3"
          style={{ x: mousePos.x * 1.5, y: -mousePos.y * 1.5 }}
        >
          <FaLeaf className="text-4xl md:text-5xl rotate-[120deg]" />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Text details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-green-100/80 dark:bg-green-950/50 border border-green-200/50 dark:border-green-800/30 px-5 py-2.5 rounded-full mb-8"
          >
            <FaLeaf className="text-green-600 dark:text-green-400 text-sm animate-pulse-slow" />
            <span className="text-green-800 dark:text-green-300 font-bold text-xs uppercase tracking-wider">
              Protect Nature • Protect The Future
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block"
            >
              Together We Can
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 dark:from-green-400 dark:via-emerald-400 dark:to-teal-300 bg-clip-text text-transparent text-glow-green mt-1"
            >
              Make Earth Green Again
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl mt-8 leading-relaxed max-w-xl"
          >
            Every tree planted today restores ecosystems, saves wildlife habitats, and fights climate change. Join our network of global volunteers to create lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-10 w-full sm:w-auto"
          >
            <a
              href="#volunteer"
              className="group bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-green-600/20 hover:shadow-green-600/40 transition duration-300 flex items-center gap-2 group text-base"
            >
              Become Volunteer
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#about"
              className="group border border-gray-300 dark:border-gray-700 bg-white/40 dark:bg-gray-900/30 hover:bg-white/80 dark:hover:bg-gray-900/80 text-gray-800 dark:text-white font-bold px-8 py-4 rounded-full backdrop-blur-sm transition duration-300 flex items-center gap-2 text-base"
            >
              Learn More
            </a>
          </motion.div>

          {/* Quick numbers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 mt-16 border-t border-gray-200 dark:border-gray-800 pt-8 w-full max-w-xl"
          >
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-green-700 dark:text-green-400">50K+</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">Trees Planted</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-green-700 dark:text-green-400">8K+</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">Active Volunteers</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-green-700 dark:text-green-400">120+</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">Villages Saved</p>
            </div>
          </motion.div>
        </div>

        {/* Right Graphic details */}
        <div className="lg:col-span-5 relative w-full flex justify-center z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-md w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/20 dark:border-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
              alt="Hands holding green soil with fresh seedling sprouting out"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
            />
            {/* Interactive float badge inside graphic */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/5 shadow-xl flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-xl text-green-600 dark:text-green-400 shrink-0">
                <FaPlay className="text-sm animate-ping" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-gray-800 dark:text-white">Our 2026 Drive</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Watch how we target over 100K trees this season.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}