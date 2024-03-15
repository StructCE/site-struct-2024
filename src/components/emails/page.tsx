import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface PedidodeOrçamentoProps {
  nome: string;
}

export default function PedidoDeOrçamento({ nome }: PedidodeOrçamentoProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={paragraphContent}>
            <Text style={heading}>Pedido de Orçamento</Text>
            <Text style={paragraph}>Nome: {nome}</Text>
            <Text style={paragraph}>Email: </Text>
            <Text style={paragraph}>Telefone: </Text>
            <Text style={paragraph}>Tipo de Serviço: </Text>
            <Text style={paragraph}>Descrição do Projeto: </Text>
          </Section>
          <Section style={paragraphContent}>
            <Hr style={hr} />
          </Section>
          <Section style={paragraphContent}>
            <Text style={logo}>{"{struct}"}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  margin: "2rem",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const heading = {
  fontSize: "32px",
  lineHeight: "40px",
  fontWeight: "700",
  color: "#2DA2FF",
  marginTop: "2rem",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "black",
  marginTop: "1rem",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "0",
};

const logo = {
  fontSize: "32px",
  lineHeight: "32px",
  fontWeight: "700",
  color: "#2DA2FF",
  display: "flex",
  margin: "auto",
  padding: "1rem",
  width: "110px",
};
