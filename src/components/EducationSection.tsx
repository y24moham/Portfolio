import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const coursework = [
    "Automatic Control Systems",
    "Microprocessor Systems & Interfacing",
    "Real-Time Systems",
    "Algorithms & Data Structures",
    "Digital Logic",
    "Linear Systems & Signals",
    "Sensors & Instrumentation",
    "Actuators & Power Electronics",
    "Systems Modeling",
    "Design & Dynamics of Machines",
    "Electromechanical Machine Design",
    "Mechatronics Engineering Design"
  ];

  return (
    <section id="education" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>

                <div>
                  <CardTitle className="text-xl">
                    University of Waterloo
                  </CardTitle>

                  <CardDescription className="text-lg">
                    BASc, Mechatronics Engineering · Honours, Co-op · Artificial Intelligence Option · 3B
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* Graduation + average row */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-muted-foreground">
                  Expected Graduation:{" "}
                  <span className="text-foreground font-medium">2028</span>
                </p>

                <p className="text-muted-foreground">
                  Cumulative Average:{" "}
                  <span className="text-foreground font-medium">88.63%</span>
                </p>
              </div>

              {/* Coursework block */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Relevant Coursework
                </p>

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