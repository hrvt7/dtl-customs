"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#szolgaltatasok", label: "Szolgáltatások" },
    { href: "/#rolunk", label: "Rólunk" },
    { href: "/#nyitvatartas", label: "Nyitvatartás" },
    { href: "/#gyik", label: "GYIK" },
    { href: "/#kapcsolat", label: "Kapcsolat" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1F1F1F]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#E10600]/60 shadow-lg shadow-[#E10600]/20">
              <Image
                src="/images/profile.webp"
                alt="DTL Customs"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-white leading-tight">DTL Customs</div>
              <div className="text-xs text-[#A3A3A3]">PPF &amp; Tint · Szombathely</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#D4D4D4] hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+36303899625"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E10600] to-[#A30400] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#E10600]/20 transition"
            >
              <Phone className="w-4 h-4" />
              +36 30 389 9625
            </a>
          </div>

          <button
            aria-label="Menü"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-[#1F1F1F]"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#1F1F1F] bg-surface">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-[#D4D4D4] hover:bg-[#1F1F1F] hover:text-[#E10600] font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+36303899625"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#E10600] to-[#A30400] text-white font-semibold"
            >
              <Phone className="w-4 h-4" />
              +36 30 389 9625
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
