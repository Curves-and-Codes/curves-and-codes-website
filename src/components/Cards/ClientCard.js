import React from "react";
import { motion } from "framer-motion";
import insta from "../../assests/images/insta.png";

function ClientCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      }}
      viewport={{ once: true }}
      className="relative max-w-xs  rounded-full border border-cyan-300/40 shadow-lg p-6 text-white 
                 transition-transform hover:scale-105 hover:shadow-xl 
                 backdrop-blur-sm bg-gradient-to-br from-[#67e8f9]/10 via-[#ef0163]/5 to-transparent"
    >
      <div className="absolute inset-0 rounded-xl opacity-30 -z-10"></div>

        <div className="flex flex-row items-center gap-4">
        <div
          className="w-24 h-24 flex items-center justify-center rounded-full bg-white/5 
                        shadow-[0_0_20px_rgba(103,232,249,0.25)] overflow-hidden"
        >
          <img
            src={insta}
            alt="Client Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        <h2 className="text-lg font-bold text-white tracking-wide">
          Client Name
        </h2>
      </div>
    </motion.div>
  );
}

export default ClientCard;
