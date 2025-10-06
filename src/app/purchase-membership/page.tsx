"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import axios from "axios";

const plans = [
  { name: "Basic Shine", price: 50, frequency: "per month", features: ["2 washes per month","Exterior hand wash","Tire shine","Basic interior vacuum"] },
  { name: "Gold Glow", price: 120, frequency: "per month", features: ["6 washes per month","Premium wax finish","Full interior cleaning","Dashboard polish","Priority scheduling"], popular: true },
  { name: "Platinum Elite", price: 250, frequency: "per month", features: ["Unlimited washes","Ceramic coating every 6 months","Deep interior detailing","Engine cleaning","Free pickup & delivery"] },
];

const faqs = [
  { question: "Can I cancel anytime?", answer: "Yes, you can cancel your membership at any time without penalties. Your plan will remain active until the end of your billing cycle." },
  { question: "Do unused washes roll over?", answer: "No, unused washes do not roll over. We recommend scheduling them within the month to maximize your plan." },
  { question: "How do I schedule a wash?", answer: "After subscribing, you’ll receive access to our priority scheduling system via phone or our upcoming mobile app." },
];

const MembershipPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number } | null>(null);
  const [form, setForm] = useState({ userName: "", userEmail: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Confirmation modal state
  const [confirmData, setConfirmData] = useState<{
    message: string;
    currentPlan: string;
    requestedPlan: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      setFeedback("Please select a plan before submitting.");
      return;
    }
    setLoading(true);
    setFeedback(null);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/membership`,
        {
          userName: form.userName,
          userEmail: form.userEmail,
          planName: selectedPlan.name,
          price: selectedPlan.price,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.status === "confirm") {
        setConfirmData(res.data);
      } else {
        setFeedback(res.data.message || "Membership created successfully!");
        setForm({ userName: "", userEmail: "" });
        setSelectedPlan(null);
      }
    } catch (err: any) {
      console.error(err);
      setFeedback("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmUpdate = async () => {
    if (!form.userEmail || !selectedPlan) return;
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/membership/confirm-update`,
        {
          userEmail: form.userEmail,
          planName: selectedPlan.name,
          price: selectedPlan.price,
          userName: form.userName,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      setFeedback(res.data.message || "Membership updated successfully!");
      setConfirmData(null);
      setForm({ userName: "", userEmail: "" });
      setSelectedPlan(null);
    } catch (err) {
      setFeedback("Update failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-6 py-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Membership Plans
          </span>
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Choose the perfect plan to keep your car <span className="text-yellow-400 font-semibold">shiny and spotless</span> all year round.
        </p>

        {/* Plans */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <motion.label key={plan.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative flex flex-col justify-between cursor-pointer bg-white/5 backdrop-blur-xl border rounded-2xl shadow-2xl p-8 transition ${
                plan.popular ? "ring-2 ring-yellow-500 border-yellow-500/30" : "border-white/10"
              } ${selectedPlan?.name === plan.name ? "bg-yellow-500/10 ring-2 ring-yellow-400" : ""}`}>
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}
              <input type="radio" name="plan" value={plan.name} checked={selectedPlan?.name === plan.name}
                onChange={() => setSelectedPlan({ name: plan.name, price: plan.price })} className="hidden" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                <p className="text-yellow-400 text-3xl font-semibold mb-1">₵{plan.price}</p>
                <p className="text-sm text-gray-400 mb-6">{plan.frequency}</p>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <IconCheck className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.label>
          ))}

          {/* User Info */}
          <div className="md:col-span-3 mt-12">
            <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Your Details</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" value={form.userName}
                  onChange={(e) => setForm({ ...form, userName: e.target.value })} required
                  className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-500 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30 outline-none transition" />
                <input type="email" placeholder="Email Address" value={form.userEmail}
                  onChange={(e) => setForm({ ...form, userEmail: e.target.value })} required
                  className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-500 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30 outline-none transition" />
              </div>
              <motion.button type="submit" whileTap={{ scale: 0.97 }} disabled={loading}
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-lg hover:from-yellow-300 hover:to-yellow-500 disabled:opacity-50 transition">
                {loading ? "Submitting..." : "Join Membership"}
              </motion.button>

              {feedback && <p className="mt-4 text-sm text-yellow-300 text-center">{feedback}</p>}
            </div>
          </div>
        </form>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <button type="button" className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-200 font-medium hover:bg-yellow-600/10 transition"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}>
                  {faq.question}
                  <IconChevronDown className={`w-5 h-5 transform transition ${openFAQ === idx ? "rotate-180 text-yellow-400" : "text-gray-400"}`} />
                </button>
                {openFAQ === idx && <div className="px-6 pb-4 text-gray-400">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmData && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-zinc-900 border border-yellow-500/40 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Confirm Membership Change</h3>
            <p className="text-gray-300 mb-6">{confirmData.message}</p>
            <div className="flex gap-4">
              <button onClick={() => setConfirmData(null)}
                className="flex-1 py-2 rounded-xl border border-white/20 text-gray-300 hover:bg-white/10 transition">
                Cancel
              </button>
              <button onClick={handleConfirmUpdate}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow hover:from-yellow-300 hover:to-yellow-500 transition">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MembershipPage;
