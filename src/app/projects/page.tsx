import { Divider } from "@/components/Divider";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/content/site";

const heroTitle =
  "max-w-xl text-[36px] font-semibold leading-none tracking-[-0.01em] text-black";
const bodyMd =
  "max-w-md text-[16px] font-medium leading-[23px] text-[var(--color-muted)]";

export default function ProjectsPage() {
  return (
    <SiteShell pathname="/projects">
      <section className="flex flex-col gap-4">
        <h1 className={heroTitle}>We work with founders & teams to bring ideas to life</h1>
        <p className={bodyMd}>
          Over the last 12 months, we have dedicated our skills to helping other founders
          ideas come to life
        </p>
      </section>

      <Divider />

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2" aria-label="Selected work">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col gap-3">
            <div
              className={`h-40 w-full rounded-xl ${p.imageClass}`}
              role="img"
              aria-label={`${p.title} preview`}
            />
            <div className="flex items-center gap-3 text-[16px] leading-5">
              <span className="font-semibold text-black">{p.title}</span>
              <span className="font-medium text-[var(--color-nav-muted)]">{p.tag}</span>
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
