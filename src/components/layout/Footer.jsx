import { useState } from "react";
import { FaLeaf, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Mission", href: "#mission" },
  { name: "Causes", href: "#causes" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

const programs = [
  "Tree Plantation Campaigns",
  "Watershed & Lake cleans",
  "Eco Seminars for Schools",
  "Wildlife Habitat Care",
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subbed, setSubbed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubbed(true);
      setNewsletterEmail("");
      
      setTimeout(() => {
        setSubbed(false);
      }, 5000);
    }, 1200);
  };

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 items-start">
          
          {/* Logo panel */}
          <div className="lg:col-span-4 text-left">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="rounded-2xl bg-green-600 p-2.5 shadow-md">
                <FaLeaf className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight">Nitya Niroopam Foundation</h2>
                <p className="text-[10px] tracking-widest text-gray-400 font-bold uppercase">NGO</p>
              </div>
            </a>

            <p className="mt-6 leading-relaxed text-sm text-gray-400">
              Working transparently to recover critical ecosystems through community tree plantations, lake cleans, and eco-educational seminars.
            </p>
  
          </div>

          {/* Quick links panel */}
          <div className="lg:col-span-2 text-left md:pl-6">
            <h3 className="text-sm uppercase tracking-widest font-extrabold text-white">Quick Links</h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition hover:text-green-400 text-gray-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs panel */}
          <div className="lg:col-span-3 text-left md:pl-6">
            <h3 className="text-sm uppercase tracking-widest font-extrabold text-white">Our Programs</h3>
            <ul className="mt-6 space-y-3.5 text-sm text-gray-400">
              {programs.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup panel */}
          <div className="lg:col-span-3 text-left">
            <h3 className="text-sm uppercase tracking-widest font-extrabold text-white">Newsletter</h3>
            <p className="mt-6 text-sm text-gray-400 leading-relaxed">
              Subscribe to stay updated with monthly campaign reports and local drive schedules.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 relative">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  disabled={subbed || isSubmitting}
                  className="w-full rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none focus:border-green-500 pr-12 transition duration-300"
                  required
                />
                
                <button
                  type="submit"
                  disabled={subbed || isSubmitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-green-600 hover:bg-green-700 disabled:bg-gray-800 text-white rounded-xl flex items-center justify-center transition active:scale-95 cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  {subbed ? (
                    <FaCheckCircle className="text-sm text-green-400" />
                  ) : (
                    <FaPaperPlane className="text-xs" />
                  )}
                </button>
              </div>

              {subbed && (
                <p className="text-[10px] text-green-400 mt-2 font-bold flex items-center gap-1">
                  <FaCheckCircle /> Subscription confirmed successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer legal block */}
        <div className="mt-14 border-t border-gray-900 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-xs">
          <p className="text-gray-500">
            © 2022 Nitya Niroopam Foundation. All Rights Reserved. Geotagged tree plantation drives are certified and audited.
          </p>

          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-green-400">Privacy Policy</a>
            <a href="#" className="hover:text-green-400">Terms & Conditions</a>
            <a href="#donate" className="hover:text-green-400 font-bold text-green-500">Donate Now</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
