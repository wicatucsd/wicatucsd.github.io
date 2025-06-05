export type Member = {
  name: string;
  position: string;
  year: string;
  language: string;
  spot: string;
  wiclove: string;
  bio: string;
  email: string;
  linkedin: string;
  instagram: string;
  github: string;
  image: string;
};

export type PreviousMember = {
  name: string;
  position: string;
  year: string;
  image: string;
}

export type Project = {
  name: string; // Project title
  year: string; // Year or semester (e.g., "Fall 2025")
  team: string; // Team members (comma-separated)
  description?: string; // Project description
  link?: string; // Optional project link
  github?: string; // Optional GitHub link
  image?: string; // Optional image path
};

export type Sponsor = {
  name: string;
  image: string;
};