import React from "react";
import DemoCard from "../components/DemoCard";
import ServiceCard from "../components/Cards/ServiceCard";
import ClientCard from "../components/Cards/ClientCard";
import ProjectImages from "../components/Cards/ProjectImages";
import BouncyText from "../components/BouncyText";
// import RadarSphere from "../components/RadarSphere";
import HexagonGridBgHome from "../components/backgrounds/HexagonGridBgHome";
// import ScrollTriggeredVideo from "../components/ScrollTriggeredVideo";

function Home() {
  return (
    <div className="w-full pt-24 py-10 md:py-14 bg-[var(--brand-primary)] relative">
      {/* Scroll Triggered Video Overlay */}
      {/* <ScrollTriggeredVideo videoSrc="/path/to/video.mp4" /> */}

      <div className="relative flex justify-center">
  {/* Background video - positioned absolutely */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover brightness-50"
  >
    <source src="/aivideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (optional) for extra dim effect */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative p-10 flex flex-col lg:flex-row items-center gap-10 z-10 max-w-7xl">
    <div className="flex-1 pt-10 text-center lg:text-left">
      <h1 className="text-[2rem] md:text-[2rem] xl:text-[3rem] font-extrabold tracking-tight text-white">
        Powering Industry 4.0 with Smart, Secure Solutions
      </h1>
      <p className="mt-2 text-[var(--neutral-gray)] text-base md:text-lg">
        by <span className="text-white/90">Curves & Codes</span> — Vision AI
        • Surveillance • Smart Infrastructure • SmartOps
      </p>
      <p className="mt-4 text-xl md:text-2xl font-semibold text-[var(--brand-secondary)]">
        Integrated systems that drive{" "}
        <span className="text-[var(--brand-accent)]">security, efficiency,</span>{" "}
        and{" "}
        <span className="text-[var(--brand-accent)]">real-time insights</span>.
      </p>
      <p className="mt-5 text-sm md:text-base text-slate-300/90 max-w-2xl">
        We design and deploy{" "}
        <span className="text-white font-semibold">end-to-end solutions</span>{" "}
        across Vision AI, Surveillance & Security, and Smart Infrastructure—
        integrated with{" "}
        <span className="text-white font-semibold">SmartOps applications</span>{" "}
        to modernize operations and scale with your business.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[var(--brand-accent)] text-black font-semibold shadow hover:opacity-90 transition"
        >
          Request a Proposal
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-white/20 text-white hover:bg-white/5 transition"
        >
          Book a 15-min Discovery Call
        </a>
      </div>
    </div>
  </div>
</div>


      {/* Rest of the Home content */}

      <div className="p-10 md:mt-16 flex flex-wrap justify-center gap-6">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <div className="overflow-hidden relative w-full py-16">
        <div className="flex gap-6 animate-scroll">
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>

      <BouncyText
        text={`A Quick Glimpse of Our Work`}
        className="text-2xl sm:text-4xl md:text-5xl text-white px-4 mt-3 font-extrabold leading-tight text-center"
      />

      <div className="p-10 md:mt-16 flex flex-col lg:flex-row justify-center items-center gap-10 max-w-7xl mx-auto">
        <ProjectImages imageType="surveillance" />
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <div className="inline-block mb-3">
            <span className="px-3 py-1 bg-gradient-to-r from-[var(--brand-secondary)]/20 to-cyan-400/20 text-[var(--brand-secondary)] rounded-full text-xs font-semibold border border-[var(--brand-secondary)]/30">
              Featured Project
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            AI-Powered Smart Surveillance System
          </h2>
          <p className="text-[var(--brand-secondary)] text-sm font-semibold mb-4">Completed: December 2025</p>

          <p className="text-base text-slate-300/90 leading-relaxed mb-6">
            Deployed an enterprise-grade surveillance system with <span className="text-white font-semibold">AI-powered threat detection</span> for a major corporate campus, reducing security incidents by <span className="text-[var(--brand-accent)] font-bold">65%</span> and enabling real-time monitoring across <span className="text-white font-semibold">500+ cameras</span>.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Computer Vision</span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Real-time Analytics</span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Cloud Integration</span>
          </div>

          <a
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-[var(--brand-secondary)] to-cyan-400 text-[var(--brand-primary)] font-bold hover:shadow-lg hover:shadow-[var(--brand-secondary)]/40 transition-all hover:-translate-y-1"
          >
            View Case Study
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="p-10 md:mt-16 flex flex-col lg:flex-row-reverse justify-center items-center gap-10 max-w-7xl mx-auto">
        <ProjectImages imageType="iot" />
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <div className="inline-block mb-3">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-xs font-semibold border border-blue-400/30">
              IoT Solution
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Smart Building Automation Platform
          </h2>
          <p className="text-blue-400 text-sm font-semibold mb-4">Completed: November 2025</p>

          <p className="text-base text-slate-300/90 leading-relaxed mb-6">
            Implemented a comprehensive IoT platform managing <span className="text-white font-semibold">10,000+ connected devices</span> across multiple smart buildings, achieving <span className="text-[var(--brand-accent)] font-bold">40% energy savings</span> through intelligent automation and <span className="text-white font-semibold">predictive maintenance</span>.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">IoT Management</span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Energy Optimization</span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Automation</span>
          </div>

          <a
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
          >
            View Case Study
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <HexagonGridBgHome />
    </div>
  );
}

export default Home;

