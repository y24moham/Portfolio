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

  const skills: Skill[] = [
    // ---------- Embedded & Bring-Up ----------
    {
      name: "STM32 (HAL/LL)",
      category: "Embedded & Bring-Up",
      learnedAt: "Embedded bring-up and STM32 development workflow through internship work and embedded labs.",
      appliedAt: "Aversan (STM32H7 firmware debug/extension and peripheral bring-up) + coursework labs.",
      examples: [
        "Debugged and extended STM32H7 embedded C firmware in a safety-critical workflow (Aversan)",
        "Worked with HAL/low-level configuration patterns while validating peripherals and system behavior (Aversan)",
        "(ongoing) Using an STM32 Nucleo board in MTE 325 to configure peripherals and interface with a two-axis machine setup"
      ]
    },
    {
      name: "Embedded C/C++",
      category: "Embedded & Bring-Up",
      learnedAt: "Robotics projects (Arduino/C++) and embedded coursework, then reinforced through professional firmware work.",
      appliedAt: "Aversan (STM32 firmware) + UW research (Arduino acquisition/processing code).",
      examples: [
        "Made targeted firmware changes and debugged behavior on STM32H7 in embedded C (Aversan)",
        "Wrote Arduino C++ code for sensor acquisition and reliable data collection (UW research)",
        "(ongoing) Writing C for microcontroller I/O/peripherals for the MTE 325 two-axis machine project"
      ]
    },
    {
      name: "RTOS",
      category: "Embedded & Bring-Up",
      learnedAt:
        "MTE 241 (Computer Structures and Real-Time Systems): interrupts/I/O, concurrency, synchronization, scheduling, memory/resource management, and real-time design patterns.",
      appliedAt:
        "MTE 241 labs on STM32F401RE (STM32CubeIDE), where I implemented RTOS building blocks in C across stacks, processes, multitasking, and timing.",
      examples: [
        "Implemented RTOS fundamentals: per-task stacks, basic task/process structures, and startup context setup",
        "Built multitasking pieces including a simple scheduler and context switching between tasks",
        "Added timing/interrupt-based behavior (tick/timers) and used synchronization concepts to reason about shared resources"
      ]
    },
    {
      name: "Timers & Interrupts",
      category: "Embedded & Bring-Up",
      learnedAt: "Event-driven embedded patterns from real hardware work, plus embedded/RTOS coursework (MTE 241: interrupts/I/O, timing, scheduling concepts) and digital logic labs.",
      appliedAt: "Aversan (timing + interrupt-driven comms/diagnostics) + robotics-style control loops + STM32 lab work.",
      examples: [
        "Used timers and interrupt-driven UART receive patterns for status/diagnostics and faster iteration (Aversan)",
        "Worked with timing-driven behaviors and peripheral handling patterns in STM32 firmware contexts (Aversan)",
        "Applied timing-based thinking in robotics prototypes where loop timing affected behavior (Arduino projects)",
        "Built real-time timing intuition in MTE 241 labs (STM32F401RE): using interrupts/I/O and timing to support multitasking-style behavior",
        "(ongoing) Implementing and comparing polling vs interrupts for responsiveness/latency in MTE 325"
      ]
    },
    {
      name: "DMA",
      category: "Embedded & Bring-Up",
      learnedAt: "Hands-on exposure during STM32 firmware work, learning when DMA helps and what it changes in debugging.",
      appliedAt: "Aversan (DMA-aware peripheral/diagnostics workflows on STM32H7).",
      examples: [
        "Worked around DMA-enabled peripheral flows in STM32H7 firmware context (Aversan)",
        "Built confidence debugging systems where data movement and timing aren’t purely CPU-driven (Aversan)",
        "(ongoing) Exploring peripheral configuration tradeoffs in MTE 325 where throughput/latency and measurement matter"
      ]
    },
    {
      name: "PWM",
      category: "Embedded & Bring-Up",
      learnedAt: "Coursework labs using Oscilloscope (MTE 220 Sensors & Instrumentation) and hands-on Arduino experiments with ultrasonic sensing and servo control.",
      appliedAt: "Robotics prototypes needing precise timing for sensors/actuators, plus real-hardware debugging and tuning.",
      examples: [
        "Tested PWM-based servo control (position control and basic tuning)",
        "Used pulse timing concepts heavily for ultrasonic sensor experiments (coursework + projects)",
        "Applied PWM-style timing in real-time, sensor-driven behavior for an obstacle-avoidance robot"
      ]
    },
    {
      name: "Arduino & ESP32",
      category: "Embedded & Bring-Up",
      learnedAt: "Robotics/sensor projects and embedded experimentation building real hardware loops and debugging with measurement tools.",
      appliedAt: "UW research sensor acquisition (Arduino + multi-sensor setup) and robotics prototypes; ESP32 used for basic connectivity experiments and embedded bring-up practice.",
      examples: [
        "Built sensor-driven prototypes with Arduino (data capture, timing, and stable real-hardware behavior) such as the quadcopter prototype and obstacle-avoidance robot",
        "Used ESP32 for Wi-Fi/Bluetooth basics and experimentation around embedded connectivity"
      ]
    },

    // ---------- Interfaces & Debug ----------
    {
      name: "UART",
      category: "Interfaces & Debug",
      learnedAt:
        "Building real embedded test/debug workflows and data pipelines using serial links (UART/USB-serial adapters) across internship + research work.",
      appliedAt:
        "Aversan: multiple Python tools over UART for automation, logging, and verification (device + test equipment). UW research: Arduino-to-PC/Raspberry Pi serial pipelines for data capture and exporting trial datasets.",
      examples: [
        "Built Python tools that communicate over UART to send commands, parse responses, and generate structured logs",
        "Used USB-to-TTL adapters and direct TX/RX serial wiring for bring-up, debugging, and data capture",
        "Streamed sensor data over serial from Arduino to PC/Raspberry Pi, then cleaned/exported results for analysis"
      ]
    },
    {
      name: "I2C",
      category: "Interfaces & Debug",
      learnedAt:
        "Embedded bring-up work and sensor/peripheral integration, reinforced through coursework exposure to serial buses (I2C/SPI/UART).",
      appliedAt:
        "Aversan: custom bit-banged I2C on STM32 for peripheral/module communication and validation; boundary-scan/TCL-based I2C register reads/writes for pre-firmware checks. UW research: sensor-style integration patterns in a multi-sensor acquisition setup.",
      examples: [
        "Wrote custom bit-banged I2C in Embedded C on STM32 (not using the default STM32 I2C peripheral) to communicate with board modules/peripherals",
        "Used OpenOCD + TCL boundary-scan routines to perform I2C register reads/writes and validate peripherals without running MCU firmware",
        "Debugged I2C issues during bring-up by checking addressing, ACK/NACK behavior, and timing assumptions",
        "Applied I2C-style integration patterns while building sensor acquisition systems (wiring, validation, and repeatable data capture)"
      ]
    },
    {
      name: "SPI",
      category: "Interfaces & Debug",
      learnedAt:
        "Embedded systems coursework and labs, plus hands-on setup in STM32CubeIDE/HAL when bringing up SPI peripherals.",
      appliedAt:
        "Coursework + STM32 development work where I configured SPI peripherals (mode/clocking) and validated sensor/peripheral communication behavior.",
      examples: [
        "Configured SPI on STM32 (CubeIDE/CubeMX): CPOL/CPHA, bit order, baud prescaler, NSS behavior",
        "Mapped datasheet timing/transactions to code (register reads/writes, dummy bytes, chip-select timing)",
        "Debugged basic comms issues: wiring/pinout, incorrect mode, clock speed, and unexpected responses"
      ]
    },
    {
      name: "JTAG/SWD",
      category: "Interfaces & Debug",
      learnedAt: "Hands-on embedded bring-up and debug work across board validation and STM32 development workflows.",
      appliedAt: "Aversan: boundary-scan board checks over JTAG, plus SWD-based programming and debug during STM32H7 firmware bring-up and troubleshooting.",
      examples: [
        "Used JTAG for boundary-scan workflows (via OpenOCD + TCL) to validate shorts/opens and connectivity without relying on MCU firmware",
        "Programmed STM32 ELF images over SWD using ST-Link during firmware iteration and bring-up",
        "Used STM32CubeProgrammer over SWD to read/debug register values, erase/reflash images, and recover boards when needed",
        "Used SWD-based debug steps to investigate firmware issues and confirm expected hardware behavior during testing"
      ]
    },
    {
      name: "OpenOCD",
      category: "Interfaces & Debug",
      learnedAt: "Embedded internship work using OpenOCD as an open-source JTAG interface for boundary-scan and low-level board validation.",
      appliedAt: "Aversan: OpenOCD-driven JTAG boundary-scan to bring up boards, validate connectivity, and perform peripheral checks without relying on MCU firmware.",
      examples: [
        "Wrote TCL scripts using OpenOCD commands (e.g., irscan/drscan) to drive instruction/data registers and run boundary-scan checks",
        "Built TCL helper functions that used boundary-scan control to perform I2C transactions (read/write) to specified register addresses",
        "Built a Linux Python tool/GUI that invokes OpenOCD in the background to initialize JTAG and control pins at a low level",
        "Validated shorts/opens and pin connectivity pre-firmware to catch manufacturing issues early"
      ]
    },
    {
      name: "Oscilloscope & DMM",
      category: "Interfaces & Debug",
      learnedAt: "Electronics labs and hands-on prototype bring-up, including measuring real signals (voltage, timing, waveform shape, phase) and validating test setups with recorded measurements.",
      appliedAt: "Coursework circuit verification, UW research system bring-up (checking connections and isolating faults), and Aversan debugging (confirming signal/voltage behavior during firmware and boundary-scan validation).",
      examples: [
        "Measured voltages, continuity, and timing to verify wiring, board connections, and expected I/O behavior",
        "Used an oscilloscope + signal generator to observe waveforms and phase relationships and document test evidence",
        "Confirmed correct signal activity while testing firmware changes and boundary-scan controlled lines during bring-up/debug"
      ]
    },
    {
      name: "Wi-Fi / Bluetooth",
      category: "Interfaces & Debug",
      learnedAt: "Hands-on prototyping with ESP32 and Arduino wireless modules while validating simple connectivity and data transfer.",
      appliedAt: "ESP32 experiments using Wi-Fi basics and Bluetooth basics; Arduino testing using the HC-05 Bluetooth module for simple wireless communication.",
      examples: [
        "Set up basic Wi-Fi functionality on ESP32 for small experiments and connectivity checks",
        "Used Bluetooth basics on ESP32 for simple testing and proof-of-concept communication",
        "Integrated an HC-05 Bluetooth module with Arduino to send/receive basic serial data wirelessly"
      ]
    },

    // ---------- Controls & Robotics ----------
    {
      name: "PID Control",
      category: "Controls & Robotics",
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
      category: "Controls & Robotics",
      learnedAt: "Robotics/embedded behavior design and digital logic coursework (state diagrams, state encoding, and valid transition rules).",
      appliedAt: "Obstacle-aware Arduino robot behaviors, plus implementing FSM specs in VHDL and PLC ladder logic labs.",
      examples: [
        "Built an obstacle-aware Arduino robot using a two-state FSM (idle/run) with debounced inputs and sensor-driven behavior",
        "Designed FSMs from problem spec → state diagram → encoded states/transitions (only allowed moves) in digital logic coursework",
        "Implemented FSM-style control in VHDL and PLC ladder logic for motor/LED control and sensor-driven sequencing (e.g., color sensing)"
      ]
    },
    {
      name: "Signal Filtering",
      category: "Controls & Robotics",
      learnedAt: "Signals & Systems coursework (frequency response, Bode plots) and circuits work building simple analog filters (op-amp + Twin-T).",
      appliedAt: "Motion-capture data cleanup and sensor-data preprocessing where reducing noise mattered.",
      examples: [
        "Applied low-pass filtering during Vicon/Nexus processing to reduce noise and produce cleaner trajectories",
        "Built and tested basic analog filtering using op-amps, including a Twin-T selective amplifier coursework project",
        "Used frequency-response intuition (Bode plots) to reason about filtering behavior and signal quality"
      ]
    },
    {
      name: "Data Logging & Telemetry",
      category: "Controls & Robotics",
      learnedAt: "Hands-on debugging and validation work where repeatable logs were needed to understand system behavior.",
      appliedAt: "Aversan (UART logging + test tooling); UW research (Raspberry Pi trial export + analysis-ready outputs).",
      examples: [
        "Logged and parsed UART output to support firmware verification and faster debugging",
        "Built a Raspberry Pi CSV export pipeline to capture structured trial data reliably",
        "Shaped logs/exports into consistent, analysis-ready formats for downstream review and research use"
      ]
    },

    // ---------- Software / Data ----------
    {
      name: "Python",
      category: "Software & Data",
      learnedAt: "Building real tools around embedded debugging/verification and research data workflows.",
      appliedAt: "Aversan (UART/JTAG tools + ATE testing); UW research (data preprocessing + visualization outputs).",
      examples: [
        "Built 5 Python GUI tools to parse/log UART test data and support firmware debugging/verification",
        "Developed a Linux Python GUI around OpenOCD for JTAG boundary-scan and bit-banged I2C peripheral checks",
        "Created a Python GUI with a grouping algorithm to preprocess/visualize foot-pressure data and generate analysis-ready outputs"
      ]
    },
    {
      name: "Git",
      category: "Software & Data",
      learnedAt: "Used Git across projects and team workflows, and strengthened it during my last co-op term using Git for day-to-day version control in Azure DevOps.",
      appliedAt: "Aversan: Azure DevOps repos for firmware/tooling changes and ATE test automation assets under a team review workflow. Personal: GitHub for maintaining and iterating on projects.",
      examples: [
        "Committed and pushed verified changes to Azure DevOps repos (firmware, Python tooling, and ATE/Robot Framework test assets) as part of a structured team workflow",
        "Used branches and clean commit history to develop, test, and merge changes safely",
        "Maintained my GitHub projects with consistent updates, readable history, and clear organization"
      ]
    },
    {
      name: "Linux (CLI)",
      category: "Software & Data",
      learnedAt: "Built comfort with Linux through embedded internship workflows, using the terminal daily for development, testing, and automation.",
      appliedAt: "Embedded software internship: developed a boundary-scan tool inside a Linux VM, did parts of STM32H7 development/debug in that environment, and worked with Linux-based Automated Test Equipment (ATE).",
      examples: [
        "Developed and ran a Python-based boundary-scan workflow in a Linux virtual machine (terminal-first workflow)",
        "Used Linux tooling to support STM32H7 firmware development/debug tasks and run supporting scripts",
        "Worked in a Linux ATE environment to execute automated verification and interpret logs/results"
      ]
    },
    {
      name: "Pandas",
      category: "Software & Data",
      learnedAt: "Hands-on use while building Python tooling around real CSV logs and sensor datasets (learning by cleaning, transforming, and exporting real data).",
      appliedAt: "UW Optometry research (foot-pressure preprocessing + CSV export pipeline) and Aversan (Python tooling for parsing/logging test data).",
      examples: [
        "Loaded and cleaned CSV-based logs/datasets (column cleanup, type fixes, missing/invalid value handling)",
        "Grouped and transformed trial-style data into analysis-ready tables (segmentation/grouping, summary metrics where needed)",
        "Joined/sliced/filtered datasets and produced consistent exports for researchers and test workflows"
      ]
    },
    {
      name: "NumPy",
      category: "Software & Data",
      learnedAt: "Hands-on use while building Python tooling for real sensor data and test logs (learning by implementing and iterating on actual workflows).",
      appliedAt: "UW Optometry research (pressure-sensor datasets) and Aversan (Python tools for logs/telemetry and automation).",
      examples: [
        "Built and manipulated arrays for trial-based data (indexing, slicing, reshaping, stacking)",
        "Used vectorized operations for numeric transforms and cleanup (scaling/normalizing, offsets, basic smoothing-style steps when needed)",
        "Moved between Pandas and NumPy for efficient computation/plotting, then exported analysis-ready outputs"
      ]
    },
    {
      name: "Matplotlib",
      category: "Software & Data",
      learnedAt: "Used during research work to visualize sensor layouts and validate data-collection logic.",
      appliedAt: "Engineering research assistant co-op: Python GUI that visualized stair geometry and pressure-sensor points on a grid to support foot-detection/segmentation checks.",
      examples: [
        "Rendered a grid-based stair/sensor layout and plotted pressure points for quick visual validation inside a GUI",
        "Used plotted point clusters on the grid to help determine whether readings belong to a single foot contact region",
        "Used visualization as a debugging tool to verify mapping, alignment, and collection logic during iteration"
      ]
    },
    {
      name: "Pytest",
      category: "Software & Data",
      learnedAt: "Picked up through building Python tooling and learning to validate behavior with simple, repeatable tests.",
      appliedAt: "Aversan: Python tools and ATE-related scripting where basic checks helped catch issues early and keep changes safe.",
      examples: [
        "Wrote small tests to validate expected outputs and surface errors/edge cases (e.g., invalid inputs, missing responses, timeout-style conditions)",
        "Used quick regression checks when refactoring or adding features to Python utilities",
        "Applied a testing mindset alongside ATE workflows to keep automation changes reliable"
      ]
    },
    {
      name: "SQL (basic)",
      category: "Software & Data",
      learnedAt: "Used SQL while building a hospital database project to understand structured data storage and querying in practice.",
      appliedAt: "Ran simple queries to retrieve and validate records during development and debugging.",
      examples: [
        "Queried patient/appointment-style tables using SELECT + WHERE filters",
        "Used basic joins to pull related info across tables when needed",
        "Did simple aggregation (COUNT/GROUP BY) to summarize data and sanity-check results"
      ]
    },
    {
      name: "Data Structures & Algorithms",
      category: "Software & Data",
      learnedAt:
        "Coursework + labs implementing core data structures from scratch in C/C++.",
      appliedAt:
        "Used as a foundation for writing reliable code and reasoning about correctness/performance in projects and tooling work.",
      examples: [
        "Implemented linked lists (node-based) with insert/delete/traverse operations",
        "Implemented ADTs (stacks/queues) using both arrays and linked lists",
        "Implemented trees including binary search trees (search/insert/traversals)"
      ]
    },

    // ---------- Verification / Test Automation ----------
    {
      name: "Robot Framework",
      category: "Verification & Automation",
      learnedAt: "Learned by building automated test suites during my embedded software internship, working in a Linux environment (Robot Framework via RIDE).", // :contentReference[oaicite:0]{index=0}
      appliedAt: "Used it to automate I/O verification (set/read checks) and produce test reports used for debugging and downstream certification/production workflows.", // :contentReference[oaicite:1]{index=1}
      examples: [
        "Authored Robot Framework test suites to validate I/O behavior on Linux-based Automated Test Equipment",
        "Generated structured reports that supported debugging and compliance-focused workflows (including FAA-related needs) as well as production/maintenance",
        "Built tests that sometimes call Python helper functions/scripts to handle logic, parsing, or utilities alongside Robot keywords"
      ]
    },

    // ---------- Mechanical / CAD / Prototyping ----------
    {
      name: "SolidWorks",
      category: "Hardware, CAD & Prototyping",
      learnedAt: "Coursework-based CAD training, then reinforced through projects where I recreated real parts and built full assemblies.",
      appliedAt: "EV3 prosthetic hand project, multiple course design projects (including an energy-absorbing damper mechanism), developing mechanisms as an engineering research assistant, and personal mechanical concept builds.",
      examples: [
        "Modeled real parts from measurements and rebuilt them as accurate CAD components for integration in assemblies, and built mechanisms that mount on existing parts and impeove functionality",
        "Designed mechanisms and assemblies for coursework + prototypes, iterating designs to validate concepts and fit",
        "Created mechanical concept models for learning/communication (e.g., flapping-wing mechanism concept, W16 piston/engine visualization)"
      ]
    },
    {
      name: "AutoCAD",
      category: "Hardware, CAD & Prototyping",
      learnedAt: "Coursework and practical drafting work during manufacturing-focused tasks.",
      appliedAt: "CNC programming work (editing/repairing DXF files and technical drawings) and project workflows where I created/modified drawings for laser cutting and fabrication.",
      examples: [
        "Edited and corrected DXF geometry for manufacturing readiness (cleanup, alignment, dimension fixes)",
        "Worked with technical drawings to support production workflows as a CNC programmer",
        "Created or modified 2D CAD parts for laser cutting during hands-on project work"
      ]
    },
    {
      name: "GD&T",
      category: "Hardware, CAD & Prototyping",
      learnedAt: "Coursework and practical use as a CNC programmer working from GD&T technical drawings.",
      appliedAt: "Created 3D CAD sheet-metal models from GD&T drawings in a production environment, and used tolerancing awareness while designing/iterating mechanisms as an engineering research assistant.",
      examples: [
        "Interpreted GD&T callouts (datums, feature control frames) to build CAD parts that match drawing intent",
        "Applied tolerance awareness when converting drawings to manufacturable models and drawings for production",
        "Considered fits/clearances and stack-up effects when designing mechanisms so assemblies function reliably"
      ]
    },
    {
      name: "3D Printing (FDM)",
      category: "Hardware, CAD & Prototyping",
      learnedAt: "Hands-on prototyping across coursework and personal projects, plus maintaining and repairing FDM printers.",
      appliedAt: "EV3 project parts, personal mechanical builds, and fabrication of mechanism improvements during my engineering research assistant co-op.",
      examples: [
        "Designed and printed functional parts for multiple projects, then iterated based on fit, strength, and real-world testing",
        "Used 3D printing to support rapid prototyping of mechanical mechanisms and improvement fixtures during research work",
        "Repaired and restored Cubicon FDM printers (replaced outsourced components like heaters/thermocouples) and put them back into reliable use"
      ]
    },
    {
      name: "Soldering",
      category: "Hardware, CAD & Prototyping",
      learnedAt: "Learned early through hands-on electronics, then reinforced through years of personal builds and coursework labs.",
      appliedAt: "Personal projects (wiring and connections as needed), coursework PCB work, and PCB soldering during my engineering research assistant co-op.",
      examples: [
        "Soldered connectors, wires, and components to build and repair circuits for prototypes and personal projects",
        "Performed PCB soldering/rework for coursework and research setups when reliable connections were critical",
        "Used soldering as part of hardware debugging (fixing intermittent joints, reworking connections, improving robustness)"
      ]
    },
    {
      name: "PCB Design (Altium)",
      category: "Hardware, CAD & Prototyping",
      learnedAt: "Learned PCB design during my engineering research assistant co-op by designing a custom sensor interface board in Altium CircuitMaker.",
      appliedAt: "Designed a custom PCB that mounts on an Arduino, interfaces to 48 sensors using voltage-divider circuits, and connects to a separate camera system for synchronization.",
      examples: [
        "Designed the schematic and PCB layout for an Arduino-mounted sensor interface board (48 channels, voltage-divider conditioning)",
        "Planned connectors/routing for reliable sensor wiring and integration with an external camera sync setup",
        "Verified the design before fabrication (ERC/DRC-style checks and sanity checks on connectivity and signals)"
      ]
    },
    {
      name: "Autodesk Inventor",
      category: "Hardware, CAD & Prototyping",
      learnedAt: "CNC programming co-op using Inventor for sheet-metal design tied directly to production outputs.",
      appliedAt: "State Windows: built parametric sheet-metal parts (iLogic/spreadsheet), produced manufacturing drawings, and generated G-code for CNC fabrication and bending workflows.",
      examples: [
        "Built parametric sheet-metal CAD using iLogic/spreadsheet inputs to generate many part variants efficiently",
      ]
    },

    // ---------- Controls & Robotics ----------
    {
      name: "PLC (Ladder Logic)",
      category: "Controls & Robotics",
      learnedAt: "Coursework labs focused on translating control requirements into ladder logic with safe sequencing and interlocks.",
      appliedAt: "PLC lab builds where I implemented sensor-driven logic and discrete control for actuators and indicators.",
      examples: [
        "Built ladder logic to control motors and LEDs with clear start/stop behavior and interlocks",
        "Integrated sensor inputs (including color sensing) to trigger state-based actions and sequencing",
        "Translated a problem spec into a controlled sequence (states/allowed transitions) and validated behavior during lab testing"
      ]
    },

    // ---------- FPGA / Digital ----------
    {
      name: "VHDL (FPGA)",
      category: "FPGA/Digital",
      learnedAt: "Digital logic/FPGA coursework covering VHDL fundamentals.",
      appliedAt: "Course labs where I implemented simple FPGA logic to read inputs and drive display outputs.",
      examples: [
        "Wrote VHDL modules to process button inputs into stable binary signals",
        "Implemented combinational logic to map binary values to 7-segment display outputs",
      ]
    },

    // ---------- Modeling / Simulation ----------
    {
      name: "MATLAB",
      category: "Modeling/Simulation",
      learnedAt: "Engineering coursework where I used MATLAB for modeling, solver-based workflows, and visualization.",
      appliedAt: "Various courses' assignments/labs: equation solving (direct + iterative), nonlinear system solving with custom function files, parametric 3D geometry/plots, and trajectory-style analysis with clear visual outputs.",
      examples: [
        "Built reusable function files and ran solver workflows (e.g., fsolve with custom equation functions)",
        "Solved engineering systems with both direct methods (A\\b) and iterative methods (Gauss-Seidel with relaxation + convergence checks)",
        "Created clear 2D/3D visualizations for interpreting results (plot/subplot, surf/contour/contour3, fplot, legends, labels, annotations, transparency/colormaps)",
        "Worked with grid/parameterized models using meshgrid and element-wise operations for efficient evaluation across many points"
      ]
    },
    {
      name: "SimulationX",
      category: "Modeling/Simulation",
      learnedAt: "MTE 351 (Systems Models 1) coursework covering system modeling and simulation tools.",
      appliedAt: "Course labs/assignments and the MTE 351 team project using SimulationX (ongoing this term).",
      examples: [
        "(ongoing) Learning to build and simulate 1st/2nd-order system responses in SimulationX",
        "(ongoing) Modeling mechanical/electromechanical systems using time and frequency-domain concepts from the course",
        "(ongoing) Using SimulationX for a course project workflow (model setup, parameter tuning, and interpreting outputs)"
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