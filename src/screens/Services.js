import React from "react";
import RadarSphere from "../components/RadarSphere";
import ServicesCarousel from "../components/Cards/ServicesCarousel";
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout";

function Services() {
  return (
    <div className="w-full pt-24 bg-[var(--brand-primary)]">
      <div className="flex justify-center ">
        <ServicesCarousel />
      </div>
      <HexagonGridBgAbout/>
    </div>
  );
}

export default Services;
