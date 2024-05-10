import { AccordionContent } from "~/components/ui/accordion";

export function MobileNavMenuContent({ children }: React.PropsWithChildren) {
  return (
    <AccordionContent className="flex h-[420px] w-full flex-col items-center justify-end gap-2 bg-fundo-3">
      {children}
    </AccordionContent>
  );
}
