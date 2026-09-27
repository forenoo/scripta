import type { ComponentProps } from "react";
import { cx } from "./cx";

type Size = 24 | 32 | 40 | 56;
type Tone = "ink" | "accent" | "paper" | "muted";

const sizes: Record<Size, string> = {
  24: "size-6 text-[10px]",
  32: "size-8 text-[12px]",
  40: "size-10 text-[14px]",
  56: "size-14 text-[18px]",
};

const tones: Record<Tone, string> = {
  ink: "bg-ink text-paper",
  accent: "bg-accent text-paper",
  paper: "border border-neutral-300 bg-paper text-ink",
  muted: "bg-neutral-100 text-ink",
};

// With `src`, the photo covers the circle and the tone only shows while it loads. The photo is decorative
// wherever a name sits beside the avatar, so alt stays empty; label the span itself when it stands alone.
export function Avatar({
  initials,
  src,
  size = 40,
  tone = "ink",
  className,
  ...props
}: ComponentProps<"span"> & { initials?: string; src?: string; size?: Size; tone?: Tone }) {
  return (
    <span
      className={cx(
        "grid shrink-0 place-items-center overflow-hidden rounded-full font-semibold",
        sizes[size],
        tones[tone],
        className,
      )}
      {...props}
    >
      {src ? (
        // A hairline inside the edge keeps a pale photo from bleeding into the paper behind it.
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full rounded-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
        />
      ) : (
        initials
      )}
    </span>
  );
}

export function AvatarStack({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center *:shadow-[0_0_0_2px_var(--color-paper)] *:not-first:-ml-2.5">
      {children}
    </div>
  );
}
