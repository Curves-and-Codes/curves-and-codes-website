import React, { useRef } from "react";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const services = [
  {
    title: "AI & Intelligent Solutions",
    description:
      "Utilizes advanced Artificial Intelligence technologies such as predictive analytics for forecasting trends and detecting anomalies. Features Vision AI (KEYE) that performs computer vision tasks, enabling image and video analysis. These systems are designed to enhance efficiency and automation in manufacturing processes and smart city implementations.",
    category: "Artificial Intelligence",
    image: "/ai-robot-technology-futuristic.jpg",
  },
  {
    title: "Surveillance & Security Systems",
    description:
      "Provides comprehensive security solutions including advanced IP cameras for real-time monitoring, robust access control systems to regulate facility entry, and AI-enabled monitoring that leverages artificial intelligence to detect threats proactively. This service targets enterprises and government facilities requiring heightened security measures.",
    category: "Security Technology",
    image: "/cctv.jpg",
  },
  {
    title: "Smart Infrastructure Solutions",
    description:
      "Delivers integrated IT networking, cloud infrastructure, and IoT device management solutions essential for modern workplaces. These smart infrastructure services ensure seamless connectivity, data integration, and efficient management of smart devices to support digital transformation in corporate environments.",
    category: "Infrastructure",
    image: "/smart-city-infrastructure-technology.jpg",
  },
  {
    title: "Industry-Specific Smart Solutions",
    description:
      "Offers customized automation tools and digital workflow solutions tailored for specific industries such as manufacturing, retail, and education. These smart solutions streamline operations, improve productivity, and address unique challenges faced by each sector through specialized technology implementation.",
    category: "Custom Solutions",
    image: "/industrial-automation-manufacturing.jpg",
  },
  {
    title: "SmartOps Applications",
    description:
      "Focuses on operational excellence by providing dashboards for real-time insights, automation of business processes, and data analytics to drive Industry 4.0 transformations. These applications empower organizations to enhance efficiency, make data-driven decisions, and advance digital workflows.",
    category: "Operations",
    image: "/digital-dashboard-analytics-operations.jpg",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="h-[80vh] snap-center flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1366px] w-full">
        
        {/* Image */}
        <div ref={ref} className="flex-1 flex justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-w-[500px] h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <motion.div
          style={{ y }}
          className="flex-1 flex flex-col gap-6 text-white p-4 md:p-0 text-center md:text-left"
        >
          <h4 className="text-teal-400 font-semibold">{item.category}</h4>
          <h2 className="text-2xl md:text-4xl font-bold font-serif">
            {item.title}
          </h2>
          <p className="text-base md:text-lg text-gray-200 font-light font-serif leading-relaxed">
            {item.description}
          </p>
          <button className="w-40 md:w-48 px-6 py-3 bg-teal-500 text-black font-semibold rounded-md hover:bg-teal-400 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};


function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio relative" ref={ref}>
   

      {/* Service Sections */}
      <div className="snap-y snap-mandatory">
        {services.map((item, idx) => (
          <Single item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
