"use client";
import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

type TeaserEvent = {
  id: string;
  title: string;
  startISO: string; // dari API
  location: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });
}
function formatTime(iso: string) {
  return (
    new Date(iso).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    }) + " WIB"
  );
}

export function EventTeaser() {
  const [event, setEvent] = React.useState<TeaserEvent | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/events", { cache: "no-store" });
        const data = await res.json();
        const upcoming: TeaserEvent[] = Array.isArray(data?.upcoming)
          ? data.upcoming
          : [];

        if (upcoming.length === 0) {
          setEvent(null);
          return;
        }

        // Pilih event terdekat (aman meski API belum tersortir)
        const nearest = [...upcoming].sort(
          (a, b) =>
            new Date(a.startISO).getTime() - new Date(b.startISO).getTime()
        )[0];

        setEvent(nearest);
      } catch {
        // kalau API error, jangan tampilkan teaser
        setEvent(null);
      }
    })();
  }, []);

  if (!event) return null;

  const dateStr = formatDate(event.startISO);
  const timeStr = formatTime(event.startISO);

  return (
    <section>
      <Container className="py-16">
        <div className="card p-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-sm uppercase tracking-widest text-slate-500">
                Upcoming Event
              </div>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">
                {event.title}
              </h3>
              <p className="mt-1 text-sm text-slate-700">
                {dateStr} • {timeStr} • {event.location}
              </p>
            </div>
            <Button href="/events" iconRight={<ArrowRight size={16} />}>
              See Event Details
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
