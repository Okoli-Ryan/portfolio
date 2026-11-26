'use client';

import { useEffect } from 'react';

/**
 * Plays each illustration once when it comes on screen, and again after it has left and returned.
 * It only toggles a class, so without script the finished pictures simply stand still.
 */
export function PlayOnView() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting, intersectionRatio } of entries) {
          if (!isIntersecting) target.classList.remove('is-playing');
          else if (intersectionRatio >= 0.35) target.classList.add('is-playing');
        }
      },
      { threshold: [0, 0.35] },
    );
    document.querySelectorAll('svg.il').forEach((picture) => observer.observe(picture));
    return () => observer.disconnect();
  }, []);

  return null;
}
