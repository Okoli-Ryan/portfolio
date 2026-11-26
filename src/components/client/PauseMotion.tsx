'use client';

import { useState } from 'react';

/** Stops the marquee and the illustrations (anything that moves on its own for over 5 s needs this). */
export function PauseMotion() {
  const [paused, setPaused] = useState(false);

  return (
    <button
      type="button"
      className="btn btn--secondary pause-motion"
      aria-pressed={paused}
      onClick={() => {
        document.documentElement.toggleAttribute('data-paused', !paused);
        setPaused(!paused);
      }}
    >
      {paused ? 'Play animations' : 'Pause animations'}
    </button>
  );
}
