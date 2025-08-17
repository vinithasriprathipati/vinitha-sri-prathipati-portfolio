import React from 'react';

const BackgroundAnimation = () => {
  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/5 animate-pulse-slowest" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Rotating Circle */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-float-slow animate-rotate opacity-30" />
        
        {/* Medium Bouncing Circle */}
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full animate-bounce-in" style={{ animationDelay: '1s', animationIterationCount: 'infinite' }} />
        
        {/* Small Glowing Circle */}
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-glow animate-float-fast" />
        
        {/* Animated Triangle */}
        <div className="absolute top-2/3 right-1/3 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-primary/15 animate-float-slow animate-wave" style={{ animationDelay: '2s' }} />
        
        {/* Rotating Square */}
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-muted/20 to-accent/20 rotate-45 animate-rotate animate-float" />
        
        {/* Additional dynamic elements */}
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-primary/20 rounded-full animate-bounce-in" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-80 right-40 w-6 h-6 bg-secondary/25 rounded-full animate-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 left-1/3 w-10 h-10 bg-accent/15 rounded-full animate-float-slow" />
        
        {/* New geometric shapes */}
        <div className="absolute top-40 left-1/2 w-14 h-14 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full animate-bounce-in" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-60 right-1/4 w-18 h-18 bg-accent/12 rounded-full animate-float animate-glow" />
        
        {/* Hexagon shape */}
        <div className="absolute top-96 left-40 w-10 h-10 bg-primary/10 rotate-45 animate-rotate animate-float-fast" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }} />
      </div>
      
      {/* Enhanced Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl animate-pulse-slow animate-float" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-gradient-to-r from-accent/12 to-primary/12 rounded-full blur-3xl animate-pulse-slower animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-secondary/8 to-accent/8 rounded-full blur-3xl animate-pulse-slowest" />
        
        {/* Additional gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/8 to-accent/8 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-secondary/6 to-primary/6 rounded-full blur-3xl animate-pulse-slower" style={{ animationDelay: '2s' }} />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-primary/20 rounded-full animate-float-fast opacity-40"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>
    </div>
  );
};

export default BackgroundAnimation;