import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const FAQData = [
  {
    question:
      "Como é o processo de desenvolvimento de um software com a sua empresa?",
    answer:
      "Nosso processo inclui várias etapas: definição de escopo, design, desenvolvimento, testes e lançamento. Trabalhamos de forma colaborativa com nossos clientes em cada etapa para garantir que o software atenda às suas expectativas e objetivos.",
    id: 1,
  },
  {
    question:
      "Vocês oferecem manutenção e suporte após o lançamento de um site?",
    answer:
      "Sim, oferecemos planos de manutenção e suporte para garantir que seu site permaneça seguro e funcionando perfeitamente após o lançamento.",
    id: 2,
  },
  {
    question: "Como a automação de processos pode beneficiar meu negócio?",
    answer:
      "A automação de processos pode aumentar significativamente a eficiência do seu negócio, reduzindo o tempo e os custos associados a tarefas repetitivas, minimizando erros e liberando sua equipe para se concentrar em atividades mais estratégicas e de maior valor.",
    id: 3,
  },
  {
    question: "Quanto tempo leva para desenvolver um software?",
    answer:
      "O tempo de desenvolvimento pode variar dependendo da complexidade do software. Um site simples pode levar de 4 a 6 semanas, enquanto sites mais complexos podem levar de 3 a 6 meses ou mais.",
    id: 4,
  },
];

export function FAQAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex w-[90%] flex-col gap-3 font-nunito"
    >
      {FAQData.map((item) => (
        <AccordionItem
          value={`${item.id}`}
          className="border-none"
          key={item.id}
        >
          <AccordionTrigger className="mb-0 flex rounded-xl bg-fundo-1/50 px-6 py-3 text-start text-[16px] font-bold hover:border-struct-7/25 hover:no-underline sm:text-[20px]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 font-semibold">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
