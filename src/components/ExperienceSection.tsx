import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Career = {
  role: string;
  company: string;
  dates: string;
  skills: string[];
  bullets: string[];
  logoSrc?: string;
};

const DEFAULT_VISIBLE_BULLETS = 3;
const COLLAPSED_MAX_HEIGHT_CLASS = "max-h-[7.25rem]";

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const lineEl = timelineLineRef.current;
      const progEl = timelineProgressRef.current;
      if (!lineEl || !progEl) return;

      const lineRect = lineEl.getBoundingClientRect();

      // Where you want the fill "tip" to sit in the viewport (center-ish)
      const targetY = window.innerHeight * 0.5; // tweak to 0.55 if you want slightly lower

      // How much of the line should be filled, in pixels
      const filledPx = Math.min(
        Math.max(targetY - lineRect.top, 0),
        lineRect.height
      );

      progEl.style.height = `${filledPx}px`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // initial paint
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-slide-in-right");
        });
      },
      { threshold: 0.1,
        // negative bottom margin = trigger earlier (higher on the page)
        rootMargin: "0px 0px -10% 0px",
       }
    );

    const blocks = timelineRef.current?.querySelectorAll(".timeline-block");
    blocks?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const experiences: Career[] = useMemo(
    () => [
      {
        role: "System Integration Engineer",
        company: "Ford Motor Company",
        dates: "May 2026 - Aug 2026",
        logoSrc: "Ford-logo.jpg",
        skills: [
          "OTA Updates",
          "ECU Testing",
          "CAN/CAN FD",
          "Automotive Ethernet",
          "C++",
          "Python",
          "BigQuery",
          "SQL",
          "Software Requirements",
          "Looker Studio",
          "Jira",
        ],
        bullets: [
          "Tested OTA software-update scenarios on a cloud-connected vehicle integration bench, configuring ECUs, flashing software versions, and analyzing CAN/Ethernet and cloud logs to reproduce field failures.",
          
          "Traced gateway ECU C++ code and system logs to identify OTA failure paths, then created investigation guides that reduced recurring analysis from 1–2 hours to 5–15 minutes.",
          
          "Investigated OTA issues across 1M–80M rows of connected-vehicle data and built 6 Python tools to automate log analysis, reducing hands-on investigation time by up to 90%.",
          
          "Supported development and review of software requirements for connected-vehicle features, defining expected system behavior and edge cases for implementation and validation.",
          
          "Optimized BigQuery/SQL queries and workflows for recurring vehicle-data investigations, reducing query runtime by 93% and data-retrieval time from 2 hours to 10–15 minutes.",
          
          "Built interactive Looker Studio dashboards to explore vehicle telemetry and identify discrepancies between expected and observed vehicle messages.",
        ],
      },
      {
        role: "Embedded Software Engineering Intern",
        company: "Aversan Inc.",
        dates: "Sep 2025 - Dec 2025",
        logoSrc: "Aversan-logo.png",
        skills: [
          "STM32H7",
          "Embedded C",
          "DO-178",
          "JTAG/OpenOCD",
          "UART/I2C",
          "DMA",
          "Python",
          "Robot Framework",
          "Linux",
        ],
        bullets: [
          "Debugged and extended STM32H7 embedded C firmware for a safety-critical aerospace system under DO-178 processes, validating changes through bench testing.",
          
          "Built 5 Python/UART tools to automate firmware debugging and verification, uncovering dozens of firmware/test defects and reducing test time by 70%.",
          
          "Built a Python/OpenOCD JTAG boundary-scan tool to detect soldering, short-circuit, and connectivity faults before firmware bring-up.",
          
          "Implemented STM32H7 peripheral test firmware using bit-banged I2C, DMA, timers, and interrupt-driven UART, reducing component test time by 90%.",
          
          "Automated I/O verification on Linux-based test equipment with Robot Framework, generating repeatable reports for debugging, certification, and production support.",
        ],
      },
      {
        role: "Engineering Research Assistant",
        company: "University of Waterloo - School of Optometry",
        dates: "Jan 2025 - Apr 2025",
        logoSrc: "UW-logo.png",
        skills: [
          "Arduino",
          "C++",
          "Raspberry Pi",
          "Python",
          "Sensors",
          "Custom PCB",
          "SolidWorks",
          "3D Printing",
        ],
        bullets: [
          "Built a 48-channel pressure-based footstep-detection system using Arduino, a custom PCB, multiplexed sensors, and Raspberry Pi.",
          "Developed a decay-compensated C++/Python acquisition pipeline that reduced the sensor sampling interval from 3 seconds to 3 milliseconds.",
          "Built a Python GUI to group, preprocess, and visualize foot-pressure data for research analysis.",
          "Designed and fabricated SolidWorks and FDM equipment upgrades that improved reliability and reduced setup time by 80%.",
          "Created technical documentation and an operating guide to support continued research use.",
        ],
      },
      {
        role: "Motion Capture Undergraduate Research Assistant",
        company: "University of Waterloo RoboHub",
        dates: "Sep 2024 - Dec 2024",
        logoSrc: "Robohub-logo.png",
        skills: ["Vicon", "Calibration", "Data Cleaning", "Signal Filtering"],
        bullets: [
          "Set up and calibrated Vicon motion capture sessions, including marker placement using the Plug-in Gait protocol to support reliable kinematic tracking.",
          "Monitored live capture and tuned exposure and threshold settings to reduce occlusions and improve data quality.",
          "Cleaned and exported trials in Vicon Nexus (trajectory labeling, gap filling, filtering) to deliver consistent, analysis-ready datasets for biomechanics workflows.",
        ],
      },
      {
        role: "CNC Programmer",
        company: "State Windows Corporation",
        dates: "May 2024 - Aug 2024",
        logoSrc: "State-logo.png",
        skills: [
          "Autodesk Inventor",
          "Parametric CAD",
          "Sheet Metal",
          "Technical Drawings",
          "G-code",
          "CNC",
        ],
        bullets: [
          "Created parametric sheet-metal CAD in Autodesk Inventor using spreadsheet/iLogic-style configuration to generate many part variants efficiently.",
          "Produced production-ready drawings and generated G-code, bridging design intent to CNC fabrication.",
          "Managed high-priority production runs while balancing throughput, quality, and schedule requirements.",
          "Authored SOP handbooks to standardize setups and reduce variability across operators and machines.",
          "Trained new hires end-to-end to ensure independent, correct execution and smoother handoffs.",
        ],
      },
    ],
    []
  );

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Work Experience</h2>

        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <div className="relative">
            {/* Timeline background line */}
            <div
              ref={timelineLineRef}
              className="absolute left-8 top-8 bottom-5 w-0.5 -translate-x-1/2 bg-border pointer-events-none"
            />

            {/* Timeline progress line */}
            <div
              ref={timelineProgressRef}
              className="absolute left-8 top-8 w-0.5 -translate-x-1/2 bg-primary origin-top pointer-events-none"
              style={{ height: 0 }}
            />


            {experiences.map((experience, index) => {
              const isExpanded = !!expanded[index];
              const hasOverflow = experience.bullets.length > DEFAULT_VISIBLE_BULLETS;

              return (
                <div
                  key={index}
                  className="timeline-item relative mb-12 last:mb-0"

                >
                  {/* Timeline dot w/ round image + white frame (bigger) */}
                  <div className="absolute left-8 top-8 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-background p-1 shadow-sm">
                      <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                        {experience.logoSrc ? (
                          <img
                            src={experience.logoSrc}
                            alt={`${experience.company} logo`}
                            className="w-full h-auto object-contain"
                            draggable={false}
                          />
                        ) : (
                          <div className="w-full h-full bg-primary/90" />
                        )}
                      </div>
                    </div>
                  </div>


                  {/* Content */}
                  <div className="ml-16">
                    <div className="timeline-block opacity-0 translate-x-10 transition-all duration-700 ease-out">
                      <Card>
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                              <CardTitle className="text-xl">{experience.role}</CardTitle>
                              <CardDescription className="text-base font-normal text-foreground">
                                {experience.company}
                              </CardDescription>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <CalendarDays className="h-4 w-4 mr-1" />
                              {experience.dates}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent>
                          {/* Skills bubbles (copyable/selectable) */}
                          <div className="skills-row flex flex-wrap gap-2 mb-4">
                            {experience.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="px-3 py-1 text-xs cursor-text select-text opacity-90"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>


                          {/* Bullets w/ fade, but button NOT faded */}
                          <div className="relative">
                            {/* MASKED CONTENT: only bullets fade */}
                            <div
                              className={[
                                "relative",
                                (!isExpanded && hasOverflow) ? `${COLLAPSED_MAX_HEIGHT_CLASS} overflow-hidden` : ""
                              ].join(" ")}
                              style={
                                !isExpanded && hasOverflow
                                  ? {
                                      WebkitMaskImage:
                                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.15) 85%, rgba(0,0,0,0) 100%)",
                                      maskImage:
                                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.15) 85%, rgba(0,0,0,0) 100%)",
                                    }
                                  : undefined
                              }
                            >
                              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
                                {experience.bullets.map((b, i) => (
                                  <li key={i}>{b}</li>
                                ))}
                              </ul>
                            </div>

                            {/* NOT MASKED: button stays crisp */}
                            {!isExpanded && hasOverflow && (
                              <div className="absolute left-0 right-0 -bottom-2 flex justify-center pb-1">
                                <button
                                  type="button"
                                  onClick={() => toggleExpanded(index)}
                                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full border border-border"
                                >
                                  <span className="opacity-80 group-hover:opacity-100">Show more</span>
                                  <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                </button>
                              </div>
                            )}

                            {/* Show less (below the full list) */}
                            {isExpanded && hasOverflow && (
                              <div className="mt-3 flex justify-center">
                                <button
                                  type="button"
                                  onClick={() => toggleExpanded(index)}
                                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <span className="opacity-80 group-hover:opacity-100">Show less</span>
                                  <ChevronUp className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                </button>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
