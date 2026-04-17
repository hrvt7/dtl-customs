import Link from "next/link";
import { Phone, Shield, Sun, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E89B5A] rounded-full mix-blend-screen filter blur-3xl opacity-20" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#F97316] rounded-full mix-blend-screen filter blur-3xl opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E89B5A]/30 bg-[#E89B5A]/5 text-[#E89B5A] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Prémium autófóliázás · Szombathely
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] text-balance">
              Autód <span className="text-[#E89B5A]">védelme</span> és
              <br />
              <span className="text-[#E89B5A]">stílusa</span> egyetlen helyen.
            </h1>
            <p className="mt-6 text-lg text-[#D4D4D4] text-pretty max-w-xl">
              Prémium autóüveg-fóliázás és karosszéria PPF védelem profi kivitelezésben.
              Fényvédő, hővédő ablakfóliák és kavicsfelverődés elleni paint protection film
              egy helyen, szakértői precizitással.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+36303899625"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#E89B5A] to-[#C07A3A] text-[#0A0A0A] font-bold shadow-xl shadow-[#E89B5A]/30 hover:shadow-2xl hover:shadow-[#E89B5A]/50 transition"
              >
                <Phone className="w-5 h-5" />
                +36 30 389 9625
              </a>
              <Link
                href="/#szolgaltatasok"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#404040] text-white font-semibold hover:border-[#E89B5A] hover:text-[#E89B5A] transition"
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
                    <f.icon className="w-5 h-5 text-[#E89B5A]" />
                  </div>
                  <span className="text-sm text-[#D4D4D4] font-medium leading-tight pt-1">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#262626] bg-gradient-to-br from-[#1F1F1F] via-[#141414] to-[#0A0A0A] shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,155,90,0.15),transparent_50%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#E89B5A] to-[#C07A3A] flex items-center justify-center font-heading font-black text-[#0A0A0A] text-5xl shadow-2xl mb-6">
                    DTL
                  </div>
                  <div className="font-heading font-bold text-2xl text-white mb-2">Customs</div>
                  <div className="text-[#E89B5A] font-semibold tracking-widest text-sm">PPF · TINT · STYLE</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#E89B5A] text-[#0A0A0A] rounded-2xl px-5 py-3 font-bold shadow-xl">
              <div className="text-xs uppercase tracking-wider opacity-80">Garancia</div>
              <div className="text-lg">Akár 10 év</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
