import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const coursework = [
    "Embedded Systems / Microprocessors",
    "OS & RTOS",
    "Data Structures & Algorithms (C/C++)",
    "Digital Logic (FSMs) + FPGA (VHDL)",
    "Signals & Systems",
    "Circuits + Analog Filtering (Op-Amps, Twin-T)",
    "Sensors & Instrumentation",
    "Actuators & Power Electronics",
    "Robotics (projects-based)",
    "Probability & Statistics",
    "MATLAB",
    "System Modeling & Simulation (SimulationX)"
  ];


  return (
    <section id="education" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Education</h2>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>

                <div>
                  <CardTitle className="text-xl">University of Waterloo</CardTitle>
                  <CardDescription className="text-lg">
                    Bachelor of Mechatronics Engineering
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* Graduation + GPA row */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-muted-foreground">Graduation: <span className="text-foreground font-medium">2028</span></p>
                <p className="text-muted-foreground">
                  GPA: <span className="text-foreground font-medium">3.9/4.0 (89.77%)</span>
                </p>
              </div>

              {/* Coursework block */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((c) => (
                    <Badge
                      key={c}
                      variant="secondary"
                      className="px-3 py-1 text-sm cursor-text select-text"
                    >
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
