import Image from "next/image";
import { Award, Users, Clock, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const benefits = [
  {
    icon: Award,
    title: "Prémium anyagok",
    desc: "Csak vezető nemzetközi márkák fóliáival dolgozunk — hosszú távú garancia, stabil minőség.",
    image: "/images/about-1.webp",
  },
  {
    icon: Users,
    title: "Szakértő kivitelezés",
    desc: "Precíz szabás, buborékmentes felhelyezés, és éveken át észrevétlen illesztések.",
    image: "/images/about-2.webp",
  },
  {
    icon: Clock,
    title: "Gyors átfutás",
    desc: "Ablakfóliázás akár 1 nap alatt, PPF teljes front 1–2 nap. Egyeztetett időpontra.",
    image: "/images/about-3.webp",
  },
  {
    icon: ShieldCheck,
    title: "Megbízható garancia",
    desc: "A fólia típusától függően akár 10 év gyártói garancia, átlátszó feltételekkel.",
    image: "/images/about-4.webp",
  },
];

export default function About() {
  return (
    <section id="rolunk" className="py-24 sm:py-32 bg-[#141414] border-y border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#E10600]/10 text-[#E10600] text-xs font-bold uppercase tracking-widest mb-4">
                Rólunk
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white text-balance mb-6">
                A DTL Customs mögött <span className="text-[#E10600]">szenvedély</span> áll.
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
                <div className="group relative h-full overflow-hidden bg-gradient-card border border-[#262626] rounded-2xl hover:border-[#E10600]/50 hover-lift transition">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#E10600]/90 backdrop-blur flex items-center justify-center shadow-lg">
                      <b.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{b.title}</h3>
                    <p className="text-sm text-[#A3A3A3] leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
