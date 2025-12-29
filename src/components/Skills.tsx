
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Workflow, BarChart3, GitBranch, Zap, Globe } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Skills = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });
  const skillCategories = [
    {
      title: "Low-Code Development",
      icon: <Workflow className="w-8 h-8" />,
      skills: ["Pega"],
      color: "text-blue-600"
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Power BI", "Microsoft Fabric", "SQL"],
      color: "text-green-600"
    },
    {
      title: "Programming",
      icon: <Code className="w-8 h-8" />,
      skills: ["Java", "Python", "C++"],
      color: "text-purple-600"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8" />,
      skills: ["HTML", "CSS"],
      color: "text-indigo-600"
    },
    {
      title: "Other Tools",
      icon: <Database className="w-8 h-8" />,
      skills: ["Apache Spark", "GitHub"],
      color: "text-orange-600"
    },
    {
      title: "Specialties",
      icon: <Zap className="w-8 h-8" />,
      skills: ["Workflow Automation", "Dashboard Design", "Data Transformation"],
      color: "text-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data-driven solutions and automation
          </p>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`shadow-lg card-hover glow-hover group transition-all duration-700 ${
                gridInView ? 'animate-bounce-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${category.color} icon-hover animate-float-slow group-hover:animate-glow`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-colors badge-hover"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
