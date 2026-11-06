import { useEffect, useRef } from 'react';
import { profile } from '@/data/portfolio';

export type SectionId = 'about' | 'services' | 'projects';

const navItems: { id: SectionId; label: string; index: string }[] = [
  { id: 'about', label: 'Кто я', index: '01' },
  { id: 'services', label: 'Чем занимаюсь', index: '02' },
  { id: 'projects', label: 'Мои проекты', index: '03' },
];

interface SiteHeaderProps {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

export default function SiteHeader({ active, onSelect }: SiteHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const apply = () => {
      document.documentElement.style.setProperty('--header-offset', `${node.offsetHeight}px`);
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    window.addEventListener('resize', apply);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', apply);
    };
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <a className="skip-link" href="#about">
        К содержанию
      </a>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-4">
        <button
          type="button"
          onClick={() => onSelect('about')}
          className="flex shrink-0 items-center gap-3 rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[11px] font-bold tracking-[0.08em] text-black">
            BSN
          </span>
          <span>
            <span className="block whitespace-nowrap font-display text-[15px] font-semibold leading-none tracking-tight text-white sm:text-lg">
              {profile.name}
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 sm:text-[11px] sm:tracking-[0.22em]">
              {profile.founder}
            </span>
          </span>
        </button>

        <nav className="grid grid-cols-3 gap-2 sm:gap-3 md:w-auto" aria-label="Разделы сайта">
          {navItems.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                aria-current={isActive ? 'location' : undefined}
                className={`btn-3d ${isActive ? 'btn-3d--active' : ''}`}
              >
                <span className="btn-3d__index hidden sm:flex">{item.index}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
