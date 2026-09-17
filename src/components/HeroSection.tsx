import { ArrowDown, FileText, Mail, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/components/scrollToId";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    scrollToId(sectionId, 50);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            <span className="text-primary">Yaseen Mohamed</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            <TypingEffect
              texts={[
                "Embedded Firmware Developer",
                "Systems Integration Engineer",
                "Robotics & Controls Builder",
                "Hardware-Software Integrator",
                "Test Automation Developer",
                "Mechatronics Engineering Student",
              ]}
              speed={100}
              deleteSpeed={40}
              pauseTime={1500}
            />
          </p>

          <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
            Mechatronics Engineering student at the University of Waterloo
            focused on embedded firmware, robotics, controls, and
            hardware-software integration, with experience at Ford Motor
            Company and Aversan.
          </p>

          <p className="text-sm font-medium text-foreground/80 mb-10">
            Seeking 4 or 8 month internships • Available Jan-Aug 2027
          </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection("resume")}>
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("projects")}
          >
            <ArrowDown className="mr-2 h-4 w-4" />
            View Projects
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("skills")}
          >
            <Wrench className="mr-2 h-4 w-4" />
            Explore Skills
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;