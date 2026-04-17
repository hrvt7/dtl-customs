import { MapPin, Phone, Mail } from "lucide-react";

function Facebook({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="kapcsolat" className="py-24 sm:py-32 bg-surface-alt border-y border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#A3A3A3]/10 text-[#A3A3A3] text-xs font-bold uppercase tracking-widest mb-4">
              Kapcsolat
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white text-balance">
              Kérj <span className="text-[#A3A3A3]">ajánlatot</span> — ingyenesen.
            </h2>
            <p className="mt-4 text-[#A3A3A3] max-w-2xl mx-auto">
              Küldd el autód adatait és a tervezett munkát, mi pedig személyre szabott
              árajánlatot készítünk. Gyors válasz garantált.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn>
            <div className="space-y-4">
              <a
                href="tel:+36303899625"
                className="flex items-start gap-4 bg-gradient-card border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#A3A3A3]/40 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A3A3A3]/10 border border-[#A3A3A3]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3A3A3] group-hover:text-white transition">
                  <Phone className="w-6 h-6 text-[#A3A3A3] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#737373] font-semibold">Telefon</div>
                  <div className="font-heading font-bold text-xl text-white">+36 30 389 9625</div>
                  <div className="text-sm text-[#A3A3A3]">H–P 08:00–17:00</div>
                </div>
              </a>

              <a
                href="mailto:dtlcustoms.info@gmail.com"
                className="flex items-start gap-4 bg-gradient-card border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#A3A3A3]/40 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A3A3A3]/10 border border-[#A3A3A3]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3A3A3] transition">
                  <Mail className="w-6 h-6 text-[#A3A3A3] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#737373] font-semibold">E-mail</div>
                  <div className="font-heading font-bold text-lg text-white break-all">
                    dtlcustoms.info@gmail.com
                  </div>
                  <div className="text-sm text-[#A3A3A3]">24 órán belül válaszolunk</div>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-gradient-card border border-[#1F1F1F] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#A3A3A3]/10 border border-[#A3A3A3]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#A3A3A3]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#737373] font-semibold">Műhely</div>
                  <div className="font-heading font-bold text-lg text-white">Körmendi út 45.</div>
                  <div className="text-sm text-[#A3A3A3]">9700 Szombathely, Magyarország</div>
                </div>
              </div>

              <a
                href="https://www.facebook.com/profile.php?id=61587179489147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-gradient-card border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#A3A3A3]/40 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A3A3A3]/10 border border-[#A3A3A3]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3A3A3] transition">
                  <Facebook className="w-6 h-6 text-[#A3A3A3] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#737373] font-semibold">Facebook</div>
                  <div className="font-heading font-bold text-lg text-white">DTL Customs</div>
                  <div className="text-sm text-[#A3A3A3]">Munkáink és referenciák</div>
                </div>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[500px] rounded-2xl overflow-hidden border border-[#1F1F1F] bg-[#1F1F1F]">
              <iframe
                src="https://www.google.com/maps?q=K%C3%B6rmendi+%C3%BAt+45,+Szombathely,+9700&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) invert(0.92) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DTL Customs — Körmendi út 45, Szombathely"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
