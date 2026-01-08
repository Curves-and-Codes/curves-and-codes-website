import React, { useState } from "react";
import { motion } from "framer-motion";
import BouncyText from "../components/BouncyText";
import ProductCard from "../components/Cards/ProductCard";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      title: "KEYE Vision AI",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1677442d019cecf8257bb65daa4d1844?q=80&w=765&auto=format&fit=crop",
      description: "Advanced computer vision and AI-powered image analysis for real-time insights",
      features: ["Object Detection", "Real-time Analysis", "ML Integration"],
      badge: "Enterprise"
    },
    {
      id: 2,
      title: "Smart Surveillance Suite",
      category: "Security",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=765&auto=format&fit=crop",
      description: "Comprehensive surveillance system with AI-enabled threat detection",
      features: ["24/7 Monitoring", "Alert System", "Cloud Storage"],
      badge: "Pro"
    },
    {
      id: 3,
      title: "IoT Infrastructure Hub",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=765&auto=format&fit=crop",
      description: "Unified IoT device management and smart infrastructure orchestration",
      features: ["Device Management", "Real-time Sync", "Scalable"],
      badge: "Enterprise"
    },
    {
      id: 4,
      title: "SmartOps Dashboard",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=765&auto=format&fit=crop",
      description: "Comprehensive operational dashboard for Industry 4.0 insights",
      features: ["Analytics", "KPI Tracking", "Automation"],
      badge: "Pro"
    },
    {
      id: 5,
      title: "Access Control System",
      category: "Security",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?q=80&w=765&auto=format&fit=crop",
      description: "Biometric and credential-based access management system",
      features: ["Biometric Auth", "Multi-factor", "Audit Logs"],
      badge: "Standard"
    },
    {
      id: 6,
      title: "Cloud Infrastructure",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=765&auto=format&fit=crop",
      description: "Scalable cloud solutions with enterprise-grade security",
      features: ["Auto-scaling", "99.99% Uptime", "Compliance"],
      badge: "Enterprise"
    },
  ];

  const categories = ["All", "AI Solutions", "Security", "Infrastructure", "Operations"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-[var(--brand-primary)]">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-gradient-to-b from-[var(--brand-primary)] to-gray-800 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full top-7 object-cover brightness-50 pointer-events-none"
        >
          <source src="/aivideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <BouncyText
            text="Our Products"
            className="text-4xl sm:text-4xl md:text-5xl text-white px-4 mt-3 font-extrabold leading-tight"
          />
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed mt-4">
            Discover our cutting-edge suite of solutions designed to transform your business with AI, security, and smart infrastructure.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[var(--brand-secondary)] text-[var(--brand-primary)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-[var(--brand-primary)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[28rem] rounded-xl overflow-hidden"
              >
                {/* Card Container */}
                <div className="relative w-full h-full bg-[var(--card-background)] rounded-xl shadow-[0_0_15px_rgba(239,1,99,0.3)] hover:shadow-[0_0_30px_rgba(54,253,253,0.5)] transition-shadow duration-500 overflow-hidden border border-white/5">
                  
                  {/* Image */}
                  <div className="relative w-full h-2/3 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        product.badge === "Enterprise" 
                          ? "bg-[var(--brand-secondary)] text-[var(--brand-primary)]"
                          : product.badge === "Pro"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-500 text-white"
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[var(--card-background)] to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-bold text-white mb-1">{product.title}</h3>
                    <p className="text-xs text-gray-300 mb-3 line-clamp-2">{product.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-white/10 text-[var(--brand-secondary)] px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-[var(--brand-secondary)] text-[var(--brand-primary)] font-bold rounded-lg hover:opacity-90 transition"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="py-16 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Our Products Stand Out</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
              <p className="text-gray-300 text-sm">Optimized for speed and reliability with minimal latency</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Military-grade encryption and compliance with global standards</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
              <p className="text-gray-300 text-sm">Grow your operations without worrying about infrastructure limits</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Dedicated support team available round the clock</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[var(--brand-primary)] to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8">Choose the perfect product for your needs and get started today.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-2xl px-8 py-3 bg-[var(--brand-secondary)] text-[var(--brand-primary)] font-semibold hover:opacity-90 transition"
            >
              Request a Demo
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-2xl px-8 py-3 border border-white/20 text-white hover:bg-white/5 transition"
            >
              Talk to Sales
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
