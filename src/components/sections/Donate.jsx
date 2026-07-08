import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLeaf,
  FaSeedling,
  FaTree,
  FaArrowRight,
  FaHeart,
  FaTimes,
  FaCreditCard,
  FaQrcode,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowDown
} from "react-icons/fa";

const plans = [
  {
    id: "saplings",
    icon: <FaLeaf />,
    rawAmount: 500,
    amount: "₹500",
    title: "Plant 10 Trees",
    description: "Sponsors planting and maintenance of 10 native trees in rural areas.",
    popular: false
  },
  {
    id: "awareness",
    icon: <FaSeedling />,
    rawAmount: 1000,
    amount: "₹1,000",
    title: "Eco Awareness Campaign",
    description: "Funds recycling workshops and green camps in local schools.",
    popular: true
  },
  {
    id: "plantation",
    icon: <FaTree />,
    rawAmount: 5000,
    amount: "₹5,000",
    title: "Adopt a Plantation",
    description: "Sponsors a complete suburban community plantation drive.",
    popular: false
  },
];

export default function Donate() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  
  // Checkout Form states
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [payMethod, setPayMethod] = useState("card"); // card or upi
  
  // Payment card inputs
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  // UI Workflow states
  const [payErrors, setPayErrors] = useState({});
  const [loadingStep, setLoadingStep] = useState(null); // null, 0, 1, 2, 3
  const [successReceipt, setSuccessReceipt] = useState(null);

  const getAmountToPay = () => {
    if (selectedPlan) return selectedPlan.rawAmount;
    return parseFloat(customAmount) || 0;
  };

  const handleOpenCheckout = (plan) => {
    setSelectedPlan(plan);
    if (plan) {
      setCustomAmount("");
    }
    setCheckoutOpen(true);
    setSuccessReceipt(null);
    setPayErrors({});
  };

  // Basic validation rules
  const validateForm = () => {
    const errors = {};
    if (!donorName.trim()) errors.name = "Full Name is required";
    if (!donorEmail.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(donorEmail)) {
      errors.email = "Please enter a valid email";
    }

    if (!selectedPlan && (!customAmount || parseFloat(customAmount) <= 10)) {
      errors.amount = "Minimum donation is ₹10";
    }

    if (payMethod === "card") {
      const sanitizedCard = cardNumber.replace(/\s+/g, "");
      if (sanitizedCard.length !== 16 || isNaN(sanitizedCard)) {
        errors.card = "Enter a valid 16-digit card number";
      }
      if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        errors.expiry = "Expiry must be MM/YY";
      }
      if (cardCvv.length !== 3 || isNaN(cardCvv)) {
        errors.cvv = "CVV must be 3 digits";
      }
    } else {
      if (!upiId.includes("@")) {
        errors.upi = "Enter a valid UPI ID (e.g. name@bank)";
      }
    }

    setPayErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePaySubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulation Loading Steps
    const steps = [
      "Initializing secure gateway session...",
      "Verifying card / UPI authorization...",
      "Debiting transaction balance...",
      "Finalizing receipt details..."
    ];

    setLoadingStep(0);
    
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev === steps.length - 1) {
          clearInterval(interval);
          // Complete Simulation
          const amount = getAmountToPay();
          setSuccessReceipt({
            transactionId: `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`,
            date: new Date().toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }),
            name: donorName,
            email: donorEmail,
            amount: `₹${amount.toLocaleString("en-IN")}`,
            deductionRef: "80G-EXEMPT-2026"
          });
          setLoadingStep(null);
          return null;
        }
        return prev + 1;
      });
    }, 1000);
  };

  return (
    <section
      id="donate"
      className="py-24 bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="200" fill="white" />
          <circle cx="80%" cy="70%" r="300" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-white/10 border border-white/10 font-bold uppercase tracking-widest text-[10px] px-3.5 py-1.5 rounded-full text-green-200">
            Donate Today
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 leading-tight">
            Every Contribution
            <span className="block text-green-200 mt-1">
              Creates a Greener Tomorrow
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-green-100 text-lg leading-relaxed">
            Support verified plantation programs, zero plastic campaigns, and environmental education. 100% of donations are transparently allocated.
          </p>
        </motion.div>

        {/* Predefined plans */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 transition duration-300 hover:-translate-y-2 flex flex-col justify-between text-left ${
                plan.popular
                  ? "bg-white text-gray-800 shadow-2xl scale-105"
                  : "bg-white/10 border border-white/15 backdrop-blur"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
                    plan.popular
                      ? "bg-green-100 text-green-600"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {plan.icon}
                </div>

                <h3 className="text-4xl font-extrabold mt-8">{plan.amount}</h3>
                <h4 className="text-xl font-extrabold mt-4">{plan.title}</h4>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    plan.popular ? "text-gray-500" : "text-green-100/90"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleOpenCheckout(plan)}
                  className={`w-full py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition active:scale-95 ${
                    plan.popular
                      ? "bg-green-600 hover:bg-green-700 text-white shadow shadow-green-600/10"
                      : "bg-white text-green-700 hover:bg-green-50 shadow-lg"
                  }`}
                >
                  Donate Now
                  <FaArrowRight className="text-xs animate-float-horizontal" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom amount panel & progress details */}
        <div className="mt-16 bg-white/10 backdrop-blur rounded-[2.5rem] border border-white/10 p-8 sm:p-12 text-left grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Progress metric */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-white">Current Campaign Progress</h3>
            <p className="text-sm text-green-100 mt-2">Fundraiser: Plant 100K Trees Across Karnataka</p>
            
            <div className="mt-8">
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>Raised: ₹7,50,000</span>
                <span>Goal: ₹10,00,000</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden shadow-inner">
                <div className="bg-yellow-400 h-full rounded-full w-3/4 transition-all duration-1000" />
              </div>
              <div className="flex justify-between text-xs text-green-200 mt-2">
                <span>75% Completed</span>
                <span>80G Tax Deductible</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <FaHeart className="text-yellow-400 shrink-0" />
                <span className="text-xs text-green-100 font-semibold">100% Secure SSL Payment Gateways</span>
              </div>
              <div className="flex items-center gap-3">
                <FaHeart className="text-yellow-400 shrink-0" />
                <span className="text-xs text-green-100 font-semibold">Transparent Audit Reports Provided</span>
              </div>
            </div>
          </div>

          {/* Custom Amount input trigger */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 flex flex-col items-stretch justify-center h-full">
            <h4 className="text-lg font-bold">Or Enter Custom Amount</h4>
            <div className="mt-4 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-extrabold text-lg text-green-200">₹</span>
              <input
                type="number"
                placeholder="Other Amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedPlan(null);
                }}
                className="w-full rounded-2xl bg-white/10 border border-white/20 pl-10 pr-4 py-3 text-white placeholder-green-200/50 outline-none focus:border-white font-semibold shadow-inner"
              />
            </div>
            
            <button
              onClick={() => handleOpenCheckout(null)}
              className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3.5 rounded-full font-extrabold transition active:scale-95 text-sm shadow-md"
            >
              Continue to Checkout
            </button>
          </div>

        </div>

      </div>

      {/* Checkout simulated Modal sliding overlay drawer */}
      <AnimatePresence>
        {checkoutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 select-none text-gray-900"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-md w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col p-6 text-left dark:text-white"
            >
              {/* Close Icon */}
              <button
                onClick={() => setCheckoutOpen(false)}
                className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none"
              >
                <FaTimes />
              </button>

              {/* SUCCESS RECEIPT STATE */}
              {successReceipt ? (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <FaCheckCircle className="text-6xl text-green-500 animate-bounce mb-4" />
                  <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white">Donation Successful!</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Thank you for sponsoring our environmental drives.</p>
                  
                  {/* Receipt block */}
                  <div className="w-full bg-gray-50 dark:bg-gray-950/60 border border-gray-100 dark:border-gray-800/80 rounded-2xl p-5 mt-6 space-y-3.5 text-xs text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Transaction ID:</span>
                      <span className="font-mono font-bold">{successReceipt.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span className="font-semibold">{successReceipt.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Donor Name:</span>
                      <span className="font-bold">{successReceipt.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Billing Email:</span>
                      <span className="font-semibold">{successReceipt.email}</span>
                    </div>
                    <div className="flex justify-between border-t border-dashed border-gray-200 dark:border-gray-800 pt-3">
                      <span className="text-gray-400 font-semibold">Amount Contributed:</span>
                      <span className="font-extrabold text-green-600 dark:text-green-400 text-sm">{successReceipt.amount}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 text-center border-t border-gray-100 dark:border-gray-800 pt-3 italic">
                      Tax reference: {successReceipt.deductionRef}. An official 80G certificate has been dispatched to {successReceipt.email}.
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      // Trigger download simulation alert
                      alert("Downloading PDF Receipt...");
                    }}
                    className="mt-6 w-full py-3 bg-green-50 border border-green-200 hover:bg-green-100 text-green-700 dark:bg-green-950/20 dark:border-green-800 dark:text-green-400 rounded-full font-bold flex items-center justify-center gap-2 text-xs shadow-sm hover:shadow"
                  >
                    <FaArrowDown />
                    Download Receipt PDF
                  </button>

                  <button
                    onClick={() => setCheckoutOpen(false)}
                    className="mt-3 text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:underline"
                  >
                    Close Checkout
                  </button>
                </div>
              ) : loadingStep !== null ? (
                /* LOADING SIMULATOR STATE */
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 dark:border-green-900/50 dark:border-t-green-400 rounded-full animate-spin mb-8" />
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">Secure Transaction Processing</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                    {[
                      "Initializing secure gateway session...",
                      "Verifying credentials / card authorization...",
                      "Debiting transaction balance...",
                      "Finalizing receipt details..."
                    ][loadingStep]}
                  </p>
                </div>
              ) : (
                /* NORMAL CHECKOUT FORM FORM STATE */
                <form onSubmit={handlePaySubmit} className="space-y-4 pt-4">
                  <div className="text-left mb-4">
                    <h3 className="text-xl font-extrabold text-gray-800 dark:text-white">Secure Checkout</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Sponsor contribution: <span className="font-extrabold text-green-600 dark:text-green-400">₹{getAmountToPay().toLocaleString("en-IN")}</span>
                    </p>
                  </div>

                  {/* Donor Info */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter donor name"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-transparent outline-none ${
                          payErrors.name ? "border-red-500" : "border-gray-200 dark:border-gray-800 focus:border-green-500"
                        }`}
                      />
                      {payErrors.name && <p className="text-[10px] text-red-500 mt-1 font-semibold">{payErrors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter email to send receipt"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-transparent outline-none ${
                          payErrors.email ? "border-red-500" : "border-gray-200 dark:border-gray-800 focus:border-green-500"
                        }`}
                      />
                      {payErrors.email && <p className="text-[10px] text-red-500 mt-1 font-semibold">{payErrors.email}</p>}
                    </div>
                  </div>

                  {/* Payment Selection tabs */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setPayMethod("card")}
                      className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition ${
                        payMethod === "card"
                          ? "bg-green-600 border-green-600 text-white dark:bg-green-500 dark:border-green-500"
                          : "border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850"
                      }`}
                    >
                      <FaCreditCard />
                      Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayMethod("upi")}
                      className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition ${
                        payMethod === "upi"
                          ? "bg-green-600 border-green-600 text-white dark:bg-green-500 dark:border-green-500"
                          : "border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850"
                      }`}
                    >
                      <FaQrcode />
                      UPI Mode
                    </button>
                  </div>

                  {/* Input depending on choice */}
                  <div className="pt-2">
                    {payMethod === "card" ? (
                      <div className="space-y-3 bg-gray-50 dark:bg-gray-950/60 border border-gray-100 dark:border-gray-850 rounded-2xl p-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Card Number</label>
                          <input
                            type="text"
                            placeholder="4111 2222 3333 4444"
                            maxLength={16}
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className={`w-full rounded-lg border px-3 py-2 text-xs bg-white dark:bg-gray-900 outline-none ${
                              payErrors.card ? "border-red-500" : "border-gray-200 dark:border-gray-850 focus:border-green-500"
                            }`}
                          />
                          {payErrors.card && <p className="text-[9px] text-red-500 mt-1 font-semibold">{payErrors.card}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              maxLength={5}
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                              className={`w-full rounded-lg border px-3 py-2 text-xs bg-white dark:bg-gray-900 outline-none ${
                                payErrors.expiry ? "border-red-500" : "border-gray-200 dark:border-gray-850 focus:border-green-500"
                              }`}
                            />
                            {payErrors.expiry && <p className="text-[9px] text-red-500 mt-1 font-semibold">{payErrors.expiry}</p>}
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">CVV Code</label>
                            <input
                              type="password"
                              placeholder="***"
                              maxLength={3}
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value)}
                              className={`w-full rounded-lg border px-3 py-2 text-xs bg-white dark:bg-gray-900 outline-none ${
                                payErrors.cvv ? "border-red-500" : "border-gray-200 dark:border-gray-850 focus:border-green-500"
                              }`}
                            />
                            {payErrors.cvv && <p className="text-[9px] text-red-500 mt-1 font-semibold">{payErrors.cvv}</p>}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 dark:bg-gray-950/60 border border-gray-100 dark:border-gray-850 rounded-2xl p-4 space-y-2">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">UPI Address</label>
                        <input
                          type="text"
                          placeholder="e.g. name@okhdfcbank"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className={`w-full rounded-lg border px-3 py-2 text-xs bg-white dark:bg-gray-900 outline-none ${
                            payErrors.upi ? "border-red-500" : "border-gray-200 dark:border-gray-850 focus:border-green-500"
                          }`}
                        />
                        {payErrors.upi && <p className="text-[9px] text-red-500 mt-1 font-semibold">{payErrors.upi}</p>}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold py-3.5 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer"
                    >
                      <FaShieldAlt className="text-xs" />
                      Authorize Contribution
                    </button>
                    <p className="text-[10px] text-center text-gray-400 mt-3 flex items-center justify-center gap-1">
                      <FaShieldAlt />
                      PCI-DSS Compliant 256-bit Encrypted Session
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}