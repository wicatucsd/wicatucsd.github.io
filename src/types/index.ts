export type Member = {
  type: string;
  name: string;
  position: string;
  year: number; // TODO: Change to string
  language: string;
  spot: string;
  wiclove: string;
  bio: string;
  email: string;
  linkedin: string;
  instagram: string;
  github: string;
  website: string;
  image: string;
};

export type Project = {
  name: string; // Project title
  year: string; // Year or semester (e.g., "Fall 2025")
  team: string; // Team members (comma-separated)
  mentors?: string; // Mentors (comma-separated)
  description?: string; // Project description
  link?: string; // Optional project link
  github?: string; // Optional GitHub link
  image?: string; // Optional image path
};