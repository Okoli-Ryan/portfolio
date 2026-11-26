import { ShowMore } from '@/components/client/ShowMore';
import { Hero } from '@/components/sections/Hero';
import { ProjectSection } from '@/components/sections/ProjectSection';
import { WatchParty } from '@/components/sections/WatchParty';
import { WorkExperience } from '@/components/sections/WorkExperience';
import { lead, more } from '@/content/projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      {lead.map((project, i) => (
        // the first project is where the "Projects" links land
        <ProjectSection key={project.id} project={project} anchor={i === 0 ? 'projects' : undefined} inverse={i % 2 === 0} />
      ))}
      <WatchParty>
        {more[0] ? <ShowMore firstId={more[0].id} count={more.length} /> : null}
      </WatchParty>
      {more.map((project, i) => (
        <ProjectSection key={project.id} project={project} inverse={i % 2 === 1} extra />
      ))}
      <WorkExperience />
    </>
  );
}
