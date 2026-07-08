import { motion } from "framer-motion";
import { FaSeedling, FaEye, FaHeart, FaUsers } from "react-icons/fa";

export default function Mission() {
  const cards = [
    {
      icon: <FaSeedling />,
      title: "Our Mission",
      text: "To restore ecological balance by planting native trees, conserving watersheds, and driving sustainability education across local communities.",
      color: "border-green-200 dark:border-green-900/50 hover:bg-green-50/30 dark:hover:bg-green-950/20"
    },
    {
      icon: <FaEye />,
      title: "Our Vision",
      text: "A biodiverse, carbon-neutral planet where humans coexist harmoniously with nature and actively steward local green cover.",
      color: "border-blue-200 dark:border-blue-900/30 hover:bg-blue-50/30 dark:hover:bg-blue-950/20"
    },
    {
      icon: <FaHeart />,
      title: "Our Values",
      text: "Transparency, scientific conservation methodologies, deep respect for indigenous ecosystems, and local community empowerment.",
      color: "border-emerald-200 dark:border-emerald-900/30 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20"
    },
    {
      icon: <FaUsers />,
      title: "Our Network",
      text: "Connecting volunteers, school networks, corporate teams, and forest officials into a cohesive force for climate action.",
      color: "border-teal-200 dark:border-teal-900/30 hover:bg-teal-50/30 dark:hover:bg-teal-950/20"
    },
  ];

  return (
    <section
      id="mission"
      className="py-24 bg-green-50/50 dark:bg-gray-900/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-600 dark:text-green-400 font-extrabold uppercase tracking-widest text-xs">
            Mission & Vision
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-gray-900 dark:text-white">
            Together We Can
            <span className="block text-green-600 dark:text-green-400 mt-1">
              Restore the Balance
            </span>
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Protecting our environment requires a structured roadmap. Here are the core pillars that guide our daily initiatives and keep our organization focused on long-term ecological health.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-900 border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-start text-left ${card.color}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 flex items-center justify-center text-2xl mb-6 shadow-inner shrink-0">
                {card.icon}
              </div>

              <h3 className="text-xl font-extrabold text-gray-800 dark:text-white">
                {card.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm leading-relaxed flex-grow">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}