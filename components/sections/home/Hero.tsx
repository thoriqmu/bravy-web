"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Sparkles, Play, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="hero" className="relative">
      <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bravy-accent/80 bg-white/80 px-3 py-1 text-xs font-medium text-bravy-deep shadow-sm">
            <Sparkles size={14} /> Multimodal Learning: Physical Module + :
            Android App
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Speak Bravely with <span className="text-bravy-primary">BRAVY</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Our <strong>Physical Module</strong> is your structured,
            anxiety‑safe starting point for 2‑minute speaking drills—paired with
            an <strong>Android App</strong> powered by <em>FEA</em> to quantify
            confidence and guide practice.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/product#module" iconRight={<ArrowRight size={16} />}>
              Buy the Module
            </Button>
            <Button
              href="/demo"
              variant="outline"
              iconRight={<Play size={16} />}
            >
              Try 15s Demo
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-dim">
            <ShieldCheck size={16} /> Clear consent • Private practice •
            Transparent data policy
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
