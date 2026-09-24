import type { ComponentProps, ReactNode } from "react";
import { cx } from "./cx";

export const inputClass = cx(
  "h-10 rounded-sm border border-neutral-300 bg-paper px-3 text-[15px] text-ink caret-accent outline-none",
  "hover:border-neutral-500 focus:border-accent focus:ring-3 focus:ring-cobalt-200",
  "disabled:cursor-not-allowed disabled:border-line disabled:bg-neutral-100 disabled:text-draft",
);

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cx(inputClass, className)} {...props} />;
}

export function Field({
  label,
  hint,
  disabled,
  children,
}: {
  label: ReactNode;
  hint?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span
        className={cx(
          "font-mono text-label uppercase",
          disabled ? "text-draft" : "text-neutral-600",
        )}
      >
        {label}
      </span>
      {children}
      {hint && (
        <span className={cx("text-[13px]", disabled ? "text-draft" : "text-neutral-600")}>
          {hint}
        </span>
      )}
    </label>
  );
}
