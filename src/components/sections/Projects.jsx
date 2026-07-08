import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaTree, FaArrowRight, FaSchool, FaWater } from "react-icons/fa";
import { projects } from "../../data/projects";

export default function Projects() {
  const [activeId, setActiveId] = useState("bengaluru");

  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-600 dark:text-green-400 font-extrabold uppercase tracking-widest text-xs">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-gray-900 dark:text-white">
            Making a Lasting Impact
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            We focus our efforts where conservation is needed most. Explore our interactive projects map to see where our volunteer networks are actively restoring ecosystems.
          </p>
        </motion.div>

        {/* Content Layout: Map on left, detail cards on right */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left Side: Custom Interactive SVG Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-gray-50/50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80 rounded-[2rem] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            {/* Ambient glows behind map */}
            <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-green-500/5 dark:bg-green-400/5 blur-2xl pointer-events-none" />
            
            <div>
              <h3 className="text-xl font-extrabold text-gray-800 dark:text-white">
                Interactive Karnataka Map
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Click on the pulsing nodes to view active campaign regions.
              </p>
            </div>

            {/* Stylized Vector Map representation */}
            <div className="relative w-full aspect-[4/5] max-w-[360px] mx-auto my-6 bg-green-100/10 dark:bg-gray-950/20 border border-dashed border-green-200/50 dark:border-green-800/30 rounded-2xl flex items-center justify-center p-4">
              {/* Custom abstract vector shape for Karnataka */}
              <svg
                viewBox="0 0 100 120"
                className="w-full h-full text-green-200/40 dark:text-green-900/10 transition-colors duration-300"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Custom abstract path representation of Karnataka's region */}
                <path d="M 30,10 C 35,5 45,8 48,15 C 50,22 55,20 53,28 C 50,35 62,42 58,52 C 55,60 52,65 55,72 C 58,80 52,88 48,94 C 45,100 48,105 45,110 C 40,115 32,112 30,105 C 28,98 33,90 31,83 C 28,75 22,70 25,62 C 28,55 20,48 24,38 C 28,30 25,20 30,10 Z" />
                
                {/* Simplified border lines */}
                <path d="M 31,83 L 36,83 L 38,76 L 52,76" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" className="text-green-300/30 dark:text-green-800/30" />
                <path d="M 36,45 L 52,76" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" className="text-green-300/30 dark:text-green-800/30" />
              </svg>

              {/* Pulsing Interactive Hotspots */}
              {projects.map((proj) => {
                const isActive = activeId === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveId(proj.id)}
                    className="absolute transition-transform duration-300 hover:scale-125 focus:outline-none"
                    style={{ left: `${proj.mapX}%`, top: `${proj.mapY}%` }}
                    aria-label={`Show ${proj.title} project`}
                  >
                    {/* Ring Pulse Animation */}
                    <span className={`absolute -inset-4 rounded-full hotspot-pulse bg-green-500/40 dark:bg-green-400/40 ${
                      isActive ? "block" : "hidden group-hover:block"
                    }`} />
                    
                    {/* Core glowing marker */}
                    <span className={`relative flex h-4.5 w-4.5 rounded-full border-2 shadow-lg transition duration-300 ${
                      isActive
                        ? "bg-green-600 border-white dark:bg-green-400 dark:border-gray-900 scale-110"
                        : "bg-white border-green-500 dark:bg-gray-900 dark:border-green-500 hover:bg-green-500"
                    }`} />

                    {/* Quick floating label */}
                    <span className={`absolute left-6 -top-1 px-2.5 py-1 rounded bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-bold tracking-wider shadow whitespace-nowrap transition duration-300 ${
                      isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                    }`}>
                      {proj.location}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Region Legend */}
            <div className="flex justify-center gap-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500" />
                Active Campaigns
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-green-500" />
                Planned Sectors
              </div>
            </div>
          </motion.div>

          {/* Right Side: Active Project Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex gap-4 border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
              {projects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveId(proj.id)}
                  className={`text-sm font-bold pb-2 border-b-2 transition duration-300 ${
                    activeId === proj.id
                      ? "text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                      : "text-gray-400 dark:text-gray-500 border-transparent hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  {proj.location}
                </button>
              ))}
            </div>

            {/* Animated Project card wrapper */}
            <div className="flex-grow flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] overflow-hidden shadow-xl flex flex-col h-full"
                >
                  {/* Image banner */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20 dark:border-white/5 flex items-center gap-2 text-green-700 dark:text-green-400 font-extrabold text-sm shadow">
                      <FaTree />
                      {activeProject.trees}
                    </div>
                  </div>

                  {/* Body text details */}
                  <div className="p-8 flex-grow flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-bold">
                        <FaMapMarkerAlt />
                        {activeProject.location}, Karnataka
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white mt-3">
                        {activeProject.title}
                      </h3>

                      <p className="text-gray-500 dark:text-gray-400 mt-4 text-base leading-relaxed">
                        {activeProject.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Impact Metric</p>
                        <p className="text-lg font-extrabold text-green-700 dark:text-green-400 mt-0.5">{activeProject.trees}</p>
                      </div>

                      <a
                        href="#donate"
                        className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition duration-300 flex items-center gap-2 shadow shadow-green-600/10 text-sm hover:shadow-lg hover:shadow-green-600/20 active:scale-95"
                      >
                        Donate Here
                        <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}