// components/sections/events/Past.tsx  (UPDATED)
"use client";

import { Container } from "@/components/ui/Container";
import { CalendarDays, MapPin } from "lucide-react";
import Carousel from "@/components/ui/Carousel";
import * as React from "react";
import { motion } from "framer-motion";

type Past = {
  id: string;
  title: string;
  startISO: string;
  location: string;
  photos: string[];
};

function formatLongDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });
}

function SkeletonPast() {
  return (
    <div className="card p-6 lg:p-7 animate-pulse">
      <div className="h-6 w-64 rounded bg-black/10" />
      <div className="mt-2 h-4 w-40 rounded bg-black/10" />
      <div className="mt-4 h-48 w-full rounded-xl bg-black/10" />
    </div>
  );
}

export function PastEvents({
  initialItems = [] as Past[],
}: {
  initialItems?: Past[];
}) {
  const [items, setItems] = React.useState<Past[]>(initialItems);
  const [loading, setLoading] = React.useState(items.length === 0);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/events", { cache: "no-store" });
        const data = await res.json();
        setItems(Array.isArray(data?.past) ? data.past : []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section id="past">
      <Container className="py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-6 max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Past Events</h2>
            <p className="mt-2 text-slate-700">
              Highlights from our recent events. Swipe or click to view
              documentation.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {loading && items.length === 0 ? (
            <>
              <SkeletonPast />
              <SkeletonPast />
            </>
          ) : (
            items.map((ev) => {
              const dateStr = formatLongDate(ev.startISO);
              return (
                <motion.article
                  key={ev.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="card p-6 lg:p-7"
                >
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
                  </div>

                  <div className="mt-4">
                    <Carousel images={ev.photos} altPrefix={ev.title} />
                  </div>
                </motion.article>
              );
            })
          )}
        </div>
      </Container>
    </section>
  );
}
