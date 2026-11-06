import { profile } from '@/data/portfolio';
import photo from '@/assets/Screenshot_20261106_150009.jpg';
import SkillMarquee from '@/components/SkillMarquee';
import AnimatedText, { Reveal } from '@/components/AnimatedText';

export default function AboutSection() {
  return (
    <section className="about-grid">
      <div className="about-title space-y-5 md:space-y-7">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Кто я</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-[2.15rem] font-semibold leading-[1.02] tracking-tight text-white min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-base text-white/70 sm:text-lg">{profile.role}</p>
        </Reveal>
      </div>

      <Reveal className="about-photo" delay={120}>
        <figure className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <img
            src={photo}
            alt={profile.name}
            className="aspect-square w-full object-cover object-[center_42%]"
          />
          <figcaption className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">
            <span className="font-display text-sm font-semibold text-white">{profile.name}</span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-white/55">{profile.founder}</span>
          </figcaption>
        </figure>
      </Reveal>

      <div className="about-copy space-y-6">
        <AnimatedText text={profile.intro} className="text-base leading-relaxed sm:text-lg" />
        <SkillMarquee />
        <dl className="grid grid-cols-3 gap-2 sm:gap-3">
          {profile.facts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 70}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-4 text-center">
                <dt className="text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">{fact.label}</dt>
                <dd className="mt-1 text-sm font-semibold leading-tight text-white sm:text-xl">{fact.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="about-story space-y-4 border-t border-white/10 pt-6">
        {profile.story.map((paragraph, index) => (
          <AnimatedText
            key={paragraph}
            text={paragraph}
            delay={index * 80}
            className="text-[15px] leading-relaxed text-white/75 sm:text-base"
          />
        ))}
      </div>
    </section>
  );
}
