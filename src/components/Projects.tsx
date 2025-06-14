import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, BarChart3, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Academic Dashboard System",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Built comprehensive role-specific dashboards for Students, Faculty, and Parents using a shared semantic data model in Power BI. Features personalized views and real-time academic performance tracking.",
      techStack: ["Power BI", "Data Modeling", "Semantic Layer", "Dashboard Design"],
      highlights: ["Role-based Access", "Shared Data Model", "Real-time Updates"]
    },
    {
      title: "Technical Hub",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Developed a real-time Power BI dashboard analyzing LinkedIn connections, engagement metrics, and post performance data. Provides actionable insights for professional networking strategy.",
      techStack: ["Power BI", "Real-time Analytics", "Data Visualization", "LinkedIn API"],
      highlights: ["Real-time Data", "Engagement Analytics", "Network Insights"]
    },
    {
      title: "Apply Loan Portal (Pega)",
      icon: <FileText className="w-8 h-8" />,
      description: "Case type project demonstrating comprehensive validation logic, multi-stage loan processing workflow, and automation features with client-side scripting and intelligent document parsing.",
      techStack: ["Pega", "Case Management", "Workflow Automation", "Document Processing"],
      highlights: ["Validation Logic", "Process Automation", "Document Parsing"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications demonstrating expertise in data analytics and low-code development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
