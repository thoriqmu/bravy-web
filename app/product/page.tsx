import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProductInnovation } from "@/components/sections/product/Innovation";
import { ProductAdvantages } from "@/components/sections/product/Advantages";
import { Pricing } from "@/components/sections/product/Pricing";
import { Container } from "@/components/ui/Container";
import { ProductHero } from "@/components/sections/product/ProductHero";

export const metadata: Metadata = {
  title: "BRAVY — Product",
  description:
    "Discover BRAVY's innovation: a structured Physical Module paired with an Android app powered by FEA. See advantages of each and buy the package.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <ProductHero />
      <ProductInnovation />
      <ProductAdvantages />
      <Pricing />

      <Footer />
    </main>
  );
}
