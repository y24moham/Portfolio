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
      role: "Embedded Software Engineering Intern",
      company: "Aversan Inc.",
      dates: "Sept 2025 - Dec 2025",
      tasks: [
        "As an Embedded Software Intern, I worked on safety-critical aerospace equipment, debugging and extending STM32H7 embedded C firmware while following DO-178 \
        practices. I supported verification by building PEP 8 Python GUI tools that communicated with the MCU over UART and using JTAG boundary scan to validate \
        connectivity and catch faults early. I also implemented MCU-peripheral I²C communication, and contributed to automated testing using ROBOT Framework \
        via RIDE on Linux test equipment. This experience strengthened my embedded debugging workflow and how I connect firmware, tooling, and hardware validation.",
      ]
    },
    {
      role: "Engineering Research Assistant",
      company: "University of Waterloo - School of Optometry & Vision Science",
      dates: "Jan 2025 - Apr 2025",
      tasks: [
        "As an Engineering Research Assistant, I built and improved a sensor-based research setup using an Arduino, a Raspberry Pi, a multiplexer, a custom PCB, and \
        pressure-resistive sheets to collect and export clean trial data. I wrote C++ Arduino code and improved the Raspberry Pi data pipeline, then built a \
        Python GUI to visualize and organize pressure-position results into researcher-friendly outputs. I also designed and fabricated mechanical upgrades in \
        SolidWorks using FDM 3D printing, and documented the system for repeatable use. This role strengthened my skills in sensor integration, data handling, and \
        building practical tools for real lab workflows.",
      ]
    },
    {
      role: "Motion Capture Undergraduate Research Assistant",
      company: "University of Waterloo RoboHub",
      dates: "Sept 2024 - Dec 2024",
      tasks: [
        "Enabled accurate motion capture sessions by calibrating/configuring the Vicon camera array and placing markers using the Plug-in Gait protocol, improving tracking quality for biomechanical analysis.",
        "Improved capture reliability by monitoring live trials at 200 Hz and tuning exposure/threshold settings, reducing occlusions and noise to minimize re-takes.",
        "Delivered analysis-ready datasets by processing recordings in Vicon Nexus (labeling, spline-based gap filling, low-pass filtering) and exporting cleaned files, accelerating downstream biomechanics work."
      ]
    },
    {
      role: "CNC Programmer",
      company: "State Windows Corporation",
      dates: "May 2024 - Aug 2024",
      tasks: [
        "Scaled part generation by designing sheet-metal models in Autodesk Inventor and using parameter tables/spreadsheets to produce hundreds of dimension variants, reducing repetitive CAD work and speeding quoting/production prep.",
        "Improved production readiness by selecting the appropriate CNC workflow, creating CAD drawings, and generating G-code, reducing setup errors and improving job turnaround.",
        "Supported delivery of urgent orders by independently managing a high-priority schedule with runs requiring 700+ parts, helping maintain throughput under tight timelines.",
        "Standardized shop processes by authoring SOP handbooks, improving training consistency and reducing operator-to-operator variation.",
        "Reduced onboarding time by training new hires on the end-to-end process until they could run jobs independently, increasing team capacity and coverage."
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
                          <CardDescription className="text-base font-normal text-foreground">
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
                      <div className="space-y-3">
                        {experience.tasks.map((task, taskIndex) => (
                          <p
                            key={taskIndex}
                            className="text-muted-foreground leading-relaxed"
                          >
                            {task}
                          </p>
                        ))}
                      </div>

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