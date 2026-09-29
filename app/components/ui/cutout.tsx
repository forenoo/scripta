import { cx } from "./cx";

// A transparent portrait photo whose subject leaves through the bottom edge, so it sits on the hairline below it.
// Used as the hero opener and the closing-CTA bookend. Until `src` is set the slot renders a placeholder at its
// final proportions, so the layout does not shift when the asset lands in public/.
// `imgClassName` replaces the photo's alignment inside the slot (bottom-center by default).
export function Cutout({ src, className, imgClassName }: { src?: string; className?: string; imgClassName?: string }) {
  return (
    // The slot overlaps the content above it (negative top margin), so it must not swallow clicks meant for that content.
    <div className={cx("pointer-events-none", className)}>
      {src ? (
        <img
          src={src}
          alt=""
          decoding="async"
          className={cx("pointer-events-none size-full object-contain", imgClassName ?? "object-bottom")}
        />
      ) : (
        <div className="grid size-full place-items-center border border-dashed border-neutral-300 bg-paper">
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <span className="text-small text-neutral-600">Ruang ilustrasi</span>
            <span className="font-mono text-label text-neutral-600 uppercase">PNG transparan · potret</span>
          </div>
        </div>
      )}
    </div>
  );
}
