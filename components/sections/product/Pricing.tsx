"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/config";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

export function Pricing() {
  const shopee = brand.links?.shopee || "#"; // replace with actual link in lib/config.ts

  return (
    <section id="pricing" className="relative">
      <Container className="py-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Pricing</h2>
          <p className="mt-3 text-slate-700">
            Get the BRAVY package—Physical Module + Android App companion.
          </p>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3, // minimal 30% elemen masuk viewport
            margin: "0px 0px -20% 0px", // cegah auto-trigger kalau di atas fold
          }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <div className="card p-8">
            <div className="flex flex-col items-center gap-3">
              <div className="text-sm uppercase tracking-widest text-slate-500">
                Launch price
              </div>
              <div className="text-4xl font-extrabold">Rp160.000</div>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                <li>• Physical Module (primary product)</li>
                <li>• Android App companion (FEA demo & essentials)</li>
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button href={shopee}>Buy on Shopee</Button>
                <Link
                  href="/contact"
                  className="text-sm text-slate-700 underline-offset-4 hover:underline"
                >
                  Need help? Contact us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
