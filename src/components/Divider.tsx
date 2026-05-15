import type { HTMLAttributes } from "react";

export type DividerProps = Omit<HTMLAttributes<HTMLDivElement>, "role">;

/** Figma `Divider`: 12px tall (6px + 2px padding); line 1.5px; VECTOR dashPattern [7, 8], `--color-divider-line`. */
export function Divider({ className = "", ...rest }: DividerProps) {
  return (
    <div
      role="separator"
      className={["box-border w-full px-[2px] py-[6px]", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <div
        className="h-[1.5px] w-full bg-[repeating-linear-gradient(to_right,var(--color-divider-line)_0_7px,transparent_7px_15px)]"
        aria-hidden
      />
    </div>
  );
}
