export type ProjectType = {
  id: number;
  slug: string;
  name: string;
  description: string;
  large_description: string;
  year: number;
  main_image: string;
  images: string[],
  live_link?: string;
  github_link?: string;
  skills: number[];
  tecks: string[];
  palette: string[];
};

export type TeckType = {
  name: string;
  image: string;
};

export type ProjectTeckType = {
  project: number;
  teck: number;
};

export type ProjectImage = {
  project: number;
  image: string;
};
