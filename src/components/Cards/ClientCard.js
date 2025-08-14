import React from "react";

function ClientCard() {
  return (
        <div className="relative w-full md:w-[22rem] lg:w-[20rem] rounded-xl border border-white/10 backdrop-blur-sm p-4 md:p-4 bg-brand-cardBackground shadow-glow hover:shadow-glowSecondary transition-shadow duration-300">
        <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Client"
              className="w-20 h-20 object-cover rounded-lg shadow-md"
            />
       
        <div>
        <h2 className="text-white text-lg font-bold">Card Title</h2>
        <p className="text-gray-300 mt-2 text-xs">eiusmod minim veniam, quis nostrud exercitation ullamco<span>
         eiusmod minim veniam, quis nostrud </span></p>
       
       </div>
      </div> </div>

  );
}

export default ClientCard;
