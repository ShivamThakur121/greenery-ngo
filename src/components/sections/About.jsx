import { motion } from "framer-motion";
import { FaLeaf, FaGlobeAsia, FaHandsHelping } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaLeaf className="text-2xl" />,
      title: "Tree Plantation",
      desc: "Planting native tree species to restore denuded forest land and improve regional biodiversity.",
      color: "bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400"
    },
    {
      icon: <FaGlobeAsia className="text-2xl" />,
      title: "Environmental Awareness",
      desc: "Conducting seminars, outdoor learning, and interactive workshops to foster conservation values.",
      color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <FaHandsHelping className="text-2xl" />,
      title: "Community Engagement",
      desc: "Mobilizing local citizens, students, and corporate partners to participate in cleanup and plantation drives.",
      color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Graphic Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-emerald-500 rounded-3xl rotate-3 scale-[1.02] opacity-10 dark:opacity-20 z-0" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800/80 aspect-[4/5] z-10">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
                alt="Volunteers planting trees on a hillside"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Ambient Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-xl z-20 hidden sm:block max-w-[200px]">
              <p className="text-4xl font-extrabold text-green-600 dark:text-green-400">10+</p>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">Years of service in conservation</p>
            </div>
          </motion.div>

          {/* Right Column - Text Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 text-left"
          >
            <span className="text-green-600 dark:text-green-400 font-extrabold uppercase tracking-widest text-xs">
              Who We Are
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 leading-tight text-gray-900 dark:text-white">
              Building a Greener Future
              <span className="text-green-600 dark:text-green-400 block mt-1">
                One Tree at a Time
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed">
              GreenEarth is a registered non-profit organization dedicated to reversing global environmental degradation. Through targeted tree planting, educational drives, and collaborative community action, we work to restore balance to ecosystems.
            </p>

            {/* Feature Cards list */}
            <div className="mt-10 space-y-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-900/40 rounded-2xl transition duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xl text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#causes"
                className="inline-block bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full transition duration-300 shadow-md"
              >
                Our Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}