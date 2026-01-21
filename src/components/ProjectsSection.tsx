import { Play, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const ProjectsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "EV3 Prosthetic Hand",
      skills: ["Embedded C", "Sensor Integration", "Mechanical Design", "Prototyping"],
      description: "Designed and programmed a functional EV3-based prosthetic hand using C, implementing motor-driven open/close grip control and basic sensor-driven behavior to enable controlled object handling as a prototype assistive replacement for key hand functions. (Oct-Dec 2023)",
      image: "Prosthetic-Hand-GIF.gif",
      githubUrl: "https://github.com/y24moham/Prosthetic-Hand-EV3/",
      demoUrl: "https://drive.google.com/file/d/1u6iXG5a_sigPQkx7iz7OC_ltrGPNhpzM/preview",
      videoUrl: "https://drive.google.com/file/d/134nNxhyoesffMwnrE6gtcnD41NbJrs_N/preview",
    },
    {
      title: "Quadcopter Prototype",
      skills: ["Embedded C++", "Arduino", "PID Control", "Sensor Fusion (IMU)", "Real-Time Systems", "Prototyping"],
      description: "Built a ground-up quadcopter prototype by implementing closed-loop control algorithms in C++ on an Arduino with prototype circuit boards and external sensors, controlling propeller speed from gyrometer sensor output. (June-Aug 2020)",
      image: "Quadcopter-GIF.gif",
      githubUrl: "https://github.com/y24moham/Quadcopter-Prototype/",
      demoUrl: "https://drive.google.com/file/d/1RMSzE_in0KuofrDoc0nF74Z5vaZzTccr/preview",
      videoUrl: "https://drive.google.com/file/d/1RMSzE_in0KuofrDoc0nF74Z5vaZzTccr/preview",
    },
    {
      title: "Obstacle-Aware Arduino Robot",
      skills: ["Embedded C++", "Arduino", "Finite State Machines", "Sensor-Based Control", "Human-Machine Interface (LCD)"],
      description: "Developed Arduino firmware for a two-motor robot featuring an LCD UI, ultrasonic distance measurement, and a single-button state machine that drives forward, displays live status and ultrasonic distance, and triggers automatic turn obstacle avoidance. (Apr 2024)",
      image: "Arduino-Robot-GIF.gif",
      githubUrl: "https://github.com/y24moham/Obstacle-Aware-Arduino-Robot-with-LCD/",
      demoUrl: "https://drive.google.com/file/d/1gGviGKnixNbjjOhSUq4s3DY6O76Xo-3T/preview",
      videoUrl: "https://drive.google.com/file/d/1gGviGKnixNbjjOhSUq4s3DY6O76Xo-3T/preview",
    },
    {
      title: "Hospital Test Database (SQL)",
      skills: ["SQL", "Relational Database Design", "Schema Design", "Data Modeling"],
      description: "I built a basic hospital relational database in SQL modeling patients, doctors, rooms, and prescriptions/medications, then validated the schema using fictional test data and queries to confirm correct relationships and system behavior. (July 2022)",
      image: "Hospital-SQL.png",
      githubUrl: "https://github.com/y24moham/Hospital-SQL-Database-Design",
      demoUrl: null,
      videoUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className={`w-full h-48 object-cover rounded-lg mb-4 transition ${
                      project.videoUrl
                        ? "cursor-pointer hover:opacity-90"
                        : "cursor-default"
                    }`}

                  onClick={() => project.videoUrl && setActiveVideo(project.videoUrl)}
                />
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {/* Skills bubbles */}
                {project.skills && (
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-xs cursor-text select-text opacity-90"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
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
                    <Button
                      size="sm"
                      onClick={() => setActiveVideo(project.demoUrl)}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 👇 VIDEO MODAL GOES HERE */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-visible [&>button:not(.dialog-custom-close)]:hidden">
          {/* custom outside close */}
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="dialog-custom-close absolute -top-12 right-0 z-50 rounded-md bg-background border px-3 py-1 text-sm font-medium shadow hover:bg-muted transition"
          >
            ✕
          </button>

          {activeVideo && (
            <iframe
              key={activeVideo}
              src={activeVideo}
              className="w-full aspect-video rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </DialogContent>

      </Dialog>

      
    </section>
  );
};

export default ProjectsSection;