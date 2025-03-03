import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    const data = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_EMAIL_FROM!,
      to: process.env.NEXT_PUBLIC_EMAIL_TO!,
      subject: `Contact Form: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
} 