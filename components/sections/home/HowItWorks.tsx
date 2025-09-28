"use client";
import { motion } from "framer-motion";
import { Camera, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HowItWorks() {
  const steps = [
    {
      icon: <Camera size={18} />,
      title: "Record 15–120 seconds",
      desc: "Choose the 15s demo or the 2‑minute drill.",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Get Insights",
      desc: "See confidence score & dominant AUs.",
    },
    {
      icon: <CheckCircle2 size={18} />,
      title: "Follow Guidance",
      desc: "Do focused exercises & track weekly progress.",
    },
  ];
  return (
    <section id="how" className="relative">
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-700">
            Three simple steps to speak more confidently.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card p-6"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-bravy-accent">
                {s.icon}
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
