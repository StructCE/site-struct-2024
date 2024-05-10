import { Children } from "react";
import { cn } from "~/lib/utils";

export function LinksList({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <ul
      className={cn(
        "items-center font-oxanium text-[14px] font-semibold text-struct-7 sm:text-[20px]",
        className,
      )}
    >
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}
