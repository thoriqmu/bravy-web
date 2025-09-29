import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
