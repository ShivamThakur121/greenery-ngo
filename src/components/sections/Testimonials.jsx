import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeTestimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-green-600 dark:text-green-400 font-extrabold uppercase tracking-widest text-xs">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-gray-900 dark:text-white">
            What Our Supporters Say
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Every volunteer hours and every single contribution drives our environmental drives. Read reviews directly from our green networks.
          </p>
        </div>

        {/* Sliding card frame */}
        <div className="relative min-h-[360px] sm:min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-gray-50/70 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/80 rounded-[2.5rem] p-8 sm:p-12 shadow-md relative flex flex-col justify-between"
            >
              <div>
                <FaQuoteLeft className="text-5xl text-green-500/20 dark:text-green-400/10 mb-6" />
                <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-200 leading-relaxed text-left">
                  "{activeTestimonial.review}"
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10 pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
                {/* Profile detail */}
                <div className="flex items-center gap-4 text-left">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-green-200 dark:border-green-800"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-extrabold text-base text-gray-900 dark:text-white">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs font-bold text-gray-400">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating details */}
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <div className="flex gap-0.5 text-yellow-400">
                    {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Verified Volunteer</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-between items-center mt-10">
          {/* Pagination Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  index === i ? "w-8 bg-green-600 dark:bg-green-400" : "w-2.5 bg-gray-300 dark:bg-gray-800"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition active:scale-95 focus:outline-none"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition active:scale-95 focus:outline-none"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Static Join CTA block below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[2.5rem] bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 p-8 sm:p-12 text-center text-white shadow-xl flex flex-col items-center"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Be Part of Our Green Journey
          </h3>

          <p className="mt-4 max-w-xl text-green-100 text-sm sm:text-base leading-relaxed">
            Join thousands of active volunteers and donors who are planting woodlands, cleansing wetlands, and building environmental responsibility.
          </p>

          <a
            href="#volunteer"
            className="mt-8 bg-white hover:bg-green-100 text-green-700 font-extrabold px-8 py-3.5 rounded-full transition duration-300 shadow hover:shadow-lg inline-block text-sm"
          >
            Become a Volunteer
          </a>
        </motion.div>

      </div>
    </section>
  );
}
