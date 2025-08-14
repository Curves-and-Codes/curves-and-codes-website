import React from 'react';

function ServiceCard() {
  return (
     <div className="relative w-full md:w-[22rem] lg:w-[20rem] rounded-xl border border-white/10 backdrop-blur-xl p-6 md:p-10 bg-[var(--card-background)] shadow-[var(--shadow-glow)] hover:shadow-[0_0_80px_rgba(239,1,99,0.2)] transition-shadow duration-300">

  {/* Floating Avatar */}
 <div className="absolute -top-16 left-1/2 -translate-x-1/2 border-2 border-white rounded-full overflow-hidden">   <div className="w-32 h-32 bg-[var(--brand-secondary)] rounded-full shadow-lg overflow-hidden ring-4 ring-[var(--card-background)] 2`">
      <img
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Demo"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Card Content */}
  <div className="mt-16 text-center">
    <h2 className="text-2xl font-bold text-white">Service One</h2>
    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
      lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      <span className="text-[var(--brand-accent)] font-medium">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</span>.
    </p>
  </div>

  
      </div>

  );
}

export default ServiceCard;