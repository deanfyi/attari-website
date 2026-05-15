import { Divider } from "@/components/Divider";
import Link from "next/link";
import type { Route } from "next";
import {
  IconBluesky,
  IconChevronRightMedium,
  IconEmail,
  IconTwitter,
  LogoIcon,
} from "@/components/icons/figma";
import { navItems, socialLinks, type SocialNetwork } from "@/content/site";

function SocialIcon({ network, className }: { network: SocialNetwork; className?: string }) {
  const cn = ["shrink-0", className].filter(Boolean).join(" ");
  switch (network) {
    case "bluesky":
      return <IconBluesky className={cn} />;
    case "twitter":
      return <IconTwitter className={cn} />;
    case "email":
      return <IconEmail className={cn} />;
  }
}

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-black" aria-label="attari home">
      <LogoIcon className="shrink-0" />
    </Link>
  );
}

export function ChevronRight() {
  return <IconChevronRightMedium className="shrink-0" />;
}

type SidebarProps = {
  pathname: string;
};

const sidebarNavLink =
  "text-[14px] leading-5 block pl-0 transition-[color,padding] duration-200 ease-out";
const sidebarNavColumnText = "text-[14px] font-medium leading-5";
const sidebarFooterText =
  "text-[14px] font-medium leading-5 tracking-[-0.01em] text-[var(--color-nav-muted)]";

export function Sidebar({ pathname }: SidebarProps) {
  return (
    <aside className="flex w-full shrink-0 flex-col justify-between gap-9 md:w-[194px] md:self-stretch md:py-[100px]">
      <div className="flex flex-col gap-9">
        <Logo />
        <div className="flex flex-col gap-4">
          <nav className="flex flex-col gap-1.5" aria-label="Primary">
            {navItems.map((item) => {
              const isSoon = Boolean(item.soon);
              // Soon items use placeholder href "/"; never treat them as active on home.
              const active =
                !isSoon &&
                (item.label === "Home"
                  ? pathname === "/"
                  : pathname === item.href);
              const content = (
                <span
                  className={[
                    sidebarNavLink,
                    active ? "font-season-sans-500" : "font-season-sans-450",
                    active ? "text-black" : "text-[var(--color-nav-muted)]",
                    isSoon
                      ? "cursor-default"
                      : "hover:pl-1 hover:text-black",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              );
              if (isSoon) {
                return (
                  <span key={item.label} className="block">
                    {content}
                  </span>
                );
              }
              return (
                <Link key={item.label} href={item.href as Route} className="block">
                  {content}
                </Link>
              );
            })}
          </nav>
          <Divider className="max-w-[100px] self-start" />
          <div className="flex flex-col gap-4">
            <p
              className={`${sidebarNavColumnText} tracking-[-0.01em] text-[var(--color-nav-muted)]`}
            >
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={`${sidebarNavColumnText} inline-flex items-center gap-2 text-black transition-opacity hover:opacity-45`}
                >
                  <SocialIcon network={s.network} className="size-4 text-current" />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p
        className={sidebarFooterText}
      >
        @attari2026
      </p>
    </aside>
  );
}

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  trailing?: React.ReactNode;
  /** Figma: hero row 36px; CTA card inner 32px */
  size?: "hero" | "compact";
};

export function PrimaryButton({
  children,
  href,
  variant = "solid",
  trailing,
  size = "hero",
}: PrimaryButtonProps) {
  const height =
    size === "compact"
      ? "h-8 min-h-8 gap-1.5 text-[14px] font-medium leading-4"
      : "h-9 min-h-9 gap-1.5 text-[14px] font-medium leading-5";

  const padX =
    variant === "solid" && trailing
      ? "pl-3.5 pr-2.5"
      : variant === "solid"
        ? "px-3.5"
        : "px-3.5";

  const base = [
    "font-cta inline-flex items-center justify-center rounded-full py-2",
    height,
    padX,
    variant === "solid"
      ? "bg-black text-white"
      : "bg-black/10 text-black",
  ].join(" ");

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
        {trailing}
      </a>
    );
  }
  return (
    <button type="button" className={base}>
      {children}
      {trailing}
    </button>
  );
}
