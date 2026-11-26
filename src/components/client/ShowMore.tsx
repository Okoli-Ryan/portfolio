'use client';

import { useState } from 'react';

interface ShowMoreProps {
  /** Section id of the first project that gets revealed. */
  readonly firstId: string;
  readonly count: number;
}

/**
 * Reveals the extra projects. They are already in the page and hidden by CSS, so this only flips an
 * attribute on <html> and never re-renders markup the design kit's scripts have changed.
 */
export function ShowMore({ firstId, count }: ShowMoreProps) {
  const [shown, setShown] = useState(false);

  if (shown) return null;

  return (
    <button
      type="button"
      className="btn btn--secondary show-more"
      onClick={() => {
        document.documentElement.dataset.projects = 'all';
        setShown(true);
        requestAnimationFrame(() => {
          const section = document.getElementById(firstId);
          const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            section?.scrollIntoView({ behavior: still ? 'auto' : 'smooth' });
          section?.querySelector('h2')?.focus({ preventScroll: true });
        });
      }}
    >
      See {count} more projects
    </button>
  );
}
