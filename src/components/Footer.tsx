import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

function Facebook({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E10600] to-[#A30400] flex items-center justify-center font-heading font-black text-white">
                DTL
              </div>
              <div>
                <div className="font-heading font-bold text-white">DTL Customs</div>
                <div className="text-xs text-[#A3A3A3]">PPF &amp; Tint</div>
              </div>
            </div>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              Prémium autóüveg-fóliázás és PPF karosszéria-védelem Szombathelyen.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Szolgáltatások</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/feny-foliazas" className="text-[#A3A3A3] hover:text-[#E10600] transition">Fényvédő fólia</Link></li>
              <li><Link href="/ho-foliazas" className="text-[#A3A3A3] hover:text-[#E10600] transition">Hővédő fólia</Link></li>
              <li><Link href="/ppf-karosszeria" className="text-[#A3A3A3] hover:text-[#E10600] transition">PPF karosszéria-védelem</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Oldalak</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#rolunk" className="text-[#A3A3A3] hover:text-[#E10600] transition">Rólunk</Link></li>
              <li><Link href="/#nyitvatartas" className="text-[#A3A3A3] hover:text-[#E10600] transition">Nyitvatartás</Link></li>
              <li><Link href="/#gyik" className="text-[#A3A3A3] hover:text-[#E10600] transition">GYIK</Link></li>
              <li><Link href="/#kapcsolat" className="text-[#A3A3A3] hover:text-[#E10600] transition">Kapcsolat</Link></li>
              <li><Link href="/adatvedelem" className="text-[#A3A3A3] hover:text-[#E10600] transition">Adatvédelem</Link></li>
              <li><Link href="/aszf" className="text-[#A3A3A3] hover:text-[#E10600] transition">ÁSZF</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Elérhetőség</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-[#A3A3A3]">
                <MapPin className="w-4 h-4 text-[#E10600] flex-shrink-0 mt-0.5" />
                Körmendi út 45.<br />9700 Szombathely
              </li>
              <li>
                <a href="tel:+36303899625" className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#E10600] transition">
                  <Phone className="w-4 h-4 text-[#E10600]" />
                  +36 30 389 9625
                </a>
              </li>
              <li>
                <a href="mailto:dtlcustoms.info@gmail.com" className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#E10600] transition break-all">
                  <Mail className="w-4 h-4 text-[#E10600] flex-shrink-0" />
                  dtlcustoms.info@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61587179489147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#E10600] transition"
                >
                  <Facebook className="w-4 h-4 text-[#E10600]" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#737373]">
            © {new Date().getFullYear()} DTL Customs. Minden jog fenntartva.
          </p>
          <p className="text-xs text-[#737373]">
            Szombathely · Vas megye · Magyarország
          </p>
        </div>
      </div>
    </footer>
  );
}
