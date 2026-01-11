import { motion } from "framer-motion";

const industries = [
  { name: "Manufacturing", icon: "🏭" },
  { name: "Smart Cities", icon: "🏙️" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Enterprises", icon: "🏢" },
  { name: "Education", icon: "🎓" },
  { name: "Retail", icon: "🛍️" },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.6 }
  }
};

export default function IndustriesSection() {
  return (
    <div className="py-16 bg-[var(--card-background)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="relative text-center group cursor-pointer hover:scale-110 transition duration-300"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-20 h-20 bg-white/10 shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--brand-secondary-hover)] ring-2 ring-white/10 backdrop-blur-md transition-colors duration-300">
                <span className="text-4xl group-hover:animate-bounce">{industry.icon}</span>
                <span className="absolute -top-4 -right-4 h-3 w-3 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 animate-ping" />
              </div>
              <h3 className="text-white font-medium text-base group-hover:text-yellow-300 transition duration-300">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
