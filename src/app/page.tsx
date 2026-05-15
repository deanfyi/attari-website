import { Divider } from "@/components/Divider";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { ChevronRight, PrimaryButton } from "@/components/Sidebar";

/** DM Serif Display — section titles only. */
const dmSerifDisplay = "font-hero-dm-serif font-normal";

/* Hero h1 — Figma 2299:2907: Season Mix SemiBold (wght 670, SERF 50). */
const heroTitle =
  "font-season-mix max-w-[364px] text-[36px] leading-none tracking-[-0.01em] text-[#000000] md:max-w-none";
const bodyMd =
  "max-w-md text-[16px] font-medium leading-[23px] text-[var(--color-muted)]";

export default function HomePage() {
  return (
    <SiteShell pathname="/">
      <section className="flex flex-col gap-4">
        <h1 className={heroTitle}>
          <span className="opacity-40">We </span>
          <span className="opacity-40">make </span>
          <span>apps </span>
          <span className="opacity-40">for</span>
          <br />
          <span>humans </span>
          <span className="opacity-40">and </span>
          <span>agents</span>
        </h1>
        <p className={bodyMd}>
          We’re a small design studio that loves to design world-class experiences &
          build beautiful products in the age of Ai.
        </p>
      </section>

      <div className="flex flex-wrap gap-1.5">
        <PrimaryButton href="#contact" trailing={<ChevronRight />}>
          Work with us
        </PrimaryButton>
        <PrimaryButton href="/apps" variant="ghost">
          View our apps
        </PrimaryButton>
      </div>

      <Divider />

      <section
        className="relative overflow-hidden rounded-[21px] p-10 text-white"
        aria-labelledby="cta-heading"
      >
        {/* Figma 2321:215 — IMAGE fill on CTA; asset from design export → public/images/cta-bg.png */}
        <Image
          src="/images/cta-bg.png"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 540px, 100vw"
          className="pointer-events-none object-cover"
          aria-hidden
        />
        <div className="relative flex w-full flex-col items-center gap-5 text-center">
          <h2
            id="cta-heading"
            className="whitespace-pre-line text-[20px] font-semibold leading-none text-white"
          >
            We’re currently{"\n"}taking on new clients
          </h2>
          <PrimaryButton href="#contact" size="compact" trailing={<ChevronRight />}>
            Get in touch
          </PrimaryButton>
        </div>
      </section>

      <section className="flex flex-col gap-4" aria-labelledby="about-heading">
        <h2
          id="about-heading"
          className={`${dmSerifDisplay} text-[20px] leading-[1.1] tracking-[-0.001em] text-[#000000]`}
        >
          About attari
        </h2>
        <p className={`${bodyMd} max-w-md whitespace-pre-line`}>
          {`Our team have over 8+ years of experiences in design, development, and branding. We decided it was time for a collective to lead design, taste and craft in a world of Ai-driven builders.

We want to help founders to create the products of their dreams, making sure it’s design captivates users and solves real problems.`}
        </p>
      </section>
    </SiteShell>
  );
}
