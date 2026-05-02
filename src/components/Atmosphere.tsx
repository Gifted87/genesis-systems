import React from "react";

export function Atmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[var(--bg)]">
      {/* Dynamic Gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, var(--bg1) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, var(--bg1) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(217,119,87,0.04) 0%, transparent 70%)
          `
        }}
      />
      
      {/* Precision Grid */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />
    </div>
  );
}
