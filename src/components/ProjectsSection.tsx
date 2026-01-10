import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EV3 Prosthetic Hand",
      description: "Designed and programmed a functional EV3-based prosthetic hand using C, implementing motor-driven open/close grip control and basic sensor-driven behavior to enable controlled object handling as a prototype assistive replacement for key hand functions. (Oct-Dec 2023)",
      image: "Prosthetic-Hand-Image.jpg",
      githubUrl: "https://github.com/y24moham/Prosthetic-Hand-EV3/",
      demoUrl: "https://drive.google.com/file/d/1u6iXG5a_sigPQkx7iz7OC_ltrGPNhpzM/view?usp=sharing",
    },
    {
      title: "Quadcopter Prototype",
      description: "Built a ground-up quadcopter prototype by implementing closed-loop control algorithms in C++ on an Arduino with prototype circuit boards and external sensors, controlling propeller speed from gyrometer sensor output. (June-Aug 2020)",
      image: "Quadcopter-Image.PNG",
      githubUrl: "https://github.com/y24moham/Quadcopter-Prototype/",
      demoUrl: "https://drive.google.com/file/d/1RMSzE_in0KuofrDoc0nF74Z5vaZzTccr/view?usp=sharing",
    },
    {
      title: "Obstacle-Aware Arduino Robot",
      description: "Developed Arduino firmware for a two-motor robot featuring an LCD UI, ultrasonic distance measurement, and a single-button state machine that drives forward, displays live status and ultrasonic distance, and triggers automatic turn obstacle avoidance. (Apr 2024)",
      image: "Arduino-Robot.png",
      githubUrl: "https://github.com/y24moham/Obstacle-Aware-Arduino-Robot-with-LCD/",
      demoUrl: "https://drive.google.com/file/d/1gGviGKnixNbjjOhSUq4s3DY6O76Xo-3T/view?usp=sharing",
    },
    {
      title: "Hospital Test Database (SQL)",
      description: "I built a basic hospital relational database in SQL modeling patients, doctors, rooms, and prescriptions/medications, then validated the schema using fictional test data and queries to confirm correct relationships and system behavior. (July 2022)",
      image: "Hospital-SQL.png",
      githubUrl: "https://github.com/y24moham/Hospital-SQL-Database-Design",
      demoUrl: null,
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