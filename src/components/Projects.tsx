import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, BarChart3, FileText, Users, Package } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Projects = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });
  const projects = [
    {
      title: "Courier Connect",
      icon: <Package className="w-8 h-8" />,
      description: "Developed a Pega Constellation-based courier booking and delivery application to streamline end-to-end parcel management. Designed workflows for customer booking, admin approvals, pickup verification, and delivery tracking, enhancing efficiency and improving customer experience.",
      techStack: ["Pega Constellation 24.2", "Workflow Automation", "Role-Based Portals & Dashboards"],
      highlights: ["Automated Courier Booking with Instant Price Calculation", "Admin Dashboard for Approvals & Assignments", "Real-Time Notifications & Delivery Status Updates", "Improved Transparency and Faster Processing"],
      link: "https://github.com/vinithasriprathipati/courier_connect"
    },
    {
      title: "Campus Placement System",
      icon: <Users className="w-8 h-8" />,
      description: "Developed a Pega Constellation-based application to automate campus recruitment processes. Designed workflows for student registration, job postings, eligibility filtering, and interview scheduling, improving coordination and reducing manual effort by 40%.",
      techStack: ["Pega Constellation 24.2", "Workflow Automation", "Role-Based Dashboards"],
      highlights: ["Automated Student Registration & Job Posting", "Eligibility-Based Candidate Filtering", "Streamlined Interview Scheduling", "40% Reduction in Manual Processing Time"],
      link: "https://github.com/vinithasriprathipati/campus_placement"
    },
    {
      title: "HR Job Opening Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Performed analysis on 100+ job records covering departments, seniority levels, salary trends, and hiring timelines. Built interactive dashboards to visualize workforce demand, department-wise openings, and hiring efficiency, improving recruitment visibility by 30%.",
      techStack: ["Power BI", "Excel", "Data Analytics"],
      highlights: ["100+ Job Records Analyzed", "Department & Seniority-Level Insights", "Salary & Hiring Timeline Trends", "30% Improved Recruitment Visibility"],
      link: "https://github.com/vinithasriprathipati/hr_job_openings_dashboard"
    },
    {
      title: "Academic Pulse",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Analyzed 5000+ student records on marks, attendance, and academic performance across departments and roles. Developed dashboards with role-specific views for students, faculty, and parents, enabling timely interventions and improving performance tracking by 35%.",
      techStack: ["Power BI", "Data Modeling", "Data Analytics"],
      highlights: ["5000+ Student Records Analyzed", "Role-Specific Dashboards for Students, Faculty & Parents", "Academic Trends & Attendance Insights", "35% Improved Performance Tracking"],
      link: "https://github.com/vinithasriprathipati/academic_pulse"
    },
    {
      title: "Olympics 2024 Data Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Conducted analysis on 5000+ Olympic records to study athlete performance and event outcomes. Built dashboards with real-time data updates to visualize participation, performance, and country-wise trends, increasing analytics accuracy by 25%.",
      techStack: ["Power BI", "Data Visualization", "Real-Time Analytics"],
      highlights: ["5000+ Olympic Records Analyzed", "Athlete & Event Performance Trends", "Country-Wise Participation Insights", "25% Increased Analytics Accuracy"],
      link: "https://github.com/vinithasriprathipati/paris-2024-olympics-dashboard"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications demonstrating expertise in data analytics and dashboard development
          </p>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-lg card-hover glow-hover flex flex-col group transition-all duration-700 ${
                gridInView ? 'animate-slide-up' : 'opacity-0 translate-y-12'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-primary icon-hover animate-float-slow group-hover:animate-glow">
                    {project.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
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
                        <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1 badge-hover">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      asChild
                      className="w-full gradient-primary text-white button-hover"
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
