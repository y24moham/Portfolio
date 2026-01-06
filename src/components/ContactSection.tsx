import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <CardDescription>
                I'm always open to discussing new opportunities and interesting projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email */}
              <div className="text-center">
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href="mailto:y24moham@uwaterloo.ca">
                    <Mail className="h-5 w-5 mr-2" />
                    y24moham@uwaterloo.ca
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <a href="https://www.linkedin.com/in/yasin-samir/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/y24moham" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>

              {/* Additional Contact Info */}
              <div className="text-center text-sm text-muted-foreground">
                <p>Based in North York, ON, Canada</p>
                <p>Open to co-op and internship opportunities</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;