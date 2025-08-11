
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                alt="Vinitha Sri Prathipati" 
                src="/lovable-uploads/440e053f-a7e4-466c-8d38-430788ebd7dc.png" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Vinitha Sri Prathipati
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
            Data Analyst & Low-Code App Developer
          </h2>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            "Transforming Data into Decisions & Processes into Performance."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={scrollToAbout} 
              size="lg" 
              className="gradient-primary text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Discover My Journey
            </Button>
            
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a 
                href="https://drive.google.com/file/d/1LNolTIr0MXf1S5w2bnjVdOjbnb7dxGUm/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>View Resume</span>
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
