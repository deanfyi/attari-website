import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col items-start justify-center gap-4 px-5">
      <h1 className="font-season-mix text-[36px] leading-none text-black">Page not found</h1>
      <p className="text-[14px] leading-5 text-[var(--color-muted)]">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="font-cta rounded-full bg-black px-3.5 py-2 text-[14px] font-medium text-white"
      >
        Back home
      </Link>
    </div>
  );
}
