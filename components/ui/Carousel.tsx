"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[];
  altPrefix?: string;
  className?: string;
};

export default function Carousel({
  images,
  altPrefix = "Image",
  className = "",
}: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  // update index on scroll (snap)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const slideWidth = el.clientWidth;
        const i = Math.round(el.scrollLeft / slideWidth);
        setIndex(i);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // ensure scrollTo uses slide width (full container)
  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth;
    el.scrollTo({ left: i * slideWidth, behavior: "smooth" });
  };

  // keyboard support (optional)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollTo(Math.max(0, index - 1));
      if (e.key === "ArrowRight")
        scrollTo(Math.min(images.length - 1, index + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollerRef}
        // hide native scrollbar via CSS class (see globals.css change below)
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x -mx-4 px-4 hide-scrollbar"
        style={{
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-full snap-center mx-auto rounded-lg overflow-hidden bg-muted"
            aria-hidden={index !== i}
            role="group"
          >
            {/* increased height and object-contain to avoid cropping top/bottom */}
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-88">
              <Image
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 100vw"
                className="object-contain object-center bg-white"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots only (kept for navigation) */}
      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-8 rounded-full ${
              i === index ? "bg-bravy-accent" : "bg-slate-300/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
