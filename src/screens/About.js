import React from "react";
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout";

function About() {
  return (
    <div>
      <section className="relative py-16 bg-[var(--brand-primary)] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--brand-secondary)]">
              Case Studies
            </h2>
            <p className="mt-3 text-lg text-[var(--neutral-gray)]">
              See how we’ve helped companies transform operations with AI,
              vision, and smart systems.
            </p>
          </div>

        </div>
      </section>
      <HexagonGridBgAbout />
    </div>
  );
}

export default About;
