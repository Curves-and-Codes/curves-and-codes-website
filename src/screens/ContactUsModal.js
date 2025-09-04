import React from "react";

function ContactUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-16 mt-10">
       <div className="relative w-full max-w-md mx-auto rounded-xl border border-cyan-300 border-[0.2px] shadow-lg p-4 md:p-6 text-white backdrop-blur-md bg-gradient-to-br from-[#67e8f9]/10 via-[#ef0163]/5 to-transparent">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-300 hover:text-white text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-[#67e8f9] text-center">
          Schedule a Call
        </h2>

         <form className="space-y-3">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-cyan-300/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-cyan-300/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Phone</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-cyan-300/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Message</label>
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-cyan-300/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#67e8f9]/80 hover:bg-[#67e8f9]/70 transition-all text-white font-semibold shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsModal;
