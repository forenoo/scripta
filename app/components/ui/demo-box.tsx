import { useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "./cx";
import { StreamLines, useStream } from "./stream";
import { Wordmark } from "./wordmark";

// Shared editor anatomy, also used by the features section.
export const editorShell = "overflow-hidden rounded-md border border-neutral-700 bg-editor";
export const editorBar = "flex items-baseline gap-2.5 border-b border-neutral-700 px-4 py-3 font-mono text-small";
export const editorLabel = "font-mono text-label text-cobalt-400 uppercase";
export const editorLine = "font-mono text-small whitespace-pre-wrap text-paper";

// Window title: product mark, then the document name. `status` sits on the right (e.g. while a draft is written);
// it stays mounted and fades with `statusOn`, so it never blinks in the corner when drafts are switched quickly.
export function EditorTitle({ doc, status, statusOn = true }: { doc: string; status?: ReactNode; statusOn?: boolean }) {
  return (
    <div className="flex h-10 items-center gap-2.5 border-b border-neutral-700 px-4 text-paper">
      <Wordmark size="sm" />
      <span className="text-neutral-600" aria-hidden="true">
        /
      </span>
      <span className="truncate text-code text-neutral-400">{doc}</span>
      {status && (
        <span
          aria-hidden={!statusOn}
          className={cx(
            "ml-auto shrink-0 font-mono text-code-sm text-neutral-400 transition-opacity duration-150",
            !statusOn && "opacity-0",
          )}
        >
          {status}
        </span>
      )}
    </div>
  );
}

export type Draft = { id: string; tab: string; label: string; lines: string[] };

// The hero demo runs one step denser than the shared editor so it sits compact beside the illustration.
const demoLine = "font-mono text-code whitespace-pre-wrap text-paper";

const countWords = (lines: string[]) => lines.join(" ").split(/\s+/).filter(Boolean).length;

// Format tabs: p-0.5 padding and gap-0.5 gaps (2px each). The clip frames tab `i` of `n` exactly.
function tabClip(i: number, n: number) {
  const col = `((100% - 4px - ${n - 1} * 2px) / ${n})`;
  return `inset(2px calc(100% - 2px - ${i + 1} * ${col} - ${i} * 2px) 2px calc(2px + ${i} * (${col} + 2px)) round 2px)`;
}

export function DemoBox({ idea, drafts }: { idea: string; drafts: Draft[] }) {
  const [active, setActive] = useState(drafts[0].id);
  // 0 = first render, static. First sight of the box, a format switch, or "Buat draft" bumps it to write the draft in.
  const [run, setRun] = useState(0);
  const current = drafts.find((d) => d.id === active) ?? drafts[0];
  // The first write-in is paced to read along; after that the reader is comparing drafts, so re-runs go quick.
  const { shown, writing } = useStream(current.lines, run, run > 1 ? "quick" : "intro");
  const activeIndex = drafts.indexOf(current);
  const cols = { gridTemplateColumns: `repeat(${drafts.length}, minmax(0, 1fr))` };
  const shell = useRef<HTMLDivElement>(null);

  // Write the first draft in once, the first time the box is actually on screen.
  useEffect(() => {
    const el = shell.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRun((r) => (r === 0 ? 1 : r));
        io.disconnect();
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={shell} className={cx("flex flex-col", editorShell)}>
      <EditorTitle doc="Draft baru" status="menulis…" statusOn={writing} />

      <div className="flex flex-col gap-2 border-b border-neutral-700 p-2.5">
        <div className="flex items-start gap-3 rounded-md border border-neutral-700 bg-ink p-1 pl-2.5">
          <p className="m-0 min-w-0 flex-1 py-1 font-mono text-code text-paper">
            <span className="text-neutral-400">ide: </span>
            {idea}
          </p>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            className="pressable relative inline-flex h-7 shrink-0 after:absolute after:inset-x-0 after:-inset-y-2 cursor-pointer items-center gap-1.5 rounded-xs bg-accent px-2.5 text-code-sm font-semibold text-paper hover:bg-cobalt-600 active:bg-cobalt-700"
          >
            Buat draft
            <CornerDownLeft />
          </button>
        </div>

        <div role="group" aria-label="Format draft" className="relative grid gap-0.5 rounded-sm border border-neutral-700 p-0.5" style={cols}>
          {drafts.map((d) => {
            const on = d.id === active;
            return (
              <button
                key={d.id}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  if (on) return;
                  setActive(d.id);
                  setRun((r) => r + 1);
                }}
                className="pressable relative h-6 cursor-pointer rounded-xs aria-pressed:cursor-default px-2 font-mono text-code-sm whitespace-nowrap text-draft after:absolute after:inset-x-0 after:-inset-y-2.5 hover:bg-neutral-700 hover:text-paper"
              >
                {d.tab}
              </button>
            );
          })}
          {/* An "active" copy of the tabs, clipped to the active one. Moving the clip slides the highlight and
              swaps the label color in one motion, which separate color transitions never line up with. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid gap-0.5 p-0.5 transition-[clip-path] duration-200 ease-out-strong motion-reduce:transition-none"
            style={{ ...cols, clipPath: tabClip(activeIndex, drafts.length) }}
          >
            {drafts.map((d) => (
              <span key={d.id} className="grid h-6 place-items-center rounded-xs bg-accent px-2 font-mono text-code-sm whitespace-nowrap text-paper">
                {d.tab}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* All drafts share one grid cell, so the box keeps the tallest draft's height and nothing below it moves. */}
      <div className="grid flex-1 px-4 py-4" aria-hidden="true" data-stream-pending={run === 0 || undefined}>
        {drafts.map((d) => {
          const on = d.id === active;
          return (
            <div key={d.id} className={cx("flex flex-col gap-2 [grid-area:1/1]", !on && "invisible")}>
              <span className={editorLabel}>{d.label}</span>
              <StreamLines lines={d.lines} shown={on ? shown : Infinity} lineClass={demoLine} />
            </div>
          );
        })}
      </div>
      {/* The streamed copy above is visual only; screen readers get each draft whole, once. */}
      <div className="sr-only" aria-live="polite">
        {current.label}. {current.lines.join(" ")}
      </div>

      <div className="flex h-9 items-center justify-between border-t border-neutral-700 pr-1.5 pl-4 font-mono text-code-sm text-neutral-400">
        <span>{countWords(current.lines)} kata</span>
        <CopyButton text={current.lines.join("\n")} />
      </div>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 1600);
    return () => clearTimeout(t);
  }, [state]);

  const label = state === "done" ? "Tersalin" : state === "failed" ? "Gagal" : "Salin";

  return (
    <div className="flex items-center gap-2.5">
      {/* The hint sits beside the button, so the button itself never changes width. */}
      <span aria-hidden="true" className={cx("transition-opacity duration-150", state !== "failed" && "opacity-0")}>
        salin manual
      </span>
      <button
        type="button"
        aria-label="Salin draft"
        onClick={() =>
          // Wrapped so a missing Clipboard API (insecure context) lands in the failure branch too.
          Promise.resolve()
            .then(() => navigator.clipboard.writeText(text))
            .then(
              () => setState("done"),
              () => setState("failed"),
            )
        }
        className="pressable relative inline-flex h-6 cursor-pointer items-center gap-1.5 rounded-sm after:absolute after:inset-x-0 after:-inset-y-2.5 border border-neutral-700 px-2 text-paper hover:bg-neutral-700 active:bg-neutral-600"
      >
        {/* Icons and labels are stacked in one cell each and crossfade, so the swap reads as one control changing. */}
        <span className="grid" aria-hidden="true">
          <Copy className={swapIcon(state !== "done")} />
          <Check className={swapIcon(state === "done")} />
        </span>
        <span className="grid" aria-hidden="true">
          {["Salin", "Tersalin", "Gagal"].map((l) => (
            <span key={l} className={swapLabel(l === label)}>
              {l}
            </span>
          ))}
        </span>
      </button>
      <span className="sr-only" aria-live="polite">
        {state === "done" ? "Draft tersalin" : state === "failed" ? "Gagal menyalin, salin draft secara manual" : ""}
      </span>
    </div>
  );
}

// Contextual swaps: icons grow in from a quarter size, labels only crossfade (a shrinking word reads as a glitch).
const swapBase = "[grid-area:1/1] duration-200 ease-swap";
const swapIcon = (on: boolean) =>
  cx(swapBase, "transition-[opacity,scale,filter] motion-reduce:transition-[opacity]", !on && "scale-25 opacity-0 blur-[4px]");
const swapLabel = (on: boolean) => cx(swapBase, "transition-[opacity,filter]", !on && "opacity-0 blur-[4px]");

const icon = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function CornerDownLeft() {
  return (
    <svg {...icon}>
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
      <path d="m9 10-5 5 5 5" />
    </svg>
  );
}

// Copy and Check sit beside regular-weight mono text, so they take the lighter 1.5 stroke.
function Copy({ className }: { className?: string }) {
  return (
    <svg {...icon} strokeWidth={1.5} className={className}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg {...icon} strokeWidth={1.5} className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
