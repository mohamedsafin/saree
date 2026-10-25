import { useId } from "react";

export type Motif = "mango" | "butta" | "checks" | "stripes" | "plain";
export type ArtKind = "saree" | "dhoti" | "vastram";
export type ArtView = "full" | "border" | "pallu";

export type ArtProps = {
  kind: ArtKind;
  body: string;
  border: string;
  zari?: string;
  motif: Motif;
};

// Crops of the same 300×380 drawing, used as gallery "close-ups".
const views: Record<ArtKind, Record<ArtView, string>> = {
  saree: { full: "0 0 300 380", border: "168 40 120 152", pallu: "24 216 172 218" },
  dhoti: { full: "0 0 300 380", border: "150 240 120 152", pallu: "30 170 160 202" },
  vastram: { full: "0 0 300 380", border: "140 236 120 152", pallu: "70 30 160 202" },
};

const MANGO = "M0 -7C6 -7 8 1 3 6C0 9 -6 8 -6 2C-6 -2 -2 -3 0 0C-3 -1 -4 -6 0 -7Z";

function Butta({ x, y, fill }: { x: number; y: number; fill: string }) {
  return (
    <g transform={`translate(${x} ${y})`} fill={fill}>
      <circle r="1.9" />
      <circle cx="0" cy="-3.4" r="1.5" />
      <circle cx="0" cy="3.4" r="1.5" />
      <circle cx="-3.4" cy="0" r="1.5" />
      <circle cx="3.4" cy="0" r="1.5" />
    </g>
  );
}

function MotifPattern({ id, motif, zari }: { id: string; motif: Motif; zari: string }) {
  switch (motif) {
    case "mango":
      return (
        <pattern id={id} width="36" height="36" patternUnits="userSpaceOnUse">
          <path d={MANGO} fill={zari} transform="translate(9 10) scale(0.8)" />
          <path d={MANGO} fill={zari} transform="translate(27 28) scale(0.8)" />
        </pattern>
      );
    case "butta":
      return (
        <pattern id={id} width="26" height="26" patternUnits="userSpaceOnUse">
          <Butta x={6.5} y={6.5} fill={zari} />
          <Butta x={19.5} y={19.5} fill={zari} />
        </pattern>
      );
    case "checks":
      return (
        <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 0.7H24M0.7 0V24" stroke={zari} strokeWidth="1.4" />
          <path d="M0 12H24M12 0V24" stroke={zari} strokeWidth="0.5" opacity="0.6" />
        </pattern>
      );
    case "stripes":
      return (
        <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="1.2" height="14" fill={zari} />
        </pattern>
      );
    default:
      return (
        <pattern id={id} width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="1" fill="#000" opacity="0.025" />
        </pattern>
      );
  }
}

export default function SareeArt({
  kind,
  body,
  border,
  zari = "#E0BE6A",
  motif,
  view = "full",
  className,
  label,
}: ArtProps & { view?: ArtView; className?: string; label?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const id = (s: string) => `${uid}${s}`;

  return (
    <svg
      viewBox={views[kind][view]}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <MotifPattern id={id("m")} motif={motif} zari={zari} />
        <pattern id={id("tv")} x="194" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M12 0L1 6L12 12Z" fill={zari} />
        </pattern>
        <pattern id={id("th")} y="286" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 14L7 3L14 14Z" fill={zari} />
        </pattern>
        <linearGradient id={id("sheen")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.38" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.82" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#000" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={id("fold")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="0.55" stopColor="#000" stopOpacity="0.2" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <clipPath id={id("skirt")}>
          <path d="M96 58H204L262 344Q150 362 38 344Z" />
        </clipPath>
      </defs>

      <rect width="300" height="380" fill={body} />

      {kind === "saree" && (
        <g>
          <rect width="300" height="380" fill={`url(#${id("m")})`} />
          {/* side border with temple teeth */}
          <rect x="206" width="94" height="380" fill={border} />
          <rect x="194" width="12" height="380" fill={`url(#${id("tv")})`} />
          <rect x="212" width="2" height="380" fill={zari} />
          <rect x="217" width="0.8" height="380" fill={zari} />
          <rect x="262" width="2" height="380" fill={zari} />
          {Array.from({ length: 18 }, (_, i) => (
            <Butta key={i} x={238} y={12 + i * 22} fill={zari} />
          ))}
          {/* pallu */}
          <rect y="258" width="206" height="122" fill={border} />
          <rect y="264" width="206" height="3" fill={zari} />
          <rect y="271" width="206" height="1" fill={zari} />
          {Array.from({ length: 7 }, (_, i) => (
            <path key={i} d={MANGO} fill={zari} transform={`translate(${18 + i * 28} 304) scale(1.7)`} />
          ))}
          <rect y="334" width="206" height="1" fill={zari} />
          <rect y="338" width="206" height="3" fill={zari} />
          <rect y="348" width="206" height="10" fill={zari} opacity="0.85" />
          {/* folds */}
          <rect y="104" width="300" height="16" fill={`url(#${id("fold")})`} />
          <rect y="186" width="300" height="16" fill={`url(#${id("fold")})`} />
        </g>
      )}

      {kind === "dhoti" && (
        <g>
          <rect width="300" height="380" fill={`url(#${id("m")})`} />
          <rect x="256" width="10" height="380" fill={border} />
          <rect x="270" width="2" height="380" fill={border} />
          <rect y="292" width="300" height="2" fill={border} />
          <rect y="300" width="300" height="28" fill={border} />
          <rect y="306" width="300" height="1" fill={zari} opacity="0.7" />
          <rect y="321" width="300" height="1" fill={zari} opacity="0.7" />
          <rect y="334" width="300" height="2" fill={border} />
          <rect y="120" width="300" height="16" fill={`url(#${id("fold")})`} />
          <rect y="216" width="300" height="16" fill={`url(#${id("fold")})`} />
        </g>
      )}

      {kind === "vastram" && (
        <g>
          <rect width="300" height="380" fill="#F1E9DC" />
          <g clipPath={`url(#${id("skirt")})`}>
            <rect width="300" height="380" fill={body} />
            <rect width="300" height="380" fill={`url(#${id("m")})`} />
            {Array.from({ length: 9 }, (_, i) => {
              const top = 104 + i * 12;
              const bottom = 46 + i * 26;
              return (
                <path
                  key={i}
                  d={`M${top} 60L${bottom} 360`}
                  stroke="#000"
                  strokeOpacity="0.16"
                  strokeWidth="3"
                />
              );
            })}
            <rect y="300" width="300" height="80" fill={border} />
            <rect y="286" width="300" height="14" fill={`url(#${id("th")})`} />
            <rect y="306" width="300" height="2" fill={zari} />
            {Array.from({ length: 12 }, (_, i) => (
              <Butta key={i} x={30 + i * 22} y={326} fill={zari} />
            ))}
            <rect y="340" width="300" height="2" fill={zari} />
          </g>
          <path d="M90 46H210L206 70H94Z" fill={border} />
          <path d="M92 56H208" stroke={zari} strokeWidth="1.5" />
        </g>
      )}

      <rect width="300" height="380" fill={`url(#${id("sheen")})`} />
    </svg>
  );
}
