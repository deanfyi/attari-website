"use client";

import { IconRainyLight } from "@/components/icons/figma";
import { useLayoutEffect, useState } from "react";

function formatTime(d: Date) {
  return d.toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const meta = "font-cta text-[14px] font-medium leading-5 tracking-[-0.01em]";

export function WeatherWidget() {
  const [time, setTime] = useState<string | null>(null);

  // useLayoutEffect so the first real time paints in the same frame as hydration
  // (useEffect runs after paint, so the row stayed on the "—" placeholder).
  useLayoutEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full flex-col items-end gap-1.5">
      <div className={`flex w-full items-center justify-end gap-2 ${meta} text-black`}>
        <IconRainyLight className="size-4 shrink-0 text-black" aria-hidden />
        <span>17° Celsius</span>
      </div>
      <div className={`flex w-full items-center justify-end gap-1.5 ${meta} text-[var(--color-nav-muted)]`}>
        <span className="tabular-nums">{time ?? "—"}</span>
        <span className="inline-block size-[3px] shrink-0 rounded-full bg-current" />
        <span>Liverpool, UK</span>
      </div>
    </div>
  );
}
