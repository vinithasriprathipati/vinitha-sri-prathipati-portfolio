import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float-slow" />
        
        {/* Medium Circle */}
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-secondary/10 rounded-full animate-float-medium" />
        
        {/* Small Circle */}
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-accent/8 rounded-full animate-float-fast" />
        
        {/* Triangle */}
        <div className="absolute top-2/3 right-1/3 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-primary/8 animate-float-slow" />
        
        {/* Square */}
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-muted/10 rotate-45 animate-float-medium" />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-primary/10 rounded-full animate-float-fast" />
        <div className="absolute top-80 right-40 w-6 h-6 bg-secondary/15 rounded-full animate-float-slow" />
        <div className="absolute bottom-40 left-1/3 w-10 h-10 bg-accent/10 rounded-full animate-float-medium" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slowest" />
      </div>
    </div>
  );
};

export default BackgroundAnimation;