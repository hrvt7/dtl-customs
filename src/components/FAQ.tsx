"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Mennyi időbe telik egy ablakfóliázás?",
    a: "Egy teljes autó ablakfóliázása átlagosan 3–5 órát vesz igénybe a jármű típusától és az ablakok számától függően. Minden munkát pormentes környezetben végzünk, hogy a végeredmény tökéletes legyen.",
  },
  {
    q: "Legális a hővédő fólia Magyarországon?",
    a: "Igen, ha betartjuk a törvényes áteresztési értékeket. A szélvédőre és az első oldalablakokra minimum 70% fényáteresztési fóliát tehetünk, míg a hátsó ablakokra bármilyen sötétségű fólia kerülhet. Mindenkor törvényes értékekkel dolgozunk.",
  },
  {
    q: "Mi a különbség a PPF és a kerámiabevonat között?",
    a: "A PPF (Paint Protection Film) egy fizikai, önjavuló védőréteg a fényezésen, amely kavicsfelverődés és karcok ellen véd. A kerámiabevonat egy vékony kémiai réteg, amely elsősorban hidrofób hatást és fényvédelmet ad, de fizikai ütést nem állít meg. A kettő akár együtt is alkalmazható.",
  },
  {
    q: "Mennyi idő alatt gyógyul be a PPF karc?",
    a: "A self-healing (önjavuló) PPF felszíni karcai napfényen vagy meleg vízzel percek alatt eltűnnek. Mélyebb karcoknál hőpisztollyal szakszerűen segítünk a regenerációban.",
  },
  {
    q: "Mennyi ideig tart egy teljes PPF borítás?",
    a: "Egy első lökhárító és motorháztető fronti PPF védelem 1–1,5 nap. Teljes karosszéria-borítás (full body) 3–5 munkanapot vesz igénybe. Minden projekt előtt pontos időbecslést adunk.",
  },
  {
    q: "Milyen garanciát vállaltok?",
    a: "A fólia típusától és gyártójától függ. Prémium ablakfóliáinkra 5–10 év, PPF fóliáinkra akár 10 év gyártói garanciát biztosítunk. A garancia a buborékosodás, leválás és elszíneződés ellen érvényes.",
  },
  {
    q: "Le kell szedni a fóliát autóeladás előtt?",
    a: "Nem kötelező, sőt a prémium fóliák kifejezetten növelhetik az autó piaci értékét. Ha mégis szeretnéd leszedetni, professzionális, a fényezést nem károsító eljárással végezzük.",
  },
  {
    q: "Mennyibe kerül egy fóliázás?",
    a: "Az ár a jármű típusától, az ablakok számától és a választott fólia minőségétől függ. Egy pontos árajánlatért hívj minket a +36 30 389 9625 számon, vagy írj emailt a dtlcustoms.info@gmail.com címre.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="gyik" className="py-24 sm:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-bold uppercase tracking-widest mb-4">
              GYIK
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white text-balance">
              Gyakori <span className="text-[#06B6D4]">kérdések</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div
                className={`bg-gradient-card border rounded-2xl overflow-hidden transition ${
                  open === i ? "border-[#06B6D4]/30" : "border-[#1F1F1F]"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading font-semibold text-white text-lg">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#06B6D4] flex-shrink-0 transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[#A3A3A3] leading-relaxed text-pretty">{f.a}</div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
