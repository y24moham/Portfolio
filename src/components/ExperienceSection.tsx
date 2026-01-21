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
        role: "Embedded Software Engineering Intern",
        company: "Aversan Inc.",
        dates: "Sept 2025 - Dec 2025",
        logoSrc: "Aversan-logo.png",
        skills: ["STM32", "Embedded C", "DMA", "OpenOCD", "JTAG/SWD", "UART", "I2C", "SPI", "Linux", "Python", "Robot Framework", "Version control (Git)"],
        bullets: [
          "Debugged and extended STM32H7 embedded C firmware for safety-critical aerospace hardware, following DO-178-style workflows and version-controlled reviews.",
          "Built 5 Python tooling/GUI utilities over UART to automate logging, test runs, and verification steps, reducing manual debug time and accelerating iteration.",
          "Used OpenOCD + JTAG boundary-scan to validate board connectivity (opens/shorts/solder faults) and verify bring-up signals before firmware was available.",
          "Implemented and validated peripheral communication using GPIO bit-banged I²C, leveraging DMA, HAL, and timer/interrupt timing control for reliable transactions.",
          "Developed automated I/O checks on Linux-based ATE using Robot Framework (RIDE) to produce repeatable test results and reports for debug and certification support.",
        ],
      },
      {
        role: "Engineering Research Assistant",
        company: "University of Waterloo - School of Optometry & Vision Science",
        dates: "Jan 2025 - Apr 2025",
        logoSrc: "UW-logo.png",
        skills: ["Arduino", "C++", "Raspberry Pi", "Python (Matplotlib, Pandas)", "Sensors", "MUX", "Custom PCB", "Data Visualization", "SolidWorks", "3D Printing (FDM)"],
        bullets: [
          "Built a multi-sensor acquisition setup for footstep/pressure trials using Arduino + 48-channel MUX + custom PCB + Raspberry Pi, integrating wiring, sampling, and data export.",
          "Improved the acquisition pipeline by updating Arduino C++ collection logic (including compensation for sensor material behavior) and creating a Raspberry Pi Python export flow, increasing usable sampling throughput.",
          "Developed a Python GUI to preprocess, group/segment, and visualize pressure data, producing clean, researcher-friendly outputs for analysis.",
          "Designed and fabricated mechanical upgrades in SolidWorks using caliper-based measurement, tolerance-aware fits, and consideration of strength and wear, improving reliability and cutting setup time.",
          "Wrote clear technical documentation and a user guide so the system could be operated and extended consistently by future researchers.",
        ],
      },
      {
        role: "Motion Capture Undergraduate Research Assistant",
        company: "University of Waterloo RoboHub",
        dates: "Sept 2024 - Dec 2024",
        logoSrc: "Robohub-logo.png",
        skills: ["Vicon", "Calibration", "Data Cleaning", "Signal Filtering"],
        bullets: [
          "Set up and calibrated Vicon motion capture sessions, including marker placement using the Plug-in Gait protocol to support reliable kinematic tracking.",
          "Monitored live capture at high sampling rates, tuning exposure/threshold settings to reduce occlusions and improve dataset quality.",
          "Cleaned and exported trials in Vicon Nexus (trajectory labeling, gap filling, filtering) to deliver consistent, analysis-ready datasets for biomechanics workflows.",
        ],
      },
      {
        role: "CNC Programmer",
        company: "State Windows Corporation",
        dates: "May 2024 - Aug 2024",
        logoSrc: "State-logo.png",
        skills: ["Autodesk Inventor", "Parametric CAD", "Sheet Metal", "Technical Drawings", "G-code", "CNC", "Documentation (SOPs)"],
        bullets: [
          "Created parametric sheet-metal CAD in Autodesk Inventor using spreadsheet/iLogic-style configuration to generate many part variants efficiently.",
          "Produced production-ready drawings and generated G-code, bridging design intent to CNC fabrication.",
          "Owned a high-priority production stream with runs exceeding 700+ parts, balancing throughput, quality, and schedule constraints.",
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
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Career Journey</h2>

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
