import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, Sun, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-start lg:items-center">
      {/* Background videos — separate desktop + mobile elements */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
        src="/videos/hero-desktop.webm"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
        src="/videos/hero-mobile.webm"
      />

      {/* Dark overlay + gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(225,6,0,0.18),transparent_55%)] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:py-24">
        {/* Mobile profile avatar — centered, above title */}
        <div className="lg:hidden flex justify-center mb-5">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#E10600]/70 shadow-xl shadow-[#E10600]/30">
            <Image
              src="/images/profile.webp"
              alt="DTL Customs"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E10600]/40 bg-[#E10600]/10 backdrop-blur text-[#FF3D3D] text-xs font-semibold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Prémium autófóliázás · Szombathely
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.02] text-balance drop-shadow-2xl">
            Autód <span className="text-[#E10600]">védelme</span>
            <br />
            és stílusa egyetlen
            <br />
            helyen.
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/90 text-pretty max-w-xl mx-auto lg:mx-0 drop-shadow">
            Prémium autóüveg-fóliázás és karosszéria PPF védelem profi kivitelezésben.
            Fényvédő, hővédő ablakfóliák és kavicsfelverődés elleni paint protection film
            egy helyen, szakértői precizitással.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="tel:+36303899625"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#E10600] to-[#A30400] text-white font-bold shadow-xl shadow-[#E10600]/25 hover:shadow-2xl hover:shadow-[#E10600]/35 hover:scale-[1.02] transition"
            >
              <Phone className="w-5 h-5" />
              +36 30 389 9625
            </a>
            <Link
              href="/#szolgaltatasok"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/30 bg-white/5 backdrop-blur text-white font-semibold hover:bg-white/10 hover:border-[#E10600] transition"
            >
              Szolgáltatások
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
            {[
              { icon: Sun, label: "UV & fényvédelem" },
              { icon: Shield, label: "PPF karosszéria" },
              { icon: Sparkles, label: "Prémium márkák" },
            ].map((f) => (
              <div key={f.label} className="flex items-start gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#E10600]" />
                </div>
                <span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight pt-1">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating profile card — desktop only (lg+) */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="relative w-[260px] rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/profile.webp"
                alt="DTL Customs tulajdonos"
                fill
                sizes="260px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#FF3D3D] font-bold mb-1">DTL Customs · Szombathely</div>
              <div className="font-heading font-black text-white text-lg leading-tight">Prémium autófóliázás</div>
              <div className="mt-2 inline-flex items-center gap-2 text-xs text-white/80">
                <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
                Időpontfoglalás folyamatban
              </div>
            </div>
          </div>
          <div className="mt-3 text-center bg-[#E10600] text-white rounded-2xl px-5 py-3 font-bold shadow-xl shadow-[#E10600]/25">
            <div className="text-[10px] uppercase tracking-widest opacity-90">Garancia</div>
            <div className="text-lg leading-tight">Akár 10 év</div>
          </div>
        </div>
      </div>
    </section>
  );
}
