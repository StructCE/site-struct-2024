import { Cog, Cpu, Lightbulb, ScreenShare, Smartphone } from "lucide-react";
import {
  ServiceCard,
  ServiceCardDescription,
  ServiceCardHeader,
  ServiceCardHeaderIcon,
  ServiceCardHeaderTitle,
} from "./servicesCard";
import { ServicesContainer } from "./servicesContainer";
import { ServicesTitle } from "./servicesTitle";

export default function Services() {
  return (
    <>
      <section
        id="servicos"
        className="m-0 flex w-full items-center justify-center p-0"
      >
        <div className="w-[85%] py-8 sm:py-16 lg:py-32">
          {/* titulo */}
          <ServicesTitle />
          {/* caixas */}
          <ServicesContainer>
            <ServiceCard>
              <ServiceCardHeader>
                <ServiceCardHeaderIcon>
                  <ScreenShare />
                </ServiceCardHeaderIcon>
                <ServiceCardHeaderTitle>Websites</ServiceCardHeaderTitle>
              </ServiceCardHeader>
              <ServiceCardDescription>
                Desenvolvemos websites modernos e responsivos que não apenas
                cativam visualmente, mas também oferecem uma experiência de
                usuário intuitiva. Criamos sites personalizados que refletem a
                identidade única de cada cliente.
              </ServiceCardDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceCardHeader>
                <ServiceCardHeaderIcon>
                  <Cog />
                </ServiceCardHeaderIcon>
                <ServiceCardHeaderTitle>Sistemas Web</ServiceCardHeaderTitle>
              </ServiceCardHeader>
              <ServiceCardDescription>
                Desenvolvemos sistemas web sob medida para atender às
                necessidades específicas do seu negócio. Otimize seus processos
                internos e melhore a eficiência operacional com nossos sistemas
                web personalizados.
              </ServiceCardDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceCardHeader>
                <ServiceCardHeaderIcon>
                  <Smartphone />
                </ServiceCardHeaderIcon>
                <ServiceCardHeaderTitle>Aplicativos</ServiceCardHeaderTitle>
              </ServiceCardHeader>
              <ServiceCardDescription>
                Desenvolvemos soluções móveis intuitivas e envolventes para iOS
                e Android. Transformamos conceitos em realidade digital,
                proporcionando uma experiência única aos usuários.
              </ServiceCardDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceCardHeader>
                <ServiceCardHeaderIcon>
                  <Lightbulb />
                </ServiceCardHeaderIcon>
                <ServiceCardHeaderTitle>Consultoria</ServiceCardHeaderTitle>
              </ServiceCardHeader>
              <ServiceCardDescription>
                Oferecemos orientação especializada em estratégias digitais,
                arquitetura de informação, e otimização de desempenho. Visamos
                impulsionar o sucesso do seu empreendimento online, fornecendo
                insights valiosos e soluções sob medida para seus desafios.
              </ServiceCardDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceCardHeader>
                <ServiceCardHeaderIcon>
                  <Cpu />
                </ServiceCardHeaderIcon>
                <ServiceCardHeaderTitle>Automação</ServiceCardHeaderTitle>
              </ServiceCardHeader>
              <ServiceCardDescription>
                Desenvolvemos soluções de automação personalizadas para otimizar
                processos, melhorar a produtividade e reduzir erros. Nossas
                soluções de automação são projetadas para simplificar as tarefas
                repetitivas.
              </ServiceCardDescription>
            </ServiceCard>
          </ServicesContainer>
        </div>
      </section>
    </>
  );
}
