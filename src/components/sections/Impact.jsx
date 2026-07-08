import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaTree,
  FaUsers,
  FaGlobeAsia,
  FaHandsHelping,
} from "react-icons/fa";

export default function Impact() {
  const stats = [
    {
      icon: <FaTree />,
      number: 50000,
      suffix: "+",
      title: "Trees Planted",
      color: "bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400",
    },
    {
      icon: <FaUsers />,
      number: 8000,
      suffix: "+",
      title: "Volunteers Engaged",
      color: "bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <FaGlobeAsia />,
      number: 120,
      suffix: "+",
      title: "Villages Restored",
      color: "bg-yellow-100 dark:bg-yellow-950/60 text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: <FaHandsHelping />,
      number: 300,
      suffix: "+",
      title: "Green Campaigns",
      color: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-green-50/50 dark:bg-gray-900/40 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-green-300/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-300/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-600 dark:text-green-400 font-extrabold uppercase tracking-widest text-xs">
            Our Impact
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-gray-900 dark:text-white">
            Creating Real Change
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Every seedling sown, every cleanup shift, and every single donation is a step toward reversing carbon output and recovering critical biodiversity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/80 rounded-3xl p-8 hover:shadow-2xl hover:border-green-200 dark:hover:border-green-800/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm shrink-0 ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                <CountUp
                  end={item.number}
                  duration={2.5}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h3>

              <p className="mt-3 text-gray-500 dark:text-gray-400 font-bold text-sm uppercase tracking-wider">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}