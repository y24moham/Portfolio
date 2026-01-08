import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/components/scrollToId";
import TypingEffect from "./TypingEffect";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSectionHome = (sectionId: string) => {
    scrollToId(sectionId, 0);
  };
  
  const scrollToSection = (sectionId: string) => {
    scrollToId(sectionId, 50);
  };


  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 w-16 object-contain rounded-md"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Yaseen Mohamed</h1>
              <p className="text-sm text-muted-foreground">
                <TypingEffect 
                  texts={["Mechatronics Engineer", "Embedded Systems Developer", "Robotics Enthusiast", "Future Innovator", "Hands-On Engineer"]}
                  speed={100}
                  deleteSpeed={40}
                  pauseTime={1500}
                />
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => scrollToSectionHome("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("experience")}>
              Experience
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("skills")}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("education")}>
              Education
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("resume")}>
              Resume
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" onClick={() => scrollToSectionHome("home")} className="justify-start">
                Home
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("projects")} className="justify-start">
                Projects
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("experience")} className="justify-start">
                Experience
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("skills")} className="justify-start">
                Skills
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("education")} className="justify-start">
                Education
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("resume")} className="justify-start">
                Resume
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("contact")} className="justify-start">
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;