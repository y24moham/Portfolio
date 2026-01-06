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
    {
      name: "Arduino",
      category: "Hardware",
      learnedAt: "University coursework and personal projects",
      appliedAt: "Research projects and prototyping",
      examples: ["Quadcopter flight controller", "IoT sensor networks", "Automated systems"]
    },
    {
      name: "Python",
      category: "Programming",
      learnedAt: "Self-taught and university courses",
      appliedAt: "Data analysis and automation scripts",
      examples: ["Machine learning models", "Data visualization", "Process automation"]
    },
    {
      name: "SolidWorks",
      category: "Design",
      learnedAt: "Engineering design courses",
      appliedAt: "Mechanical design and prototyping",
      examples: ["3D printed components", "Assembly design", "Technical drawings"]
    },
    {
      name: "React",
      category: "Web Development",
      learnedAt: "Self-taught through online resources",
      appliedAt: "Frontend development projects",
      examples: ["Portfolio websites", "Interactive dashboards", "Component libraries"]
    },
    {
      name: "CAD Design",
      category: "Design",
      learnedAt: "Engineering curriculum",
      appliedAt: "Product development and prototyping",
      examples: ["Mechanical assemblies", "3D modeling", "Design optimization"]
    },
    {
      name: "Problem Solving",
      category: "Soft Skills",
      learnedAt: "Engineering projects and challenges",
      appliedAt: "Complex system debugging and optimization",
      examples: ["System troubleshooting", "Design constraints", "Performance optimization"]
    }
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Skills</h2>
        <div className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category}</h3>
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
                                <li key={index} className="flex items-center">
                                  <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                                  {example}
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