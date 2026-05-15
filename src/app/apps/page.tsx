import { AppRow } from "@/components/AppRow";
import { Divider } from "@/components/Divider";
import { SiteShell } from "@/components/SiteShell";
import { appCards, appsBanner, appsHero } from "@/content/site";
import Image from "next/image";

const bodyMd =
  "max-w-md text-[16px] font-medium leading-[23px] text-[var(--color-muted)]";

export default function AppsPage() {
  return (
    <SiteShell pathname="/apps">
      <section className="flex flex-col gap-4">
        <h1 className="font-season-mix max-w-[378px] text-[36px] leading-none tracking-[-0.01em]">
          <span className="text-black/40">Our </span>
          <span className="text-black">apps</span>
          <span className="text-black/40"> are made with </span>
          <span className="text-black">dedication</span>
          <span className="text-black/40"> to our </span>
          <span className="text-black">users</span>
        </h1>
        <p className={`${bodyMd} font-season-sans-medium max-w-[384px]`}>
          {appsHero.description}
        </p>
      </section>

      <Divider />

      <section
        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[20px] p-10 text-white"
        aria-labelledby="apps-banner"
      >
        <Image
          src="/images/apps/apps-cta-bg.png"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 540px, 100vw"
          className="pointer-events-none object-cover"
          aria-hidden
        />
        <div className="relative flex w-full flex-col items-center gap-5 text-center">
          <h2
            id="apps-banner"
            className="font-season-mix text-[20px] font-normal leading-none text-white"
          >
            {appsBanner.title}
          </h2>
          <a
            href={appsBanner.href}
            className="font-cta inline-flex h-8 items-center gap-1.5 rounded-full bg-black py-2 pl-2.5 pr-3.5 text-[14px] font-medium leading-4 text-white"
          >
            <Image
              src="/images/apps/icon-apple.svg"
              alt=""
              width={16}
              height={16}
              className="shrink-0"
              aria-hidden
            />
            {appsBanner.cta}
          </a>
        </div>
      </section>

      <section className="flex w-full flex-col gap-3" aria-label="Products">
        {appCards.map((app, index) => (
          <div key={app.name} className="flex flex-col gap-3">
            <AppRow app={app} />
            {index < appCards.length - 1 ? <Divider /> : null}
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
