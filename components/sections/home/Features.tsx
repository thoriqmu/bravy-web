"use client";
import { motion } from "framer-motion";
import {
  Camera,
  Trophy,
  Users,
  Sparkles,
  BookOpen,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="card p-6"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 text-bravy-accent">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-700">{desc}</p>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative">
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything You Need to Build Confidence
          </h2>
          <p className="mt-3 text-slate-700">
            Balanced essentials across the Module and the App—so practice stays
            structured, measurable, and fun.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* 3 — MODULE */}
          <FeatureCard
            icon={<BookOpen size={20} />}
            title="Structured Warm‑Ups"
            desc="Step‑by‑step drills designed to reduce anxiety and prime your voice."
          />
          <FeatureCard
            icon={<Layers size={20} />}
            title="2‑Minute Templates"
            desc="Ready‑to‑use monologue/dialogue templates with scoring rubrics."
          />
          <FeatureCard
            icon={<Sparkles size={20} />}
            title="Flash‑Cards & QR Content"
            desc="Quick grammar/vocab refreshers with QR links to extended materials."
          />
          {/* 3 — APP */}
          <FeatureCard
            icon={<Camera size={20} />}
            title="FEA Confidence Meter"
            desc="Quantify confidence via facial action units during practice."
          />
          <FeatureCard
            icon={<Trophy size={20} />}
            title="Progress & Gamification"
            desc="Weekly tracking, streaks, badges, and Bravy Points to stay consistent."
          />
          <FeatureCard
            icon={<Users size={20} />}
            title="Community Challenges"
            desc="Friendly challenges and leaderboards to keep you motivated."
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/product">See Product & Pricing</Button>
        </div>
      </Container>
    </section>
  );
}
