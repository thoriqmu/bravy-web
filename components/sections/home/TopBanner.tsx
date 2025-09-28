"use client";
import Image from "next/image";

export function TopBanner() {
  return (
    <section aria-label="BRAVY banner" className="relative">
      {/* Break out of Container to span the full viewport width */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        {/* Fill the remaining viewport height below the 4rem (h-16) navbar */}
        <div className="relative h-[calc(100vh-4rem)] min-h-[420px]">
          {/* Put your banner image in /public as hero-banner.jpg (or .png) */}
          <Image
            src="/hero-banner.png"
            alt="BRAVY introduction banner (Physical Module & App)"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
