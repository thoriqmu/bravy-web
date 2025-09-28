// prisma/seed.mjs
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.event.deleteMany();

    // Upcoming (contoh)
    await prisma.event.create({
        data: {
            title: "Speak Bravely with BRAVY",
            startAt: new Date("2025-10-05T10:00:00+07:00"),
            location: "Courtyard D17, Faculty of Letters (UM)",
            brochureUrl: "/events/upcoming-um-brochure.jpg",
        },
    });

    // Past (contoh)
    await prisma.event.create({
        data: {
            title: "BRAVY Campus Roadshow",
            startAt: new Date("2025-07-12T09:00:00+07:00"),
            location: "Auditorium A, Polinema",
            photos: [
                "/events/past/campus-1.jpg",
                "/events/past/campus-2.jpg",
                "/events/past/campus-3.jpg",
            ],
        },
    });

    await prisma.event.create({
        data: {
            title: "School Speaking Day",
            startAt: new Date("2025-05-30T13:30:00+07:00"),
            location: "SMAN 1 Malang",
            photos: [
                "/events/past/school-1.jpg",
                "/events/past/school-2.jpg",
                "/events/past/school-3.jpg",
            ],
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
