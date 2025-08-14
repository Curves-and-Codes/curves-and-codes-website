import React from "react";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-[var(--brand-primary)]  text-white px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side form */}
        <div className="bg-gray-900/70 p-8 rounded-2xl shadow-[0_0_25px_var(--shadow-glow)] backdrop-blur-md border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-[var(--brand-accent-hover)] hover:to-cyan-500 font-semibold "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side text */}
        <div className="flex flex-col justify-center p-8 bg-gray-900/40 rounded-2xl shadow-[0_0_25px_var(--shadow-glow)] backdrop-blur-md border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            Let’s Create Something Amazing Together
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae risus at magna congue luctus. Sed non tellus sed ipsum luctus
            posuere. Vivamus ac sem et lorem bibendum tempor sed a lorem. Nullam
            pretium purus at quam efficitur, in interdum tortor luctus.
          </p>
          <p className="mt-4 text-gray-400 italic">
            "Your message is the first step toward building something
            extraordinary."
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default ContactUs;
