"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col items-start justify-center gap-4 px-5">
      <h1 className="text-[20px] font-medium text-black">Something went wrong</h1>
      <p className="text-[14px] leading-5 text-[var(--color-muted)]">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="font-cta rounded-full bg-black px-3.5 py-2 text-[14px] font-medium text-white"
      >
        Try again
      </button>
    </div>
  );
}
