import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/home/Hero";
import { ProductIntro } from "@/components/sections/home/ProductIntro";
import { Features } from "@/components/sections/home/Features";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { EventTeaser } from "@/components/sections/home/EventTeaser";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductIntro />
      <Features />
      <HowItWorks />
      <EventTeaser />
      <Footer />
    </main>
  );
}
