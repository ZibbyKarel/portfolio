import { NextResponse } from "next/server";
import { Resend } from "resend";

const INQUIRY_TYPES = new Set(["job", "website", "photography", "other"]);
const MAX_LENGTHS = { name: 200, email: 320, message: 5000 };

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message, inquiryType, company } = (body ?? {}) as {
    name?: string;
    email?: string;
    message?: string;
    inquiryType?: string;
    company?: string;
  };

  // Honeypot: real users never fill this hidden field.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (
    !name?.trim() ||
    !email?.trim() ||
    !message?.trim() ||
    !inquiryType ||
    !INQUIRY_TYPES.has(inquiryType) ||
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email delivery is not configured" },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "zibbykarel@gmail.com",
      replyTo: email,
      subject: `[portfolio] ${inquiryType} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiryType}\n\n${message}`,
    });
    if (error) {
      console.error("contact: resend error", error);
      return NextResponse.json({ error: "Sending failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact: unexpected error", err);
    return NextResponse.json({ error: "Sending failed" }, { status: 502 });
  }
}
