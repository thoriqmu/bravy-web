"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Name (link to home) */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Place your file in /public as bravy-logo.png */}
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white">
              <Image
                src="/bravy-logo.png"
                alt="BRAVY Logo"
                fill
                priority
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wider text-slate-900">
                BRAVY_ID
              </div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">
                Speak Bravely
              </div>
            </div>
          </Link>

          {/* Right: Product, Events, Contact, Try FEA */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/product"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Product
            </Link>
            <Link
              href="/events"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Contact
            </Link>
            <Button href="/demo" variant="solid" iconRight={<Play size={16} />}>
              Try FEA for 15 seconds
            </Button>
          </nav>

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl p-2 text-slate-700 md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden">
            <div className="grid gap-2 pb-4">
              <Link
                href="/product"
                className="rounded-xl px-3 py-2 text-slate-700 hover:bg-black/5"
              >
                Product
              </Link>
              <Link
                href="/events"
                className="rounded-xl px-3 py-2 text-slate-700 hover:bg-black/5"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="rounded-xl px-3 py-2 text-slate-700 hover:bg-black/5"
              >
                Contact
              </Link>
              <Button
                href="/demo"
                className="justify-center"
                iconRight={<Play size={16} />}
              >
                Try FEA for 15 seconds
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
