import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Animated gradient orbs - slow, fluid motion */}
      <div className="absolute inset-0">
        {/* Primary blue orb */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, hsl(220 80% 60% / 0.4) 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
            animation: 'gradientShift1 25s ease-in-out infinite',
          }}
        />
        
        {/* Purple orb */}
        <div 
          className="absolute w-[700px] h-[700px] rounded-full opacity-25 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, hsl(270 70% 55% / 0.4) 0%, transparent 70%)',
            top: '30%',
            right: '-15%',
            animation: 'gradientShift2 30s ease-in-out infinite',
          }}
        />
        
        {/* Teal orb */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, hsl(180 60% 50% / 0.35) 0%, transparent 70%)',
            bottom: '-10%',
            left: '20%',
            animation: 'gradientShift3 28s ease-in-out infinite',
          }}
        />
        
        {/* Secondary blue accent */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, hsl(200 75% 55% / 0.3) 0%, transparent 70%)',
            top: '60%',
            left: '60%',
            animation: 'gradientShift4 22s ease-in-out infinite',
          }}
        />
        
        {/* Soft purple accent */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[70px]"
          style={{
            background: 'radial-gradient(circle, hsl(280 65% 60% / 0.25) 0%, transparent 70%)',
            top: '10%',
            left: '50%',
            animation: 'gradientShift5 35s ease-in-out infinite',
          }}
        />
      </div>
      
      {/* Noise texture overlay for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
