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

export type ProjectTagIcon = "devices" | "write" | "apple" | "test-tube";

export type Project = {
  title: string;
  tag: string;
  tagIcon: ProjectTagIcon;
  preview: "blackrabbit" | "inboxed" | "undercut" | "ocular";
};

export const projects: Project[] = [
  {
    title: "Blackrabbit",
    tag: "Website",
    tagIcon: "devices",
    preview: "blackrabbit",
  },
  {
    title: "Inboxed",
    tag: "Branding",
    tagIcon: "write",
    preview: "inboxed",
  },
  {
    title: "Undercut",
    tag: "iOS Dev",
    tagIcon: "apple",
    preview: "undercut",
  },
  {
    title: "Ocular",
    tag: "Concept",
    tagIcon: "test-tube",
    preview: "ocular",
  },
];

export type AppCard = {
  name: string;
  description: string;
  cta: string;
  href?: string;
  status?: "live" | "soon";
  icon: "undercut" | "heymac" | "opentide" | "clippity";
};

export const appCards: AppCard[] = [
  {
    name: "Undercut",
    description: "Fantasy Formula One",
    cta: "Download",
    href: "#",
    status: "live",
    icon: "undercut",
  },
  {
    name: "HeyMac",
    description: "Your personal MacOS assistant",
    cta: "Coming soon",
    status: "soon",
    icon: "heymac",
  },
  {
    name: "Opentide",
    description: "Making tax simple",
    cta: "Coming soon",
    status: "soon",
    icon: "opentide",
  },
  {
    name: "Clippity",
    description: "Create clips from any web video",
    cta: "Coming soon",
    status: "soon",
    icon: "clippity",
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
