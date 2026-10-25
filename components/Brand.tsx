import { useId } from "react";

// Temple doorway with a lit lamp: the shop's emblem until the real logo file is supplied.
export function Emblem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 36" className={className} aria-hidden="true">
      <path
        d="M3 35V15Q3 4 16 1.5Q29 4 29 15V35"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M7 35V16Q7 8 16 5.5Q25 8 25 16V35" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <path d="M16 9C19.5 13.5 19.5 17 16 19.5C12.5 17 12.5 13.5 16 9Z" fill="currentColor" />
      <path d="M10 21.5Q16 26 22 21.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 24.5V30M12 31H20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`logo logo--${tone}`}>
      <Emblem className="logo__emblem" />
      <span className="logo__words">
        <span className="logo__name">Sri Meenakshi</span>
        <span className="logo__sub">Silk House</span>
      </span>
    </span>
  );
}

// The temple-teeth border band that separates sections, like the edge of a Kanchipuram saree.
export function ZariBorder({ flip = false }: { flip?: boolean }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg className="zari-border" width="100%" height="22" aria-hidden="true" style={flip ? { transform: "scaleY(-1)" } : undefined}>
      <defs>
        <pattern id={id} width="18" height="22" patternUnits="userSpaceOnUse">
          <rect width="18" height="22" fill="var(--arakku)" />
          <rect y="2" width="18" height="1" fill="var(--zari-light)" />
          <path d="M0 18L9 7L18 18Z" fill="var(--zari)" />
          <circle cx="9" cy="5" r="1" fill="var(--zari-light)" />
          <rect y="19" width="18" height="1.5" fill="var(--zari-light)" />
        </pattern>
      </defs>
      <rect width="100%" height="22" fill={`url(#${id})`} />
    </svg>
  );
}
