import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Base background */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />
      
      {/* Primary animated gradient layer - adapts to theme */}
      <div 
        className="absolute inset-0 opacity-70 dark:opacity-50 motion-reduce:opacity-40 motion-reduce:animate-none transition-opacity duration-500"
        style={{
          background: `linear-gradient(
            135deg,
            hsl(var(--gradient-start)) 0%,
            hsl(var(--gradient-mid)) 25%,
            hsl(var(--gradient-end)) 50%,
            hsl(var(--gradient-accent)) 75%,
            hsl(var(--gradient-start)) 100%
          )`,
          backgroundSize: '400% 400%',
          animation: 'gradientMove 20s ease-in-out infinite',
        }}
      />
      
      {/* Secondary subtle accent layer */}
      <div 
        className="absolute inset-0 opacity-40 dark:opacity-30 motion-reduce:opacity-20 motion-reduce:animate-none transition-opacity duration-500"
        style={{
          background: `linear-gradient(
            -45deg,
            transparent 0%,
            hsl(var(--primary) / 0.08) 30%,
            hsl(var(--accent) / 0.06) 50%,
            hsl(var(--primary) / 0.08) 70%,
            transparent 100%
          )`,
          backgroundSize: '300% 300%',
          animation: 'gradientMoveReverse 25s ease-in-out infinite',
        }}
      />
      
      {/* Subtle radial glow for depth */}
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            ellipse at 30% 20%,
            hsl(var(--primary) / 0.1) 0%,
            transparent 50%
          ), radial-gradient(
            ellipse at 70% 80%,
            hsl(var(--accent) / 0.08) 0%,
            transparent 50%
          )`,
        }}
      />
      
      {/* Top fade for nav readability */}
      <div 
        className="absolute top-0 left-0 right-0 h-24 transition-colors duration-500"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--background)), transparent)',
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
