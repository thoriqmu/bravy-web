"use client";
import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
};

export function EventTeaser() {
  const [event, setEvent] = React.useState<EventItem | null>(null);

  React.useEffect(() => {
    setEvent({
      id: "demo",
      title: "Speak Bravely With Bravy",
      date: "Wed, 24 Sep 2025",
      time: "10:00 WIB",
      location: "Courtyard D17, Faculty of Letters (UM)",
    });
  }, []);

  if (!event) return null;

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
                {event.date} • {event.time} • {event.location}
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
