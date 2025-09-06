"use client"
import { useState, useEffect } from "react"
import ProductCard from "./ProductCard1"

const ServicesCarousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  const services = [
    {
      title: "AI & Intelligent Solutions",
      description:
        "Predictive analytics, Vision AI (KEYE), and anomaly detection systems for manufacturing and smart cities.",
      category: "Artificial Intelligence",
    image: "/ai-robot-technology-futuristic.jpg",
    },
    {
      title: "Surveillance & Security Systems",
      description:
        "Advanced IP cameras, access control, and AI-enabled monitoring solutions for enterprises and government facilities.",
      category: "Security Technology",
    image: "/cctv.jpg",
    },
    {
      title: "Smart Infrastructure Solutions",
      description: "Comprehensive IT networking, cloud integration, and IoT device management for modern workplaces.",
      category: "Infrastructure",
    image: "/smart-city-infrastructure-technology.jpg",
    },
    {
      title: "Industry-Specific Smart Solutions",
      description:
        "Custom automation tools and digital workflow solutions for manufacturing, retail, and education sectors.",
      category: "Custom Solutions",
    image: "/industrial-automation-manufacturing.jpg",
    },
    {
      title: "SmartOps Applications",
      description:
        "Operations dashboards, process automation, and data insights for Industry 4.0 digital transformation.",
      category: "Operations",
    image: "/digital-dashboard-analytics-operations.jpg",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.max(0, services.length - slidesToShow)
        return prev >= maxSlide ? 0 : prev + 1
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [services.length, slidesToShow])

  const nextSlide = () => {
    const maxSlide = Math.max(0, services.length - slidesToShow)
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const maxSlide = Math.max(0, services.length - slidesToShow)
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const maxSlide = Math.max(0, services.length - slidesToShow)

  return (
    <div className="max-w-7xl mx-auto px-4 relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
      <button
  onClick={prevSlide}
  className="hidden md:absolute left-[-3rem] top-1/2 -translate-y-1/2 z-10 
             bg-white/20 hover:bg-[var(--brand-secondary-hover)] text-white 
             rounded-full w-14 h-14 flex items-center justify-center text-2xl
             border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)]/50 transition-all duration-300 md:flex"
>
  ◀
</button>

<button
  onClick={nextSlide}
  className="hidden md:absolute right-[-3rem] top-1/2 -translate-y-1/2 z-10 
             bg-white/20 hover:bg-[var(--brand-secondary-hover)] text-white 
             rounded-full w-14 h-14 flex items-center justify-center text-2xl
             border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)]/50 transition-all duration-300 md:flex"
>
  ▶
</button>


        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out py-5"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-none" style={{ width: `${100 / slidesToShow}%` }}>
              <ProductCard
                title={service.title}
                description={service.description}
                category={service.category}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[var(--brand-secondary)]"
                : "bg-[var(--brand-secondary)]/30 hover:bg-[var(--brand-secondary)]/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesCarousel1
