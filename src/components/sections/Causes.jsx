import { motion } from "framer-motion";
import {
  FaTree,
  FaWater,
  FaRecycle,
  FaPaw,
  FaSeedling,
  FaLeaf,
} from "react-icons/fa";

export default function Causes() {
  const causes = [
    {
      icon: <FaTree />,
      title: "Tree Plantation",
      description: "Planting native trees to restore critical forest cover and sequester carbon.",
      color: "bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400",
    },
    {
      icon: <FaRecycle />,
      title: "Waste Management",
      description: "Driving clean-up drives and community recycling initiatives to curb plastics.",
      color: "bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <FaWater />,
      title: "Water Conservation",
      description: "Rejuvenating polluted lakes and rivers while educating on rainwater capture.",
      color: "bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: <FaPaw />,
      title: "Wildlife Protection",
      description: "Restoring habitat zones and running campaigns to safeguard species diversity.",
      color: "bg-yellow-100 dark:bg-yellow-950/60 text-yellow-700 dark:text-yellow-400",
    },
    {
      icon: <FaSeedling />,
      title: "Eco Education",
      description: "Delivering school workshops to instill environmental science and values in youths.",
      color: "bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400",
    },
    {
      icon: <FaLeaf />,
      title: "Green Cities",
      description: "Establishing urban green parks to create fresh breathing zones inside cities.",
      color: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section
      id="causes"
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-600 dark:text-green-400 font-extrabold uppercase tracking-widest text-xs">
            Our Focus Area
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-gray-900 dark:text-white">
            What We Fight For
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            From planting forests to educating local children, we target environmental issues from multiple angles to create sustainable community ecosystems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-gray-50/50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 text-left"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${cause.color}`}
              >
                {cause.icon}
              </div>

              <h3 className="text-2xl font-extrabold mt-8 text-gray-800 dark:text-white">
                {cause.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm leading-relaxed">
                {cause.description}
              </p>

              <div className="mt-8">
                <a
                  href="#donate"
                  className="text-green-600 dark:text-green-400 font-bold hover:gap-2 transition-all flex items-center gap-1 group text-sm"
                >
                  Support Cause 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}