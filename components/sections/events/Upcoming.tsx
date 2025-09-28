// components/sections/events/Upcoming.tsx  (UPDATED)
"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import { motion } from "framer-motion";

type Upcoming = {
  id: string;
  title: string;
  startISO: string;
  location: string;
  brochureImg: string | null;
  description?: string | null;
};

function useCountdown(targetISO: string) {
  const getLeft = React.useCallback(() => {
    const target = new Date(targetISO).getTime();
    const now = Date.now();
    const diff = Math.max(target - now, 0);
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s, done: diff <= 0 };
  }, [targetISO]);

  const [left, setLeft] = React.useState(getLeft);
  React.useEffect(() => {
    const t = setInterval(() => setLeft(getLeft()), 1000);
    return () => clearInterval(t);
  }, [getLeft]);

  return left;
}

function formatLongDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });
}

function SkeletonCard() {
  return (
    <div className="card p-6 lg:p-7 animate-pulse">
      <div className="h-6 w-52 rounded bg-black/10" />
      <div className="mt-3 space-y-2">
        <div className="h-4 w-64 rounded bg-black/10" />
        <div className="h-4 w-44 rounded bg-black/10" />
        <div className="h-4 w-36 rounded bg-black/10" />
      </div>
      <div className="mt-4 h-8 w-40 rounded bg-black/10" />
    </div>
  );
}

function UpcomingCard({
  ev,
  openId,
  setOpenId,
}: {
  ev: Upcoming;
  openId: string | null;
  setOpenId: (v: string | null) => void;
}) {
  const { d, h, m, s, done } = useCountdown(ev.startISO);
  const dateStr = formatLongDate(ev.startISO);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="card p-6 lg:p-7"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
        {/* LEFT: Title + meta */}
        <div>
          <h3 className="text-xl font-semibold">{ev.title}</h3>

          <div className="mt-2 grid gap-1 text-sm text-slate-700">
            <div className="inline-flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{dateStr}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin size={16} />
              <span>{ev.location}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock size={16} />
              <span>
                {new Date(ev.startISO).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                  timeZone: "Asia/Jakarta",
                })}{" "}
                WIB
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT (lg) / BELOW (sm): countdown + button */}
        <div className="lg:pl-8 lg:flex lg:flex-col lg:items-end lg:text-right">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">
              Countdown
            </div>
            <div className="mt-1 inline-flex items-center gap-2 rounded-xl bg-black/5 px-3 py-2 text-sm font-semibold">
              {done ? (
                <span>It’s time!</span>
              ) : (
                <>
                  <span>{d}d</span>
                  <span>•</span>
                  <span>{h}h</span>
                  <span>•</span>
                  <span>{m}m</span>
                  <span>•</span>
                  <span>{s}s</span>
                </>
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Button className="mt-4" onClick={() => setOpenId(ev.id)}>
              View details
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Detail dialog (brochure hanya di dialog) */}
      <Dialog
        open={openId === ev.id}
        onOpenChange={(v) => !v && setOpenId(null)}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {ev.brochureImg && (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl ring-1 ring-black/10">
              <Image
                src={ev.brochureImg}
                alt={`${ev.title} brochure`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 400px, 90vw"
              />
            </div>
          )}
          <div>
            <h4 className="text-lg font-semibold">{ev.title}</h4>
            <p className="mt-1 text-sm text-slate-700">{dateStr}</p>
            <p className="text-sm text-slate-700">{ev.location}</p>
            {ev.description && (
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {ev.description}
              </p>
            )}
          </div>
        </div>
      </Dialog>
    </motion.article>
  );
}

export function UpcomingEvents({
  initialItems = [],
}: {
  initialItems?: Upcoming[];
}) {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const [items, setItems] = React.useState<Upcoming[]>(initialItems);
  const [loading, setLoading] = React.useState(items.length === 0);

  // refresh client-side (tetap cepat karena sudah ada data awal)
  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/events", { cache: "no-store" });
        const data = await res.json();
        setItems(Array.isArray(data?.upcoming) ? data.upcoming : []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section id="upcoming">
      <Container className="py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-6 max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Upcoming Events</h2>
            <p className="mt-2 text-slate-700">
              Mark your calendar and see the live countdown to the H-day.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {loading && items.length === 0 ? (
            <>
              <SkeletonCard />
            </>
          ) : (
            items.map((ev) => (
              <UpcomingCard
                key={ev.id}
                ev={ev}
                openId={openId}
                setOpenId={setOpenId}
              />
            ))
          )}
        </div>
      </Container>
    </section>
  );
}
