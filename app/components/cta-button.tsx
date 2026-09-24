import type { ComponentProps } from "react";
import { cx } from "./ui/cx";

type Variant = "primary" | "secondary";

// Every class maps to a token in app/app.css or Tailwind's default scale; no arbitrary values.
const variants: Record<Variant, string> = {
  primary:
    "border-accent bg-accent text-paper hover:border-cobalt-600 hover:bg-cobalt-600 active:border-cobalt-700 active:bg-cobalt-700",
  secondary:
    "border-ink bg-ink text-paper hover:border-neutral-700 hover:bg-neutral-700 active:border-neutral-600 active:bg-neutral-600",
};

export function CtaButton({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button
      type={type}
      className={cx(
        "inline-flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-sm border px-5",
        "font-sans text-body font-semibold whitespace-nowrap",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        "disabled:cursor-not-allowed disabled:opacity-40",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
