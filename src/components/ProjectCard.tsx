import Image from "next/image";
import type { Project } from "@/content/site";

const tagIcons: Record<Project["tagIcon"], string> = {
  devices: "/images/projects/icon-devices.svg",
  write: "/images/projects/icon-write.svg",
  apple: "/images/projects/icon-apple.svg",
  "test-tube": "/images/projects/icon-test-tube.svg",
};

function ProjectPreview({ project }: { project: Project }) {
  const frameClass =
    "relative aspect-[260/160] w-full overflow-hidden rounded-xl";

  switch (project.preview) {
    case "blackrabbit":
      return (
        <div className={`${frameClass} bg-black`}>
          <Image
            src="/images/projects/blackrabbit-logo.svg"
            alt=""
            width={76}
            height={80}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      );
    case "inboxed":
      return (
        <div className={frameClass}>
          <Image
            src="/images/projects/inboxed-bg.png"
            alt=""
            fill
            sizes="(min-width: 640px) 260px, 100vw"
            className="object-cover"
          />
          <Image
            src="/images/projects/inboxed-logo.png"
            alt=""
            fill
            sizes="(min-width: 640px) 260px, 100vw"
            className="object-contain p-6"
          />
        </div>
      );
    case "undercut":
      return (
        <div className={frameClass}>
          <Image
            src="/images/projects/undercut-bg.png"
            alt=""
            fill
            sizes="(min-width: 640px) 260px, 100vw"
            className="object-cover"
          />
          <Image
            src="/images/projects/undercut-logo.svg"
            alt=""
            width={100}
            height={53}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      );
    case "ocular":
      return (
        <div className={frameClass}>
          <Image
            src="/images/projects/ocular.png"
            alt=""
            fill
            sizes="(min-width: 640px) 260px, 100vw"
            className="object-cover"
          />
        </div>
      );
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-3">
      <ProjectPreview project={project} />
      <div className="flex w-full items-start justify-between text-[14px] leading-5">
        <span className="font-season-sans-semibold text-black">{project.title}</span>
        <span className="inline-flex items-center gap-1.5 text-[var(--color-muted)]">
          <Image
            src={tagIcons[project.tagIcon]}
            alt=""
            width={20}
            height={20}
            className="shrink-0"
            aria-hidden
          />
          <span className="font-season-sans-medium">{project.tag}</span>
        </span>
      </div>
    </article>
  );
}
