import { ArrowDown, FileText, Mail, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/components/scrollToId";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {

  const scrollToSection = (sectionId: string) => {
    scrollToId(sectionId, 50);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {/* Hello, I'm */}<span className="text-primary">Yaseen Mohamed</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            <TypingEffect 
              texts={[
                  "Mechatronics Engineering Student",
                  "Robotics Systems Builder",
                  "Embedded Firmware Developer",
                  "Hardware-Software Integrator",
                  "Real-Time Controls Builder",
                  "System Bring-Up & Debugger",
                  "Sensor Integration Builder",
                  "Hands-On Prototyper",
                  "Mechanical CAD Builder",
                  "Automation & Test Developer",
              ]}
              speed={100}
              deleteSpeed={40}
              pauseTime={1500}
            />
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            University of Waterloo | 3A Mechatronics Engineering • Interested in embedded firmware, robotics, controls, and real-time systems • Prev @ Aversan
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-6">
            <Button size="lg" onClick={() => scrollToSection("resume")}>
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>

            <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")}>
              <ArrowDown className="ml-2 h-4 w-4" />
              View My Projects
            </Button>

            <Button variant="outline" size="lg" onClick={() => scrollToSection("skills")}>
              <Wrench className="mr-2 h-4 w-4" />
              Explore Skills
            </Button>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;