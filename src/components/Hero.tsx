import Link from "next/link";
import { Phone, Shield, Sun, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E10600] rounded-full mix-blend-screen filter blur-3xl opacity-20" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#FF1E1E] rounded-full mix-blend-screen filter blur-3xl opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E10600]/30 bg-[#E10600]/5 text-[#E10600] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Prémium autófóliázás · Szombathely
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] text-balance">
              Autód <span className="text-[#E10600]">védelme</span> és
              <br />
              <span className="text-[#E10600]">stílusa</span> egyetlen helyen.
            </h1>
            <p className="mt-6 text-lg text-[#D4D4D4] text-pretty max-w-xl">
              Prémium autóüveg-fóliázás és karosszéria PPF védelem profi kivitelezésben.
              Fényvédő, hővédő ablakfóliák és kavicsfelverődés elleni paint protection film
              egy helyen, szakértői precizitással.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+36303899625"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#E10600] to-[#A30400] text-white font-bold shadow-xl shadow-[#E10600]/30 hover:shadow-2xl hover:shadow-[#E10600]/50 transition"
              >
                <Phone className="w-5 h-5" />
                +36 30 389 9625
              </a>
              <Link
                href="/#szolgaltatasok"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#404040] text-white font-semibold hover:border-[#E10600] hover:text-[#E10600] transition"
              >
                Szolgáltatások
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: Sun, label: "UV & fényvédelem" },
                { icon: Shield, label: "PPF karosszéria" },
                { icon: Sparkles, label: "Prémium márkák" },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1F1F1F] border border-[#262626] flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#E10600]" />
                  </div>
                  <span className="text-sm text-[#D4D4D4] font-medium leading-tight pt-1">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#262626] bg-black shadow-2xl">
              <video
                src="/videos/hero.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="DTL Customs műhely — autófóliázás közben"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#E10600] font-bold mb-1">DTL Customs</div>
                  <div className="font-heading font-black text-xl text-white leading-tight drop-shadow">PPF · TINT · STYLE</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#E10600] text-white rounded-2xl px-5 py-3 font-bold shadow-xl">
              <div className="text-xs uppercase tracking-wider opacity-80">Garancia</div>
              <div className="text-lg">Akár 10 év</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
