
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Experience = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });
  
  const experiences = [
    {
      title: "Apprentice",
      company: "Areteans",
      period: "Jan 2025 to June 2025",
      description: "Working on enterprise solutions using Pega platform to develop scalable business applications.",
      skills: ["Pega", "Enterprise Solutions", "Low-Code Development"],
      completionLetter: "https://drive.google.com/file/d/1oFSvbFDjlVN7_utBEJdIRojgGBal7Esv/view?usp=sharing"
    },
    {
      title: "Data Analyst Intern",
      company: "Technical Hub",
      period: "June 2024 to July 2024",
      description: "Built comprehensive real-time dashboards using Power BI to analyze and visualize data insights.",
      skills: ["Power BI", "Data Visualization", "Real-time Analytics", "Dashboard Design"],
      completionLetter: "https://drive.google.com/file/d/1d-cRNq5w3umf72kdcVRCfkSQXXUhFUhn/view?usp=sharing"
    }
  ];

  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 transition-all duration-1000 ${titleInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through practical applications of data analytics and low-code development
          </p>
        </div>
        
        <div ref={cardsRef} className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`shadow-lg card-hover glow-hover transition-all duration-700 ${
                cardsInView ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-6 h-6 text-primary icon-hover" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                      <div className="text-primary font-semibold">{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary badge-hover">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-2">
                  <Button 
                    asChild
                    className="gradient-primary text-white button-hover"
                    size="sm"
                  >
                    <a 
                      href={exp.completionLetter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <span>View Completion Letter</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
