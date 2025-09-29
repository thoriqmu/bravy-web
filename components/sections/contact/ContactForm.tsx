// components/sections/contact/ContactForm.tsx
"use client";
import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function ContactForm() {
  const [pending, setPending] = React.useState(false);
  const [ok, setOk] = React.useState<null | boolean>(null);
  const [msg, setMsg] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      subject: (formData.get("subject") || "").toString().trim(),
      message: (formData.get("message") || "").toString().trim(),
      // honeypot (should be empty):
      website: (formData.get("website") || "").toString().trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setOk(false);
      setMsg("Please fill in your name, a valid email, and your message.");
      return;
    }

    setPending(true);
    setOk(null);
    setMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setOk(true);
        setMsg(
          "Thanks! Your message has been sent. We’ll get back to you soon."
        );
        form.reset();
      } else {
        setOk(false);
        setMsg(
          data?.error || "Failed to send message. Please try again later."
        );
      }
    } catch {
      setOk(false);
      setMsg("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="form">
      <Container className="py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <div className="card p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-slate-700">
              Use the form below and we’ll reply via email. For urgent queries,
              try WhatsApp from the cards above.
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-600">
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-600">
                  Subject (optional)
                </label>
                <input
                  name="subject"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400"
                  placeholder="About BRAVY module / demo / partnership..."
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-600">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full resize-y rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400"
                  placeholder="Tell us what you need help with..."
                />
              </div>

              {/* Honeypot for bots */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="flex items-center gap-3">
                <Button>{pending ? "Sending..." : "Send Message"}</Button>
                {ok === true && (
                  <span className="text-sm text-green-700">✓ {msg}</span>
                )}
                {ok === false && (
                  <span className="text-sm text-red-700">✕ {msg}</span>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
