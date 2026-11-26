import { Arrow } from '@/components/ui/Arrow';
import { mailto, nav, profile } from '@/content/profile';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Open to senior software roles</h2>
            <p>React, TypeScript and Node.js.</p>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href={mailto}>
            {profile.mainAction}
            <Arrow />
          </a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo" href="#top">
                <span className="mark" data-mark="arc" aria-hidden="true" />
                {profile.name}
              </a>
              <p className="footer__lede">Software engineer for web, mobile and AI products.</p>
            </div>
            <div className="span-3 start-7 footer__col footer__pages">
              <h3>Pages</h3>
              <ul>
                {nav.map((link) => (
                  <li key={link.href}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h3>Elsewhere</h3>
              <ul>
                <li><a href={profile.github} rel="noopener noreferrer" target="_blank">GitHub</a></li>
                <li><a href={profile.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {year} {profile.name}</span>
            <span className="muted">Product names and logos are trademarks of their owners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
