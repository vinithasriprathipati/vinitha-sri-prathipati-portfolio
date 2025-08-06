
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Get all sections
      const sections = ['home', 'about', 'experience', 'skills', 'certifications', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Special case for home section at top
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lr:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-primary">
            Vinitha Chowdary
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors ${
                activeSection === 'home' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${
                activeSection === 'about' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`transition-colors ${
                activeSection === 'experience' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-colors ${
                activeSection === 'skills' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className={`transition-colors ${
                activeSection === 'certifications' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors ${
                activeSection === 'services' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-colors ${
                activeSection === 'projects' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${
                activeSection === 'contact' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="gradient-primary text-white"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
