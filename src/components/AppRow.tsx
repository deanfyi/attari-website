import Image from "next/image";
import type { AppCard } from "@/content/site";

/** App icons from Figma are SVG; use native img so Next/Image does not treat them as PNG. */
function AppIcon({ src, className }: { src: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" width={48} height={48} className={className ?? "size-12 shrink-0"} />
  );
}

const icons: Record<AppCard["icon"], React.ReactNode> = {
  undercut: <AppIcon src="/images/apps/icon-undercut.svg" />,
  heymac: <AppIcon src="/images/apps/icon-heymac.svg" />,
  opentide: <AppIcon src="/images/apps/icon-opentide.svg" />,
  clippity: (
    <div className="relative size-12 shrink-0 overflow-hidden rounded-[14px] border-2 border-[#434343] bg-[#2a2a2a]">
      <div className="absolute inset-[3px] overflow-hidden rounded-[11px] bg-gradient-to-b from-[#2b2b2b] to-[#121212]">
        <Image
          src="/images/apps/icon-clippity-bg.png"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="48px"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/apps/icon-clippity-top.svg"
          alt=""
          width={36}
          height={11}
          className="absolute left-[1px] top-[2px]"
        />
      </div>
    </div>
  ),
};

function AppActionButton({ app }: { app: AppCard }) {
  if (app.status === "live" && app.href) {
    return (
      <a
        href={app.href}
        className="font-cta inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-black py-2 pl-2.5 pr-3.5 text-[14px] font-medium leading-4 text-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/apps/icon-apple.svg"
          alt=""
          width={16}
          height={16}
          className="shrink-0"
          aria-hidden
        />
        {app.cta}
      </a>
    );
  }

  return (
    <span className="font-cta inline-flex h-8 shrink-0 items-center rounded-full bg-black/[0.07] px-3 py-2 text-[14px] font-medium leading-4 text-black/50">
      {app.cta}
    </span>
  );
}

export function AppRow({ app }: { app: AppCard }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex min-w-0 items-center gap-5">
        {icons[app.icon]}
        <div className="flex flex-col gap-1">
          <h3 className="font-season-sans-semibold text-[18px] leading-5 text-black">
            {app.name}
          </h3>
          <p className="font-season-sans-medium text-[16px] leading-5 text-[var(--color-muted)]">
            {app.description}
          </p>
        </div>
      </div>
      <AppActionButton app={app} />
    </div>
  );
}
