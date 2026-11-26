import type { NavLink } from './types';

export const profile = {
  name: 'Ugochukwu Okoli',
  site: 'https://ugo-okoli.vercel.app',
  email: 'okoliryan50@gmail.com',
  github: 'https://github.com/Okoli-Ryan',
  linkedin: 'https://www.linkedin.com/in/okoliugo',
  mainAction: 'Email Ugochukwu',
  title: 'Ugochukwu Okoli: software engineer building React and Node.js projects',
  description:
    'Projects by Ugochukwu Okoli: Figo AI Labs, MailPilot, WatchParty and more, built with TypeScript, React and Node.js.',
} as const;

/** Counted from the first role (March 2021). Worked out at build time, so it moves on with the next build. */
export const yearsOfExperience = new Date().getFullYear() - 2021;

export const mailto = `mailto:${profile.email}`;

/**
 * Set at build time (see .env.example). The resume button only appears when this has a value, except
 * under `npm run dev`, where it always shows (pointing nowhere until the variable is set).
 */
export const resumeUrl =
  process.env.NEXT_PUBLIC_RESUME_URL?.trim() || (process.env.NODE_ENV === 'development' ? '#' : undefined);

export const nav: readonly NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Work experience', href: '#work-experience' },
];
