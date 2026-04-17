import { Award, Users, Clock, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const benefits = [
  {
    icon: Award,
    title: "Prémium anyagok",
    desc: "Csak vezető nemzetközi márkák fóliáival dolgozunk — hosszú távú garancia, stabil minőség.",
  },
  {
    icon: Users,
    title: "Szakértő kivitelezés",
    desc: "Precíz szabás, buborékmentes felhelyezés, és éveken át észrevétlen illesztések.",
  },
  {
    icon: Clock,
    title: "Gyors átfutás",
    desc: "Ablakfóliázás akár 1 nap alatt, PPF teljes front 1–2 nap. Egyeztetett időpontra.",
  },
  {
    icon: ShieldCheck,
    title: "Megbízható garancia",
    desc: "A fólia típusától függően akár 10 év gyártói garancia, átlátszó feltételekkel.",
  },
];

export default function About() {
  return (
    <section id="rolunk" className="py-24 sm:py-32 bg-[#141414] border-y border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#E89B5A]/10 text-[#E89B5A] text-xs font-bold uppercase tracking-widest mb-4">
                Rólunk
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white text-balance mb-6">
                A DTL Customs mögött <span className="text-[#E89B5A]">szenvedély</span> áll.
              </h2>
              <div className="space-y-4 text-[#D4D4D4] text-pretty">
                <p>
                  Szombathelyi műhelyünkben a fóliázás nem munka, hanem megszállottság.
                  Minden projektet úgy kezelünk, mintha a saját autónk lenne — figyelve
                  a legapróbb illesztésre, a fényezés tökéletes védelmére és arra, hogy
                  a végeredmény éveken át megőrizze minőségét.
                </p>
                <p>
                  Prémium ablakfóliákkal és vezető gyártók PPF termékeivel dolgozunk,
                  porszívós–fluid környezetben, amely garantálja a buborékmentes,
                  professzionális eredményt. Célunk, hogy a belépéstől az átadásig
                  maximális bizalmat és átlátható kommunikációt kapj.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 100}>
                <div className="h-full bg-gradient-card border border-[#262626] rounded-2xl p-6 hover:border-[#E89B5A]/40 transition">
                  <div className="w-12 h-12 rounded-xl bg-[#E89B5A]/10 border border-[#E89B5A]/20 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-[#E89B5A]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
