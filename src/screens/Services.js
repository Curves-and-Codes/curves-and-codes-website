
import Portfolio from "../components/Cards/Portfolio"
import ServicesCarousel1 from "../components/Cards/ServicesCarousel1"
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout"
// import ScrollTriggeredVideo from "../components/ScrollTriggeredVideo"
import IndustriesInfiniteSlider from "../components/Cards/IndustriesInfiniteSlider"
import BouncyText from "../components/BouncyText"



function Services() {
  return (
    <div className="w-full  bg-[var(--brand-primary)]">
      {/* Hero Section */}
    <div className="relative pt-24 pb-16 bg-gradient-to-b from-[var(--brand-primary)] to-gray-800 overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full top-7 object-cover brightness-60 pointer-events-none"
  >
    <source src="/cctv.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional overlay for extra dim */}
  <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center">
    <BouncyText
      text="Our Solutions & Services"
      className="text-4xl sm:text-4xl md:text-5xl text-white px-4 mt-3 font-extrabold leading-tight"
    />
    <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed mt-4">
      From AI-powered applications to secure infrastructure, we deliver end-to-end technology solutions for the industries of tomorrow.
    </p>
  </div>
</div>

      {/* Scroll-triggered video section */}
      {/* <ScrollTriggeredVideo videoSrc="/video.mp4" /> */}

      {/* Services Carousel */}
      <div className="py-16 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Technology Solutions</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Explore our comprehensive range of cutting-edge solutions designed to transform your business operations.
          </p>
        </div>
        <ServicesCarousel1 />
      </div>
     <Portfolio /> 
      {/* Value Proposition */}
      <div className="py-16 bg-[var(--brand-primary)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[var(--brand-primary)]">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">End-to-End Partner</h3>
              <p className="text-gray-300 text-sm">Complete technology solutions from concept to deployment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[var(--brand-primary)]">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Driven Intelligence</h3>
              <p className="text-gray-300 text-sm">Advanced AI at the core of every solution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[var(--brand-primary)]">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scalable & Secure</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade security with unlimited scalability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[var(--brand-primary)]">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Trusted Globally</h3>
              <p className="text-gray-300 text-sm">Trusted by enterprises and governments worldwide</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Industries We Serve */}
      {/* <div className="py-16 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Manufacturing", icon: "🏭" },
              { name: "Smart Cities", icon: "🏙️" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Enterprises", icon: "🏢" },
              { name: "Education", icon: "🎓" },
              { name: "Retail", icon: "🛍️" },
            ].map((industry, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--brand-secondary-hover)] transition-colors duration-300">
                  <span className="text-3xl">{industry.icon}</span>
                </div>
                <h3 className="text-white font-medium">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <IndustriesInfiniteSlider /> 

      {/* About Section with Hexagon Background */}
      <HexagonGridBgAbout />

      {/* Call to Action */}
      <div className="py-16 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Looking for the Right Technology Partner?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our solutions or connect with us for a customized proposal tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/80 text-[var(--brand-primary)] font-semibold rounded-xl transition-colors duration-300 transform hover:scale-105">
              Explore Solutions
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[var(--brand-secondary)] text-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)] hover:text-[var(--brand-primary)] font-semibold rounded-xl transition-all duration-300">
              Contact Us
            </button>

import ServicesCarousel1 from "../components/Cards/ServicesCarousel1";
import Portfolio from "../components/Cards/Portfolio";
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout";
import IndustriesInfiniteSlider from "../components/Cards/IndustriesInfiniteSlider";
import BouncyText from "../components/BouncyText";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";

function Services() {
  return (
    <div className="w-full pt-16 bg-[var(--brand-primary)]">
      {/* Hero Section with Video */}
      <div className="relative h-[50vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-60 pointer-events-none"
        >
          <source src="/cctv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <BouncyText
            text="Our Solutions & Services"
            className="text-4xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight mb-4"
          />
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            From AI-powered applications to secure infrastructure, we deliver
            end-to-end technology solutions for the industries of tomorrow.
          </p>
        </div>
      </div>

      {/* Canvas Background Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md"></div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-16 text-white">
          {/* Services Carousel */}
          <div className="py-16  ">
            <div className="max-w-6xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Technology Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of cutting-edge solutions
                designed to transform your business operations.
              </p>
            </div>
            <ServicesCarousel1 />
          </div>
          <div className=" text-center">
          <BouncyText
            text="Our Services"
            className="text-4xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight mb-4"
          />
          </div>
          <Portfolio />
          {/* Value Proposition */}
          <div className="py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                {
                  icon: "🤝",
                  title: "End-to-End Partner",
                  desc: "Complete technology solutions from concept to deployment",
                },
                {
                  icon: "🧠",
                  title: "AI-Driven Intelligence",
                  desc: "Advanced AI at the core of every solution",
                },
                {
                  icon: "📈",
                  title: "Scalable & Secure",
                  desc: "Enterprise-grade security with unlimited scalability",
                },
                {
                  icon: "🏆",
                  title: "Trusted Globally",
                  desc: "Trusted by enterprises and governments worldwide",
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-16 h-16 bg-[var(--brand-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-[var(--brand-primary)]">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Slider */}
      <IndustriesInfiniteSlider />

      {/* Hexagon Background */}
      <section className="relative">
        <HexagonGridBgAbout />
      </section>

      {/* Call to Action */}
      <div className="py-16 bg-[var(--brand-primary)] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Looking for the Right Technology Partner?
          </h2>
          <p className="text-xl text-white mb-8">
            Explore our solutions or connect with us for a customized proposal
            tailored to your needs.
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about" className="px-8 py-2 bg-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/80 text-[var(--brand-primary)] font-semibold rounded-xl transition transform hover:scale-105">
              Explore Us
            </a>
            <a href="/contact" className="px-8 py-2 bg-transparent border-2 border-[var(--brand-secondary)] text-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)] hover:text-[var(--brand-primary)] font-semibold rounded-xl transition-all">
              Contact Us
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services