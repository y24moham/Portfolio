import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-right");
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Research Assistant",
      company: "University of Waterloo",
      dates: "Jan 2025 – Apr 2025",
      tasks: [
        "Used Arduino & Raspberry Pi for data collection",
        "Managed motion capture trials with Vicon system",
        "Analyzed sensor data using Python and MATLAB",
        "Collaborated with PhD students on robotics research"
      ]
    },
    {
      role: "Engineering Intern",
      company: "Tech Innovations Inc.",
      dates: "May 2024 – Aug 2024",
      tasks: [
        "Designed PCB layouts for embedded systems",
        "Implemented firmware for microcontroller applications",
        "Conducted testing and validation of electronic prototypes",
        "Documented technical specifications and procedures"
      ]
    },
    {
      role: "Lab Assistant",
      company: "University Robotics Lab",
      dates: "Sep 2023 – Dec 2023",
      tasks: [
        "Maintained and calibrated laboratory equipment",
        "Assisted students with robotics programming projects",
        "Organized inventory of electronic components",
        "Supported lab safety protocols and procedures"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Experience</h2>
        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item relative mb-12 last:mb-0 opacity-0 translate-x-10 transition-all duration-700 ease-out">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className="ml-16">
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <CardTitle className="text-xl">{experience.role}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {experience.company}
                          </CardDescription>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {experience.dates}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {experience.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;