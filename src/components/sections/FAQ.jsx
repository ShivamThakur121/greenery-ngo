import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { faq } from "../../data/faq";

// Add a few more high-quality FAQ questions to make it a premium database
const extendedFaqs = [
  ...faq,
  {
    question: "Do you issue tax exemption certificates?",
    answer: "Yes, all donations are eligible for tax deductions under Section 80G of the Income Tax Act in India. A digital receipt will be emailed immediately upon donation success."
  },
  {
    question: "Can corporate organizations sponsor campaigns?",
    answer: "Absolutely. We offer tailored CSR partnership campaigns, corporate team volunteering programs, carbon-offset auditing, and plantation sponsorships with geotagged trees."
  },
  {
    question: "How can I trace the specific tree I sponsored?",
    answer: "Every tree plantation drive is geotagged. Once planted, we send donors coordinates and photographs of the sapling so you can verify its location on maps."
  }
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden text-left">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left font-bold text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition"
      >
        <span className="text-base sm:text-lg">{item.question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 text-sm ${isOpen ? "rotate-180 text-green-600 dark:text-green-400" : "text-gray-400"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 border-t border-gray-50 dark:border-gray-800/50 pt-4 text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = extendedFaqs.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="bg-green-50/50 dark:bg-gray-900/20 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-extrabold uppercase tracking-widest text-green-600 dark:text-green-400 text-xs">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Find detailed answers about volunteering drives, tax certificates, geotagging systems, and corporate CSR partnerships.
          </p>
        </motion.div>

        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveIdx(-1); // reset active index to prevent highlighting incorrect item
            }}
            className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pl-12 pr-4 py-3 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-green-500 dark:focus:border-green-400 shadow-sm transition duration-300"
          />
          <FaSearch className="absolute left-4.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, index) => (
                <motion.div
                  layout
                  key={item.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <FAQItem
                    item={item}
                    isOpen={activeIdx === index}
                    onClick={() => setActiveIdx(activeIdx === index ? -1 : index)}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-10 text-center"
              >
                <p className="text-gray-500 dark:text-gray-400 font-medium">No results matching "{searchQuery}" found.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-sm font-bold text-green-600 dark:text-green-400 hover:underline"
                >
                  Clear search query
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
