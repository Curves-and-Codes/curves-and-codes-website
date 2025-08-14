import React from 'react';
import DemoCard from '../components/DemoCard';
import ServiceCard from '../components/Cards/ServiceCard';
import ClientCard from '../components/Cards/ClientCard';

function Home() {
  return (
    <div className="w-full pt-24 px-4 py-10 md:py-14 bg-[var(--brand-primary)] ">
     
      <div className="flex justify-center">
         <div className="flex flex-col lg:flex-row items-center gap-8">
         
            <div className="relative w-[30%] h-[40%] rounded-lg  ring-1 ring-white/10">
             </div>

     
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[3rem] md:text-[4rem] xl:text-[5rem] font-extrabold tracking-tight text-white">
              Innovative technology solutions
            </h1>
            <p className="mt-2 text-[#9aa4b2] text-base md:text-lg">
              by <span className="text-white/90">Curves & Codes</span>
            </p>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-cyan-300">
              nalytics and intelligent surveillance to IT infrastructure and  <span className="text-[#ef0163]">custom digital applications</span>
            </p>

            <p className="mt-5 text-sm md:text-base text-slate-300/90 max-w-2xl">
              Empowering industries to operate smarter, safer, and more efficiently. <span className="text-white font-semibold"> Combining technology, creativity,</span> and
              <span className="text-white font-semibold"> expertise,</span>,
                we drive the future of industrial digitalization.
            </p>
          </div>
        </div>
      </div>
      <div className="p-20 md:mt-16 flex flex-wrap justify-center gap-6">
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
     </div>
     <div className="p-10 md:mt-16 flex flex-wrap justify-center gap-6">
        <ClientCard/>
        <ClientCard/>
        <ClientCard/>
     </div>
    </div>
  );
}

export default Home;