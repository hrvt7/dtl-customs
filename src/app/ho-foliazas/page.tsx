import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Hővédő autóüveg-fóliázás Szombathelyen",
  description:
    "Prémium hővédő ablakfólia Szombathelyen: akár 80% IR-hőblokkolás, hűvösebb utastér, alacsonyabb klímaterhelés. GPS-barát nanokerámia fóliák. Hívj: +36 30 389 9625.",
  alternates: { canonical: "https://dtlcustoms.hu/ho-foliazas" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicePage
          content={{
            slug: "ho-foliazas",
            heroVideo: "/videos/ho.webm",
            title: "Hővédő autóüveg-fóliázás",
            hero: "Nanokerámia alapú hővédő fólia, amely a napmeleg akár 80%-át visszaveri — hűvösebb utastér, kényelmesebb utazás, alacsonyabb fogyasztás.",
            intro:
              "A hővédő ablakfólia a modern autózás egyik legokosabb befektetése. A nap hőenergiájának közel felét infravörös sugárzás (IR) adja, amely a hagyományos üvegeken szinte akadály nélkül áthalad. Egy prémium, nanokerámia alapú hővédő fólia ezt az energiát visszaveri, miközben a látható fényáteresztést alig változtatja meg. Az eredmény jelentősen hűvösebb utastér, kevesebb klímaterhelés és kényelmesebb, egészségesebb utazás.",
            benefits: [
              "Akár 80% infravörös (IR) hőblokkolás",
              "Akár 99% UV-szűrés",
              "Fém-szabad: GPS, telefon, radar zavartalan",
              "Csökkenti a klíma üzemanyag-terhelését",
              "Biztonsági réteg üvegtörés ellen",
              "Prémium márkák · 10 év garancia",
            ],
            sections: [
              {
                h2: "Mi az a hővédő autófólia?",
                body: (
                  <>
                    <p>
                      A hővédő fólia egy speciális, többrétegű film, amely az üveg belső oldalán visszaveri
                      a napsugárzás infravörös (hő) komponensét. A modern prémium fóliák nanokerámia vagy
                      fém-szabad polimer alapúak — utóbbiak kiemelkedő előnye, hogy nem zavarják a jármű
                      elektronikus rendszereit (GPS, mobiltelefon, autós radar, kulcsnélküli nyitás).
                    </p>
                    <p>
                      A fólia TSER (Total Solar Energy Rejected) értéke mutatja, hogy a teljes napenergiából
                      mennyit véd ki. A prémium kategória 55–70%-os TSER értékkel dolgozik, ami nyáron akár
                      10–15 °C hőmérséklet-különbséget jelenthet az utastérben.
                    </p>
                  </>
                ),
              },
              {
                h2: "Miért éri meg hővédő fóliát választani?",
                body: (
                  <>
                    <p>
                      A hővédő fólia valós, mérhető komfortelőnyt ad. Nyáron parkolás után nem kell többet
                      nyitott ablakkal indulni — az utastér mérsékeltebb hőmérsékletű marad. A klíma kevesebbet
                      dolgozik, ami csökkenti az üzemanyag- vagy akkumulátor-fogyasztást, különösen
                      elektromos járműveknél, ahol a klíma jelentősen befolyásolja a hatótávot.
                    </p>
                    <p>
                      A fólia egészségügyi előnye is jelentős: a 99%-os UV-szűrés véd a bőrt és a szemet
                      a káros sugárzástól hosszú úton is. Gyermekekkel utazó családok különösen sokat
                      profitálnak ebből.
                    </p>
                  </>
                ),
              },
              {
                h2: "Típusai és technológiái",
                body: (
                  <>
                    <p><strong className="text-white">Nanokerámia fólia</strong> — a prémium kategória: nanoméretű kerámiarészecskék szórják vissza az IR-sugárzást. Fém-szabad, áttetsző, és nem zavarja az elektronikát. A legmagasabb hővédelmet nyújtja hosszú élettartammal.</p>
                    <p><strong className="text-white">Hibrid (fémes + kerámia) fólia</strong> — közép-felső kategória, jó ár–érték arány, de gyengébb elektronikai kompatibilitás.</p>
                    <p><strong className="text-white">Festett (dye) fólia</strong> — belépő szint: inkább fényvédő, csekély IR-védelem, könnyen fakul. Mi kizárólag a prémium nanokerámia réteget ajánljuk, ha a cél valódi hővédelem.</p>
                  </>
                ),
              },
              {
                h2: "Hogyan zajlik a felhelyezés?",
                body: (
                  <>
                    <p>
                      A hővédő fólia felhelyezése hasonló folyamat, mint a fényvédőé, de nagyobb figyelmet
                      igényel a szélvédőn, mivel a nagyfelületű, íves üveg precíz szabást kíván. A folyamat:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 pl-2">
                      <li>Fóliamárka és árnyalat-választás (VLT + TSER érték alapján).</li>
                      <li>Műhely előkészítése pormentes felhelyezéshez.</li>
                      <li>Üvegfelületek mélytisztítása.</li>
                      <li>Számítógépes szabás (computer cut) vagy kézi illesztés.</li>
                      <li>Felhelyezés, buboréktalanítás, éltömörítés.</li>
                      <li>Ellenőrzés és átadás utógondozási instrukciókkal.</li>
                    </ol>
                  </>
                ),
              },
              {
                h2: "Mit kell tudni a törvényi előírásokról?",
                body: (
                  <>
                    <p>
                      A magyar jogszabály szerint a szélvédő és az első oldalablakok minimum 70% fényáteresztéssel
                      kell rendelkezzenek. Szerencsére a prémium nanokerámia fóliák között van olyan, amely
                      75–80% VLT mellett is 50% feletti IR-védelmet nyújt — így teljesen törvényes, mégis
                      érezhetően hűvösebb utastér érhető el. A hátsó oldalablakokon és a hátsó szélvédőn
                      nincs áteresztési korlát.
                    </p>
                  </>
                ),
              },
              {
                h2: "Garancia és élettartam",
                body: (
                  <>
                    <p>
                      Prémium nanokerámia hővédő fóliáinkra akár 10 év gyártói garanciát biztosítunk, amely
                      fedi a buborékosodást, leválást, elszíneződést és a hővédő réteg öregedését. Normál
                      használat mellett a fólia 10–15 évig stabil teljesítményt nyújt.
                    </p>
                  </>
                ),
              },
            ],
            faqs: [
              {
                q: "Tényleg érezni a különbséget egy hővédő fóliánál?",
                a: "Igen, nyáron közvetlenül a parkolás után is érezhető. Az utastér 8–15 °C-kal hűvösebb lehet, és a klíma sokkal gyorsabban hűti le az autót.",
              },
              {
                q: "Zavarja-e a fólia a GPS-t vagy a telefonvételt?",
                a: "A prémium nanokerámia, fém-szabad fóliák egyáltalán nem zavarják. A régi, fémes fóliák igen — ezeket nem forgalmazzuk.",
              },
              {
                q: "Szélvédőre is tehető hővédő fólia?",
                a: "Igen, speciálisan a szélvédőre kifejlesztett, 70%+ VLT-jű, de magas TSER-értékű nanokerámia fóliákkal dolgozunk.",
              },
              {
                q: "Mennyibe kerül egy teljes hővédő fóliázás?",
                a: "Jármű típusától és a választott fóliától függ. Személyes konzultáció után tételes árajánlatot adunk — hívj a +36 30 389 9625 számon.",
              },
              {
                q: "Fólia vagy hőgátló üveg — melyik a jobb?",
                a: "A gyári hőgátló üveg alapszintű védelem. Egy jó minőségű utólagos hővédő fólia jellemzően 2–3-szor magasabb IR-blokkolást nyújt, mint a gyári üveg önmagában.",
              },
            ],
          }}
        />
      </main>
      <Footer />
    </>
  );
}
