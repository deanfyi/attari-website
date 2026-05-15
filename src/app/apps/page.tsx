import { SiteShell } from "@/components/SiteShell";
import { PrimaryButton } from "@/components/Sidebar";
import { appCards, appsBanner, appsHero } from "@/content/site";

const heroTitle =
  "max-w-xl text-[36px] font-semibold leading-none tracking-[-0.01em] text-black";
const bodyMd =
  "max-w-md text-[16px] font-medium leading-[23px] text-[var(--color-muted)]";

export default function AppsPage() {
  return (
    <SiteShell pathname="/apps">
      <section className="flex flex-col gap-4">
        <h1 className={heroTitle}>{appsHero.title}</h1>
        <p className={bodyMd}>{appsHero.description}</p>
      </section>

      <section
        className="relative overflow-hidden rounded-[20px] px-10 py-8 text-white"
        aria-labelledby="apps-banner"
      >
        <div className="pointer-events-none absolute inset-0 bg-zinc-900" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-95"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(125deg, rgba(120,140,255,0.15) 0%, transparent 40%), radial-gradient(ellipse 70% 60% at 85% 30%, rgba(255,180,120,0.12), transparent 50%)",
          }}
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2
            id="apps-banner"
            className="text-[20px] font-semibold leading-none tracking-normal text-white"
          >
            {appsBanner.title}
          </h2>
          <PrimaryButton href={appsBanner.href} variant="solid" size="compact">
            {appsBanner.cta}
          </PrimaryButton>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2" aria-label="Products">
        {appCards.map((app) => (
          <article
            key={app.name}
            className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-[18px] font-semibold leading-5 tracking-normal text-black">
                {app.name}
              </h3>
              <p className="text-[16px] font-medium leading-5 text-[var(--color-muted)]">
                {app.description}
              </p>
            </div>
            {app.status === "live" && app.href ? (
              <PrimaryButton href={app.href} variant="solid">
                {app.cta}
              </PrimaryButton>
            ) : (
              <span className="font-cta inline-flex h-8 min-h-8 w-fit items-center rounded-full bg-black/10 px-3.5 text-[14px] font-medium leading-4 text-black/70">
                {app.cta}
              </span>
            )}
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
