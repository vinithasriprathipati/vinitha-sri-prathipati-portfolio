import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Smooth animated gradient - respects reduced motion */}
      <div 
        className="absolute inset-0 opacity-60 motion-reduce:opacity-40 motion-reduce:animate-none"
        style={{
          background: `linear-gradient(
            135deg,
            hsl(198 93% 96%) 0%,
            hsl(198 93% 98%) 25%,
            hsl(200 100% 97%) 50%,
            hsl(198 80% 95%) 75%,
            hsl(198 93% 96%) 100%
          )`,
          backgroundSize: '400% 400%',
          animation: 'gradientMove 20s ease-in-out infinite',
        }}
      />
      
      {/* Secondary subtle layer for depth */}
      <div 
        className="absolute inset-0 opacity-30 motion-reduce:opacity-20 motion-reduce:animate-none"
        style={{
          background: `linear-gradient(
            -45deg,
            transparent 0%,
            hsl(198 93% 94% / 0.5) 30%,
            hsl(176 77% 95% / 0.3) 50%,
            hsl(198 93% 94% / 0.5) 70%,
            transparent 100%
          )`,
          backgroundSize: '300% 300%',
          animation: 'gradientMoveReverse 25s ease-in-out infinite',
        }}
      />
      
      {/* Very subtle top fade for nav area */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 opacity-50"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--background)), transparent)',
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
