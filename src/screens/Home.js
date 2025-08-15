import React from "react";
import DemoCard from "../components/DemoCard";
import ServiceCard from "../components/Cards/ServiceCard";
import ClientCard from "../components/Cards/ClientCard";
import ProjectImages from "../components/Cards/ProjectImages";
import BouncyText from "../components/BouncyText";

function Home() {
  return (
    <div className="w-full pt-24 py-10 md:py-14 bg-[var(--brand-primary)] ">
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="relative w-[30%] h-[40%] rounded-lg  ring-1 ring-white/10"></div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[2rem] md:text-[3rem] xl:text-[4rem] font-extrabold tracking-tight text-white">
              Innovative technology solutions
            </h1>
            <p className="mt-2 text-[#9aa4b2] text-base md:text-lg">
              by <span className="text-white/90">Curves & Codes</span>
            </p>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-cyan-300">
              nalytics and intelligent surveillance to IT infrastructure and{" "}
              <span className="text-[#ef0163]">
                custom digital applications
              </span>
            </p>

            <p className="mt-5 text-sm md:text-base text-slate-300/90 max-w-2xl">
              Empowering industries to operate smarter, safer, and more
              efficiently.{" "}
              <span className="text-white font-semibold">
                {" "}
                Combining technology, creativity,
              </span>{" "}
              and
              <span className="text-white font-semibold"> expertise,</span>, we
              drive the future of industrial digitalization.
            </p>
          </div>
        </div>
      </div>

      <div className="p-10 md:mt-16 flex flex-wrap justify-center gap-6">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <div className="overflow-hidden relative w-full py-16">
        <div className="flex gap-6 animate-scroll">
          <div className="flex-none">
            <ClientCard />
          </div>
          <div className="flex-none">
            <ClientCard />
          </div>
          <div className="flex-none">
            <ClientCard />
          </div>
          <div className="flex-none">
            <ClientCard />
          </div>
          <div className="flex-none">
            <ClientCard />
          </div>
        </div>
      </div>

      <BouncyText
        text={`A Quick Glimpse of Our Work`}
        className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
      />

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
  );
}

export default Home;
