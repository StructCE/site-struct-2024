"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export function FAQAccordion() {
  return (
    <motion.div
      initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
      exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex w-[90%] items-center justify-center  [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px]"
    >
      <Accordion
        type="single"
        collapsible
        className="flex w-[90%] flex-col gap-3 font-nunito"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="mb-0 flex rounded-xl bg-fundo-1/50 px-6 py-3 text-start text-[20px] font-bold hover:border-struct-7/25 hover:no-underline">
            Como é o processo de desenvolvimento de um software com a sua
            empresa?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 font-semibold">
            Nosso processo inclui várias etapas: definição de escopo, design,
            desenvolvimento, testes e lançamento. Trabalhamos de forma
            colaborativa com nossos clientes em cada etapa para garantir que o
            software atenda às suas expectativas e objetivos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="mb-0 flex rounded-xl bg-fundo-1/50 px-6 py-3 text-start text-[20px] font-bold hover:border-struct-7/25 hover:no-underline">
            Vocês oferecem manutenção e suporte após o lançamento de um site?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 font-semibold">
            Sim, oferecemos planos de manutenção e suporte para garantir que seu
            site permaneça seguro e funcionando perfeitamente após o lançamento.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="mb-0 flex rounded-xl bg-fundo-1/50 px-6 py-3 text-start text-[20px] font-bold hover:border-struct-7/25 hover:no-underline">
            Como a automação de processos pode beneficiar meu negócio?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 font-semibold">
            A automação de processos pode aumentar significativamente a
            eficiência do seu negócio, reduzindo o tempo e os custos associados
            a tarefas repetitivas, minimizando erros e liberando sua equipe para
            se concentrar em atividades mais estratégicas e de maior valor.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-none">
          <AccordionTrigger className="mb-0 flex rounded-xl bg-fundo-1/50 px-6 py-3 text-start text-[20px] font-bold hover:border-struct-7/25 hover:no-underline">
            Quanto tempo leva para desenvolver um software?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 font-semibold">
            O tempo de desenvolvimento pode variar dependendo da complexidade do
            software. Um site simples pode levar de 4 a 6 semanas, enquanto
            sites mais complexos podem levar de 3 a 6 meses ou mais.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}
