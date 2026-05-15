import { MainColumn } from "@/components/MainColumn";
import { Sidebar } from "@/components/Sidebar";
import { WeatherWidget } from "@/components/WeatherWidget";

export function SiteShell({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname: string;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-5 py-8 md:px-5 md:py-0">
      <div className="mx-auto flex min-h-0 w-full max-w-[1024px] flex-1 flex-col gap-8 md:min-h-screen md:flex-row md:items-stretch md:gap-9 md:py-0">
        <Sidebar pathname={pathname} />
        <div className="md:hidden">
          <WeatherWidget />
        </div>
        <MainColumn pathname={pathname}>{children}</MainColumn>
        <div className="hidden shrink-0 md:block md:w-[194px] md:py-[100px]">
          <WeatherWidget />
        </div>
      </div>
    </div>
  );
}
