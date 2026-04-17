import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek",
  description: "DTL Customs általános szerződési feltételei.",
  alternates: { canonical: "https://dtlcustoms.hu/aszf" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-16 sm:pt-36 sm:pb-20 bg-surface">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-2 font-heading">Általános Szerződési Feltételek</h1>
          <p className="text-sm text-[#737373] mb-8">Hatályos: 2026. április 17-től</p>

          <div className="space-y-6 text-[#D4D4D4]">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">1. Szolgáltató</h2>
              <p>
                DTL Customs — Körmendi út 45., 9700 Szombathely<br />
                E-mail: dtlcustoms.info@gmail.com · Telefon: +36 30 389 9625
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">2. A szerződés tárgya</h2>
              <p>
                A jelen ÁSZF a DTL Customs által nyújtott autóüveg-fóliázási és PPF karosszéria-védelmi
                szolgáltatások általános feltételeit tartalmazza.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">3. Ajánlat és megrendelés</h2>
              <p>
                A konkrét munkára vonatkozó árajánlat írásban vagy szóban kerül átadásra, és az ajánlattétel
                napjától 30 napig érvényes. A megrendelés írásban (e-mail) vagy az időpontfoglalás
                visszaigazolásával jön létre.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">4. Fizetési feltételek</h2>
              <p>
                A szolgáltatás ellenértéke a munka átadásakor készpénzben vagy banki átutalással
                fizetendő. Az esetleges előleg mértéke és fizetési feltételei a megrendelés
                visszaigazolásában szerepelnek.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">5. Garancia</h2>
              <p>
                A felhelyezett fólia típusától és gyártójától függően 5–10 év gyártói garanciát biztosítunk.
                A garancia a fólia buborékosodás, leválás, elszíneződés, UV-degradáció elleni védelemre
                érvényes. A garancia nem terjed ki a szakszerűtlen karbantartásból, baleseti sérülésből
                vagy külső mechanikai hatásból eredő károkra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">6. Felelősség</h2>
              <p>
                A szolgáltatás teljesítése során felmerülő, a DTL Customs-nak felróható kárért vállaljuk a
                felelősséget a Polgári Törvénykönyv vonatkozó rendelkezései szerint. Vis maior esetén a
                felelősség kizárt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">7. Elállás és lemondás</h2>
              <p>
                A megrendelt szolgáltatás a tervezett időponttól visszaszámított 48 órán belül
                díjmentesen lemondható. Ezt követően a megrendelő a felmerült előkészítési költségek
                megtérítésére kötelezhető.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">8. Panaszkezelés</h2>
              <p>
                Panaszt az dtlcustoms.info@gmail.com címen lehet benyújtani. A beérkezéstől számított
                30 napon belül kivizsgáljuk és írásban válaszolunk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3 font-heading">9. Alkalmazandó jog</h2>
              <p>
                A jelen ÁSZF-re a magyar jog rendelkezései alkalmazandók. Jogvita esetén a felek elsősorban
                békés úton való rendezést keresnek.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
