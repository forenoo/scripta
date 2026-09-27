import type { ReactNode } from "react";

// Hero linework: hairlines from both page edges that route toward the illustration or drop onto the row
// divider (y = 360). Drawn in a 1200 × 360 box that stretches horizontally with the page; strokes stay 1px
// via non-scaling-stroke.
const W = 1200;

// The illustration spans grid columns 5–7 (33.3%–58.3%) plus 24px of bleed each side, so its edges sit near
// x ≈ 376 and x ≈ 724. Lines stop just short of them and end in a terminal dot, so a transparent illustration
// never has linework running through it.
const paths = [
  "M0 64 H160 Q176 64 176 80 V214 Q176 230 192 230 H368",
  "M0 150 H280 Q296 150 296 166 V360",
  "M40 360 V306 Q40 290 56 290 H368",
  "M1200 170 H1076 Q1060 170 1060 186 V244 Q1060 260 1044 260 H732",
  "M1200 100 H976 Q960 100 960 116 V360",
  "M1200 320 H1140 Q1124 320 1124 336 V360",
];
const STAGGER = 90;

const lines = (
  <>
    <path d="M5 8h14" />
    <path d="M5 12h9" />
    <path d="M5 16h11" />
  </>
);
const play = <path d="M8 6.5v11l9-5.5z" />;
const slides = (
  <>
    <rect x="4" y="6" width="11" height="12" rx="1" />
    <path d="M18 8v8" />
  </>
);
const clock = (
  <>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 8.5V12l2.5 1.5" />
  </>
);
const grip = (
  <>
    <circle cx="9" cy="9" r="0.9" />
    <circle cx="15" cy="9" r="0.9" />
    <circle cx="9" cy="15" r="0.9" />
    <circle cx="15" cy="15" r="0.9" />
  </>
);

// Nodes sit on the paths above; each glyph hints at a draft format (text, video, carousel, timestamp).
// `at` is when the drawing line reaches the node (its path's stagger plus the eased 1150ms draw), so each node
// lands as the line passes it. Recompute if a path, the stagger, or --animate-draw changes.
const nodes: { x: number; y: number; at: number; icon: ReactNode }[] = [
  { x: 90, y: 150, at: 125, icon: grip },
  { x: 176, y: 150, at: 165, icon: lines },
  { x: 1060, y: 215, at: 340, icon: slides },
  { x: 240, y: 290, at: 365, icon: play },
  { x: 1090, y: 100, at: 405, icon: grip },
  { x: 880, y: 260, at: 485, icon: clock },
];

// Terminal dots where lines meet the illustration, timed to when their line has visibly arrived.
const ends = [
  { x: 368, y: 230, at: 565 },
  { x: 368, y: 290, at: 745 },
  { x: 732, y: 260, at: 835 },
];

export function HeroLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-90 lg:block">
      <svg viewBox={`0 0 ${W} 360`} preserveAspectRatio="none" className="absolute inset-0 size-full">
        {paths.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            strokeDasharray={1}
            fill="none"
            stroke="var(--color-neutral-300)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            className="motion-safe:animate-draw"
            style={{ animationDelay: `${i * STAGGER}ms` }}
          />
        ))}
      </svg>
      {ends.map((e) => (
        <span
          key={`${e.x}-${e.y}`}
          className="absolute -mt-0.75 -ml-0.75 size-1.5 rounded-full bg-neutral-400 motion-safe:animate-line-in"
          style={{ left: `${(e.x / W) * 100}%`, top: e.y, animationDelay: `${e.at}ms` }}
        />
      ))}
      {nodes.map((n) => (
        <span
          key={`${n.x}-${n.y}`}
          className="absolute -mt-3.5 -ml-3.5 grid size-7 place-items-center rounded-sm border border-neutral-300 bg-paper text-neutral-400 motion-safe:animate-line-in"
          style={{ left: `${(n.x / W) * 100}%`, top: n.y, animationDelay: `${n.at}ms` }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            {n.icon}
          </svg>
        </span>
      ))}
    </div>
  );
}
