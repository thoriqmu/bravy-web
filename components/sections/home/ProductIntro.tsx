"use client";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BookOpen, Smartphone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="inline-flex items-start gap-2 text-sm text-slate-700">
      <CheckCircle2 size={16} className="mt-0.5 text-bravy-accent" />
      <span className="[&_strong]:block sm:[&_strong]:inline sm:[&_strong]:mr-1 [&_strong]:mb-0.5 sm:[&_strong]:mb-0">
        {children}
      </span>
    </li>
  );
}

export function ProductIntro() {
  return (
    <section id="product" className="relative">
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            The BRAVY Package: Module + App
          </h2>
          <div className="relative mx-auto w-3/5 overflow-hidden">
            <div className="aspect-[1/1] w-full">
              <Image
                src="/product-intro.png"
                alt="BRAVY Package — Physical Module & Android App"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-slate-700">
            Start with the structured Physical Module, then deepen practice with
            the FEA‑powered app.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="card p-6"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-md font-semibold text-bravy-primary">
              <BookOpen size={16} /> Physical Module — Primary Product
            </div>
            <ul className="grid gap-2 text-sm text-slate-700">
              <Bullet>
                <strong>Speaking Material:</strong> Learn structured speaking
                lessons.
              </Bullet>
              <Bullet>
                <strong>Grammar Bite:</strong> Quick grammar tips for daily use.
              </Bullet>
              <Bullet>
                <strong>Self-Reflection Sheet:</strong> Track and reflect on
                your learning progress.
              </Bullet>
              <Bullet>
                <strong>Progress Tracker:</strong> Monitor your achievements
                step by step.
              </Bullet>
              <Bullet>
                <strong>Interactive Learning Kit:</strong> Engage with fun and
                practical exercises.
              </Bullet>
            </ul>
            <div className="mt-4 flex gap-3">
              <Button href="/product#module">Module Details</Button>
              <Button href="/product#pricing" variant="outline">
                See Pricing
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-md font-semibold text-bravy-primary">
              <Smartphone size={16} /> Android App — Companion
            </div>
            <ul className="grid gap-2 text-sm text-slate-700">
              <Bullet>
                <strong>FEA Feature:</strong> Face your confidence with guided
                practice.
              </Bullet>
              <Bullet>
                <strong>Community:</strong> Connect and practice with other
                learners.
              </Bullet>
              <Bullet>
                <strong>Animation Materials:</strong> Access digital lessons
                anytime, anywhere.
              </Bullet>
              <Bullet>
                <strong>Interactive Exercises:</strong> Practice speaking
                through interactive tasks.
              </Bullet>
              <Bullet>
                <strong>Gamification:</strong> Learn with fun challenges,
                points, and rewards.
              </Bullet>
            </ul>
            <div className="mt-4 flex gap-3">
              <Button href="/product#app">App Features</Button>
              <Button href="/demo" variant="outline">
                Try Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
