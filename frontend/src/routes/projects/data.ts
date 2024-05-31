import type { ProjectType, TeckType } from '$lib/types/api';

export const projects: ProjectType[] = [
  {
    id: 1,
    slug: 'plantaludum',
    name: 'Plantaludum',
    description: 'Un jeu pour apprendre et découvrir des plantes',
    large_description: '',
    year: 2024,
    main_image: '/images/projects/plantaludum/main.png',
    images: [
      // '/images/projects/plantaludum/1.png'
    ],
    github_link: 'https://github.com/Instelce/Plantaludum',
    live_link: 'https://plantaludum.org/',
    skills: [1, 2, 3, 4, 5],
    tecks: ['react', 'typescript', 'sass', 'vite', 'django', 'python', 'kubernetes', 'bash'],
    palette: ['#1F1F1F', '#1F1F1F', '#393939', '#393939', '#9DC16E']
  },
  {
    id: 4,
    slug: 'portfolio',
    name: 'Ce portfolio',
    description: 'Le portfolio sur lequel vous naviguez',
    large_description: '',
    year: 2024,
    main_image: '/images/projects/portfolio/main.png',
    github_link: 'https://github.com/Instelce/portfolio',
    skills: [1, 2, 3, 4],
    tecks: ['svelte', 'typescript', 'sass', 'vite', 'threejs'],
    palette: ['#0D0D0D', '#2A2A2A', '#1E1D46', '#1E1D46', '#5856D6']
  },
  {
    id: 2,
    slug: 'doc-barbu',
    name: 'doc-barbu',
    description: 'Un générateur de documentation',
    large_description: '',
    year: 2024,
    main_image: '/images/projects/doc-barbu/main.png',
    images: [
      '/images/projects/doc-barbu/1.png'
    ],
    github_link: 'https://github.com/Instelce/doc-barbu',
    skills: [1, 3, 5, 6],
    tecks: ['bash', 'docker', 'php'],
    palette: ['#3f3f46', '#3f3f46', '#3b82f6', '#3b82f6', '#18181b']
  },
  {
    id: 3,
    slug: 'tabas-kho',
    name: 'Tabas-KHO',
    description: 'Un site de streaming fictif',
    large_description: '',
    year: 2024,
    main_image: '/images/projects/tabas-kho/main.png',
    images: [],
    live_link: 'https://tabas-kho.vercel.app/',
    github_link: 'https://github.com/Instelce/tabas-kho',
    skills: [1, 3, 4, 5, 6],
    tecks: ['html', 'sass', 'javascript', 'vite'],
    palette: ['#cd8ffa', '#0f0f0f', '#43403d', '#f67960', '#0f0f0f']
  },
  // {
  //   id: 5,
  //   slug: 'ollama-chat',
  //   name: 'Small ollama chat',
  //   description: 'Un site pour interragir avec des LLM locals',
  //   large_description: '',
  //   year: 2024,
  //   image: '/images/projects/ollama-chat/main.png',
  //   live_link: 'https://ollama-chat.vercel.app/',
  //   github_link: 'https://github.com/Instelce/ollama-chat',
  //   tecks: ['svelte', 'typescript', 'sass', 'vite'],
  //   palette: ['#0D0D0D', '#2A2A2A', '#1E1D46', '#1E1D46', '#5856D6']
  // },
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


export const skills: string[] = [
  "Réaliser",
  "Optimiser",
  "Administrer",
  "Gérer",
  "Conduire",
  "Collaborer"
]
