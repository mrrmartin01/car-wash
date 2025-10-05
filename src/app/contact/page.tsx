"use client";

import { IconClock, IconLocation, IconPhoneCall } from "@tabler/icons-react";
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setFeedback(null);

  const form = e.currentTarget;
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const res = await axios.post<{ message: string }>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`,
      payload
    );

    setFeedback(res.data.message);
    form.reset();
  } catch (err: any) {
    console.error("Full Axios error:", err);
    const errorMessage =
      err?.response?.data?.message || "Something went wrong. Try again.";
    setFeedback(errorMessage);
  } finally {
    setLoading(false);
  }
};



  return (
      <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-6 py-20 overflow-hidden text-white">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1701069018620-ece7b9d9e5ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJsYWNrJTIwYWVzdGhldGljfGVufDB8fDB8fHww')] bg-no-repeat bg-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-zinc-900/40 to-transparent" />

        <div className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
          {/* Left: Info */}
          <motion.section
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Let&apos;s Get Your Car{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Shining
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Have a question about our services or want to schedule a wash?
              Reach out to{" "}
              <span className="font-medium text-white">Spade Car Wash</span> -
              we&apos;d love to hear from you.
            </p>

            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start gap-3">
                <IconLocation
                  size={20}
                  className="text-yellow-400 shrink-0 mt-1"
                />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>123 Teshie Street, Accra</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconPhoneCall
                  size={20}
                  className="text-yellow-400 shrink-0 mt-1"
                />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+233 24 123 4567</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconClock
                  size={20}
                  className="text-yellow-400 shrink-0 mt-1"
                />
                <div>
                  <p className="font-semibold text-white">Hours</p>
                  <p>Mon-Sat, 8:00 AM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.section>

          {/* Right: Form */}
          <motion.section
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-500 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30 outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-500 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30 outline-none transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-500 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/30 outline-none transition resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-lg hover:from-yellow-300 hover:to-yellow-500 disabled:opacity-50 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 mt-4 text-sm text-yellow-300 bg-yellow-900/20 border border-yellow-500/30 rounded-lg text-center"
                >
                  {feedback}
                </motion.div>
              )}
            </form>
          </motion.section>
        </div>
      </main>
  );
};

export default ContactPage;
