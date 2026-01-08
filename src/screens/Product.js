import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BouncyText from "../components/BouncyText";
import ProductCard from "../components/Cards/ProductCard";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "KEYE Vision AI",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1676933162740-0d8f1f3c8b6f?q=80&w=800&auto=format&fit=crop",
      description: "Advanced computer vision and AI-powered image analysis for real-time insights and automated decision-making",
      features: ["Object Detection", "Real-time Analysis", "ML Integration"],
      badge: "Enterprise",
      fullDescription: "KEYE Vision AI is our flagship computer vision platform that combines cutting-edge AI algorithms with real-time processing capabilities. Perfect for manufacturing, retail, and smart city applications.",
      specifications: [
        "99.9% accuracy in object detection",
        "Real-time processing up to 60 FPS",
        "Support for 50+ object categories",
        "Custom model training available",
        "Cloud and edge deployment options"
      ],
      useCases: [
        "Quality control in manufacturing",
        "Retail analytics and customer insights",
        "Traffic monitoring and smart cities",
        "Security threat detection"
      ],
      pricing: "Starting at $2,999/month"
    },
    {
      id: 2,
      title: "Smart Surveillance Suite",
      category: "Security",
      image: "https://images.unsplash.com/photo-1589361194805-49a74dc54e97?q=80&w=800&auto=format&fit=crop",
      description: "Comprehensive surveillance system with AI-enabled threat detection and intelligent monitoring",
      features: ["24/7 Monitoring", "Alert System", "Cloud Storage"],
      badge: "Pro",
      fullDescription: "Our Smart Surveillance Suite provides enterprise-grade security monitoring with AI-powered threat detection. Seamlessly integrate multiple camera sources and get instant alerts for suspicious activities.",
      specifications: [
        "Support for 500+ cameras per system",
        "AI-powered anomaly detection",
        "Encrypted cloud storage with 90-day retention",
        "Mobile app for remote monitoring",
        "Integration with existing security systems"
      ],
      useCases: [
        "Corporate campus security",
        "Retail loss prevention",
        "Government facility monitoring",
        "Perimeter security for industrial sites"
      ],
      pricing: "Starting at $1,499/month"
    },
    {
      id: 3,
      title: "IoT Infrastructure Hub",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      description: "Unified IoT device management and smart infrastructure orchestration for seamless connectivity",
      features: ["Device Management", "Real-time Sync", "Scalable"],
      badge: "Enterprise",
      fullDescription: "Manage thousands of IoT devices from a single, unified platform. Our Infrastructure Hub provides real-time monitoring, automated updates, and seamless integration with your existing IT infrastructure.",
      specifications: [
        "Manage up to 100,000 devices",
        "Real-time device health monitoring",
        "Over-the-air firmware updates",
        "Multi-protocol support (MQTT, CoAP, HTTP)",
        "Advanced analytics and reporting"
      ],
      useCases: [
        "Smart building automation",
        "Industrial IoT deployments",
        "Connected vehicle fleets",
        "Smart city infrastructure"
      ],
      pricing: "Starting at $3,999/month"
    },
    {
      id: 4,
      title: "SmartOps Dashboard",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?q=80&w=800&auto=format&fit=crop",
      description: "Comprehensive operational dashboard for Industry 4.0 insights with real-time analytics",
      features: ["Analytics", "KPI Tracking", "Automation"],
      badge: "Pro",
      fullDescription: "Transform your operations with real-time insights and automation. SmartOps Dashboard brings together all your operational data in one intuitive interface, enabling data-driven decision making.",
      specifications: [
        "Customizable dashboards and widgets",
        "Real-time data visualization",
        "Advanced predictive analytics",
        "Automated reporting and alerts",
        "Integration with 100+ business tools"
      ],
      useCases: [
        "Manufacturing operations monitoring",
        "Supply chain optimization",
        "Energy management and optimization",
        "Fleet and logistics management"
      ],
      pricing: "Starting at $899/month"
    },
    {
      id: 5,
      title: "Access Control System",
      category: "Security",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52b8b93?q=80&w=800&auto=format&fit=crop",
      description: "Biometric and credential-based access management with multi-factor authentication",
      features: ["Biometric Auth", "Multi-factor", "Audit Logs"],
      badge: "Standard",
      fullDescription: "Secure your facilities with our advanced Access Control System featuring biometric authentication, mobile credentials, and comprehensive audit trails. Easy to deploy and manage.",
      specifications: [
        "Support for facial recognition, fingerprint, and card readers",
        "Mobile credential support (iOS & Android)",
        "Real-time access logs and alerts",
        "Multi-site management from single platform",
        "Integration with HR and directory services"
      ],
      useCases: [
        "Corporate office access control",
        "Data center security",
        "Hospital and healthcare facilities",
        "Educational institution security"
      ],
      pricing: "Starting at $599/month"
    },
    {
      id: 6,
      title: "Cloud Infrastructure",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      description: "Scalable cloud solutions with enterprise-grade security and 99.99% uptime guarantee",
      features: ["Auto-scaling", "99.99% Uptime", "Compliance"],
      badge: "Enterprise",
      fullDescription: "Build and scale your applications on our robust cloud infrastructure. With guaranteed 99.99% uptime and enterprise-grade security, focus on innovation while we handle the infrastructure.",
      specifications: [
        "99.99% uptime SLA",
        "Auto-scaling and load balancing",
        "Global CDN with 100+ edge locations",
        "SOC 2, ISO 27001, HIPAA compliant",
        "24/7 monitoring and support"
      ],
      useCases: [
        "Web and mobile application hosting",
        "Data analytics and processing",
        "Disaster recovery and backup",
        "Development and testing environments"
      ],
      pricing: "Starting at $1,999/month"
    }
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
                      onClick={() => setSelectedProduct(product)}
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

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-b from-[var(--card-background)] to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl transition-all"
                >
                  ×
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold mb-3 ${
                    selectedProduct.badge === "Enterprise" 
                      ? "bg-[var(--brand-secondary)]/90 text-[var(--brand-primary)]"
                      : selectedProduct.badge === "Pro"
                      ? "bg-blue-500/90 text-white"
                      : "bg-gray-600/90 text-white"
                  }`}>
                    {selectedProduct.badge}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedProduct.title}</h2>
                  <p className="text-gray-300 mt-2">{selectedProduct.description}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Full Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProduct.fullDescription}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gradient-to-r from-[var(--brand-secondary)]/20 to-transparent text-[var(--brand-secondary)] rounded-full border border-[var(--brand-secondary)]/30 text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Technical Specifications</h3>
                  <ul className="space-y-2">
                    {selectedProduct.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-[var(--brand-secondary)] mr-2 mt-1">✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProduct.useCases.map((useCase, idx) => (
                      <div key={idx} className="p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-gray-300 text-sm">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Pricing</p>
                      <p className="text-2xl font-bold text-white">{selectedProduct.pricing}</p>
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-[var(--brand-secondary)] to-cyan-400 text-[var(--brand-primary)] font-bold rounded-lg shadow-lg shadow-[var(--brand-secondary)]/40"
                      >
                        Get Started
                      </motion.a>
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-[var(--brand-secondary)]"
                      >
                        Contact Sales
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
      <div className="py-20 bg-gradient-to-b from-[var(--card-background)] to-[var(--brand-primary)] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-secondary)]/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to Transform Your <span className="bg-gradient-to-r from-[var(--brand-secondary)] to-cyan-400 bg-clip-text text-transparent">Business?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Choose the perfect product for your needs and get started today. Our experts are ready to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 bg-gradient-to-r from-[var(--brand-secondary)] to-cyan-400 text-[var(--brand-primary)] font-bold text-lg shadow-lg shadow-[var(--brand-secondary)]/40 hover:shadow-[var(--brand-secondary)]/60 transition-all duration-300"
              >
                Request a Demo
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 border-2 border-white/20 text-white font-bold text-lg hover:border-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/5 transition-all duration-300"
              >
                Talk to Sales
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Product;
