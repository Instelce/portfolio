import type { ProjectType, TeckType } from '$lib/types/api';

export const projects: ProjectType[] = [
  {
    id: 1,
    slug: 'plantaludum',
    name: 'Plantaludum',
    description: 'Un jeu pour apprendre et découvrir des plantes',
    year: 2024,
    image: '/images/projects/plantaludum/main.png',
    github_link: 'https://github.com/Instelce/Plantaludum',
    live_link: 'https://plantaludum.org/',
    tecks: ['react', 'typescript', 'sass', 'django', 'python']
  }
];

export const tecks: TeckType[] = [
  {
    name: 'react',
    image: '/images/tecks/react.svg'
  },
  {
    name: 'typescript',
    image: '/images/tecks/typescript.svg'
  },
  {
    name: 'svelte',
    image: '/images/tecks/svelte.svg'
  },
  {
    name: 'sass',
    image: '/images/tecks/sass.svg'
  },
  {
    name: 'django',
    image: '/images/tecks/django.svg'
  },
  {
    name: 'python',
    image: '/images/tecks/python.svg'
  }
];
