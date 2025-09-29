// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { brand } from "@/lib/config";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, website } = await req.json();

    // simple validation
    if (website) {
      // honeypot triggered — pretend OK
      return NextResponse.json({ ok: true });
    }
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const to =
      process.env.CONTACT_TO ||
      brand.contact?.email ||
      "bravyourvoice@gmail.com";
    const fromName = process.env.EMAIL_FROM_NAME || "BRAVY Website";
    const fromAddr = process.env.SMTP_USER || "no-reply@example.com";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif">
        <h2>New Contact from BRAVY Website</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        ${subject ? `<p><b>Subject:</b> ${escapeHtml(subject)}</p>` : ""}
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:10px;border:1px solid #e5e7eb">${escapeHtml(
          message
        )}</pre>
      </div>`;

    await transporter.sendMail({
      to,
      from: `"${fromName}" <${fromAddr}>`,
      replyTo: email,
      subject:
        subject && subject.trim()
          ? `[BRAVY] ${subject}`
          : `[BRAVY] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${
        subject || "-"
      }\n\n${message}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT_API_ERROR:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
