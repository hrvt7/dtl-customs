import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description: "DTL Customs adatkezelési tájékoztatója a GDPR szabályozás alapján.",
  alternates: { canonical: "https://dtlcustoms.hu/adatvedelem" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-16 sm:pt-36 sm:pb-20 bg-surface">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-headings:font-heading prose-headings:text-white prose-p:text-[#D4D4D4] prose-a:text-[#A3A3A3] prose-strong:text-white">
          <h1 className="text-4xl font-black text-white mb-2">Adatvédelmi tájékoztató</h1>
          <p className="text-sm text-[#737373]">Hatályos: 2026. április 17-től</p>

          <h2 className="text-2xl font-bold text-white mt-10">1. Adatkezelő</h2>
          <p className="text-[#D4D4D4]">
            DTL Customs — Körmendi út 45., 9700 Szombathely<br />
            E-mail: dtlcustoms.info@gmail.com · Telefon: +36 30 389 9625
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">2. Kezelt adatok köre</h2>
          <p className="text-[#D4D4D4]">
            A weboldalon történő kapcsolatfelvétel, árajánlat-kérés és időpontfoglalás során az alábbi
            adatokat kezelhetjük: név, e-mail cím, telefonszám, gépjármű típusa, a kért szolgáltatás leírása,
            és minden egyéb, az ügyfél által önként közölt adat.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">3. Adatkezelés célja és jogalapja</h2>
          <p className="text-[#D4D4D4]">
            Az adatokat kizárólag az ügyfélszolgálati kommunikáció, árajánlat-készítés, időpontfoglalás és
            szolgáltatás-teljesítés céljából kezeljük. Jogalap: GDPR 6. cikk (1) bekezdés b) pont (szerződéses
            jogviszony előkészítése, teljesítése).
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">4. Adatkezelés időtartama</h2>
          <p className="text-[#D4D4D4]">
            A kapcsolatfelvétellel kezelt adatokat a cél teljesüléséig, illetve a számviteli jogszabályok
            által előírt ideig (8 év) őrizzük.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">5. Adatfeldolgozók</h2>
          <p className="text-[#D4D4D4]">
            Tárhelyszolgáltató: Vercel Inc. (USA, adatvédelmileg megfelelő harmadik ország).
            Google LLC (Google Maps, Google Fonts) — szolgáltatás megjelenítéshez.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">6. Érintettek jogai</h2>
          <p className="text-[#D4D4D4]">
            Az érintett bármikor kérheti adatai hozzáférését, helyesbítését, törlését, az adatkezelés
            korlátozását, valamint a panaszjogot a Nemzeti Adatvédelmi és Információszabadság Hatósághoz
            (NAIH, www.naih.hu).
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">7. Cookie-k</h2>
          <p className="text-[#D4D4D4]">
            Oldalunk kizárólag a működéshez szükséges, funkcionális cookie-kat használ. Marketing
            cookie-kat nem helyezünk el a felhasználó hozzájárulása nélkül.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">8. Elérhetőség adatvédelmi kérdésekben</h2>
          <p className="text-[#D4D4D4]">
            Az adatkezeléssel kapcsolatos kérdéseivel keressen minket a dtlcustoms.info@gmail.com
            e-mail címen.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
