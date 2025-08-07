
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
                <div className="flex items-center space-x-4 mb-8">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Education Journey</h3>
                  </div>
                </div>
                
                {/* Education Flowchart */}
                <div className="relative">
                  {/* 10th Grade */}
                  <div className="education-box card-hover mb-6">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        10th Grade
                      </h4>
                      <div className="text-primary font-medium">
                        Sri Prakash Synergy School
                      </div>
                      <div className="text-gray-600 text-sm">
                        2020
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting Arrow */}
                  <div className="flex justify-center mb-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary"></div>
                    <div className="absolute w-3 h-3 bg-primary rounded-full transform translate-y-6 -translate-x-1.5"></div>
                  </div>
                  
                  {/* Intermediate */}
                  <div className="education-box card-hover mb-6">
                    <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 rounded-lg border border-secondary/20">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Intermediate (MPC)
                      </h4>
                      <div className="text-primary font-medium">
                        Aditya Junior College
                      </div>
                      <div className="text-gray-600 text-sm">
                        2020 - 2022
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting Arrow */}
                  <div className="flex justify-center mb-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-accent"></div>
                    <div className="absolute w-3 h-3 bg-secondary rounded-full transform translate-y-6 -translate-x-1.5"></div>
                  </div>
                  
                  {/* B.Tech */}
                  <div className="education-box card-hover">
                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg border border-accent/20">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        B.Tech in Information Technology
                      </h4>
                      <div className="text-primary font-medium">
                        Aditya University
                      </div>
                      <div className="text-gray-600 text-sm">
                        2022 - 2026
                      </div>
                      <div className="mt-2">
                        <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          Currently Pursuing
                        </span>
                      </div>
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
