import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus } from "react-icons/fa";
import { gallery } from "../../data/gallery";

const categories = ["All", "Forestry", "Water", "Education", "Recycling"];

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter gallery items
  const filteredItems = gallery.filter(
    (item) => selectedCat === "All" || item.category === selectedCat
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev(e);
      if (e.key === "ArrowRight") showNext(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  return (
    <section id="gallery" className="py-24 bg-green-50/50 dark:bg-gray-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-green-600 dark:text-green-400 font-extrabold uppercase tracking-widest text-xs">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-gray-900 dark:text-white">
            Moments That Inspire
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Every snapshot captured represents a milestone of community collaboration, environmental recovery, and local impact.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCat(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition duration-300 ${
                selectedCat === cat
                  ? "bg-green-600 text-white dark:bg-green-500 shadow-md"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(index)}
                className="break-inside-avoid relative overflow-hidden rounded-3xl group cursor-pointer shadow-md hover:shadow-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col"
              >
                {/* Photo container */}
                <div className="relative overflow-hidden w-full h-full">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-3xl"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full text-green-700 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                      <FaSearchPlus className="text-xl" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 bg-white/90 dark:bg-gray-950/90 text-green-700 dark:text-green-400 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Captions visible by default at the bottom to give context */}
                <div className="p-5 text-left border-t border-gray-50 dark:border-gray-800">
                  <h4 className="font-extrabold text-lg text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Drawer */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 select-none"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/70 hover:text-white hover:scale-110 p-3 bg-white/10 hover:bg-white/20 rounded-full transition duration-300 focus:outline-none"
                aria-label="Close image lightbox"
              >
                <FaTimes className="text-2xl" />
              </button>

              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/75 hover:text-white hover:scale-110 p-4 bg-white/10 hover:bg-white/20 rounded-full transition duration-300 focus:outline-none"
                aria-label="Show previous image"
              >
                <FaChevronLeft className="text-2xl" />
              </button>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/75 hover:text-white hover:scale-110 p-4 bg-white/10 hover:bg-white/20 rounded-full transition duration-300 focus:outline-none"
                aria-label="Show next image"
              >
                <FaChevronRight className="text-2xl" />
              </button>

              {/* Content Card container */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-gray-950/90 border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
              >
                {/* Photo section */}
                <div className="flex-grow flex items-center justify-center bg-black/40 min-h-[300px] md:max-h-[60vh] max-h-[40vh]">
                  <img
                    src={filteredItems[lightboxIndex].url}
                    alt={filteredItems[lightboxIndex].title}
                    className="w-full h-full object-contain max-h-[inherit]"
                  />
                </div>

                {/* Caption stats section */}
                <div className="md:w-80 p-8 text-left bg-gray-900 border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-between shrink-0">
                  <div>
                    <span className="bg-green-500/20 text-green-400 font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-green-500/30">
                      {filteredItems[lightboxIndex].category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-4 leading-snug">
                      {filteredItems[lightboxIndex].title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                      {filteredItems[lightboxIndex].description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs text-gray-500">
                    <span>Image {lightboxIndex + 1} of {filteredItems.length}</span>
                    <span className="italic">GreenEarth Drive</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}