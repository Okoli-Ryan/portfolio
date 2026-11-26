import { mailto, nav, profile, resumeUrl } from '@/content/profile';

export function SiteHeader() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <a className="nav__logo" href="#top">
          <span className="mark" data-mark="arc" aria-hidden="true" />
          {profile.name}
        </a>
        <nav className="nav__links" aria-label="Main">
          {nav.map((link) => (
            <div className="nav__item" key={link.href}>
              <a className="nav__link" href={link.href}>{link.label}</a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          {resumeUrl ? (
            <a className="btn btn--secondary" href={resumeUrl} rel="noopener noreferrer" target="_blank">Get resume</a>
          ) : null}
          <a className="btn btn--primary" href={mailto}>{profile.mainAction}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
