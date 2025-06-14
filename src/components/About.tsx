
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate learner in the field of Information Technology with a strong interest in data analytics and automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Heart className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">My Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experienced in using tools like Power BI and Pega to build efficient solutions. 
                  Always eager to explore new technologies, take on challenges, and contribute to 
                  meaningful projects that make a difference.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Target className="w-6 h-6 text-primary mt-1" />
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
          
          <div>
            <Card className="border-l-4 border-l-primary shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      B.Tech in Information Technology
                    </h4>
                    <div className="text-primary font-medium">
                      Aditya Engineering College
                    </div>
                    <div className="text-gray-600">
                      Expected 2026
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
