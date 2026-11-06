import { useCallback, useEffect, useRef, useState } from 'react';
import type { SectionId } from '@/components/SiteHeader';

const SCROLL_SETTLE_MS = 120;

export function useActiveSection(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>(sectionIds[0]);
  const isProgrammaticScroll = useRef(false);
  const settleTimer = useRef<number>();

  const syncWithScroll = useCallback(() => {
    const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0;
    const line = headerBottom + 48;
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

    let current = sectionIds[0];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && element.getBoundingClientRect().top <= line) current = id;
    });
    if (atBottom) current = sectionIds[sectionIds.length - 1];

    setActive(current);
  }, [sectionIds]);

  useEffect(() => {
    const onScroll = () => {
      if (!isProgrammaticScroll.current) {
        syncWithScroll();
        return;
      }
      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => {
        isProgrammaticScroll.current = false;
        syncWithScroll();
      }, SCROLL_SETTLE_MS);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    syncWithScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(settleTimer.current);
    };
  }, [syncWithScroll]);

  const select = useCallback((id: SectionId) => {
    setActive(id);
    isProgrammaticScroll.current = true;
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, SCROLL_SETTLE_MS);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return { active, select };
}
