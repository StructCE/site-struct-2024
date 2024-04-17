import React from "react";
import { cn } from "~/lib/utils";

function StackCardTitle({ children }: { children: string }) {
  return (
    <span className="font-oxanium text-[11px] sm:text-[16px] lg:text-[18px]">
      {children}
    </span>
  );
}

function StackCardIcon({
  children,
}: {
  children: React.ReactElement<{ className?: string }>;
}) {
  const updatedChildren = React.cloneElement(children, {
    className: cn(
      "h-[20px] w-[20px] text-struct-7 transition delay-75 ease-in-out hover:text-struct-1 sm:h-[36px] sm:w-[36px] lg:h-[46px] lg:w-[46px]",
      children.props.className,
    ),
  });

  return updatedChildren;
}

function StackCard({ children }: React.PropsWithChildren) {
  return <div className="flex items-center gap-1 sm:gap-2">{children}</div>;
}

export { StackCard, StackCardIcon, StackCardTitle };
