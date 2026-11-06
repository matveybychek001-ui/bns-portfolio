import type { ServiceVisual } from '@/data/portfolio';

export function ServiceScene({ visual }: { visual: ServiceVisual }) {
  if (visual === 'sites') {
    return (
      <div className="scene" aria-hidden="true">
        <div className="scene-page scene-page--back motion-safe:animate-page">
          <i />
          <i />
          <i />
        </div>
        <div className="scene-page scene-page--front motion-safe:animate-page-late">
          <i />
          <i />
          <b />
        </div>
        <span className="scene-scan" />
      </div>
    );
  }

  if (visual === 'apps') {
    return (
      <div className="scene" aria-hidden="true">
        <div className="scene-bars">
          <span style={{ animationDelay: '0ms' }} />
          <span style={{ animationDelay: '140ms' }} />
          <span style={{ animationDelay: '280ms' }} />
          <span style={{ animationDelay: '80ms' }} />
          <span style={{ animationDelay: '220ms' }} />
        </div>
        <div className="scene-rows">
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  if (visual === 'design') {
    return (
      <div className="scene" aria-hidden="true">
        <span className="scene-block scene-block--a" />
        <span className="scene-block scene-block--b" />
        <span className="scene-block scene-block--c" />
        <span className="scene-cursor" />
      </div>
    );
  }

  return (
    <div className="scene" aria-hidden="true">
      <span className="scene-pulse" />
      <span className="scene-orbit" />
      <span className="scene-core" />
    </div>
  );
}

export function ProjectScene({ id }: { id: string }) {
  if (id === 'atlas') {
    return (
      <div className="stage" aria-hidden="true">
        <div className="stage-bars">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
    );
  }

  if (id === 'noir') {
    return (
      <div className="stage stage-camera" aria-hidden="true">
        <svg viewBox="0 0 168 112" className="stage-camera-svg" focusable="false">
          <rect x="16" y="34" width="136" height="64" rx="14" />
          <path d="M58 34l12-14h32l12 14" />
          <circle cx="84" cy="66" r="20" />
          <circle className="stage-camera-lens" cx="84" cy="66" r="8" />
          <circle cx="132" cy="48" r="4" />
        </svg>
      </div>
    );
  }

  if (id === 'pulse') {
    return (
      <div className="stage stage-cal" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} style={{ animationDelay: `${index * 120}ms` }} />
        ))}
      </div>
    );
  }

  return (
    <div className="stage stage-frames" aria-hidden="true">
      <span /><span /><span />
    </div>
  );
}
