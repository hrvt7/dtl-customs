import Link from "next/link";
import { Phone, ArrowRight, Check, ArrowLeft } from "lucide-react";
import FadeIn from "./FadeIn";

export interface ServiceContent {
  slug: string;
  title: string;
  hero: string;
  heroVideo?: string;
  intro: string;
  sections: { h2: string; body: React.ReactNode }[];
  faqs: { q: string; a: string }[];
  benefits: string[];
}

export default function ServicePage({ content }: { content: ServiceContent }) {
  return (
    <article>
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24 border-b border-[#1F1F1F] min-h-[460px]">
        {content.heroVideo ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src={content.heroVideo} type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-hero" />
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#06B6D4] rounded-full mix-blend-screen filter blur-3xl opacity-20" />
            </div>
          </>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Link
            href="/#szolgaltatasok"
            className="inline-flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Vissza a szolgáltatásokhoz
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-bold uppercase tracking-widest mb-4">
            Szolgáltatás · Szombathely
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight text-balance">
            {content.title}
          </h1>
          <p className="mt-4 text-lg text-[#D4D4D4] text-pretty max-w-2xl mx-auto sm:mx-0">{content.hero}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg text-[#D4D4D4] leading-relaxed text-pretty mb-12">
              {content.intro}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-gradient-card border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 mb-14">
              <h3 className="font-heading font-bold text-xl text-white mb-5">Miért érdemes minket választanod?</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {content.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#D4D4D4]">
                    <div className="w-5 h-5 rounded-full bg-[#06B6D4] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {content.sections.map((s, i) => (
              <FadeIn key={i}>
                <div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4 text-balance">
                    {s.h2}
                  </h2>
                  <div className="prose-content text-[#D4D4D4] leading-relaxed space-y-4 text-pretty">
                    {s.body}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 pt-12 border-t border-[#1F1F1F]">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-6">
                Gyakori kérdések
              </h2>
              <div className="space-y-4">
                {content.faqs.map((f, i) => (
                  <div
                    key={i}
                    className="bg-gradient-card border border-[#1F1F1F] rounded-2xl p-6"
                  >
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">{f.q}</h3>
                    <p className="text-[#A3A3A3] text-sm leading-relaxed text-pretty">{f.a}</p>
                  </div>
                ))}
              </div>

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: content.faqs.map((f) => ({
                      "@type": "Question",
                      name: f.q,
                      acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                  }),
                }}
              />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#06B6D4] to-[#0E7490] p-8 sm:p-12 text-center shadow-2xl shadow-[#06B6D4]/20">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3 text-balance">
                Kérj személyre szabott árajánlatot!
              </h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                Küldd el autód adatait, mi pedig 24 órán belül válaszolunk egy pontos, tételes ajánlattal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+36303899625"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0A0A0A] text-white font-bold hover:bg-[#1F1F1F] transition"
                >
                  <Phone className="w-5 h-5" />
                  +36 30 389 9625
                </a>
                <a
                  href="mailto:dtlcustoms.info@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/80 text-white font-bold hover:bg-white hover:text-[#06B6D4] transition-colors"
                >
                  E-mail küldése
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
