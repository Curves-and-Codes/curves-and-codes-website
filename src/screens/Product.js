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
      image: "https://images.unsplash.com/photo-1676933162740-0d8f1f3c8b6f?q=80&w=800&auto=format&fit=crop",
      description: "Advanced computer vision and AI-powered image analysis for real-time insights and automated decision-making",
      features: ["Object Detection", "Real-time Analysis", "ML Integration"],
      badge: "Enterprise"
    },
    {
      id: 2,
      title: "Smart Surveillance Suite",
      category: "Security",
      image: "https://images.unsplash.com/photo-1589361194805-49a74dc54e97?q=80&w=800&auto=format&fit=crop",
      description: "Comprehensive surveillance system with AI-enabled threat detection and intelligent monitoring",
      features: ["24/7 Monitoring", "Alert System", "Cloud Storage"],
      badge: "Pro"
    },
    {
      id: 3,
      title: "IoT Infrastructure Hub",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      description: "Unified IoT device management and smart infrastructure orchestration for seamless connectivity",
      features: ["Device Management", "Real-time Sync", "Scalable"],
      badge: "Enterprise"
    },
    {
      id: 4,
      title: "SmartOps Dashboard",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?q=80&w=800&auto=format&fit=crop",
      description: "Comprehensive operational dashboard for Industry 4.0 insights with real-time analytics",
      features: ["Analytics", "KPI Tracking", "Automation"],
      badge: "Pro"
    },
    {
      id: 5,
      title: "Access Control System",
      category: "Security",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52b8b93?q=80&w=800&auto=format&fit=crop",
      description: "Biometric and credential-based access management with multi-factor authentication",
      features: ["Biometric Auth", "Multi-factor", "Audit Logs"],
      badge: "Standard"
    },
    {
      id: 6,
      title: "Cloud Infrastructure",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      description: "Scalable cloud solutions with enterprise-grade security and 99.99% uptime guarantee",
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
      <div className="py-14 bg-gradient-to-b from-[var(--card-background)] to-[var(--brand-primary)]">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6">Filter by Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[var(--brand-secondary)] to-cyan-400 text-[var(--brand-primary)] shadow-lg shadow-[var(--brand-secondary)]/50 border border-[var(--brand-secondary)]/50"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-[var(--brand-secondary)]/30"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative h-[32rem] rounded-2xl overflow-hidden"
              >
                {/* Card Container */}
                <div className="relative w-full h-full bg-gradient-to-b from-[var(--card-background)] to-gray-900 rounded-2xl shadow-[0_8px_32px_rgba(239,1,99,0.2)] hover:shadow-[0_20px_50px_rgba(54,253,253,0.4)] transition-all duration-500 overflow-hidden border border-white/10 hover:border-[var(--brand-secondary)]/50">
                  
                  {/* Image Container */}
                  <div className="relative w-full h-2/3 overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm ${
                          product.badge === "Enterprise" 
                            ? "bg-[var(--brand-secondary)]/90 text-[var(--brand-primary)] shadow-lg shadow-[var(--brand-secondary)]/50"
                            : product.badge === "Pro"
                            ? "bg-blue-500/90 text-white shadow-lg shadow-blue-500/50"
                            : "bg-gray-600/90 text-white shadow-lg shadow-gray-600/50"
                        }`}
                      >
                        {product.badge}
                      </motion.span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative w-full h-1/3 p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--brand-secondary)] transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
                        {product.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <motion.span 
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs bg-gradient-to-r from-[var(--brand-secondary)]/20 to-transparent text-[var(--brand-secondary)] px-3 py-1 rounded-full border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)]/60 transition-all"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover CTA Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center rounded-2xl backdrop-blur-sm">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="px-8 py-3 bg-gradient-to-r from-[var(--brand-secondary)] to-cyan-400 text-[var(--brand-primary)] font-bold rounded-xl hover:opacity-90 transition shadow-lg shadow-[var(--brand-secondary)]/50"
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
      <div className="py-20 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--card-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Our Products Stand Out</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Industry-leading features designed for modern enterprises</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "High Performance", desc: "Optimized for speed and reliability with minimal latency", delay: 0 },
              { icon: "🔒", title: "Enterprise Security", desc: "Military-grade encryption and compliance with global standards", delay: 0.1 },
              { icon: "📈", title: "Infinitely Scalable", desc: "Grow your operations without worrying about infrastructure limits", delay: 0.2 },
              { icon: "🤝", title: "24/7 Expert Support", desc: "Dedicated support team available round the clock for assistance", delay: 0.3 }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[var(--brand-secondary)]/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--brand-secondary)]/10 hover:to-white/5"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--brand-secondary)]/20 to-cyan-400/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-[var(--brand-secondary)]/40 group-hover:to-cyan-400/20 transition-all">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-[var(--brand-secondary)] transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
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
