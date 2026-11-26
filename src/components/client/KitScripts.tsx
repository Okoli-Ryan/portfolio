'use client';

import { useEffect } from 'react';

const SCRIPTS = [
  '/assets/system.js',
  '/assets/motion/motion.js',
  '/assets/layout/layout.js',
] as const;

/**
 * The design kit's scripts rewrite the server-rendered DOM (moments, nav state, loops). They must
 * run only after React has hydrated, or hydration fails and wipes their changes. An effect runs
 * after hydration, so the scripts are added there, once.
 */
export function KitScripts() {
  useEffect(() => {
    for (const src of SCRIPTS) {
      if (document.querySelector(`script[data-kit="${src}"]`)) continue;
      const el = document.createElement('script');
      el.type = 'module';
      el.src = src;
      el.dataset.kit = src;
      document.body.append(el);
    }
  }, []);

  return null;
}
