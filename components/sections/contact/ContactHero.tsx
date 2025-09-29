"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { SiInstagram, SiTiktok, SiFacebook, SiYoutube } from "react-icons/si";
import { brand } from "@/lib/config";

export function ContactHero() {
  const whatsapp = brand.contact.whatsapp;
  const whatsappCommunity = brand.contact.whatsappCommunity;
  const email = brand.contact.email;
  const socials = [
    {
      label: "Instagram",
      href: brand.social?.instagram || "#",
      icon: SiInstagram,
      className: "bg-[#E4405F] text-white hover:brightness-95",
    },
    {
      label: "TikTok",
      href: brand.social?.tiktok || "#",
      icon: SiTiktok,
      className: "bg-black text-white hover:brightness-95",
    },
    {
      label: "Facebook",
      href: brand.social?.facebook || "#",
      icon: SiFacebook,
      className: "bg-[#1877F2] text-white hover:brightness-95",
    },
    {
      label: "YouTube",
      href: brand.social?.youtube || "#",
      icon: SiYoutube,
      className: "bg-[#FF0000] text-white hover:brightness-95",
    },
  ];

  return (
    <section>
      <Container className="py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact BRAVY
          </h1>
          <p className="mt-3 text-slate-700">
            Questions about the Physical Module, the FEA demo, or partnerships?
            We’re happy to help. Reach us on WhatsApp for quick replies, or send
            an email for detailed inquiries.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card p-6"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-bravy-accent">
              <Phone size={18} />
            </div>
            <h3 className="text-lg font-semibold">Chat via WhatsApp</h3>
            <p className="mt-1 text-sm text-slate-700">
              The fastest way to get practical info about prices, schedules,
              availability, and communities on WhatsApp.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button href={whatsapp} iconRight={<ArrowUpRight size={16} />}>
                Open WhatsApp
              </Button>
              <Button
                href={whatsappCommunity}
                variant="outline"
                className="ml-3"
                iconRight={<ArrowUpRight size={16} />}
              >
                Community
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="card p-6"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-bravy-accent">
              <Mail size={18} />
            </div>
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p className="mt-1 text-sm text-slate-700">
              Prefer a written trail or need attachments? Email us and we’ll
              reply within 1–2 business days.
            </p>
            <div className="mt-4">
              <Button
                href={`mailto:${email}`}
                iconRight={<ArrowUpRight size={16} />}
              >
                Write an Email
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-center"
        >
          <p className="text-sm text-slate-700">
            Follow BRAVY for tips, updates, and event announcements:
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold shadow-sm ${s.className}`}
                  aria-label={`Follow us on ${s.label}`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span>{s.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
