
import Navigation from "@/components/Navigation";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
