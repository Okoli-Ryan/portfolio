import { mailto, profile, resumeUrl } from '@/content/profile';

const facts = [
  { label: 'Experience', value: '5 years' },
  { label: 'Front end', value: 'React and Next.js' },
  { label: 'Back end', value: 'Node.js and ASP.NET' },
  { label: 'Based in', value: profile.location },
] as const;

export function Hero() {
  return (
    <section className="hero hero--statement" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text hero__in">
          <div data-moment="liquid-type">
            <a className="pill" href="#projects">
              <span>{profile.name}</span>
            </a>
            <h1 id="hero-h" className="mo-lt__type">Projects in React, TypeScript and Node</h1>
            <p className="hero__lead">
              Browser extensions, bank statement tools, restaurant ordering and AI products, built by a software engineer with five years of practice.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={mailto}>{profile.mainAction}</a>
              {resumeUrl ? (
                <a className="btn btn--secondary" href={resumeUrl} rel="noopener noreferrer" target="_blank">Get resume</a>
              ) : (
                <a className="btn btn--secondary" href="#projects">See the projects</a>
              )}
            </div>
          </div>
          <dl className="hero__facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
