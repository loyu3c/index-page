
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  CYBER = 'cyber',
  EMERALD = 'emerald',
  RETRO = 'retro'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  tags: string[];
  category: 'App' | 'Website' | 'System';
  featured?: boolean;
}

export interface AppConfig {
  theme: Theme;
  projects: Project[];
}
