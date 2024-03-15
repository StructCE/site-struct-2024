/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";
import { Resend } from "resend";

import PedidoDeOrçamento from "../../../components/emails/page";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const { nome, email } = await request.json();

  try {
    await resend.emails.send({
      from: email,
      to: "sitestruct2024@gmail.com",
      subject: "Orçamento",
      react: PedidoDeOrçamento({
        nome,
      }),
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      },
    );
  }
}
