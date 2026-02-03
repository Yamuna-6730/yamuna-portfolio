export interface ResumeData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    photo: string;
    resumeUrl: string;
    bio: string;
    shortBio: string;
  };
  social: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
  skills: {
    programming: string[];
    machineLearning: string[];
    mlFrameworks: string[];
    dataVisualization: string[];
    webDevelopment: string[];
    cloudAndTools: string[];
  };
  experience: {
    role: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    highlights: string[];
  }[];
  education: {
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    cgpa: string;
    period: string;
    status: string;
  }[];
  projects: {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    highlights: string[];
    category: string;
    featured: boolean;
  }[];
  achievements: {
    title: string;
    year: string;
    description: string;
    type: string;
    icon: string;
  }[];
  strengths: string[];
}
