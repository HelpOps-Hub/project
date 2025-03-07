export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  discord?: string;
  gmail?: string;
}

export interface Repository {
  id: string;
  name: string;
  techStack: string[];
  url: string;
}

export interface Mentor {
  id: string;
  name: string;
  image: string;
  socialLinks: SocialLinks;
}

export interface Organization {
  id: string;
  name: string;
  founder: string;
  description: string;
  shortDescription: string;
  logo: string;
  githubUrl?: string;
  docsUrl?: string;
  websiteUrl?: string;
  socialLinks: SocialLinks;
  repositories: Repository[];
  mentors: Mentor[];
}