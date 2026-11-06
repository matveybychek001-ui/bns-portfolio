import SiteHeader, { type SectionId } from '@/components/SiteHeader';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import { profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

const sections: { id: SectionId; View: () => JSX.Element }[] = [
  { id: 'about', View: AboutSection },
  { id: 'services', View: ServicesSection },
  { id: 'projects', View: ProjectsSection },
];

const sectionIds = sections.map((section) => section.id);

function App() {
  const { active, select } = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader active={active} onSelect={select} />
      <main>
        {sections.map(({ id, View }) => (
          <div key={id} id={id} className="section-anchor border-t border-white/10 first:border-t-0">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
              <View />
            </div>
          </div>
        ))}
      </main>
      <footer className="border-t border-white/10 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-white/40 sm:px-6 md:flex-row md:items-center md:justify-between">
          <span>
            {profile.name}
            <span className="text-white/25"> · </span>
            {profile.founder}
          </span>
          <span>© {new Date().getFullYear()} BNS Portfolio</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
