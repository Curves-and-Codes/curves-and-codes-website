import React from "react";

const journey = [
  { year: "2010", title: "Founded", desc: "Started with a vision." },
  {
    year: "2011",
    title: "First Project",
    desc: "Delivered milestone project.",
  },
  { year: "2012", title: "Expansion", desc: "Opened new offices globally." },
  { year: "2013", title: "Innovation", desc: "Launched AI-driven solutions." },
];

function JourneyTimeline() {
  return (
    <div className="w-full py-16 text-white">
       <div className="hidden md:flex justify-center items-start gap-0">
        {journey.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
             <div
              className={`w-40 h-40 flex items-center justify-center
                ${
                  index % 2 === 0
                    ? "border-t-4 border-r-4"
                    : "border-b-4 border-r-4"
                }
                border-dashed border-cyan-400`}
            >
              <div className="text-center px-3">
                <h4 className="font-bold text-cyan-300">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>

               <span
              className={`absolute text-white font-semibold ${
                index % 2 === 0 ? "-top-8" : "-bottom-8"
              }`}
            >
              {item.year}
            </span>

             <div
              className={`absolute bg-cyan-300 rounded-full h-4 w-4 
                ${
                  index % 2 === 0
                    ? "top-0  -translate-y-1/2 "
                    : "bottom-0  translate-y-1/2 "
                }`}
            />
          </div>
        ))}
      </div>

       <div className="md:hidden flex flex-col items-center">
        {journey.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
             <div
              className={`w-40 h-40 flex items-center justify-center
                ${
                  index % 2 === 0
                    ? "border-t-4 border-r-4"
                    : "border-t-4 border-l-4"
                }
                border-dashed border-cyan-400`}
            >
              <div className="text-center px-3">
                <h4 className="font-bold text-cyan-300">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>

            <span
              className={`absolute top-1/2 -translate-y-1/2 font-semibold text-white
                ${index % 2 === 0 ? "-right-12" : "-left-12"}`}
            >
              {item.year}
            </span>

            <div
              className={`absolute bg-cyan-300 rounded-full h-4 w-4
    ${
      index % 2 === 0
        ? "right-0 top-1/2 -translate-y-1/2 translate-x-[6px]"
        : "left-0 top-1/2 -translate-y-1/2 -translate-x-[6px]"
    }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JourneyTimeline;
