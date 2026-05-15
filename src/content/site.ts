import type { Route } from "next";

export type NavItem = {
  label: string;
  href: Route;
  soon?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Our Apps", href: "/apps" },
  { label: "Writing (soon)", href: "/", soon: true },
  { label: "Store (soon)", href: "/", soon: true },
];

export type SocialNetwork = "bluesky" | "twitter" | "email";

export const socialLinks: {
  label: string;
  href: string;
  network: SocialNetwork;
}[] = [
  { label: "Bluesky", href: "https://bsky.app", network: "bluesky" },
  { label: "Twitter", href: "https://twitter.com", network: "twitter" },
  { label: "Email", href: "mailto:hello@attari.studio", network: "email" },
];

export const projects = [
  {
    title: "Blackrabbit",
    tag: "Website",
    imageClass: "bg-zinc-900",
  },
  {
    title: "Inboxed",
    tag: "Branding",
    imageClass: "bg-gradient-to-br from-amber-200 to-orange-400",
  },
  {
    title: "Undercut",
    tag: "iOS Dev",
    imageClass: "bg-gradient-to-br from-emerald-600 to-teal-900",
  },
  {
    title: "Ocular",
    tag: "Concept",
    imageClass: "bg-gradient-to-br from-violet-500 to-indigo-900",
  },
];

export type AppCard = {
  name: string;
  description: string;
  cta: string;
  href?: string;
  status?: "live" | "soon";
};

export const appCards: AppCard[] = [
  {
    name: "Undercut",
    description: "Fantasy Formula One",
    cta: "Try Undercut",
    href: "#",
    status: "live",
  },
  {
    name: "HeyMac",
    description: "Your personal MacOS assistant",
    cta: "Coming soon",
    status: "soon",
  },
  {
    name: "Opentide",
    description: "Making tax simple",
    cta: "Coming soon",
    status: "soon",
  },
  {
    name: "Clippity",
    description: "Create clips from any web video",
    cta: "Coming soon",
    status: "soon",
  },
];

export const appsHero = {
  title: "Our apps are made with dedication to our users",
  description:
    "We build applications that solve real problems or design them around fun and engaging experinces.",
};

export const appsBanner = {
  title: "Undercut is now live",
  cta: "Try Undercut",
  href: "#",
};
