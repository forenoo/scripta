import type { ComponentProps } from "react";
import { cx } from "./cx";

type Variant = "draft" | "final" | "new" | "outline" | "accent";

const variants: Record<Variant, string> = {
  draft: "bg-neutral-100 text-neutral-600",
  final: "bg-ink text-paper",
  new: "bg-cobalt-100 text-cobalt-700",
  outline: "border border-neutral-300 text-neutral-700",
  accent: "border border-accent text-accent",
};

export function Badge({
  variant = "outline",
  className,
  children,
  ...props
}: ComponentProps<"span"> & { variant?: Variant }) {
  return (
    <span
      className={cx(
        "inline-flex h-6 shrink-0 items-center gap-1.5 rounded-xs px-2 font-mono text-label whitespace-nowrap uppercase",
        variants[variant],
        className,
      )}
      {...props}
    >
      {variant === "draft" && (
        <span className="size-1.5 rounded-full border border-neutral-500" />
      )}
      {variant === "final" && <span className="size-1.5 rounded-full bg-paper" />}
      {children}
    </span>
  );
}
