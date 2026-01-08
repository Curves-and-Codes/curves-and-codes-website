import React from "react";
import { motion } from "framer-motion";

const imageData = {
  surveillance: {
    main: "https://images.unsplash.com/photo-1589361194805-49a74dc54e97?q=80&w=800&auto=format&fit=crop",
    topLeft: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=800&auto=format&fit=crop",
    bottomRight: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    extra: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?q=80&w=800&auto=format&fit=crop"
  },
  iot: {
    main: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    topLeft: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    bottomRight: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    extra: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop"
  }
};

const ProjectImages = ({ imageType = "surveillance" }) => {
  const images = imageData[imageType] || imageData.surveillance;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 2 * 0.2, // Adjust delay based on the index of the card instead of hardcoding 2 put index here
      }}
      viewport={{ once: true }}
      style={{
        animation: "float-right-down 4s ease-in-out infinite",
      }}
      className="lg:w-[50%] sm:w-full  md:w-full w-[100%]"
    >
      <div className="relative w-full max-w-4xl mx-auto h-[50vh] md:h-[60vh]">
        {/* Main Rectangle Image */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden border-2 z-10 
                   w-[80%] h-[70%] sm:w-[60%] sm:h-[50%] md:w-[300px] md:h-[200px]"
          style={{
            borderColor: "var(--brand-secondary)",
            boxShadow: "var(--shadow-glow-secondary)",
          }}
        >
          <img
            src={images.main}
            alt="Main Project"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            // Add an onerror handler as a best practice for external images
            onError={(e) => {
              e.target.src =
                "https://placehold.co/800x600/38bdf8/ffffff?text=Main";
            }}
          />
        </div>

        {/* Top Left Rectangle */}
        <div
          className="absolute top-[20%] left-[5%] rounded-lg overflow-hidden z-10
                   w-[30%] h-[25%] sm:w-[30%] sm:h-[30%] md:w-[180px] md:h-[120px] md:top-[10%] md:left-[10%]"
          style={{
            animation: "float-left-up 4s ease-in-out infinite",
            border: "2px solid var(--brand-secondary)",
            boxShadow: "var(--shadow-glow-secondary)",
          }}
        >
          <img
            src={images.topLeft}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            alt="Smart Technology"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/800x600/06b6d4/ffffff?text=Top+Left";
            }}
          />
        </div>

        {/* Bottom Right Rectangle */}
        <div
          className="absolute bottom-[10%] right-[5%] rounded-lg overflow-hidden z-10
                   w-[40%] h-[30%] sm:w-[35%] sm:h-[30%] md:w-[200px] md:h-[130px] md:bottom-[10%] md:right-[20%]"
          style={{
            animation: "float-right-down 4s ease-in-out infinite",
            border: "2px solid var(--brand-secondary)",
            boxShadow: "var(--shadow-glow-secondary)",
          }}
        >
          <img
            src={images.bottomRight}
            alt="Innovation Technology"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/800x600/0891b2/ffffff?text=Bottom+Right";
            }}
          />
        </div>

        {/* Small Extra Image */}
        <div
          className="absolute top-[30%] right-[1%] rounded-md overflow-hidden z-30
                   w-[30%] h-[25%] sm:w-[25%] sm:h-[30%] md:w-[140px] md:h-[100px] md:top-[20%] md:right-[20%]"
          style={{
            animation: "float-right-down 4s ease-in-out infinite",
            border: "2px solid var(--brand-secondary)",
            boxShadow: "var(--shadow-glow-secondary)",
          }}
        >
          <img
            src={images.extra}
            alt="Advanced Solutions"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/800x600/0ea5e9/ffffff?text=Extra";
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectImages;
