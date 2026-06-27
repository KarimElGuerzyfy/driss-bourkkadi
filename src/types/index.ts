export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  description1: string;
  description2: string;
  tags: string[];
  client?: string;
  role?: string;
  liveUrl?: string;
  content?: string;
  images?: string[];
}