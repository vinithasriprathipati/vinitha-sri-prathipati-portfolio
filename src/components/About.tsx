
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });
  const [cardRef, cardInView] = useInView({ threshold: 0.1 });
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate learner in the field of Information Technology with a strong interest in data analytics and automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className={`space-y-6 transition-all duration-1000 delay-200 ${contentInView ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-start space-x-4 group">
              <Heart className="w-6 h-6 text-primary mt-1 animate-float group-hover:animate-wave" />
              <div>
                <h3 className="text-xl font-semibold mb-2">My Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experienced in using tools like Power BI and Pega to build efficient solutions. 
                  Always eager to explore new technologies, take on challenges, and contribute to 
                  meaningful projects that make a difference.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <Target className="w-6 h-6 text-primary mt-1 animate-float-slow group-hover:animate-glow" />
              <div>
                <h3 className="text-xl font-semibold mb-2">My Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specializing in transforming complex data into actionable insights and 
                  automating business processes to drive efficiency and innovation in 
                  enterprise environments.
                </p>
              </div>
            </div>
          </div>
          
          <div ref={cardRef} className={`transition-all duration-1000 delay-400 ${cardInView ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`}>
            <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary animate-float group-hover:animate-bounce-in" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      B.Tech in Information Technology
                    </h4>
                    <div className="text-primary font-medium">
                      Aditya University
                    </div>
                    <div className="text-gray-600">
                      2022 - 2026
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Intermediate (MPC)
                    </h4>
                    <div className="text-primary font-medium">
                      Aditya Junior College
                    </div>
                    <div className="text-gray-600">
                      2020 - 2022
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      10th Grade
                    </h4>
                    <div className="text-primary font-medium">
                      Sri Prakash Synergy School
                    </div>
                    <div className="text-gray-600">
                      2020
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
