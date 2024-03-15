import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function PedidoDeOrçamento() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={paragraphContent}>
            <Text style={heading}>Pedido de Orçamento</Text>
            <Text style={paragraph}>Nome: </Text>
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
  margin: "2rem 0",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "black",
  margin: "1rem",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "12px 0",
};

const logo = {
  fontSize: "32px",
  lineHeight: "40px",
  fontWeight: "700",
  color: "#2DA2FF",
  margin: "1rem auto",
};
