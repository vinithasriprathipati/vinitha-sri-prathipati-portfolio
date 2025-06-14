
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, BarChart3, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "Low-Code App Development",
      description: "Build scalable, automated business apps using Pega to streamline operations and enhance workflow efficiency.",
      features: ["Process Automation", "Case Management", "Business Rules", "Integration Solutions"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Visualization",
      description: "Design comprehensive Power BI dashboards to deliver clear, actionable insights from complex datasets.",
      features: ["Interactive Dashboards", "Real-time Analytics", "Custom Reports", "Data Modeling"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions to transform your business processes and data insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
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

export default Services;
