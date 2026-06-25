export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  client?: string;
  role?: string;
  liveUrl?: string;
  content?: string;
  images?: string[];
}