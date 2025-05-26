export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  organization: string;
  description: string[];
  image?: string; // Added for profile pictures
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  level?: number; // 0-100
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  details: string;
  gpa?: string;
}

export interface Certificate {
  id: string;
  name: string;
  date: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
}

export interface ResumeInfo {
  pdfUrl: string;
  imageUrl: string;
}