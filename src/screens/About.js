import React, { useEffect, useRef } from "react";
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import BlurryCardWithIcon from "../components/Cards/BlurryCardWithIcon";

function About() {
  return (
    <div className=" bg-[var(--brand-primary)] overflow-hidden">
      <div className="h-screen">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10  backdrop-blur-md"></div>
        <div className="relative z-20 px-6 py-16 text-white text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            We’re building tech that moves the world forward. At Hexona AI, our
            mission is to blend creativity and engineering into solutions that
            matter.
          </p>
          <div
            className="grid gap-6 mt-20 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4"
          >
            <BlurryCardWithIcon />
            <BlurryCardWithIcon />
            <BlurryCardWithIcon />
            <BlurryCardWithIcon />
          </div>
        </div>
      </div>
      <div className="h-screen bg-[var(--brand-primary)]">
        
      </div>
       <HexagonGridBgAbout />
    </div>
  );
}

export default About;
