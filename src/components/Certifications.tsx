
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate",
      issuer: "Microsoft",
      type: "Professional Certification",
      icon: <Award className="w-6 h-6" />,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/22A91A12C2-7356/9292326BA2D04A81?sharingId=DBB75A6B8CCA4219"
    },
    {
      title: "Java IT Specialist",
      issuer: "Industry Standard",
      type: "Programming Certification",
      icon: <BadgeCheck className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1xzs7ICqSbP6EDw01iYtEE5xMnei1nEet/view?usp=sharing"
    },
    {
      title: "Python IT Specialist",
      issuer: "Industry Standard", 
      type: "Programming Certification",
      icon: <BadgeCheck className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1TiZiRSuN5iwfYlm-NZtFeFkFo3CNcBLV/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in data analytics and programming
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="text-center flex-grow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                    {cert.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <div className="text-primary font-medium mb-2">
                    {cert.issuer}
                  </div>
                  <Badge variant="outline" className="border-primary text-primary mb-4">
                    {cert.type}
                  </Badge>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    asChild
                    className="w-full gradient-primary text-white"
                    size="sm"
                  >
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>View Certificate</span>
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

export default Certifications;
