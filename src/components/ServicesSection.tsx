import { services } from '@/data/portfolio';
import AnimatedText, { Reveal } from '@/components/AnimatedText';
import { ServiceScene } from '@/components/MotionScenes';

export default function ServicesSection() {
  return (
    <section className="space-y-8 sm:space-y-12">
      <div className="max-w-2xl space-y-4">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Чем занимаюсь</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="font-display text-[1.85rem] font-semibold leading-[1.08] tracking-tight text-white min-[380px]:text-4xl md:text-5xl">
            Сайты, интерфейсы и веб-приложения
          </h2>
        </Reveal>
        <AnimatedText
          text="Беру веб-разработку от структуры страницы до запуска: сайт должен быстро открываться, ясно читаться и спокойно жить на телефоне."
          className="text-[15px] leading-relaxed sm:text-base"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 80}>
            <article className="service-card group flex h-full flex-col p-4 sm:p-5">
              <ServiceScene visual={service.visual} />
              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {service.title}
                </h3>
                <span className="text-xs tabular-nums tracking-[0.18em] text-white/35">0{index + 1}</span>
              </div>
              <AnimatedText
                text={service.description}
                delay={120}
                className="mt-3 text-[15px] leading-relaxed"
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
