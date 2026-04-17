import { Clock, CalendarCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const schedule = [
  { day: "Hétfő", hours: "08:00 – 17:00" },
  { day: "Kedd", hours: "08:00 – 17:00" },
  { day: "Szerda", hours: "08:00 – 17:00" },
  { day: "Csütörtök", hours: "08:00 – 17:00" },
  { day: "Péntek", hours: "08:00 – 17:00" },
  { day: "Szombat", hours: "Egyeztetés szerint", note: true },
  { day: "Vasárnap", hours: "Zárva" },
];

export default function Schedule() {
  return (
    <section id="nyitvatartas" className="py-24 sm:py-32 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#E89B5A]/10 text-[#E89B5A] text-xs font-bold uppercase tracking-widest mb-4">
              Nyitvatartás
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white text-balance">
              Mikor <span className="text-[#E89B5A]">fogadunk?</span>
            </h2>
            <p className="mt-4 text-[#A3A3A3]">
              A fóliázás időpontra érkezéssel történik — kérlek egyeztess telefonon.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-gradient-card border border-[#262626] rounded-3xl overflow-hidden">
            <div className="divide-y divide-[#262626]">
              {schedule.map((s) => (
                <div
                  key={s.day}
                  className="flex items-center justify-between px-6 py-5 hover:bg-[#1F1F1F]/50 transition"
                >
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-[#E89B5A]" />
                    <span className="font-heading font-semibold text-white">{s.day}</span>
                  </div>
                  <span
                    className={`font-medium ${
                      s.hours === "Zárva" ? "text-[#737373]" : s.note ? "text-[#E89B5A]" : "text-[#D4D4D4]"
                    }`}
                  >
                    {s.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-[#E89B5A]/5 border-t border-[#E89B5A]/20 px-6 py-5 flex items-start gap-3">
              <CalendarCheck className="w-5 h-5 text-[#E89B5A] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#D4D4D4]">
                Minden fóliázás előzetes egyeztetést igényel. Hívj minket a{" "}
                <a href="tel:+36303899625" className="text-[#E89B5A] font-semibold hover:underline">
                  +36 30 389 9625
                </a>{" "}
                számon, vagy írj a{" "}
                <a
                  href="mailto:dtlcustoms.info@gmail.com"
                  className="text-[#E89B5A] font-semibold hover:underline"
                >
                  dtlcustoms.info@gmail.com
                </a>{" "}
                címre egyedi ajánlatért.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
