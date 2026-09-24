import type { ComponentProps } from "react";
import { cx } from "./cx";

// Toggle chip used inside the editor surface; `on` is mirrored to aria-pressed.
export function Chip({ on, className, type = "button", ...props }: ComponentProps<"button"> & { on: boolean }) {
  return (
    <button
      type={type}
      aria-pressed={on}
      className={cx(
        "inline-flex h-7.5 shrink-0 cursor-pointer items-center rounded-sm border px-2.5 font-mono text-[12px] whitespace-nowrap",
        on ? "border-accent bg-accent text-paper" : "border-neutral-700 bg-transparent text-draft hover:text-paper",
        className,
      )}
      {...props}
    />
  );
}
