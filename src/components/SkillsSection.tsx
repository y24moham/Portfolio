import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";

interface Skill {
  name: string;
  category: string;
  learnedAt: string;
  appliedAt: string;
  examples: { text: string; ongoing?: boolean }[];
  ongoing?: boolean;
  status?: "currently_learning" | "currently_using";

  level?: number; // 0–100 (leave undefined = no bar shown)
}

const SkillsSection = () => {

  const skills: Skill[] = [
  // ---------- Embedded Systems ----------
  {
    name: "STM32 (HAL/LL)",
    category: "Embedded Systems",
    status: "currently_using",
    level: 72,
    learnedAt:
      "Developed through professional STM32H7 firmware work, embedded-systems coursework, and hands-on STM32 projects.",
    appliedAt:
      "Aversan STM32H7 firmware development and peripheral testing, plus STM32 coursework and my dual-axis motion-control project.",
    examples: [
      {
        text: "Debugged and extended STM32H7 embedded C firmware for a safety-critical aerospace system under DO-178 processes at Aversan",
      },
      {
        text: "Implemented STM32H7 peripheral test firmware using bit-banged I2C, DMA, timers, and interrupt-driven UART",
      },
      {
        text: "Built STM32 firmware for independent dual-axis stepper control using SPI motor drivers, ADC speed inputs, and UART commands",
      },
      {
        text: "Resolved an ADC/EXTI race condition using persistent per-axis direction and stop states",
      },
    ],
  },

  {
    name: "RTOS",
    category: "Embedded Systems",
    level: 60,
    learnedAt:
      "MTE 241 coursework covering scheduling, synchronization, interrupts, I/O, memory management, and real-time system design.",
    appliedAt:
      "STM32F401RE labs where I implemented RTOS building blocks and multitasking behavior in C.",
    examples: [
      {
        text: "Implemented per-task stacks and basic task/process structures with startup context setup",
      },
      {
        text: "Built a simple scheduler and context-switching functionality between tasks",
      },
      {
        text: "Used timer and interrupt-driven behavior to support multitasking and timing",
      },
      {
        text: "Applied synchronization concepts when reasoning about shared resources and concurrent execution",
      },
    ],
  },

  {
    name: "Timers & Interrupts",
    category: "Embedded Systems",
    status: "currently_using",
    level: 70,
    learnedAt:
      "Developed through professional embedded firmware work, STM32 labs, robotics projects, and RTOS coursework.",
    appliedAt:
      "Aversan firmware/test development, my STM32 motion controller, and embedded-systems coursework.",
    examples: [
      {
        text: "Used interrupt-driven UART RX for embedded diagnostics, testing, and status reporting at Aversan",
      },
      {
        text: "Implemented EXTI-based limit-switch protection with direction-aware motion blocking on an STM32 motion controller",
      },
      {
        text: "Resolved an ADC/EXTI race condition using persistent per-axis direction and stop states",
      },
      {
        text: "Compared polling and interrupt-driven approaches during STM32 development to understand responsiveness and timing behavior",
      },
    ],
  },

  {
    name: "DMA",
    category: "Embedded Systems",
    level: 65,
    learnedAt:
      "Developed through STM32H7 firmware and peripheral-testing work at Aversan.",
    appliedAt:
      "Aversan STM32H7 peripheral testing and automated component-validation workflows.",
    examples: [
      {
        text: "Worked with DMA-enabled peripheral data flow in STM32H7 firmware",
      },
      {
        text: "Debugged timing and data-flow behavior where transfers occurred outside the main CPU loop",
      },
      {
        text: "Used DMA alongside timers and interrupt-driven UART in STM32H7 peripheral test firmware",
      },
    ],
  },

  {
    name: "PWM",
    category: "Embedded Systems",
    status: "currently_using",
    level: 68,
    learnedAt:
      "Developed through embedded coursework, electronics labs, and robotics projects involving actuator control and timing.",
    appliedAt:
      "Servo-control experiments, ultrasonic-sensing work, and robotics prototypes.",
    examples: [
      {
        text: "Used PWM for servo and actuator-control experiments",
      },
      {
        text: "Applied pulse-timing concepts in ultrasonic sensing and robotics projects",
      },
      {
        text: "Used oscilloscope measurements to observe and validate timing and waveform behavior",
      },
    ],
  },

  {
    name: "Arduino",
    category: "Embedded Systems",
    status: "currently_using",
    level: 80,
    learnedAt:
      "Developed through robotics, sensor projects, engineering research, and hands-on embedded prototyping.",
    appliedAt:
      "UW pressure-sensing research, obstacle-aware robotics, prosthetic-hand work, and control-system prototypes.",
    examples: [
      {
        text: "Built the embedded controller for a 48-channel pressure-based footstep-detection research system",
      },
      {
        text: "Developed an obstacle-aware two-motor robot with ultrasonic sensing, an LCD interface, and finite-state control",
      },
      {
        text: "Used Arduino for sensor integration, motor control, timing, and real-time prototyping",
      },
      {
        text: "Used Arduino in PID and IMU-based attitude-control experimentation",
      },
    ],
  },

  {
    name: "Raspberry Pi",
    category: "Embedded Systems",
    level: 68,
    learnedAt:
      "Developed through engineering research involving sensor acquisition, processing, and data export.",
    appliedAt:
      "UW Optometry pressure-sensing research system.",
    examples: [
      {
        text: "Built a Raspberry Pi Python pipeline for structured pressure-sensor trial-data export",
      },
      {
        text: "Integrated Raspberry Pi with Arduino, a 48-channel multiplexer, and a custom PCB",
      },
      {
        text: "Used Raspberry Pi to support repeatable data capture and downstream research analysis",
      },
    ],
  },

  // ---------- Interfaces & Debug ----------
  {
    name: "CAN / CAN FD",
    category: "Interfaces & Debug",
    status: "currently_using",
    level: 68,
    learnedAt:
      "Developed through automotive system-integration work involving vehicle network traffic and OTA software-update behavior.",
    appliedAt:
      "Ford vehicle integration and software-update investigations.",
    examples: [
      {
        text: "Analyzed CAN and CAN FD logs during OTA software-update and failure-scenario testing",
      },
      {
        text: "Used CANalyzer to inspect vehicle messages, timing, and expected-versus-observed behavior",
      },
      {
        text: "Correlated CAN traffic with gateway ECU, system, Ethernet, and cloud logs during investigations",
      },
    ],
  },

  {
    name: "Automotive Ethernet",
    category: "Interfaces & Debug",
    status: "currently_using",
    level: 62,
    learnedAt:
      "Developed through vehicle integration testing involving Ethernet-based ECU and system communication.",
    appliedAt:
      "Ford OTA and connected-vehicle software investigations.",
    examples: [
      {
        text: "Analyzed Automotive Ethernet logs during vehicle software-update testing",
      },
      {
        text: "Correlated Ethernet events with CAN, gateway ECU, system, and cloud logs",
      },
      {
        text: "Used multi-source logs to isolate potential system-integration and OTA failure paths",
      },
    ],
  },

  {
    name: "UART",
    category: "Interfaces & Debug",
    status: "currently_using",
    level: 83,
    learnedAt:
      "Developed through embedded firmware, test automation, engineering research, and STM32 projects.",
    appliedAt:
      "Aversan Python tooling and STM32 testing, UW research acquisition, and STM32 motion control.",
    examples: [
      {
        text: "Built multiple Python tools that sent commands, parsed responses, and logged embedded-device data over UART",
      },
      {
        text: "Used interrupt-driven UART RX for STM32H7 testing, diagnostics, and status reporting",
      },
      {
        text: "Streamed sensor data from Arduino into PC and Raspberry Pi workflows for structured data capture",
      },
      {
        text: "Used UART to send keyboard-driven motion commands from a Python GUI to an STM32 controller",
      },
    ],
  },

  {
    name: "I2C",
    category: "Interfaces & Debug",
    status: "currently_using",
    level: 79,
    learnedAt:
      "Developed through embedded board bring-up, peripheral integration, and hardware-validation work.",
    appliedAt:
      "Aversan STM32H7 firmware and OpenOCD/JTAG validation workflows.",
    examples: [
      {
        text: "Implemented GPIO bit-banged I2C in embedded C on STM32H7 rather than relying on the MCU I2C peripheral",
      },
      {
        text: "Performed I2C register reads and writes through OpenOCD boundary-scan routines without running MCU firmware",
      },
      {
        text: "Debugged addressing, ACK/NACK behavior, timing assumptions, and peripheral communication issues",
      },
      {
        text: "Used I2C-style peripheral validation as part of pre-firmware custom-board testing",
      },
    ],
  },

  {
    name: "SPI",
    category: "Interfaces & Debug",
    status: "currently_using",
    level: 65,
    learnedAt:
      "Developed through STM32 coursework and embedded motion-control development.",
    appliedAt:
      "STM32 dual-axis motion controller and embedded-systems coursework.",
    examples: [
      {
        text: "Used SPI motor drivers for independent dual-axis stepper control",
      },
      {
        text: "Configured STM32 SPI parameters including CPOL/CPHA, bit order, baud prescaler, and chip-select behavior",
      },
      {
        text: "Mapped peripheral datasheet transactions to register reads/writes and communication sequences",
      },
      {
        text: "Debugged communication issues involving wiring, SPI mode, clock speed, and unexpected responses",
      },
    ],
  },

  {
    name: "JTAG / SWD",
    category: "Interfaces & Debug",
    level: 75,
    learnedAt:
      "Developed through embedded board bring-up, boundary-scan testing, programming, and low-level firmware debugging.",
    appliedAt:
      "Aversan STM32H7 development and custom-board hardware validation.",
    examples: [
      {
        text: "Used JTAG boundary scan to detect shorts, opens, soldering faults, and connectivity issues before firmware bring-up",
      },
      {
        text: "Programmed STM32 ELF images over SWD using ST-Link during firmware development",
      },
      {
        text: "Used STM32CubeProgrammer over SWD for flashing, register inspection, erase/reflash operations, and board recovery",
      },
      {
        text: "Used SWD-based debugging to investigate firmware behavior and confirm expected hardware operation",
      },
    ],
  },

  {
    name: "OpenOCD",
    category: "Interfaces & Debug",
    level: 77,
    learnedAt:
      "Developed during embedded internship work using OpenOCD for JTAG boundary scan and low-level custom-board validation.",
    appliedAt:
      "Aversan board bring-up, connectivity testing, and peripheral validation.",
    examples: [
      {
        text: "Wrote TCL scripts using OpenOCD commands such as irscan and drscan for JTAG boundary-scan operations",
      },
      {
        text: "Built TCL helper functions that used boundary-scan control to perform I2C register reads and writes",
      },
      {
        text: "Built a Linux Python tool/GUI that invoked OpenOCD to initialize JTAG and automate low-level board testing",
      },
      {
        text: "Used OpenOCD to detect shorts, opens, and connectivity faults before relying on MCU firmware",
      },
    ],
  },

  {
    name: "Oscilloscope & DMM",
    category: "Interfaces & Debug",
    level: 75,
    learnedAt:
      "Developed through electronics labs, firmware debugging, engineering research, and prototype bring-up.",
    appliedAt:
      "Aversan hardware validation, UW research, coursework circuit verification, and personal projects.",
    examples: [
      {
        text: "Measured voltages, continuity, timing, and waveform behavior during hardware and firmware debugging",
      },
      {
        text: "Used an oscilloscope and signal generator to inspect waveforms and phase relationships",
      },
      {
        text: "Verified signal activity while testing firmware changes and boundary-scan controlled lines",
      },
      {
        text: "Used electrical measurements to isolate wiring, connection, and hardware faults",
      },
    ],
  },

  // ---------- Programming & Data ----------
  {
    name: "C / C++",
    category: "Programming & Data",
    status: "currently_using",
    level: 80,
    learnedAt:
      "Developed through embedded systems, data structures, robotics projects, and professional firmware/software work.",
    appliedAt:
      "Ford gateway ECU investigation, Aversan STM32H7 firmware, STM32 projects, robotics, and university coursework.",
    examples: [
      {
        text: "Debugged and extended STM32H7 embedded C firmware for safety-critical aerospace hardware at Aversan",
      },
      {
        text: "Traced gateway ECU C++ execution paths and correlated them with system logs during Ford OTA investigations",
      },
      {
        text: "Built STM32 C firmware for dual-axis motion control, safety logic, ADC inputs, and UART communication",
      },
      {
        text: "Implemented linked lists, stacks, queues, trees, recursion, and other data-structure concepts in C++ coursework",
      },
    ],
  },

  {
    name: "Python",
    category: "Programming & Data",
    status: "currently_using",
    level: 85,
    learnedAt:
      "Developed through engineering automation, embedded debugging, vehicle-data investigation, and research-data workflows.",
    appliedAt:
      "Ford investigation tools, Aversan UART/JTAG tooling, automated testing, and UW research data processing.",
    examples: [
      {
        text: "Built 6 Ford investigation and automation tools for connected-vehicle software analysis",
      },
      {
        text: "Used Python tooling to reduce hands-on Ford investigation time by up to 90%",
      },
      {
        text: "Built UART and OpenOCD tools for embedded firmware debugging and custom-board validation at Aversan",
      },
      {
        text: "Developed research GUIs and data-processing pipelines using Pandas, NumPy, Matplotlib, and structured data export",
      },
    ],
  },

  {
    name: "SQL / BigQuery",
    category: "Programming & Data",
    status: "currently_using",
    level: 72,
    learnedAt:
      "Developed through large-scale connected-vehicle software investigations at Ford, building on earlier relational-database work.",
    appliedAt:
      "Ford OTA and vehicle-data investigations across datasets ranging from 1M to 80M rows.",
    examples: [
      {
        text: "Used joins, CTEs, window functions, nested queries, partition filters, regex, and JSON parsing",
      },
      {
        text: "Built reusable investigation queries, workflows, and tables for recurring vehicle software analysis",
      },
      {
        text: "Reduced BigQuery runtime by 93% through query and data-access optimization",
      },
      {
        text: "Reduced recurring data-retrieval time from about 2 hours to 10–15 minutes",
      },
      {
        text: "Built Looker Studio dashboards to compare expected and observed vehicle messages during investigations",
      },
    ],
  },

  {
    name: "Git",
    category: "Programming & Data",
    level: 80,
    learnedAt:
      "Developed through professional team workflows, university work, and personal engineering projects.",
    appliedAt:
      "Aversan Azure DevOps repositories and personal GitHub projects.",
    examples: [
      {
        text: "Committed and pushed verified firmware, Python tooling, and automated-test changes through Azure DevOps repositories",
      },
      {
        text: "Used branches and structured commits while developing, testing, and integrating changes",
      },
      {
        text: "Use GitHub to maintain personal engineering projects, revisions, and documentation",
      },
    ],
  },

  {
    name: "Linux (CLI)",
    category: "Programming & Data",
    level: 65,
    learnedAt:
      "Developed through embedded development, automation, and test workflows.",
    appliedAt:
      "Aversan development environment and Linux-based Automated Test Equipment.",
    examples: [
      {
        text: "Developed and ran a Python/OpenOCD boundary-scan workflow inside a Linux environment",
      },
      {
        text: "Used command-line tooling while supporting STM32H7 firmware development and debugging",
      },
      {
        text: "Worked with Linux-based Automated Test Equipment for embedded verification and result analysis",
      },
    ],
  },

  // ---------- Controls & Automation ----------
  {
    name: "PID Control",
    category: "Controls & Automation",
    status: "currently_using",
    level: 68,
    learnedAt:
      "Developed through controls fundamentals and hands-on robotics/control-system prototypes.",
    appliedAt:
      "Quadcopter attitude-control prototype tested using a constrained stabilization rig.",
    examples: [
      {
        text: "Implemented a real-time PID attitude controller in C++",
      },
      {
        text: "Used IMU gyroscope feedback to drive closed-loop stabilization behavior",
      },
      {
        text: "Tuned controller gains based on observed response and stability",
      },
      {
        text: "Connected sensor feedback to motor-control output behavior during stabilization testing",
      },
    ],
  },

  {
    name: "Finite-State Machines (FSM)",
    category: "Controls & Automation",
    level: 76,
    learnedAt:
      "Developed through robotics, embedded behavior design, digital-logic coursework, and PLC labs.",
    appliedAt:
      "Obstacle-aware Arduino robot, digital-logic exercises, VHDL work, and PLC control labs.",
    examples: [
      {
        text: "Built an obstacle-aware Arduino robot using a finite-state control loop with debounced user inputs",
      },
      {
        text: "Translated control requirements into state diagrams, encoded states, and valid transition rules",
      },
      {
        text: "Implemented FSM-style control in VHDL and PLC ladder logic",
      },
      {
        text: "Used sensor-driven state transitions for motor, LED, and sequencing behavior",
      },
    ],
  },

  {
    name: "Signal Filtering",
    category: "Controls & Automation",
    level: 62,
    learnedAt:
      "Developed through Signals & Systems coursework, analog-filter labs, and motion-capture data processing.",
    appliedAt:
      "Vicon motion-capture processing, sensor-data analysis, and engineering coursework.",
    examples: [
      {
        text: "Applied low-pass filtering to reduce noise in motion-capture trajectories",
      },
      {
        text: "Built and tested analog filtering using op-amp circuits including a Twin-T selective amplifier",
      },
      {
        text: "Used frequency-response and Bode-plot concepts to reason about filtering and signal quality",
      },
    ],
  },

  {
    name: "PLC (Ladder Logic)",
    category: "Controls & Automation",
    level: 60,
    learnedAt:
      "Developed through control-system labs involving sequencing, sensor inputs, safe control logic, and interlocks.",
    appliedAt:
      "PLC coursework involving motors, LEDs, sensor inputs, and state-based actuator control.",
    examples: [
      {
        text: "Built ladder logic for motors and indicators with start/stop behavior and interlocks",
      },
      {
        text: "Integrated sensor inputs, including color sensing, into state-based control sequences",
      },
      {
        text: "Translated problem specifications into controlled sequences and validated behavior during lab testing",
      },
    ],
  },

  {
    name: "MATLAB / Simulink",
    category: "Controls & Automation",
    status: "currently_using",
    level: 74,
    learnedAt:
      "Developed through engineering modeling, numerical methods, system dynamics, controls, and simulation coursework.",
    appliedAt:
      "Engineering coursework involving equation solving, system modeling, simulation, and visualization.",
    examples: [
      {
        text: "Built and simulated first- and second-order system models in Simulink",
      },
      {
        text: "Solved engineering systems using direct and iterative numerical methods in MATLAB",
      },
      {
        text: "Used fsolve with custom function files for nonlinear engineering systems",
      },
      {
        text: "Created 2D and 3D engineering visualizations using plots, surfaces, contours, and parameterized grids",
      },
      {
        text: "Used system-modeling tools to study mechanical and electromechanical response behavior",
      },
    ],
  },

  // ---------- Verification & Automation ----------
  {
    name: "System Integration & OTA Testing",
    category: "Verification & Automation",
    status: "currently_using",
    level: 72,
    learnedAt:
      "Developed through connected-vehicle software integration work across physical ECUs, cloud services, and vehicle networks.",
    appliedAt:
      "Ford cloud-connected vehicle integration bench and OTA software-update investigations.",
    examples: [
      {
        text: "Configured ECU DIDs and cloud connectivity for software-update testing",
      },
      {
        text: "Flashed multiple software versions and reproduced OTA update and failure scenarios",
      },
      {
        text: "Analyzed CAN, Ethernet, gateway ECU, system, vehicle, and cloud logs to investigate failures",
      },
      {
        text: "Traced gateway ECU C++ execution paths to identify potential OTA failure paths",
      },
      {
        text: "Supported development and review of software requirements for connected-vehicle features, including expected behavior and edge cases",
      },
    ],
  },

  {
    name: "Robot Framework",
    category: "Verification & Automation",
    level: 68,
    learnedAt:
      "Developed while building automated embedded verification during my Aversan internship.",
    appliedAt:
      "Linux-based Automated Test Equipment used for embedded I/O verification.",
    examples: [
      {
        text: "Built Robot Framework test suites to verify set/read I/O behavior on Automated Test Equipment",
      },
      {
        text: "Generated repeatable reports supporting debugging, certification-focused workflows, production, and maintenance",
      },
      {
        text: "Integrated Python helper scripts into Robot Framework workflows for parsing and test logic",
      },
    ],
  },

  {
    name: "Test Automation & Telemetry",
    category: "Verification & Automation",
    status: "currently_using",
    level: 80,
    learnedAt:
      "Developed through Ford vehicle-data investigations, Aversan embedded testing, and UW research data acquisition.",
    appliedAt:
      "Ford, Aversan, and University of Waterloo engineering research.",
    examples: [
      {
        text: "Correlated vehicle, gateway, cloud, CAN, and Ethernet logs during OTA investigations",
      },
      {
        text: "Built Python/UART tools for automated embedded verification, logging, and debugging",
      },
      {
        text: "Built 6 Ford investigation tools that reduced hands-on analysis time by up to 90%",
      },
      {
        text: "Created structured sensor-data capture, preprocessing, visualization, and export pipelines for research",
      },
    ],
  },

  // ---------- Hardware, CAD & Prototyping ----------
  {
    name: "SolidWorks",
    category: "Hardware, CAD & Prototyping",
    status: "currently_using",
    level: 85,
    learnedAt:
      "Developed through coursework, engineering research, mechanical projects, and hands-on prototyping.",
    appliedAt:
      "UW research equipment, prosthetic-hand work, course design projects, mechanisms, and personal designs.",
    examples: [
      {
        text: "Designed functional mechanisms and equipment upgrades for engineering research",
      },
      {
        text: "Built complete assemblies and checked fit and motion through design iteration",
      },
      {
        text: "Modeled physical components from measurements for assembly integration",
      },
      {
        text: "Used SolidWorks to create mechanical concepts and prototype-ready parts",
      },
    ],
  },

  {
    name: "PCB Design",
    category: "Hardware, CAD & Prototyping",
    status: "currently_using",
    level: 64,
    learnedAt:
      "Developed while designing a custom sensor-interface PCB during my engineering research assistant co-op.",
    appliedAt:
      "UW Optometry 48-channel pressure-sensing system.",
    examples: [
      {
        text: "Designed the schematic and PCB layout for an Arduino-mounted 48-channel sensor interface",
      },
      {
        text: "Designed voltage-divider conditioning for pressure-sensing channels",
      },
      {
        text: "Planned connectors and routing for reliable sensor wiring and external-system integration",
      },
      {
        text: "Performed ERC/DRC-style checks and reviewed connectivity before fabrication",
      },
    ],
  },

  {
    name: "3D Printing (FDM)",
    category: "Hardware, CAD & Prototyping",
    level: 78,
    learnedAt:
      "Developed through functional prototyping, engineering research, coursework, and maintaining FDM printers.",
    appliedAt:
      "UW research equipment, engineering projects, personal mechanical builds, and printer repair.",
    examples: [
      {
        text: "Designed and printed functional parts, then iterated based on fit, strength, and real-world testing",
      },
      {
        text: "Used FDM printing for rapid development of research fixtures and mechanical improvements",
      },
      {
        text: "Printed components for engineering prototypes and mechanisms",
      },
      {
        text: "Repaired and restored FDM printers by replacing failed hardware and returning them to reliable operation",
      },
    ],
  },

  {
    name: "Soldering",
    category: "Hardware, CAD & Prototyping",
    level: 80,
    learnedAt:
      "Developed through electronics projects, coursework, engineering research, and hardware troubleshooting.",
    appliedAt:
      "PCB assembly, wiring, repair, research hardware, and personal electronics projects.",
    examples: [
      {
        text: "Soldered components, connectors, and wiring for electronics prototypes",
      },
      {
        text: "Performed PCB soldering and rework for coursework and research systems",
      },
      {
        text: "Used soldering during hardware debugging to repair unreliable or intermittent connections",
      },
    ],
  },

  {
    name: "Autodesk Inventor",
    category: "Hardware, CAD & Prototyping",
    level: 70,
    learnedAt:
      "Developed during CNC programming work involving production sheet-metal design.",
    appliedAt:
      "State Windows manufacturing and production workflows.",
    examples: [
      {
        text: "Built parametric sheet-metal CAD models from production requirements and drawings",
      },
      {
        text: "Used spreadsheet/iLogic-style parameters to efficiently generate multiple part variants",
      },
      {
        text: "Produced production-ready drawings tied directly to CNC fabrication workflows",
      },
      {
        text: "Worked from technical and GD&T drawings to create manufacturable models",
      },
    ],
  },

  {
    name: "AutoCAD",
    category: "Hardware, CAD & Prototyping",
    level: 70,
    learnedAt:
      "Developed through manufacturing-focused CAD, technical drawing work, and fabrication projects.",
    appliedAt:
      "CNC programming and project fabrication workflows.",
    examples: [
      {
        text: "Edited and corrected DXF geometry for manufacturing readiness",
      },
      {
        text: "Worked with technical drawings to support CNC production",
      },
      {
        text: "Created and modified 2D CAD geometry for laser cutting and fabrication",
      },
    ],
  },

  {
    name: "GD&T",
    category: "Hardware, CAD & Prototyping",
    level: 76,
    learnedAt:
      "Developed through engineering coursework and practical manufacturing experience as a CNC programmer.",
    appliedAt:
      "State Windows production CAD and mechanical-design work.",
    examples: [
      {
        text: "Interpreted GD&T callouts, datums, and feature-control information when creating production CAD models",
      },
      {
        text: "Applied tolerance awareness when converting drawings into manufacturable parts",
      },
      {
        text: "Considered fits, clearances, and tolerance stack-up when designing mechanisms and assemblies",
      },
    ],
  },
];

  const categoryOrder = [
  "Embedded Systems",
  "Interfaces & Debug",
  "Programming & Data",
  "Controls & Automation",
  "Verification & Automation",
  "Hardware, CAD & Prototyping",
];

  const categories = categoryOrder.filter((cat) =>
    skills.some((s) => s.category === cat)
  );

  const ongoingCount = (examples: { ongoing?: boolean }[]) =>
    examples.reduce((acc, ex) => acc + (ex.ongoing ? 1 : 0), 0);

  const ongoingState = (examples: { ongoing?: boolean }[]) => {
    const total = examples.length;
    const on = ongoingCount(examples);

    if (on === 0) return "none";
    if (on === total) return "all";
    return "some";
  };

  const ongoingLabel = (skill: Skill) => {
    // Prefer manually set status when available.
    if (skill.status === "currently_learning") return "Currently learning";
    if (skill.status === "currently_using") return "Currently using";

    // Otherwise derive from examples
    const state = ongoingState(skill.examples);
    if (state === "some") return "Currently improving";
    if (state === "all") return "Currently learning";
    return null;
  };


  const clamp01 = (n: number) => Math.max(0, Math.min(100, n));

  const levelLabel = (p: number) => {
    if (p >= 90) return "Expert";
    if (p >= 75) return "Proficient";
    if (p >= 60) return "Intermediate/Comfortable";
    if (p >= 40) return "Familiar";
    return "Beginner";
  };

  // Smooth color across 0..100 (red -> green). 0=0deg, 100=120deg
  const levelColor = (p: number) => {
    const v = clamp01(p);
    const hue = (v / 100) * 120;
    return `hsl(${hue} 85% 45%)`;
  };


  const SkillLevel = ({ level }: { level: number }) => {
    const v = clamp01(level);
    const label = levelLabel(v);
    const color = levelColor(v);

    const barRef = useRef<HTMLDivElement | null>(null);

    const [tip, setTip] = useState({
      show: false,
      x: 0,
      y: 0,
    });

    const onMove = (e: MouseEvent<HTMLDivElement>) => {
      const el = barRef.current;
      if (!el) return;

      // Keep tooltip near the mouse
      const pad = 10;
      const x = Math.min(window.innerWidth - pad, Math.max(pad, e.clientX));
      const y = Math.min(window.innerHeight - pad, Math.max(pad, e.clientY));

      setTip({ show: true, x, y });
    };

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-muted-foreground">{label}</p>
        </div>

        <div
          ref={barRef}
          className="h-2 w-full overflow-hidden rounded-full bg-muted"
          onMouseEnter={(e) => onMove(e)}
          onMouseLeave={() => setTip((t) => ({ ...t, show: false }))}
          onMouseMove={onMove}
          aria-label={`${label} (${v}%)`}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${v}%`, backgroundColor: color }}
          />
        </div>

        {tip.show &&
          createPortal(
            <div
              className="pointer-events-none fixed z-[9999]"
              style={{
                left: tip.x,
                top: tip.y - 14,
                transform: "translate(-50%, -100%)",
              }}
            >
              <div className="relative rounded-md bg-background px-2 py-1 text-[11px] text-foreground shadow-md border border-border/60">
                {v}%
                <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-background border-r border-b border-border/60" />
              </div>
            </div>,
            document.body
          )}
      </div>
    );
  };



  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Skills</h2>
          <div className="text-center mb-5">
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Click a skill</strong> to see where I learned it, how I applied it, and my proficiency level.
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              Skills highlighted in <span className="font-medium text-primary">blue</span> are ones I am currently using or actively improving.
            </p>
          </div>
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
                          variant={ongoingLabel(skill) ? "default" : "secondary"}
                          className={`cursor-pointer transition-colors px-4 py-2 text-sm ${
                            ongoingLabel(skill)
                              ? "bg-primary text-primary-foreground hover:bg-primary/90"
                              : "hover:bg-primary hover:text-primary-foreground"
                          }`}
                        >
                          {skill.name}
                        </Badge>
                      </DialogTrigger>
                      <DialogContent className="max-w-md p-0 overflow-hidden">
                        {/* Top (non-scroll) */}
                        <div className="p-6 border-b border-border">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <span>{skill.name}</span>
                              {ongoingLabel(skill) && (
                                <Badge variant="secondary" className="text-[15px] px-2 py-0.5">
                                  {ongoingLabel(skill)}
                                </Badge>
                              )}
                            </DialogTitle>

                            {typeof skill.level === "number" && (
                              <div className="pt-2">
                                <SkillLevel level={skill.level} />
                              </div>
                            )}
                          </DialogHeader>
                        </div>

                        {/* Scrollable content */}
                        <div className="max-h-[75vh] overflow-y-auto p-6 pt-4 pr-4">
                          <div className="space-y-4">
                            <div className="rounded-lg border bg-muted/30 p-3">
                              <h4 className="text-xs font-semibold tracking-wide text-foreground/80 uppercase mb-1">
                                Where I learned it
                              </h4>
                              <p className="text-sm text-foreground/90 leading-relaxed">
                                {skill.learnedAt}
                              </p>
                            </div>

                            <div className="rounded-lg border bg-muted/30 p-3">
                              <h4 className="text-xs font-semibold tracking-wide text-foreground/80 uppercase mb-1">
                                How I've applied it
                              </h4>
                              <p className="text-sm text-foreground/90 leading-relaxed">
                                {skill.appliedAt}
                              </p>
                            </div>

                            <div className="rounded-lg border bg-muted/30 p-3">
                              <h4 className="text-xs font-semibold tracking-wide text-foreground/80 uppercase mb-2">
                                Examples
                              </h4>

                              <ul className="text-sm space-y-2">
                                {skill.examples.map((ex, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                    <div className="leading-relaxed text-foreground/90">
                                      {ex.ongoing && (
                                        <Badge variant="secondary" className="ml-2 align-middle text-[10px] px-2 py-0.5">
                                          Ongoing
                                        </Badge>
                                      )}
                                      {ex.text}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
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