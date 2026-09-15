export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  engineeringDecisions: string[];
  whatILearned: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  demoType: 'dsa' | 'crypto' | 'weather' | 'satellite';
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-100 proficiency
    experience: string; // e.g. "Core Stack", "Active Practice", "Advanced Usage"
    iconName: string;
  }[];
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
}

export interface DifferenceCard {
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
}
