"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  Gamepad2,
  MessageCircle,
  NotebookPen,
  Brain,
  ScanFace,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

function InnovItem({
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
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 text-bravy-accent">
        {icon}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-700">{desc}</p>
    </motion.div>
  );
}

export function ProductInnovation() {
  return (
    <section id="innovation" className="relative">
      <Container className="py-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What’s Innovative about BRAVY?
          </h2>
          <p className="mt-3 text-slate-700">
            A hybrid learning experience that is structured, measurable, and
            motivating.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <InnovItem
            icon={<Search size={20} />}
            title="Need-Based Content"
            desc="Lessons are built from learner needs analysis—relevant, not generic."
          />
          <InnovItem
            icon={<Gamepad2 size={20} />}
            title="Gamified & Role-Play"
            desc="Quests, mini-games, and role-play scenarios make practice engaging."
          />
          <InnovItem
            icon={<MessageCircle size={20} />}
            title="Encouraging Tone"
            desc="Warm, supportive prompts that reduce pressure and build confidence."
          />
          <InnovItem
            icon={<NotebookPen size={20} />}
            title="Guided Self-Reflection"
            desc="FLCAS-based reflection sheets help track and lower speaking anxiety."
          />
          <InnovItem
            icon={
              <span className="inline-flex">
                <ScanFace size={20} />
              </span>
            }
            title="AI-Assisted Confidence"
            desc="FEA-powered signals estimate comfort levels and guide next steps."
          />
          <InnovItem
            icon={<TrendingUp size={20} />}
            title="Beyond Scores"
            desc="Milestones track fluency and confidence growth—not just numeric scores."
          />
        </div>
      </Container>
    </section>
  );
}
