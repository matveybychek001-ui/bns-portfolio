import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import AnimatedText, { Reveal } from '@/components/AnimatedText';
import { ProjectScene } from '@/components/MotionScenes';

export default function ProjectsSection() {
  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Мои проекты</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="font-display text-[1.85rem] font-semibold leading-[1.08] tracking-tight text-white min-[380px]:text-4xl md:text-5xl">
              Сайты и сервисы
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <p className="max-w-xs text-sm leading-relaxed text-white/45">
            Подборка работ BSN: веб-разработка, адаптация под телефон и интерфейс.
          </p>
        </Reveal>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const card = (
            <>
              <ProjectScene id={project.id} />
              <div className="flex flex-1 flex-col gap-4 p-4 sm:gap-5 sm:p-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="flex items-start justify-between gap-3 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {project.title}
                    {project.href ? (
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/70" aria-hidden="true" />
                    ) : null}
                  </h3>
                  <AnimatedText text={project.description} className="text-[15px] leading-relaxed" />
                </div>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          );

          return (
            <Reveal key={project.id} delay={index * 70}>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card project-card--link h-full"
                >
                  {card}
                </a>
              ) : (
                <article className="project-card h-full">{card}</article>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
