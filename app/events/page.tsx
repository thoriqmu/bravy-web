import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { UpcomingEvents } from "@/components/sections/events/Upcoming";
import { PastEvents } from "@/components/sections/events/Past";
import { EventsHero } from "@/components/sections/events/EventsHero";
import { prisma } from "@/lib/db";

type Events = Awaited<ReturnType<typeof prisma.event.findMany>>;
type DbEvent = Events[number];

export const metadata: Metadata = {
  title: "BRAVY — Events",
  description: "See our upcoming events and browse past event documentation.",
};

export default async function EventsPage() {
  const now = new Date();
  const rows = await prisma.event.findMany({ orderBy: { startAt: "asc" } });

  const upcoming = rows
    .filter((e: DbEvent) => e.startAt >= now)
    .map((e: DbEvent) => ({
      id: e.id,
      title: e.title,
      startISO: e.startAt.toISOString(),
      location: e.location,
      brochureImg: e.brochureUrl ?? null,
      description: null as string | null,
    }));

  const past = rows
    .filter((e: DbEvent) => e.startAt < now)
    .sort((a: DbEvent, b: DbEvent) => +b.startAt - +a.startAt)
    .map((e: DbEvent) => ({
      id: e.id,
      title: e.title,
      startISO: e.startAt.toISOString(),
      location: e.location,
      photos: Array.isArray(e.photos) ? (e.photos as string[]) : [],
    }));

  return (
    <main className="min-h-screen">
      <Navbar />

      <EventsHero />
      <UpcomingEvents />
      <PastEvents />

      <Footer />
    </main>
  );
}
