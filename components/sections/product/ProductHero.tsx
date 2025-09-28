"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ProductHero() {
  return (
    <section className="relative">
      <Container className="py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bravy-accent/80 bg-white/80 px-3 py-1 text-xs font-medium text-bravy-deep shadow-sm">
            <Sparkles size={14} /> BRAVY combines a multimodal learning system:
            Physical Module + Android App
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              BRAVY Product
            </h1>
            <p className="mt-3 text-slate-700">
              Our primary product is the <strong>Physical Module</strong>,
              enhanced by an
              <strong> Android App</strong> powered by Facial Expression
              Analysis (FEA).
            </p>
            <div className="relative mx-auto w-2/5 overflow-hidden">
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
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
