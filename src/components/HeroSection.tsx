import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const yOffset = -50; // adjust this (px). Use your header height + a bit extra.
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
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
              texts={["Mechatronics Engineer", "Embedded Systems Developer", "Robotics Enthusiast", "Future Innovator", "Hands-On Engineer"]}
              speed={100}
              deleteSpeed={40}
              pauseTime={1500}
            />
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about building innovative solutions that bridge the gap between 
            hardware and software. I love creating robots, embedded systems, and 
            applications that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" onClick={() => scrollToSection("resume")}>
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")}>
              View My Projects
              <ArrowDown className="ml-2 h-4 w-4" />
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