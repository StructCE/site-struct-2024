"use client";
import { useScrollProgress } from "~/hooks/useScrollNavbar";
import { ScrollProgressBar } from "./scrollProgressBar";
import { cn } from "~/lib/utils";

export function NavContainer({ children }: React.PropsWithChildren) {
  const scrollProgress = useScrollProgress();

  return (
    <nav
      className={cn(
        "fixed z-10 flex h-[96px] w-screen items-center justify-center transition-all ease-in",
        scrollProgress > 1 &&
          "h-[72px] bg-fundo-3/70 backdrop-blur-sm sm:h-[80px]",
      )}
    >
      {children}
      <ScrollProgressBar scrollProgress={scrollProgress} />
    </nav>
  );
}
