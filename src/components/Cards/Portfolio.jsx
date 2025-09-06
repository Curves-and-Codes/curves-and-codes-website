import React, { useRef } from 'react';
import "./portfolio.scss";
import { useScroll, motion, useSpring, useTransform } from 'framer-motion';

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
  const y = useTransform(scrollYProgress,[0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgcontainer" ref={ref}>
            <img src={item.image} alt={item.title} />
          </div>
          <motion.div className="textcontainer" style={{ y }}>
            <h4>{item.category}</h4>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Learn More</button>
          </motion.div>
        </div>
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 className='lg:text-4xl md:text-53xl sm:text-2xl  font-bold text-teal-400'>Our Services</h1>
        <motion.div style={{ scaleX }} className="progressbar" />
      </div>
      {services.map((item, idx) => (
        <Single item={item} key={idx} />
      ))}
    </div>
  );
}

export default Portfolio;
