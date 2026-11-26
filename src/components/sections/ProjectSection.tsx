import { Illustration } from '@/components/ui/Illustration';
import type { Project } from '@/content/types';

interface ProjectSectionProps {
  readonly project: Project;
  readonly inverse?: boolean;
  /** Hidden until "See more projects" is pressed. */
  readonly extra?: boolean;
  /** Section id, when a link needs a different one from the project's own. */
  readonly anchor?: string | undefined;
}

export function ProjectSection({ project, inverse = false, extra = false, anchor }: ProjectSectionProps) {
  const { id, heading, text, facts, href, linkLabel, art, alt, layout } = project;
  const headingId = `${id}-h`;
  const className = ['section', inverse ? 'ground-inverse' : '', extra ? 'project--more' : ''].filter(Boolean).join(' ');

  const title = <h2 id={headingId} tabIndex={-1}>{heading}</h2>;
  const link = (
    <a className="link" href={href} rel="noopener noreferrer" target="_blank">{linkLabel}</a>
  );
  const factList = facts.length > 0 ? (
    <ul className="rows">
      {facts.map((fact) => (
        <li key={fact.label}>
          <span className="rows__name">{fact.label}</span>
          <span className="rows__value">{fact.value}</span>
        </li>
      ))}
    </ul>
  ) : null;
  const picture = (variant: 'tall' | 'wide') => (
    <a
      className={variant === 'tall' ? 'shot shot--tall span-6 start-7' : 'shot shot--wide'}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Illustration art={art} label={`${alt}. Opens ${linkLabel.toLowerCase()}`} />
    </a>
  );

  return (
    <section className={className} id={anchor ?? id} aria-labelledby={headingId}>
      <div className="wrap">
        {layout === 'split' ? (
          <div className="grid grid--top">
            <div className="span-6 stack-5">
              {title}
              <p>{text}</p>
              {factList}
              {link}
            </div>
            {picture('tall')}
          </div>
        ) : (
          <>
            <div className="grid grid--top">
              <div className="span-6">{title}</div>
              <div className="span-6 start-7 stack-4">
                <p>{text}</p>
                {link}
              </div>
            </div>
            {picture('wide')}
          </>
        )}
      </div>
    </section>
  );
}
