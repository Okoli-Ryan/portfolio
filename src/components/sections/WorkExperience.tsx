import { PauseMotion } from '@/components/client/PauseMotion';
import { companies } from '@/content/companies';
import { tools } from '@/content/stack';

function CompanyList({ copy = false }: { readonly copy?: boolean }) {
  return (
    <ul className="marquee__list" aria-hidden={copy || undefined}>
      {companies.map((company) => (
        <li key={company}>{company}</li>
      ))}
    </ul>
  );
}

export function WorkExperience() {
  return (
    <section className="section" id="work-experience" aria-labelledby="work-experience-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="work-experience-h">Work experience.</h2>
        </div>
        {/* two identical lists: the track slides by exactly one of them, so the loop has no seam */}
        <div className="marquee">
          <div className="marquee__track">
            <CompanyList />
            <CompanyList copy />
          </div>
        </div>
        <div className="work__tools">
          <h3>Tools I use at work</h3>
          <PauseMotion />
        </div>
        <ul className="ic-grid ic-grid--mosaic stack-grid">
          {tools.map((tool, i) => (
            <li className="ic-cell stack-cell" key={tool.id}>
              <span className="ic-tile" style={{ animationDelay: `${(i * 0.22).toFixed(2)}s` }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, kit SVG icons */}
                <img className="ic" src={`/assets/icons/${tool.id}.svg`} alt={`${tool.name} logo`} width={tool.width} height={tool.height} />
              </span>
              <span className="ic-cell__name">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
