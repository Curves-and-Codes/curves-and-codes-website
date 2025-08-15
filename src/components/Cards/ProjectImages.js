import React from "react";
import "../css/projectImages.css";

const ProjectImages = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[50vh] md:h-[60vh]">
      {/* Main Rectangle Image */}
      <div
        className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden border-2 z-10"
        style={{
          width: "300px",
          height: "200px",
          borderColor: "var(--brand-secondary)",
          boxShadow: "var(--shadow-glow-secondary)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
          alt="Main Project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Left Rectangle */}
      <div
        className="absolute -top-[1%] left-[20%] rounded-lg overflow-hidden z-10"
        style={{
          width: "180px",
          height: "120px",
          border: "2px solid var(--brand-secondary)",
          boxShadow: "var(--shadow-glow-secondary)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Small Top Left"
        />
      </div>

      {/* Bottom Right Rectangle */}
      <div
        className="absolute -bottom-[6%] right-[20%] rounded-lg overflow-hidden z-10"
        style={{
          width: "200px",
          height: "130px",
          border: "2px solid var(--brand-secondary)",
          boxShadow: "var(--shadow-glow-secondary)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
          alt="Small Bottom Right"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Small Extra Image */}
      <div
        className="absolute top-[12%] right-[20%] rounded-md overflow-hidden z-30"
        style={{
          width: "140px",
          height: "100px",
          border: "2px solid var(--brand-secondary)",
          boxShadow: "var(--shadow-glow-secondary)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
          alt="Small Extra"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectImages;
