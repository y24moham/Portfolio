import { Download, Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const handleDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Yaseen_Mohamed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Resume</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">My Resume</CardTitle>
              <CardDescription>
                Preview or download my resume to learn more about my experience and skills
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              {/* Resume Preview */}
              <div className="mb-6">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsPreviewOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setIsPreviewOpen(true);
                  }}
                  className="bg-background border-2 border-dashed border-border rounded-lg p-4 mx-auto max-w-3xl cursor-pointer transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Open resume preview"
                >
                  <div className="aspect-[8.5/11] overflow-hidden rounded shadow">
                    <img
                      src="/resume.jpg"
                      alt="Resume preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Alternative: Embedded PDF preview */}
              {/* 
              <div className="mb-6">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-96 border border-border rounded-lg"
                  title="Resume Preview"
                />
              </div>
              */}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <Eye className="h-5 w-5 mr-2" />
                      Preview Resume
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[80vh] pt-4">
                    <DialogHeader className="mb-2">
                      <DialogTitle className="text-lg">Resume Preview</DialogTitle>
                    </DialogHeader>
                    <div className="h-[70vh]">
                      <iframe
                        src="/resume.pdf"
                        className="w-full h-full rounded-lg border"
                        title="Resume Preview"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button onClick={handleDownload} size="lg" className="w-full sm:w-auto">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;