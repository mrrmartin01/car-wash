"use client";

import { IconClock, IconLocation, IconPhoneCall } from "@tabler/icons-react";
import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-black to-blue-900 px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/blue-diagonal-lines-pattern-background_1017-14203.jpg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-blue-950/40 to-transparent" />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
        {/* Left: Info Section */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Let’s Get Your Car{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Shining
            </span>
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Have a question about our services or want to schedule a wash? Reach
            out to Spade Car Wash — we&apos;d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <IconLocation size={18} className="text-yellow-400 shrink-0" />
              <span className="font-semibold text-white">Address:</span>
              <span>123 Shine Street, Accra</span>
            </div>

            <div className="flex items-center gap-3">
              <IconPhoneCall size={18} className="text-yellow-400 shrink-0" />
              <span className="font-semibold text-white">Phone:</span>
              <span>+233 24 123 4567</span>
            </div>

            <div className="flex items-center gap-3">
              <IconClock size={18} className="text-yellow-400 shrink-0" />
              <span className="font-semibold text-white">Hours:</span>
              <span>Mon–Sat, 8:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-medium text-white mb-6">Contact Spade</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-200 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition resize-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 transition"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-400 mt-4">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 mt-4">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
