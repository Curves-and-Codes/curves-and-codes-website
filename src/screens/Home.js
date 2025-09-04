import React, { useState } from "react";
import DemoCard from "../components/DemoCard";
import ServiceCard from "../components/Cards/ServiceCard";
import ClientCard from "../components/Cards/ClientCard";
import ProjectImages from "../components/Cards/ProjectImages";
import BouncyText from "../components/BouncyText";
import RadarSphere from "../components/RadarSphere";
import HexagonGridBgHome from "../components/backgrounds/HexagonGridBgHome";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import ContactUsModal from "./ContactUsModal";

function Home() {
   const [open, setOpen] = useState(false);
  return (
      <div className="bg-[var(--brand-primary)] overflow-hidden">
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-15">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md"></div>
         <div className="relative z-20 text-white text-center">
         <div className="flex justify-center">
        <div className="p-10 flex flex-col lg:flex-row items-center gap-10">
          <RadarSphere size="w-64 h-64 md:w-96 md:h-96" />

          <div className="flex-1 pt-10 text-center lg:text-left">
            <h1 className="text-[2rem] md:text-[2rem] xl:text-[3rem] font-extrabold tracking-tight text-white">
              Powering Industry 4.0 with Smart, Secure Solutions
            </h1>

            <p className="mt-2 text-[var(--neutral-gray)] text-base md:text-lg">
              by <span className="text-white/90">Curves & Codes</span> — Vision
              AI • Surveillance • Smart Infrastructure • SmartOps
            </p>

            <p className="mt-4 text-xl md:text-2xl font-semibold text-[var(--brand-secondary)]">
              Integrated systems that drive{" "}
              <span className="text-[var(--brand-accent)]">
                security, efficiency,
              </span>{" "}
              and{" "}
              <span className="text-[var(--brand-accent)]">
                real-time insights
              </span>
              .
            </p>

            <p className="mt-5 text-sm md:text-base text-slate-300/90 max-w-2xl">
              We design and deploy{" "}
              <span className="text-white font-semibold">
                end-to-end solutions
              </span>{" "}
              across Vision AI, Surveillance & Security, and Smart
              Infrastructure—integrated with{" "}
              <span className="text-white font-semibold">
                SmartOps applications
              </span>{" "}
              to modernize operations and scale with your business.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
               onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-2 bg-[var(--brand-accent)] text-white font-semibold shadow hover:opacity-90 transition"
              >
                Book a 15-min Discovery Call
              </button>
              {/* <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-white/20 text-white hover:bg-white/5 transition"
              >
                Book a 15-min Discovery Call
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 md:mt-16 flex flex-wrap justify-center gap-6">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
   
   

      <BouncyText
        text={`A Quick Glimpse of Our Work`}
        className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
      />
        <div>
        <div className="p-10 md:mt-16 flex flex-col lg:flex-row justify-center gap-6">
        <ProjectImages />
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[2rem] md:text-[1rem] xl:text-[2rem] font-bold tracking-tight text-white">
                Title of the Project
              </h1>
              <p className="mt-2 text-[#9aa4b2] text-base text-sm">
                Date: 2024-25
              </p>

              <p className="mt-5 text-sm md:text-base text-slate-300/90 max-w-2xl">
                Empowering industries to operate smarter, safer, and more
                efficiently.{" "}
                <span className="text-white font-semibold">
                  {" "}
                  Combining technology, creativity,
                </span>{" "}
                and
                <span className="text-white font-semibold"> expertise,</span>,
                we drive the future of industrial digitalization.
              </p>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2 bg-[#ef0163] text-white font-semibold hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(239,1,99,0.35)] transition"
              >
                View Project
                <svg
                  className="w-4 h-4 text-current transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414a4 4 0 015.656 0zM10.172 13.828a4 4 0 010-5.656l1.414-1.414a4 4 0 015.656 5.656l-1.414 1.414a4 4 0 01-5.656 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        </div>
         <div className="p-10 md:mt-16 flex flex-col lg:flex-row justify-center gap-6">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[2rem] md:text-[1rem] xl:text-[2rem] font-bold tracking-tight text-white">
                Title of the Project
              </h1>
              <p className="mt-2 text-[#9aa4b2] text-base text-sm">
                Date: 2024-25
              </p>

              <p className="mt-5 text-sm md:text-base text-slate-300/90 max-w-2xl">
                Empowering industries to operate smarter, safer, and more
                efficiently.{" "}
                <span className="text-white font-semibold">
                  {" "}
                  Combining technology, creativity,
                </span>{" "}
                and
                <span className="text-white font-semibold"> expertise,</span>,
                we drive the future of industrial digitalization.
              </p>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2 bg-[#ef0163] text-white font-semibold hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(239,1,99,0.35)] transition"
              >
                View Project
                <svg
                  className="w-4 h-4 text-current transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414a4 4 0 015.656 0zM10.172 13.828a4 4 0 010-5.656l1.414-1.414a4 4 0 015.656 5.656l-1.414 1.414a4 4 0 01-5.656 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
         </div>
        <ProjectImages />
           
        </div>
        </div>
        
        
         </div>
        </section>
        <section className="relative">
       <HexagonGridBgHome/>
      </section>
      <ContactUsModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Home;
