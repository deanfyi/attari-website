import { Divider } from "@/components/Divider";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/content/site";

const heroTitle =
  "font-season-mix max-w-xl text-[36px] leading-none tracking-[-0.01em] text-black";
const bodyMd =
  "max-w-md text-[16px] font-medium leading-[23px] text-[var(--color-muted)]";

export default function ProjectsPage() {
  return (
    <SiteShell pathname="/projects">
      <section className="flex flex-col gap-4">
        <h1 className={heroTitle}>
          <span className="text-black/40">We work with </span>
          <span>founders</span>
          <span className="text-black/40"> & </span>
          <span>teams</span>
          <span className="text-black/40"> to bring </span>
          <span>ideas to life</span>
        </h1>
        <p className={bodyMd}>
          Over the last 12 months, we have dedicated our skills to helping other founders
          ideas come to life
        </p>
      </section>

      <Divider />

      <section
        className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2"
        aria-label="Selected work"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </SiteShell>
  );
}
