import { motion } from "framer-motion";
import {
  FaLeaf,
  FaUsers,
  FaCertificate,
  FaHandsHelping,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaLeaf />,
    title: "Protect Local Nature",
    desc: "Direct involvement in planting trees, building gardens, and cleansing waterways.",
    color: "bg-green-500/10 text-green-300 border-green-500/20"
  },
  {
    icon: <FaUsers />,
    title: "Connect with Peers",
    desc: "Join a community of like-minded youths, scientists, and environmental advocates.",
    color: "bg-blue-500/10 text-blue-300 border-blue-500/20"
  },
  {
    icon: <FaCertificate />,
    title: "Earn Certification",
    desc: "Receive official volunteering hours log sheet and project certificates.",
    color: "bg-purple-500/10 text-purple-300 border-purple-500/20"
  },
  {
    icon: <FaHandsHelping />,
    title: "Make Real Impact",
    desc: "Help offset carbon production and revive native wildlife ecosystems.",
    color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
  },
];

export default function Volunteer() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Attempt to auto-fill subject field in form
      const subjectInput = document.getElementById("contact-subject");
      if (subjectInput) {
        subjectInput.value = "Volunteer Registration";
        // Dispatch an event to update React state if necessary
        const event = new Event("input", { bubbles: true });
        subjectInput.dispatchEvent(event);
        subjectInput.focus();
      }
    }
  };

  return (
    <section
      id="volunteer"
      className="py-24 bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 text-white relative overflow-hidden"
    >
      {/* Background vector graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Description details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 text-left"
          >
            <span className="bg-white/10 text-green-200 border border-white/10 font-bold uppercase tracking-widest text-[10px] px-3.5 py-1.5 rounded-full">
              Join Our Mission
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 leading-tight">
              Become a Volunteer &
              <span className="block text-green-200 mt-1">
                Help Plant the Future
              </span>
            </h2>

            <p className="mt-6 text-green-100 text-base leading-relaxed">
              We organize weekly tree-planting drives, lake cleans, and community awareness camps. Volunteering is open to anyone willing to lend a hand. Together, we can restore nature's green balance.
            </p>

            <div className="mt-10">
              <button
                onClick={handleScrollToContact}
                className="bg-white text-green-800 font-extrabold px-8 py-4 rounded-full transition duration-300 shadow-lg hover:bg-green-50 active:scale-95 cursor-pointer text-sm"
              >
                Register as Volunteer
              </button>
            </div>
          </motion.div>

          {/* Right Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-6"
          >
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-left border border-white/10 shadow-sm flex flex-col justify-between hover:bg-white/15 transition duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 border ${item.color}`}>
                  {item.icon}
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-extrabold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-green-100/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}