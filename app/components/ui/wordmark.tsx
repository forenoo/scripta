import { cx } from "./cx";

export function Wordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const sm = size === "sm";
  return (
    <div className={cx("flex items-center font-bold tracking-[-0.03em]", sm ? "gap-0.5 text-[13px]" : "gap-0.75 text-[20px]")}>
      scripta
      <span className={cx("inline-block bg-accent", sm ? "ml-px h-3.5 w-0.5" : "ml-0.5 h-5 w-0.75")} />
    </div>
  );
}
