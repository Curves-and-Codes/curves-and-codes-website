import React from "react";
import RadarSphere from "../components/RadarSphere";
import ServicesCarousel from "../components/Cards/ServicesCarousel";

function Services() {
  return (
    <div className="w-full pt-24 bg-[var(--brand-primary)]">
      <div className="flex justify-center ">
        <ServicesCarousel />
      </div>
    </div>
  );
}

export default Services;
