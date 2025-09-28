"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function EventsHero() {
  return (
    <section className="relative">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Events
          </h1>
          <p className="mt-3 text-slate-700">
            See our upcoming events and browse past event documentation.
          </p>
        </div>
      </Container>
    </section>
  );
}
