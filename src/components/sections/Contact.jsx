import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaSpinner, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Full Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!subject.trim()) errors.subject = "Subject is required";
    if (!message.trim()) {
      errors.message = "Message cannot be empty";
    } else if (message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clear inputs
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setFormErrors({});

      // Auto-hide success state after 6s
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-600 dark:text-green-400 font-extrabold uppercase tracking-widest text-xs">
            Contact Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">Let's Grow Together</h2>
          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Have questions about campaigns, tax benefits, or corporate partnerships? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <div className="flex gap-5 items-start">
              <div className="h-14 w-14 rounded-2xl bg-green-50 dark:bg-green-950/50 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 shadow-sm border border-green-100/50 dark:border-green-900/30">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-gray-800 dark:text-white">Address</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-base leading-relaxed">
                  B-380, Second Floor Block-B, Nirman Vihar , Delhi, Delhi, India - 110092
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="h-14 w-14 rounded-2xl bg-green-50 dark:bg-green-950/50 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 shadow-sm border border-green-100/50 dark:border-green-900/30">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-gray-800 dark:text-white">Phone Helpline</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-base leading-relaxed">+91 98 1119 8150</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="h-14 w-14 rounded-2xl bg-green-50 dark:bg-green-950/50 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 shadow-sm border border-green-100/50 dark:border-green-900/30">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-gray-800 dark:text-white">Email Desk</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-base leading-relaxed">m.ksinghal1961@gmail.com</p>
              </div>
            </div>

            {/* Social media connections */}
            <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <h4 className="text-xs uppercase tracking-widest font-extrabold text-gray-400 mb-4">Follow Our Progress</h4>
              <div className="flex gap-3">
                {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="h-12 w-12 rounded-2xl bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition shadow shadow-green-600/10"
                    aria-label="Social Link"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-gray-50/50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80 rounded-[2.5rem] p-8 sm:p-10 shadow-sm text-left relative"
          >
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-green-100 dark:bg-green-950/50 border border-green-200 dark:border-green-900/50 text-green-800 dark:text-green-300 flex items-center gap-3 text-sm font-semibold"
                >
                  <FaCheckCircle className="text-xl text-green-600 dark:text-green-400 shrink-0" />
                  <div>
                    <p className="font-extrabold">Message Sent Successfully!</p>
                    <p className="text-xs text-green-700/95 dark:text-green-400/90 mt-0.5">Thank you for writing. Our desk team will respond back within 24 hours.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-bold text-xs uppercase tracking-wider text-gray-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 bg-white dark:bg-gray-900 text-sm outline-none focus:border-green-600 transition ${
                      formErrors.name ? "border-red-500" : "border-gray-200 dark:border-gray-800 focus:border-green-500"
                    }`}
                  />
                  {formErrors.name && <p className="text-[10px] text-red-500 mt-1 font-semibold">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block mb-2 font-bold text-xs uppercase tracking-wider text-gray-400">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 bg-white dark:bg-gray-900 text-sm outline-none focus:border-green-600 transition ${
                      formErrors.email ? "border-red-500" : "border-gray-200 dark:border-gray-800 focus:border-green-500"
                    }`}
                  />
                  {formErrors.email && <p className="text-[10px] text-red-500 mt-1 font-semibold">{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block mb-2 font-bold text-xs uppercase tracking-wider text-gray-400">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="Subject of inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 bg-white dark:bg-gray-900 text-sm outline-none focus:border-green-600 transition ${
                    formErrors.subject ? "border-red-500" : "border-gray-200 dark:border-gray-800 focus:border-green-500"
                  }`}
                />
                {formErrors.subject && <p className="text-[10px] text-red-500 mt-1 font-semibold">{formErrors.subject}</p>}
              </div>

              <div>
                <label className="block mb-2 font-bold text-xs uppercase tracking-wider text-gray-400">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message detail here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 bg-white dark:bg-gray-900 text-sm outline-none resize-none focus:border-green-600 transition ${
                    formErrors.message ? "border-red-500" : "border-gray-200 dark:border-gray-800 focus:border-green-500"
                  }`}
                />
                {formErrors.message && <p className="text-[10px] text-red-500 mt-1 font-semibold">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 py-3.5 text-white font-extrabold transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-sm" />
                    Sending Inquiry...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
