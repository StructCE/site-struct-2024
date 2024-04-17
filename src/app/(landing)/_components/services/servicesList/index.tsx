import {
  ServiceCard,
  ServiceCardDescription,
  ServiceCardHeader,
  ServiceCardHeaderIcon,
  ServiceCardHeaderTitle,
} from "./servicesCard";
import { ServicesListContainer } from "./servicesListContainer";
import { Cog, Cpu, Lightbulb, ScreenShare, Smartphone } from "lucide-react";

export const servicesData = [
  {
    icon: <ScreenShare />,
    title: "Websites",
    description:
      "Desenvolvemos websites modernos e responsivos que não apenas cativam visualmente, mas também oferecem uma experiência de usuário intuitiva. Criamos sites personalizados que refletem a identidade única de cada cliente.",
    id: 1,
  },
  {
    icon: <Cog />,
    title: "Sistemas Web",
    description:
      "Desenvolvemos sistemas web sob medida para atender às necessidades específicas do seu negócio. Otimize seus processos internos e melhore a eficiência operacional com nossos sistemas web personalizados.",
    id: 2,
  },
  {
    icon: <Smartphone />,
    title: "Aplicativos",
    description:
      "Desenvolvemos soluções móveis intuitivas e envolventes para iOS e Android. Transformamos conceitos em realidade digital, proporcionando uma experiência única aos usuários.",
    id: 3,
  },
  {
    icon: <Lightbulb />,
    title: "Consultoria",
    description:
      "Oferecemos orientação especializada em estratégias digitais, arquitetura de informação, e otimização de desempenho. Visamos impulsionar o sucesso do seu empreendimento online, fornecendo insights valiosos e soluções sob medida para seus desafios.",
    id: 4,
  },
  {
    icon: <Cpu />,
    title: "Automação",
    description:
      "Desenvolvemos soluções de automação personalizadas para otimizar processos, melhorar a produtividade e reduzir erros. Nossas soluções de automação são projetadas para simplificar as tarefas repetitivas.",
    id: 5,
  },
];

export function ServicesList() {
  return (
    <ServicesListContainer>
      {servicesData.map((service) => (
        <ServiceCard key={service.id}>
          <ServiceCardHeader>
            <ServiceCardHeaderIcon>{service.icon}</ServiceCardHeaderIcon>
            <ServiceCardHeaderTitle>{service.title}</ServiceCardHeaderTitle>
          </ServiceCardHeader>
          <ServiceCardDescription>{service.description}</ServiceCardDescription>
        </ServiceCard>
      ))}
    </ServicesListContainer>
  );
}
