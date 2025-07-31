import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Your EmailJS configuration
    const serviceId = 'service_f5aq94d';
    const templateId = 'template_ht2visf';
    const publicKey = 'LmkQsiXufy_G9um3x';
    
    try {
      console.log('Sending email with data:', formData);
      console.log('EmailJS config:', { serviceId, templateId, publicKey });
      
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('All fields are required');
      }
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'vinithasriprathipati@gmail.com'
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!"
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                and ways to leverage data analytics and automation to drive business success.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:vinithachowdary06@gmail.com" className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">vinithachowdary06@gmail.com</div>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/vinitha-chowdary-203232258/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                <Linkedin className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">LinkedIn</div>
                  <div className="text-gray-600">https://www.linkedin.com/in/vinitha-chowdary-203232258/</div>
                </div>
              </a>
              
              <a href="https://github.com/vinithasriprathipati" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                <Github className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">GitHub</div>
                  <div className="text-gray-600">https://github.com/vinithasriprathipati</div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full" 
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full" 
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={5} 
                    className="w-full" 
                    placeholder="Tell me about your project or opportunity..."
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
