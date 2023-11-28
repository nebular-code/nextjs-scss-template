import { NextResponse } from "next/server";
import { sendMail } from "@/lib/nodemailer/mail-service";

export async function POST(request: Request) {
  const body = await request.json();
  let { name, email, phone, message } = body;

  const emailText = `Placeholder text.`;
  const emailSubject = `SUBJECT`;

  try {
    await sendMail(
      process.env.NODEMAILER_EMAIL,
      process.env.NODEMAILER_PW,
      emailSubject,
      process.env.NODEMAILER_EMAIL,
      emailText
    );

    return NextResponse.json({ message: "Email Delivered" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
