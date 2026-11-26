import type { Tool } from './types';

export const tools: readonly Tool[] = [
  { id: 'react', name: 'React', width: 40, height: 36 },
  { id: 'nextjs', name: 'Next.js', width: 40, height: 40 },
  { id: 'typescript', name: 'TypeScript', width: 40, height: 40 },
  { id: 'angular', name: 'Angular', width: 38, height: 40 },
  { id: 'nodejs', name: 'Node.js', width: 35, height: 40 },
  { id: 'dotnet', name: '.NET', width: 40, height: 40 },
  { id: 'postgres', name: 'PostgreSQL', width: 39, height: 40 },
  { id: 'mongodb', name: 'MongoDB', width: 19, height: 40 },
  { id: 'redis', name: 'Redis', width: 40, height: 34 },
  { id: 'docker', name: 'Docker', width: 40, height: 29 },
  { id: 'jest', name: 'Jest', width: 36, height: 40 },
  { id: 'figma', name: 'Figma', width: 27, height: 40 },
];

export const openProjects = [
  { name: 'React-Native-Ivorypay', detail: 'npm package for crypto payments in React Native, with docs and test scenarios', stack: 'TypeScript' },
  { name: 'Dinnin', detail: 'Restaurant system with QR table ordering, live order tracking and revenue analytics', stack: 'React, ASP.NET, Docker' },
] as const;
