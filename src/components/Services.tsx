import Link from "next/link";
import { Sun, Thermometer, Shield, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export const services = [
  {
    slug: "feny-foliazas",
    icon: Sun,
    title: "Fényvédő ablakfóliázás",
    tagline: "UV- és vakításvédelem · prémium színárnyalatok",
    description:
      "Professzionális autóüveg-fóliázás, amely megszűri a káros UV-sugárzást, csökkenti a vakítást, és modern, elegáns megjelenést ad autódnak. Kizárólag prémium, színben stabil, karcálló fóliákkal dolgozunk.",
    features: [
      "99%-os UV-szűrés",
      "Buborék- és foltmentes kivitelezés",
      "Karcálló, színben stabil prémium fólia",
      "Törvényes áteresztési értékek",
    ],
  },
  {
    slug: "ho-foliazas",
    icon: Thermometer,
    title: "Hővédő ablakfóliázás",
    tagline: "Infravörös- és hővisszaverő technológia",
    description:
      "Nanokerámia és fém-szabad hővédő fóliák, amelyek a napmeleg akár 80%-át visszaverik. Hűvösebb utastér, kevesebb klímaterhelés és kényelmesebb utazás — minden évszakban. GPS- és jeladó-barát.",
    features: [
      "Akár 80% IR-hősugárzás blokkolása",
      "GPS, telefon, radar nem zavarodik",
      "Csökkenti az üzemanyag-fogyasztást",
      "Véd a hirtelen üvegtöréstől is",
    ],
  },
  {
    slug: "ppf-karosszeria",
    icon: Shield,
    title: "PPF karosszéria-védelem",
    tagline: "Paint Protection Film · kavicsfelverődés ellen",
    description:
      "A Paint Protection Film (PPF) egy átlátszó, önjavuló poliuretán fólia, amely a karosszéria fényezésére feszítve véd a kavicsfelverődéstől, karcoktól, rovarmaradványoktól és kémiai hatásoktól. A jármű értéke hosszú távon megmarad.",
    features: [
      "Önjavuló (self-healing) top coat",
      "Átlátszó — nem változtatja a színt",
      "Teljes fronttól full-body borításig",
      "Akár 10 év garancia prémium márkáknál",
    ],
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 sm:py-32 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#E89B5A]/10 text-[#E89B5A] text-xs font-bold uppercase tracking-widest mb-4">
              Szolgáltatásaink
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white text-balance">
              Teljes körű védelem —<br />
              <span className="text-[#E89B5A]">fénytől a kavicsig.</span>
            </h2>
            <p className="mt-4 text-lg text-[#A3A3A3] max-w-2xl mx-auto text-pretty">
              Három prémium szolgáltatás, egy cél: hogy autód látványa és értéke
              is megőrződjön hosszú évekig.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 120}>
              <Link
                href={`/${s.slug}`}
                className="group block h-full bg-gradient-card border border-[#262626] rounded-3xl p-8 hover:border-[#E89B5A]/50 hover-lift transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E89B5A] to-[#C07A3A] flex items-center justify-center mb-6 shadow-lg shadow-[#E89B5A]/20">
                  <s.icon className="w-7 h-7 text-[#0A0A0A]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-[#E89B5A] font-medium mb-4">{s.tagline}</p>
                <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6 text-pretty">
                  {s.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#D4D4D4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E89B5A] mt-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 text-[#E89B5A] font-semibold text-sm group-hover:gap-3 transition-all">
                  Részletek
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
