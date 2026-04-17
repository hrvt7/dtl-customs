import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fényvédő autóüveg-fóliázás Szombathelyen",
  description:
    "Prémium fényvédő ablakfólia Szombathelyen: 99%-os UV-szűrés, vakításmentes vezetés, stílusos megjelenés. Törvényes áteresztési értékek, hosszú garancia. Hívj: +36 30 389 9625.",
  alternates: { canonical: "https://dtlcustoms.hu/feny-foliazas" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicePage
          content={{
            slug: "feny-foliazas",
            heroVideo: "/videos/feny.webm",
            title: "Fényvédő autóüveg-fóliázás",
            hero: "Prémium fényszűrő ablakfólia UV- és vakításvédelemmel — elegáns megjelenés, kényelmesebb vezetés, tartós minőség.",
            intro:
              "A fényvédő autófólia messze több, mint esztétikai ráadás: megszűri a káros UV-A és UV-B sugárzást, jelentősen csökkenti a nappali vakítást és éjjel a szembejövő reflektorok zavaró hatását, emellett megvédi a kárpitot a fakulástól. Műhelyünkben kizárólag színben stabil, karcálló, gyártói minősítéssel rendelkező fóliákkal dolgozunk, a felhelyezés pedig pormentes, kontrollált környezetben történik.",
            benefits: [
              "99%+ UV-A és UV-B szűrés",
              "Csökkenti a vakítást és szemfáradtságot",
              "Véd a kárpit és a műszerfal fakulásától",
              "Diszkrét, elegáns megjelenés",
              "Törvényes áteresztési értékek",
              "5–10 év gyártói garancia",
            ],
            sections: [
              {
                h2: "Mi az a fényvédő ablakfólia?",
                body: (
                  <>
                    <p>
                      A fényvédő fólia egy többrétegű polimer film, amelyet az üvegfelületek belső oldalára
                      helyeznek fel. Alapvető feladata a nappali fényerő és a vakítás csökkentése, valamint
                      a kárpit, műszerfal és bőr védelme a napsugárzás fotokémiai hatásaitól. A prémium
                      fólialapok már beépített UV-gátló réteget és karcálló top coat-ot is tartalmaznak.
                    </p>
                    <p>
                      A laikusok sokszor összekeverik a fényvédő (VLT — Visible Light Transmission) és a
                      hővédő (IR — Infrared Rejection) szempontot. A fényvédő fólia elsősorban a látható
                      fény mennyiségét szabályozza, míg a hővédő fólia a hőenergiát. A kettő kombinálható,
                      és prémium fóliáknál gyakran ugyanabban a termékben érhető el mindkét funkció.
                    </p>
                  </>
                ),
              },
              {
                h2: "Kinek javasolt?",
                body: (
                  <>
                    <p>
                      Mindenkinek, aki napi szinten autózik és értékeli a kényelmet. Különösen ajánljuk
                      azoknak, akik érzékenyek az erős fényre, sokat utaznak autópályán vagy napsütötte
                      útvonalon, esetleg családdal közlekednek és fontos számukra a gyerekek védelme a
                      káros UV-sugárzástól. Üzleti és reprezentatív járműveknél a diszkrétebb, klasszikus
                      megjelenés is érv.
                    </p>
                  </>
                ),
              },
              {
                h2: "Milyen fényáteresztési szinteket ajánlunk?",
                body: (
                  <>
                    <p>
                      Magyarországon a szélvédőre és az első oldalüvegekre minimum 70% fényáteresztésű fólia
                      tehető — kínálatunkban van olyan transzparens, UV-gátló réteg, amely láthatatlan, mégis
                      teljes értékű védelmet nyújt. A hátsó oldalablakokra és a hátsó szélvédőre bármilyen
                      sötétség választható, a leggyakoribb választás 20–35% közötti árnyalat.
                    </p>
                    <p>
                      Felhelyezés előtt minden esetben személyes konzultációt tartunk, hogy autód típusához,
                      használati szokásaidhoz és esztétikai elvárásaidhoz legjobban illeszkedő fényáteresztést
                      válasszuk ki.
                    </p>
                  </>
                ),
              },
              {
                h2: "Hogyan zajlik a fóliázás?",
                body: (
                  <>
                    <p>
                      Egy átlagos fényvédő fóliázás 3–5 órát vesz igénybe a jármű típusától és az ablakok
                      számától függően. A folyamat lépései:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 pl-2">
                      <li>Részletes konzultáció, fólia- és árnyalat-választás.</li>
                      <li>Teljes üvegfelület pormentes tisztítása, zsírtalanítás.</li>
                      <li>Pontos digitális vagy kézi szabás, illesztés.</li>
                      <li>Pormentes környezetben történő felhelyezés.</li>
                      <li>Buboréktalanítás, éltömörítés, minőségellenőrzés.</li>
                      <li>Átadás és utógondozási instrukciók.</li>
                    </ol>
                  </>
                ),
              },
              {
                h2: "Mire számíthatsz a fóliázás után?",
                body: (
                  <>
                    <p>
                      Az első 48–72 órában az ablakokat ne nyisd le, hogy a fólia teljesen megszáradhasson
                      és véglegesen megköthessen. Ezután a fólia teljes funkcionalitással bírja a napi
                      használatot: mosható, tisztítható lágy, karcmentes kendővel és semleges pH-jú
                      tisztítószerrel. Kerüld az ammónia-tartalmú ablaktisztítókat.
                    </p>
                    <p>
                      Prémium fóliáinkra 5–10 év gyártói garanciát biztosítunk a buborékosodás, leválás és
                      elszíneződés ellen. A garancia a szakszerűen karbantartott fóliára érvényes.
                    </p>
                  </>
                ),
              },
              {
                h2: "Mennyibe kerül a fényvédő fóliázás?",
                body: (
                  <>
                    <p>
                      Az ár függ a jármű típusától (szedán, SUV, kupé), az ablakok számától és méretétől,
                      valamint a választott fólia minőségétől. Személyes konzultáció alapján pontos,
                      tételes árajánlatot adunk, minden rejtett költség nélkül. Egyedi csomagok keretében
                      hő- és fényvédő fóliák kombinációja is elérhető.
                    </p>
                  </>
                ),
              },
            ],
            faqs: [
              {
                q: "Legális 20%-os fényáteresztésű fólia Magyarországon?",
                a: "Csak a hátsó oldalablakokra és a hátsó szélvédőre. A szélvédőre és első oldalüvegekre minimum 70% VLT szükséges.",
              },
              {
                q: "Mennyi idő alatt köt meg a fólia?",
                a: "A fólia 24–72 óra alatt száraz, és 2–4 hét alatt teljesen kiköt. Ez alatt elő fordulhat enyhe páraképződés, ami normális jelenség.",
              },
              {
                q: "Eltávolítható a fólia, ha később nem kell?",
                a: "Igen, szakszerű melegítéssel és speciális oldószerrel a fólia roncsolásmentesen eltávolítható, az üveg és a tömítések sértetlenül maradnak.",
              },
              {
                q: "Milyen gyakori karbantartást igényel?",
                a: "Semmilyen különleges karbantartást nem igényel. Normál ablaktisztítóval (ammóniamentes) és lágy kendővel tisztítható.",
              },
              {
                q: "A fólia sötétíti a napfényben lévő autó belsejét?",
                a: "A látható fény csökken a választott árnyalatnak megfelelően, ugyanakkor a hőkomfort is javul, különösen, ha hővédő réteggel kombináljuk.",
              },
            ],
          }}
        />
      </main>
      <Footer />
    </>
  );
}
