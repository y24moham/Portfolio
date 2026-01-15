import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Skill {
  name: string;
  category: string;
  learnedAt: string;
  appliedAt: string;
  examples: string[];
}

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    // ---------- Embedded / Firmware ----------
    {
      name: "STM32 (HAL/LL)",
      category: "Embedded/Firmware",
      learnedAt: "Hands-on embedded work and STM32 development workflow; reinforced through embedded systems coursework.",
      appliedAt: "Aversan internship (STM32H7 firmware debug/extension and peripheral bring-up).",
      examples: [
        "Debugged/extended STM32H7 embedded C firmware in a safety-critical workflow",
        "Integrated peripheral checks and diagnostics into firmware/testing flow",
        "Worked with HAL + low-level timing/interrupt concepts in practice"
      ]
    },
    {
      name: "Embedded C/C++",
      category: "Embedded/Firmware",
      learnedAt: "Embedded coursework + building robotics projects (Arduino/C++), then professional firmware work.",
      appliedAt: "Aversan STM32 firmware + UW research Arduino acquisition code.",
      examples: [
        "Firmware debugging and changes on STM32H7",
        "Arduino C++ acquisition code for pressure-resistive sensor system",
        "Real-time style loops in robotics projects (control/behavior)"
      ]
    },
    {
      name: "Timers & Interrupts",
      category: "Embedded/Firmware",
      learnedAt: "Embedded systems fundamentals + building real devices that require timing and event-driven behavior.",
      appliedAt: "Aversan (timers/interrupt-driven behaviors for diagnostics and comms); robotics projects.",
      examples: [
        "Used timing + interrupt concepts to support device diagnostics and communication",
        "Structured periodic behaviors in control loops (Arduino projects)",
        "Worked with interrupt-driven receive patterns for serial/status flows"
      ]
    },
    {
      name: "DMA (concept + use cases)",
      category: "Embedded/Firmware",
      learnedAt: "Embedded systems fundamentals and exposure while working on STM32-based firmware work.",
      appliedAt: "Aversan (DMA referenced/used within peripheral and diagnostics workflows).",
      examples: [
        "Worked with DMA-enabled flows in STM32 firmware context",
        "Understood when DMA helps (throughput, CPU offload) vs when it complicates debug",
        "Integrated DMA-aware behavior into system testing/verification context"
      ]
    },
    {
      name: "PWM",
      category: "Embedded/Firmware",
      learnedAt: "Coursework labs using Oscilloscope (MTE 220 Sensors & Instrumentation) and hands-on Arduino experiments with ultrasonic sensing and servo control.",
      appliedAt: "Robotics prototypes needing precise timing for sensors/actuators, plus real-hardware debugging and tuning.",
      examples: [
        "Tested PWM-based servo control (position control and basic tuning).",
        "Used pulse timing concepts heavily for ultrasonic sensor experiments (coursework + projects).",
        "Applied PWM-style timing in real-time, sensor-driven behavior for an obstacle-avoidance robot."
      ]
    },

    // ---------- Interfaces / Bring-up / Debug ----------
    {
      name: "I2C",
      category: "Interfaces/Debug",
      learnedAt: "Sensor-interfacing projects and embedded systems bring-up patterns.",
      appliedAt: "Aversan (bit-banged I2C + peripheral checks); UW research sensor system integration.",
      examples: [
        "Performed I2C peripheral validation without needing full application firmware",
        "Used I2C-style sensor integration patterns in hardware + data collection setup",
        "Troubleshot comms issues as part of bring-up workflow"
      ]
    },
    {
      name: "SPI",
      category: "Interfaces/Debug",
      learnedAt: "Embedded coursework + general sensor/MCU interface familiarity.",
      appliedAt: "General embedded/robotics context (interface knowledge for sensors/peripherals).",
      examples: [
        "Comfortable reading datasheets and mapping SPI signals/transactions",
        "Able to debug wiring/pinout and basic comms expectations",
        "Applies in sensor/peripheral integration discussions and labs"
      ]
    },
    {
      name: "UART / Serial Debug",
      category: "Interfaces/Debug",
      learnedAt: "Embedded debugging habits and building tooling around serial logs.",
      appliedAt: "Aversan (Python tools over UART for parsing/logging and automation).",
      examples: [
        "Built Python tools communicating over UART for logging and test automation",
        "Parsed device output into structured logs for verification",
        "Used serial workflows for debugging and iteration speed"
      ]
    },
    {
      name: "JTAG/SWD",
      category: "Interfaces/Debug",
      learnedAt: "Embedded debugging workflow and hardware validation processes.",
      appliedAt: "Aversan (boundary-scan and board validation workflows).",
      examples: [
        "Used JTAG/SWD concepts for board bring-up and debug flow",
        "Supported connectivity validation and fault isolation",
        "Integrated debug results into verification/testing workflow"
      ]
    },
    {
      name: "OpenOCD",
      category: "Interfaces/Debug",
      learnedAt: "Hands-on boundary-scan / low-level debug tooling during embedded internship work.",
      appliedAt: "Aversan (OpenOCD-driven JTAG boundary-scan for board checks).",
      examples: [
        "Built a Linux Python GUI around OpenOCD workflows",
        "Validated solder/shorts/connectivity pre-firmware",
        "Used boundary-scan style testing to catch manufacturing faults early"
      ]
    },
    {
      name: "Oscilloscope & DMM",
      category: "Lab/Hardware Debug",
      learnedAt: "Lab work + building/validating physical prototypes and boards.",
      appliedAt: "Hardware validation and troubleshooting across research + embedded work.",
      examples: [
        "Verified signals and continuity during bring-up/debug",
        "Supported sensor system validation and fault isolation",
        "Used measurement tools to confirm expected electrical behavior"
      ]
    },

    // ---------- Robotics / Controls ----------
    {
      name: "PID Control (tuning mindset)",
      category: "Robotics/Controls",
      learnedAt: "Controls fundamentals + applied robotics prototypes.",
      appliedAt: "Quadcopter prototype stabilization + general control-loop work.",
      examples: [
        "Implemented PID stabilization for a quadcopter prototype",
        "Iterated gains based on observed response and stability needs",
        "Connected sensor feedback (IMU) to control output behavior"
      ]
    },
    {
      name: "Finite-State Machines (FSM)",
      category: "Robotics/Controls",
      learnedAt: "Embedded/robotics design patterns for clear behavior logic.",
      appliedAt: "Obstacle-aware robot (idle/run FSM with debounced inputs).",
      examples: [
        "Built a simple two-state behavior machine (idle/run)",
        "Used debouncing to stabilize button-driven state transitions",
        "Structured behavior logic for predictable robot operation"
      ]
    },
    {
      name: "Sensor-Driven Behaviors",
      category: "Robotics/Controls",
      learnedAt: "Robotics projects + sensor integration experience.",
      appliedAt: "Obstacle robot (ultrasonic) + sensor acquisition systems (pressure sensing).",
      examples: [
        "Used ultrasonic ranging to drive obstacle-avoidance behavior",
        "Built pressure sensing acquisition to support detection workflows",
        "Mapped noisy sensor readings into usable decisions/outputs"
      ]
    },
    {
      name: "Signal Filtering (basic)",
      category: "Robotics/Controls",
      learnedAt: "Signals/Systems concepts + practical exposure through motion-capture and sensor data cleanup.",
      appliedAt: "Motion capture processing (filtering/cleanup) + sensor data preprocessing workflows.",
      examples: [
        "Applied low-pass style filtering concepts in motion-capture data cleanup",
        "Reduced noise/occlusions in captured datasets through processing steps",
        "Handled noisy real-world sensor data to improve analysis-readiness"
      ]
    },
    {
      name: "Data Logging & Telemetry",
      category: "Robotics/Controls",
      learnedAt: "Building systems that need repeatable testing and debugging.",
      appliedAt: "Aversan UART logging tools + UW research data export pipeline.",
      examples: [
        "Logged device output via UART for verification and debugging",
        "Exported structured trial data via Raspberry Pi pipeline",
        "Designed outputs to be analysis-ready for downstream work"
      ]
    },

    // ---------- Software / Data ----------
    {
      name: "Python (tooling & automation)",
      category: "Software",
      learnedAt: "Self-driven practice + building real tooling for embedded/research workflows.",
      appliedAt: "Aversan (debug/test tools + GUIs); UW research (processing/visualization).",
      examples: [
        "Built multiple Python tools for test automation and logging",
        "Created a Python GUI to visualize and organize pressure data",
        "Wrote scripts that turn messy signals into usable outputs"
      ]
    },
    {
      name: "Pandas",
      category: "Software",
      learnedAt: "Data handling for real sensor datasets (tables, cleaning, transformations).",
      appliedAt: "UW research preprocessing pipeline for foot-pressure data.",
      examples: [
        "Cleaned/structured pressure datasets into analysis-ready tables",
        "Performed grouping/segmentation-style transformations",
        "Prepared exports suitable for downstream research workflows"
      ]
    },
    {
      name: "NumPy",
      category: "Software",
      learnedAt: "Scientific computing basics used alongside Python data analysis.",
      appliedAt: "Sensor data handling and analysis-style workflows.",
      examples: [
        "Basic numeric processing for sensor datasets",
        "Feature-like transformations (normalization, reshaping) as needed",
        "Used alongside Pandas for practical data manipulation"
      ]
    },
    {
      name: "Matplotlib",
      category: "Software",
      learnedAt: "Visualizing real data to debug and communicate results.",
      appliedAt: "UW research visualization of foot-pressure results.",
      examples: [
        "Plotted pressure locations/outputs for quick interpretation",
        "Created visuals to support researchers and debugging",
        "Used plots to validate preprocessing decisions"
      ]
    },
    {
      name: "Pytest (basic)",
      category: "Software",
      learnedAt: "Good testing habits while writing Python tooling.",
      appliedAt: "Used where appropriate for Python tool reliability and regression checks.",
      examples: [
        "Structured small tests for Python utilities",
        "Used testing mindset for refactors/changes",
        "Improved confidence when iterating quickly"
      ]
    },
    {
      name: "Git",
      category: "Software",
      learnedAt: "Version control workflow through coursework/projects and internship collaboration.",
      appliedAt: "Aversan (committing verified changes + team workflow) and projects (GitHub).",
      examples: [
        "Tracked and reviewed changes during firmware/tooling work",
        "Maintained project repos with clear iteration history",
        "Used branching/commits to support safe experimentation"
      ]
    },
    {
      name: "Linux (CLI)",
      category: "Software/Systems",
      learnedAt: "Using Linux as the daily environment for tooling, testing, and dev workflows.",
      appliedAt: "Aversan (Linux-based tools/ATE environment); general dev usage.",
      examples: [
        "Ran debug/test tooling and scripts in Linux environment",
        "Worked comfortably in terminal for automation workflows",
        "Integrated Linux tools into hardware verification tasks"
      ]
    },
    {
      name: "SQL (basic)",
      category: "Software",
      learnedAt: "Coursework and practical use for structured data understanding.",
      appliedAt: "General data handling foundation (useful for logs/datasets).",
      examples: [
        "Understands querying basics for structured datasets",
        "Can reason about schemas and extracting metrics",
        "Useful foundation for analytics/telemetry workflows"
      ]
    },

    // ---------- Verification / Test Automation ----------
    {
      name: "Robot Framework",
      category: "Test/Verification",
      learnedAt: "Hands-on exposure through automated test equipment workflows.",
      appliedAt: "Aversan (automated I/O tests + report generation).",
      examples: [
        "Created automated I/O tests for set/read verification",
        "Generated reports for debugging and compliance support",
        "Helped reduce repetitive manual testing overhead"
      ]
    },

    // ---------- Mechanical / CAD / Prototyping ----------
    {
      name: "SolidWorks",
      category: "CAD/Prototyping",
      learnedAt: "Engineering design work and hands-on prototyping cycles.",
      appliedAt: "UW research equipment upgrades and 3D-printed improvements.",
      examples: [
        "Designed research equipment upgrades for repeatable setup",
        "Modeled parts based on physical measurements (calipers)",
        "Considered fit/tolerance and practical assembly constraints"
      ]
    },
    {
      name: "GD&T (working knowledge)",
      category: "CAD/Prototyping",
      learnedAt: "Design-for-manufacturing mindset from CAD + manufacturing exposure.",
      appliedAt: "Used when producing parts that must fit/assemble reliably.",
      examples: [
        "Tolerance-aware design decisions for parts that interface mechanically",
        "Understood how tolerances affect assembly and repeatability",
        "Improved fit and longevity by accounting for wear/strength"
      ]
    },
    {
      name: "3D Printing (FDM)",
      category: "CAD/Prototyping",
      learnedAt: "Hands-on prototyping and iteration in real workflows.",
      appliedAt: "UW research upgrades + prototyping components.",
      examples: [
        "Fabricated functional upgrades to reduce setup time",
        "Iterated designs quickly based on real fit/testing feedback",
        "Designed parts with strength and wear in mind"
      ]
    },
    {
      name: "Soldering (practical)",
      category: "Lab/Hardware Debug",
      learnedAt: "Hands-on electronics work across projects and lab environments.",
      appliedAt: "Hardware bring-up support and prototype iteration.",
      examples: [
        "Supported reliable connections during prototyping",
        "Assisted debugging by reworking connections where needed",
        "Improved hardware robustness during iteration cycles"
      ]
    },
    {
      name: "PCB Design (Altium)",
      category: "CAD/Prototyping",
      learnedAt: "PCB design exposure through building systems that rely on custom boards.",
      appliedAt: "UW research system included custom PCB integration; familiarity with board-level considerations.",
      examples: [
        "Worked with a custom PCB as part of a sensor acquisition system",
        "Understands bring-up realities: connectivity, shorts, signal routing implications",
        "Comfortable collaborating around board constraints and testing"
      ]
    },
    {
      name: "Autodesk Inventor (parametric CAD)",
      category: "CAD/Prototyping",
      learnedAt: "CNC programming role focused on sheet-metal modeling and production readiness.",
      appliedAt: "State Windows (high-volume parametric sheet-metal parts).",
      examples: [
        "Built parametric sheet-metal models to generate many variants",
        "Produced drawings and manufacturing-ready deliverables",
        "Bridged design intent to production constraints"
      ]
    },
    {
      name: "Manufacturing Workflow (G-code, drawings)",
      category: "CAD/Prototyping",
      learnedAt: "CNC programming role in a production environment.",
      appliedAt: "State Windows (CAD → drawings → G-code → production scheduling).",
      examples: [
        "Generated G-code and production drawings",
        "Managed high-volume production priorities and deadlines",
        "Documented SOPs and trained others for repeatable output"
      ]
    },

    // ---------- FPGA / Digital ----------
    {
      name: "VHDL (FPGA basics)",
      category: "FPGA/Digital",
      learnedAt: "Coursework and hands-on exposure while learning digital logic/FPGA concepts.",
      appliedAt: "Academic FPGA work and foundational RTL understanding.",
      examples: [
        "Wrote/understood basic VHDL modules",
        "Used simulation mindset (waveforms, correctness checks) at a basic level",
        "Built foundation for FPGA/RTL internships and design flows"
      ]
    },

    // ---------- Modeling / Simulation ----------
    {
      name: "MATLAB",
      category: "Modeling/Simulation",
      learnedAt: "Engineering coursework and numeric problem solving.",
      appliedAt: "General modeling/analysis tasks and engineering workflows.",
      examples: [
        "Handled numeric analysis and engineering computations",
        "Used as a tool for signals/systems style work",
        "Supports control/robotics fundamentals and validation"
      ]
    },
    {
      name: "Simulink (basic)",
      category: "Modeling/Simulation",
      learnedAt: "Intro-level exposure alongside MATLAB basics.",
      appliedAt: "Light modeling work (not deep toolchain usage).",
      examples: [
        "Understands block-diagram modeling conceptually",
        "Can follow and modify simple models",
        "Comfortable discussing Simulink at a basic level"
      ]
    }
  ];


  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Skills</h2>
          <p className="text-center text-lg text-muted-foreground mb-5">
            Click a skill to see details and examples.
          </p>
        <div className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <Dialog key={skill.name}>
                      <DialogTrigger asChild>
                        <Badge 
                          variant="secondary" 
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
                        >
                          {skill.name}
                        </Badge>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>{skill.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground">Where I learned it:</h4>
                            <p className="text-sm">{skill.learnedAt}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground">How I've applied it:</h4>
                            <p className="text-sm">{skill.appliedAt}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground">Examples:</h4>
                            <ul className="text-sm space-y-1">
                              {skill.examples.map((example, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="mt-2 w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                                  <span className="leading-relaxed">{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;