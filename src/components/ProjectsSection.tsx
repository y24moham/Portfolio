import { Play, Github, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const ProjectsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
  {
    title: "STM32 2-Axis Motion Controller",
    dates: "Jan 2026 - Apr 2026",
    skills: [
      "Embedded C",
      "STM32",
      "SPI",
      "ADC",
      "UART",
      "Interrupts",
    ],
    description:
      "Built an STM32-based dual-axis motion-control system for independent stepper-motor control, using SPI motor drivers, ADC speed inputs, and keyboard commands from a Python GUI over UART. Implemented interrupt-driven limit-switch protection and resolved an ADC/EXTI race condition.",
    image: "2axis-GIF.gif",
    githubUrl:
      "https://github.com/y24moham/Two_axis_machine_STM32_Control/",
    demoUrl:
      "https://drive.google.com/file/d/1OqJbgLzihHthyge3sKhTlL_7apw86IUl/preview",
    videoUrl:
      "https://drive.google.com/file/d/1I3mCT2xIy3bBejYWqJA6apu2jjCAlniW/preview",
  },

  {
    title: "Obstacle-Aware Arduino Robot",
    dates: "Apr 2024",
    skills: [
      "Embedded C++",
      "Arduino",
      "Finite State Machines",
      "Ultrasonic Sensing",
      "LCD",
    ],
    description:
      "Built a two-motor autonomous robot with ultrasonic obstacle detection, an LCD interface, debounced user input, and a finite-state control loop for navigation and obstacle avoidance.",
    image: "Arduino-Robot-GIF.gif",
    githubUrl:
      "https://github.com/y24moham/Obstacle-Aware-Arduino-Robot-with-LCD/",
    demoUrl:
      "https://drive.google.com/file/d/1gGviGKnixNbjjOhSUq4s3DY6O76Xo-3T/preview",
    videoUrl:
      "https://drive.google.com/file/d/1gGviGKnixNbjjOhSUq4s3DY6O76Xo-3T/preview",
  },

  {
    title: "EV3 Prosthetic Hand",
    dates: "Oct 2023 - Dec 2023",
    skills: [
      "C",
      "EV3",
      "Sensor Integration",
      "Motor Control",
      "Mechanical Design",
    ],
    description:
      "Designed and programmed a prosthetic-hand prototype with sensor-assisted motor control for repeatable gripping and object handling, combining embedded control with mechanical design.",
    image: "Prosthetic-Hand-GIF.gif",
    githubUrl: "https://github.com/y24moham/Prosthetic-Hand-EV3/",
    demoUrl:
      "https://drive.google.com/file/d/1u6iXG5a_sigPQkx7iz7OC_ltrGPNhpzM/preview",
    videoUrl:
      "https://drive.google.com/file/d/134nNxhyoesffMwnrE6gtcnD41NbJrs_N/preview",
  },

  {
    title: "Quadcopter Attitude-Control Prototype",
    dates: "Jun 2020 - Aug 2020",
    skills: [
      "Embedded C++",
      "Arduino",
      "PID Control",
      "IMU Feedback",
      "Custom PCB",
    ],
    description:
      "Prototyped a real-time PID attitude-control system in C++, using IMU gyroscope feedback and custom PCB hardware to implement and tune closed-loop stabilization on a test rig.",
    image: "Quadcopter-GIF.gif",
    githubUrl:
      "https://github.com/y24moham/Quadcopter-Prototype/",
    demoUrl:
      "https://drive.google.com/file/d/1FuZ4ya1sBBXkcI__rNSbRR-jGKATWSmJ/preview",
    videoUrl:
      "https://drive.google.com/file/d/1FuZ4ya1sBBXkcI__rNSbRR-jGKATWSmJ/preview",
  },

  {
    title: "Hospital Test Database",
    dates: "Jul 2022",
    skills: [
      "SQL",
      "Relational Databases",
      "Schema Design",
      "Data Modeling",
    ],
    description:
      "Designed a relational hospital database modeling patients, doctors, rooms, prescriptions, and medications, then validated table relationships and SQL queries using fictional test data.",
    image: "Hospital-SQL.png",
    githubUrl:
      "https://github.com/y24moham/Hospital-SQL-Database-Design",
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
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-xl">{project.title}</CardTitle>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {project.dates}
                  </div>
                </div>
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