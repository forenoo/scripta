import type { ComponentProps } from "react";
import { cx } from "./cx";

type Variant = "primary" | "secondary" | "outline" | "tonal" | "link";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "border-cobalt-600 bg-cobalt-600 text-paper hover:border-cobalt-700 hover:bg-cobalt-700 active:border-cobalt-800 active:bg-cobalt-800",
  secondary:
    "border-ink bg-ink text-paper hover:border-neutral-700 hover:bg-neutral-700 active:border-neutral-600 active:bg-neutral-600",
  outline:
    "border-ink bg-transparent text-ink hover:bg-neutral-100 active:bg-neutral-200",
  // Quiet secondary action beside a primary: no fill, soft border. neutral-700 text stays above 10:1 in every state.
  tonal:
    "border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200",
  link: "border-transparent bg-transparent px-2! text-ink underline decoration-neutral-300 underline-offset-4 hover:decoration-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-8 gap-1.5 px-3 text-[14px]",
  md: "h-10 gap-2 px-4 text-[15px]",
  lg: "h-12 gap-2 px-5 text-[16px]",
};

export type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};

// Also used on <a> elements that must look like a button (in-page navigation).
export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cx(
    "group/button pressable inline-flex shrink-0 cursor-pointer items-center rounded-sm border font-semibold whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-40",
    sizes[size],
    variants[variant],
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return <button type={type} className={buttonClass(variant, size, className)} {...props} />;
}

// Inside a button it nudges toward where the button leads, like the footer's arrows.
export function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-[translate] duration-200 ease-out-strong group-hover/button:translate-x-0.5 motion-reduce:transition-none"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function RotateCcw() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}
