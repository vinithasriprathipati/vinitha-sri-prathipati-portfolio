
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, BarChart3, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HR Job Opening Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Analyzed HR job opening data to identify hiring trends and patterns. Developed comprehensive dashboards using advanced analytics to visualize recruitment metrics, improving hiring efficiency by 35%.",
      techStack: ["Power BI", "Excel", "Data Analytics"],
      highlights: ["Hiring Efficiency Improved by 35%", "Comprehensive Recruitment Metrics", "Advanced Analytics Implementation"],
      link: "#"
    },
    {
      title: "Olympics 2024 Data Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Conducted in-depth analysis of 5000+ Olympic records. Built 5+ dashboards to visualize athlete performance and event trends with real-time data updates, increasing analytics accuracy by 25%.",
      techStack: ["Power BI", "Data Visualization", "Real-time Analytics"],
      highlights: ["5000+ Records Analyzed", "5+ Interactive Dashboards", "25% Increased Accuracy"],
      link: "https://github.com/vinithasriprathipati/paris-2024-olympics-dashboard"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications demonstrating expertise in data analytics and dashboard development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-primary">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Highlights:</h4>
                    <div className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      asChild
                      className="w-full gradient-primary text-white"
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
