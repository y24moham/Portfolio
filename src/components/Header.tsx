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

  const go = (id: string, extra = 0) => {
    setIsMenuOpen(false);

    // Wait for layout to update after mobile menu closes
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToId(id, extra));
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Branding */}
          <button
            type="button"
            onClick={() => scrollToSectionHome("home")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home section"
          >
            <img
              src="/logo.png"
              alt="Yaseen Mohamed logo"
              className="h-12 w-12 object-contain rounded-md"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                Yaseen Mohamed
              </h1>

              <p className="text-xs sm:text-sm text-muted-foreground min-h-[1.25rem]">
                <TypingEffect
                  texts={[
                    "Embedded Firmware Developer",
                    "Systems Integration Engineer",
                    "Robotics & Controls Builder",
                    "Hardware-Software Integrator",
                    "Test Automation Developer",
                  ]}
                  speed={90}
                  deleteSpeed={35}
                  pauseTime={1800}
                />
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSectionHome("home")}
            >
              Home
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("education")}
            >
              Education
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("resume")}
            >
              Resume
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-border pt-3">
            <div className="flex flex-col space-y-1">

              <Button
                variant="ghost"
                onClick={() => go("home", 0)}
                className="justify-start"
              >
                Home
              </Button>

              <Button
                variant="ghost"
                onClick={() => go("experience", 50)}
                className="justify-start"
              >
                Experience
              </Button>

              <Button
                variant="ghost"
                onClick={() => go("projects", 50)}
                className="justify-start"
              >
                Projects
              </Button>

              <Button
                variant="ghost"
                onClick={() => go("skills", 50)}
                className="justify-start"
              >
                Skills
              </Button>

              <Button
                variant="ghost"
                onClick={() => go("education", 50)}
                className="justify-start"
              >
                Education
              </Button>

              <Button
                variant="ghost"
                onClick={() => go("resume", 50)}
                className="justify-start"
              >
                Resume
              </Button>

              <Button
                variant="ghost"
                onClick={() => go("contact", 50)}
                className="justify-start"
              >
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