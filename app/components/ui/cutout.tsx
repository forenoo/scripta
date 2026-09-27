// A transparent portrait photo whose subject leaves through the bottom edge, so it sits on the hairline below it.
// Used as the hero opener and the closing-CTA bookend. Until `src` is set the slot renders a placeholder at its
// final proportions, so the layout does not shift when the asset lands in public/.
export function Cutout({ src, className }: { src?: string; className?: string }) {
  return (
    <div className={className}>
      {src ? (
        <img src={src} alt="" decoding="async" className="size-full object-contain object-bottom" />
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
