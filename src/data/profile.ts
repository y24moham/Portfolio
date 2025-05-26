import { TimelineItem, SkillCategory, Project, Education, Certificate, ContactInfo, ResumeInfo } from '../types';

export const contactInfo: ContactInfo = {
  email: "y24moham@uwaterloo.ca",
  phone: "+1 (647)-833-3952",
  linkedin: "https://www.linkedin.com/in/yasin-samir"
};

export const resumeInfo: ResumeInfo = {
  pdfUrl: "/resume.pdf", // Add your resume PDF URL here
  imageUrl: "/resume-preview.jpg" // Add your resume preview image URL here
};

export const aboutMe = `Mechatronics Engineering student at the University of Waterloo with experience in embedded systems, 
hardware design, and programming. Passionate about creating innovative solutions that combine 
mechanical, electrical, and software engineering principles.`;

export const workExperience: TimelineItem[] = [
  {
    id: "work-1",
    title: "Engineering Research Assistant",
    date: "Jan 2025 - Apr 2025",
    organization: "University of Waterloo School of Optometry & Vision Science/Waterloo Eye Institute",
    description: [
      "Designed and built a custom footstep-detecting sensor-based device, using an Arduino microprocessor, with a multiplexer to handle up to 48 analog signals, alongside a Raspberry Pi, a custom PCB, and pressure-sensitive sheets.",
      "Wrote C++ code to interface and collect data from custom pressure sensors, eliminating the long-term decay effects on sensors, and modified Raspberry Pi code to export CSV files, increasing the sampling frequency by 99%.",
      "Built a Python GUI program to plot the points of pressure change as positions on the equipment layout, producing results in a form accessible to researchers, and built an algorithm that groups position data to be visually understandable.",
      "Designed and fabricated mechanical enhancements to the research equipment using SolidWorks and FDM 3D printing, decreasing setup time for each trial by 80%.",
      "Created a detailed technical report and user guide to support experimental reproducibility and ongoing development for all equipment."
    ],
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
  },
  {
    id: "work-2",
    title: "Motion Capture Undergrad Research Assistant",
    date: "Sept 2024 - Dec 2024",
    organization: "University of Waterloo RoboHub",
    description: [
      "Calibrated and configured the Vicon camera array, then attached reflective markers to participants following the Plug-in Gait protocol for precise spatial tracking.",
      "Monitored live capture at 200 Hz, fine-tuning camera exposure and threshold settings to minimize occlusions and ambient noise.",
      "Processed recordings in Vicon Nexus: labeled marker trajectories, applied spline-based gap filling and low-pass filtering, and exported cleaned files ready for biomechanical analysis."
    ],
    image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg"
  },
  {
    id: "work-3",
    title: "CNC Programmer",
    date: "May 2024 - Aug 2024",
    organization: "State Windows Corporation",
    description: [
      "Designed complex sheet metal models using Autodesk Inventor and used its spreadsheet option to make hundreds of parts with different dimensions.",
      "Selected machining processes on the most suitable CNC machine, made the models into CAD drawings, and then generated G-code.",
      "Solely handled one of the main, high-priority job schedules of the company, with jobs requiring 700+ parts.",
      "Made multiple SOP (Standard Operating Procedure) handbooks to increase training quality and standardize basic processes.",
      "Trained new hires, ensuring their complete understanding of the process and ability to finish jobs independently."
    ],
    image: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg"
  }
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "EV3 Lego Kit Prosthetic Hand",
    date: "Oct - Dec 2023",
    description: "Designed and programmed a functional prosthetic hand using C, capable of controlled object handling to act as a replacement for a human hand.",
    skills: ["C", "Robotics", "Mechanical Design"]
  },
  {
    id: "project-2",
    title: "Quadcopter Prototype",
    date: "June - Aug 2020",
    description: "Built a ground up quadcopter prototype using closed-loop control algorithms programmed using C++ on Arduino, and prototype circuit boards to control propeller speed based on gyrometer sensor output.",
    skills: ["C++", "Arduino", "Control Systems", "PCB Design"]
  },
  {
    id: "project-3",
    title: "Hospital Database",
    date: "July 2022",
    description: "Built a test database using SQL formatted for a hospital to store and link all the sufficient information together. Ran tests using fictional, well-structured data, ensuring full functionality of the system.",
    skills: ["SQL", "Database Design", "System Testing"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "skills-programming",
    title: "Software/Programming",
    skills: [
      { id: "skill-1", name: "C++/C", level: 90 },
      { id: "skill-2", name: "Java", level: 85 },
      { id: "skill-3", name: "SQL", level: 80 },
      { id: "skill-4", name: "GitLab", level: 85 },
      { id: "skill-5", name: "Python (GUI)", level: 75 },
      { id: "skill-6", name: "MATLAB", level: 70 },
      { id: "skill-7", name: "VHDL (FPGA)", level: 65 },
      { id: "skill-8", name: "RobotC", level: 80 }
    ]
  },
  {
    id: "skills-electronics",
    title: "Electronics & Embedded Systems",
    skills: [
      { id: "skill-9", name: "Arduino", level: 95 },
      { id: "skill-10", name: "Raspberry Pi", level: 90 },
      { id: "skill-11", name: "PLC programming", level: 75 },
      { id: "skill-12", name: "FPGA development", level: 70 },
      { id: "skill-13", name: "STM32", level: 80 },
      { id: "skill-14", name: "PCB/circuit design", level: 85 },
      { id: "skill-15", name: "MUX programming", level: 75 },
      { id: "skill-16", name: "Micro soldering", level: 80 },
      { id: "skill-17", name: "Vicon motion capture", level: 85 },
      { id: "skill-18", name: "Sensors & signals", level: 90 }
    ]
  },
  {
    id: "skills-cad",
    title: "CAD & Prototyping",
    skills: [
      { id: "skill-19", name: "AutoCAD", level: 85 },
      { id: "skill-20", name: "SolidWorks", level: 90 },
      { id: "skill-21", name: "Inventor", level: 85 },
      { id: "skill-22", name: "GD&T", level: 75 },
      { id: "skill-23", name: "Freehand sketching", level: 70 },
      { id: "skill-24", name: "FDM 3D printing", level: 85 },
      { id: "skill-25", name: "Tool usage", level: 80 },
      { id: "skill-26", name: "Hardware building", level: 85 },
      { id: "skill-27", name: "Machine shop tools", level: 75 }
    ]
  },
  {
    id: "skills-comm",
    title: "Communication",
    skills: [
      { id: "skill-28", name: "Technical writing", level: 90 },
      { id: "skill-29", name: "English & Arabic", level: 95 }
    ]
  }
];

export const education: Education = {
  institution: "University of Waterloo",
  degree: "BASc. Mechatronics Engineering",
  date: "2023 - Exp. 2028",
  details: "Relevant coursework: Microprocessors and Digital Logic, Digital Computation/Algorithms and Data Structures (C++/RobotC/Pointers/trees/AVL), Circuits, Material engineering / Mechanics of deformable solids, Physics: (Statics & Dynamics), Statistical Analysis, Sensors and instrumentation, computer structure & real-time systems, MATLAB",
  gpa: "91.4% Dean's Honour List"
};

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    name: "CCNAv7: Introduction to Networks",
    date: "2022"
  },
  {
    id: "cert-2",
    name: "WHMIS 2015 (SO2017)",
    date: "2023"
  }
];