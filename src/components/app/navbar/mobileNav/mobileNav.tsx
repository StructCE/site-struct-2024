import { Accordion, AccordionItem } from "~/components/ui/accordion";

export function MobileNav({ children }: React.PropsWithChildren) {
  return (
    <Accordion
      className="z-20 flex w-full justify-between border-none sm:hidden"
      type="single"
      collapsible
    >
      <AccordionItem className="w-full border-none" value="menu">
        {children}
      </AccordionItem>
    </Accordion>
  );
}
