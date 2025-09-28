import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Infer types langsung dari Prisma client — tanpa import `Event`.
type Events = Awaited<ReturnType<typeof prisma.event.findMany>>;
type DbEvent = Events[number];

export async function GET() {
  const now = new Date();

  const events = (await prisma.event.findMany({
    orderBy: { startAt: "asc" },
  })) as Events;

  const upcoming = events.filter((e: DbEvent) => e.startAt >= now);
  const past = events
    .filter((e: DbEvent) => e.startAt < now)
    .sort((a: DbEvent, b: DbEvent) => +b.startAt - +a.startAt);

  return NextResponse.json({
    upcoming: upcoming.map((e: DbEvent) => ({
      id: e.id,
      title: e.title,
      startISO: e.startAt.toISOString(),
      location: e.location,
      brochureImg: (e as any).brochureUrl ?? null, // hapus `as any` bila field sudah terketik
      description: null,
    })),
    past: past.map((e: DbEvent) => ({
      id: e.id,
      title: e.title,
      startISO: e.startAt.toISOString(),
      location: e.location,
      photos: Array.isArray((e as any).photos)
        ? ((e as any).photos as string[])
        : [],
    })),
  });
}
