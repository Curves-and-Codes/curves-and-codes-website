import React from "react";

const ProjectImages = () => {
  return (
    <div className="lg:w-[50%] sm:w-[90%]  md:w-[90%] w-[100%]">
    <div className="relative w-full max-w-4xl mx-auto h-[50vh] md:h-[60vh]">
      {/* Main Rectangle Image */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden border-2 z-10 
                   w-[80%] h-[70%] sm:w-[60%] sm:h-[50%] md:w-[300px] md:h-[200px]"
        style={{
          borderColor: "var(--brand-secondary)",
          boxShadow: "var(--shadow-glow-secondary)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
          alt="Main Project"
          className="w-full h-full object-cover"
          // Add an onerror handler as a best practice for external images
          onError={(e) => { e.target.src='https://placehold.co/800x600/38bdf8/ffffff?text=Main'; }}
        />
      </div>

      {/* Top Left Rectangle */}
      <div
        className="absolute top-[20%] left-[5%] rounded-lg overflow-hidden z-10
                   w-[30%] h-[25%] sm:w-[30%] sm:h-[30%] md:w-[180px] md:h-[120px] md:top-[10%] md:left-[10%]"
        style={{
          border: "2px solid var(--brand-secondary)",
          boxShadow: "var(--shadow-glow-secondary)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Small Top Left"
          onError={(e) => { e.target.src='https://placehold.co/800x600/06b6d4/ffffff?text=Top+Left'; }}
        />
      </div>

      {/* Bottom Right Rectangle */}
      <div
        className="absolute bottom-[10%] right-[5%] rounded-lg overflow-hidden z-10
                   w-[40%] h-[30%] sm:w-[35%] sm:h-[30%] md:w-[200px] md:h-[130px] md:bottom-[10%] md:right-[20%]"
        style={{
          border: "2px solid var(--brand-secondary)",
          boxShadow: "var(--shadow-glow-secondary)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
          alt="Small Bottom Right"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src='https://placehold.co/800x600/0891b2/ffffff?text=Bottom+Right'; }}
        />
      </div>

      {/* Small Extra Image */}
      <div
        className="absolute top-[30%] right-[1%] rounded-md overflow-hidden z-30
                   w-[30%] h-[25%] sm:w-[25%] sm:h-[30%] md:w-[140px] md:h-[100px] md:top-[20%] md:right-[20%]"
        style={{
          border: "2px solid var(--brand-secondary)",
          boxShadow: "var(--shadow-glow-secondary)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
          alt="Small Extra"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src='https://placehold.co/800x600/0ea5e9/ffffff?text=Extra'; }}
        />
      </div>
      
     </div>
    </div>
  );
};

export default ProjectImages;
