import type { CSSProperties, ReactNode } from 'react';
import { Illustration } from '@/components/ui/Illustration';
import { watchparty } from '@/content/projects';

/** `children` closes the text column, such as the "See more" button. */
export function WatchParty({ children }: { readonly children?: ReactNode }) {
  return (
    <section
      className="section ground-inverse"
      id="watchparty"
      style={{ '--h': 2 } as CSSProperties}
      data-moment="pinned-chapters"
      aria-labelledby="watchparty-h"
    >
      <div className="wrap mo-pc__grid">
        <div className="mo-pc__text">
          <h2 id="watchparty-h">WatchParty, video in sync.</h2>
          <ol className="mo-pc__steps">
            {watchparty.steps.map((step) => (
              <li className="mo-pc__step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <figure className="mo-pc__visual">
                  <Illustration art={step.art} label={step.alt} />
                </figure>
              </li>
            ))}
          </ol>
          <a className="link" href={watchparty.href} rel="noopener noreferrer" target="_blank">
            Open WatchParty
          </a>
          {children}
        </div>
        <div className="mo-pc__visuals frame" />
      </div>
    </section>
  );
}
