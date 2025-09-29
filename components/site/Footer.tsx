import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-black/5 bg-white/60 py-10 backdrop-blur">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 text-sm text-slate-700 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white">
              <Image
                src="/bravy-logo.png"
                alt="BRAVY Logo"
                fill
                priority
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
            <span className="font-semibold text-slate-900">BRAVY_ID</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/product" className="hover:text-slate-900">
              Product
            </Link>
            <Link href="/demo" className="hover:text-slate-900">
              FEA Demo
            </Link>
            <Link href="/events" className="hover:text-slate-900">
              Events
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} BRAVY_ID • @bravy_id
          </div>
        </div>
      </Container>
    </footer>
  );
}
