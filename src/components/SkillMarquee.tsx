import { Code2, Database, Globe, Layers, Monitor, Palette, Smartphone, Zap, type LucideIcon } from 'lucide-react';

const items: { icon: LucideIcon; label: string }[] = [
  { icon: Monitor, label: 'Компьютеры' },
  { icon: Globe, label: 'Сайты' },
  { icon: Code2, label: 'Код' },
  { icon: Smartphone, label: 'Мобильные версии' },
  { icon: Palette, label: 'Дизайн' },
  { icon: Database, label: 'Базы данных' },
  { icon: Zap, label: 'Скорость' },
  { icon: Layers, label: 'Интерфейсы' },
];

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-2 pr-2 sm:gap-3 sm:pr-3" aria-hidden={hidden}>
      {items.map(({ icon: Icon, label }) => (
        <div
          key={`${label}-${hidden ? 'b' : 'a'}`}
          className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/80 sm:gap-3 sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <Icon className="h-4 w-4 text-white/60" strokeWidth={1.75} />
          <span className="whitespace-nowrap">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function SkillMarquee() {
  return (
    <div
      className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
      role="region"
      aria-label="Чем я занимаюсь"
    >
      <div className="flex w-max motion-safe:animate-marquee group-hover:[animation-play-state:paused]">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
