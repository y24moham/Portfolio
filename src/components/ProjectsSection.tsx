import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Quadcopter Prototype",
      description: "Built a ground-up quadcopter prototype by implementing closed-loop control algorithms in C++ on an Arduino with prototype circuit boards, controlling propeller speed from gyrometer sensor output.",
      image: "/placeholder.svg",
      githubUrl: "https://github.com/y24moham/Quadcopter-Prototype/tree/main",
      demoUrl: "https://drive.google.com/file/d/1NxJxWkp-EyR-reV-OZMwFn3o3bTLC3V4/view?usp=sharing",
    },
    {
      title: "Smart Home IoT System",
      description: "Developed an automated home monitoring system with Arduino and sensors",
      image: "/placeholder.svg",
      githubUrl: "https://github.com/yourusername/smart-home",
      demoUrl: null,
    },
    {
      title: "Robotic Arm Controller",
      description: "Created precise motion control software for 6-DOF robotic arm",
      image: "/placeholder.svg",
      githubUrl: "https://github.com/yourusername/robotic-arm",
      demoUrl: "https://youtube.com/watch?v=demo2",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button asChild size="sm">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;