export function MainColumn({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-0 min-w-0 w-full flex-1 flex-col md:max-w-[540px] md:min-w-0 md:flex-1 md:py-[100px]">
      <div
        key={pathname}
        className="flex min-h-0 w-full min-w-0 flex-1 flex-col gap-8"
      >
        {children}
      </div>
    </main>
  );
}
