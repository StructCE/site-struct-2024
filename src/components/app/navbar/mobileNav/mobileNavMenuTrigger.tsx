import { AccordionTrigger } from "~/components/ui/accordion";

export function MobileNavMenuTrigger({ children }: React.PropsWithChildren) {
  return (
    <AccordionTrigger className="text-struct-7">{children}</AccordionTrigger>
  );
}
