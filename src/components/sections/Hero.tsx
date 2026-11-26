import { mailto, profile, resumeUrl, yearsOfExperience } from '@/content/profile';

const facts = [
  { label: 'Experience', value: `${yearsOfExperience} years` },
  { label: 'Front end', value: 'React and Next.js' },
  { label: 'Back end', value: 'Node.js and ASP.NET' },
  { label: 'Degree', value: 'Computer Science and Engineering' },
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
            <h1 id="hero-h" className="mo-lt__type">Projects in React, Next, Node and ASP.NET</h1>
            <p className="hero__lead">
              Building diverse software products across e-commerce, AI and fintech, with over {yearsOfExperience} years of experience.
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
