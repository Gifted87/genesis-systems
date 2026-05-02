import React from "react";

export function Atmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Ambient gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% 50%, rgba(217,119,87,0.06) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 15% 20%, rgba(91,155,213,0.04) 0%, transparent 55%),
            radial-gradient(ellipse 35% 30% at 85% 80%, rgba(109,184,138,0.03) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Fine grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,173,140,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,173,140,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />
    </div>
  );
}
