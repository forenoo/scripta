import { useEffect, useState } from "react";

// Streaming "the draft is being written" effect shared by every editor surface.
// `intro` is the first write-in, slow enough to read along. `quick` is for re-runs, once the reader gets the idea
// and only wants to compare drafts.
const PACE = {
  intro: { char: 17, pause: 160 },
  quick: { char: 7, pause: 60 },
};
export type Pace = keyof typeof PACE;

function charsAt(lines: string[], elapsed: number, pace: Pace) {
  const { char, pause } = PACE[pace];
  let t = elapsed;
  let chars = 0;
  for (const line of lines) {
    t -= pause;
    if (t <= 0) return chars;
    const n = Math.min(line.length, Math.floor(t / char));
    chars += n;
    if (n < line.length) return chars;
    t -= line.length * char;
  }
  return chars;
}

/**
 * Returns how many characters of `lines` are revealed. `run` 0 is the static first render (everything shown,
 * so SSR and no-JS get the full text); each bump restarts the write-in. Reduced motion skips straight to the end.
 */
export function useStream(lines: string[], run: number, pace: Pace = "intro") {
  const total = lines.reduce((sum, l) => sum + l.length, 0);
  const [progress, setProgress] = useState({ run: 0, shown: Infinity });
  // `run` only moves past 0 from client events, so `window` is safe here.
  const reduce = run > 0 && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (run === 0 || reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const next = charsAt(lines, now - start, pace);
      setProgress({ run, shown: next >= total ? Infinity : next });
      if (next < total) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // `run` changes whenever the active draft changes, so it is the only trigger needed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  // A new run is blank from its very first render, so the previous or full draft never flashes for a frame.
  const shown = run === 0 || reduce ? Infinity : progress.run === run ? progress.shown : 0;
  return { shown, writing: shown !== Infinity };
}

/**
 * Renders draft lines with the first `shown` characters visible. The unrevealed rest stays in the layout
 * (invisible), so line wraps never shift while text is written in. Visual only: pair it with an sr-only copy.
 */
export function StreamLines({ lines, shown, lineClass }: { lines: string[]; shown: number; lineClass: string }) {
  let left = shown;
  let caretPlaced = shown === Infinity;
  return lines.map((line, i) => {
    const n = Math.max(0, Math.min(line.length, left));
    left -= line.length;
    const caret = !caretPlaced && n < line.length;
    if (caret) caretPlaced = true;
    return (
      <div key={i} className={lineClass}>
        {line.slice(0, n)}
        {caret && <Caret />}
        {n < line.length && <span className="invisible">{line.slice(n)}</span>}
      </div>
    );
  });
}

function Caret() {
  return <span className="-mr-0.5 inline-block h-[1.15em] w-0.5 bg-cobalt-400 align-[-0.2em]" />;
}
