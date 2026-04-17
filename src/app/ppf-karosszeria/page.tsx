import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "PPF karosszéria-védelem Szombathelyen — kavicsfelverődés elleni fólia",
  description:
    "Prémium PPF (Paint Protection Film) karosszéria-fóliázás Szombathelyen: önjavuló átlátszó fólia, amely véd a kavicsfelverődés, karcok és kémiai hatások ellen. Akár 10 év garancia.",
  alternates: { canonical: "https://dtlcustoms.hu/ppf-karosszeria" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicePage
          content={{
            slug: "ppf-karosszeria",
            heroVideo: "/videos/ppf.webm",
            title: "PPF karosszéria-védelem",
            hero: "Paint Protection Film — átlátszó, önjavuló poliuretán fólia, amely láthatatlanul védi autód fényezését kavicsfelverődés, karcok és kémiai hatások ellen.",
            intro:
              "A PPF (Paint Protection Film) a prémium autóvédelem csúcskategóriája. Egy rugalmas, átlátszó, több rétegű poliuretán fólia, amely fizikai pajzsként helyezkedik el a karosszéria fényezésén, és elnyeli az útról felpattanó kavicsok, rovarok, fákról hulló gyanták, homoki por vagy kémiai szennyeződések hatását. A prémium PPF top coat rétege önjavuló — napfényen vagy meleg vízzel a felszíni karcok néhány perc alatt eltűnnek. Gyári vagy utólagos lakkozású karosszérián egyaránt alkalmazható, és a jármű eladási értékét hosszú távon növeli.",
            benefits: [
              "Önjavuló (self-healing) felület",
              "Teljesen átlátszó — nem változtatja a színt",
              "Véd kavicsfelverődés, karcok, rovarok ellen",
              "Hidrofób — könnyebb tisztítás",
              "Részleges vagy teljes (full-body) borítás",
              "Akár 10 év gyártói garancia",
            ],
            sections: [
              {
                h2: "Mi az a Paint Protection Film (PPF)?",
                body: (
                  <>
                    <p>
                      A PPF egy 150–200 mikron vastag, többrétegű poliuretán fólia, amelyet az autó
                      fényezett felületeire feszítenek fel. Eredetileg katonai célokra fejlesztették ki
                      helikopterek rotorlapátjainak védelmére — innen került az autóiparba. A legmodernebb
                      PPF termékek háromrétegű felépítést használnak: a felső top coat adja az önjavuló és
                      hidrofób tulajdonságot, a középső PU-réteg biztosítja a rugalmasságot és a
                      becsapódáselnyelést, az alsó akril ragasztó pedig maradandóan rögzíti a fóliát a
                      fényezéshez.
                    </p>
                    <p>
                      A PPF sok szempontból különbözik a kerámiabevonattól. A kerámia vékony kémiai réteg,
                      amely víztaszító és fényvédő hatást ad, de fizikai ütést nem állít meg. A PPF valódi
                      fizikai pajzs, amely még 8–10 mm-es kavicsbecsapódást is roncsolásmentesen elnyel.
                    </p>
                  </>
                ),
              },
              {
                h2: "Milyen védelmet nyújt a gyakorlatban?",
                body: (
                  <>
                    <p>
                      <strong className="text-white">Kavicsfelverődés:</strong> Autópályán és rossz minőségű
                      aszfalton a kavicsbecsapódás a motorháztetőn, sárvédőn, lökhárítón és küszöbnél a
                      leggyakoribb. Ezeket a felületeket a PPF 100%-osan véd.
                    </p>
                    <p>
                      <strong className="text-white">Karcok és horzsolások:</strong> Kulcsos karcok, táskák,
                      ágak vagy mosó érintkezésből származó felszíni karcok a PPF önjavuló top coat
                      rétegében gyógyulnak meg.
                    </p>
                    <p>
                      <strong className="text-white">Kémiai és környezeti hatások:</strong> Fákról hulló
                      gyanta, rovarmaradvány, madárürülék, sós téli út — mindezek a PPF felületén maradnak,
                      és könnyen letisztíthatók anélkül, hogy a fényezést érnék.
                    </p>
                    <p>
                      <strong className="text-white">UV-védelem:</strong> A prémium PPF fóliák UV-szűrő
                      réteget is tartalmaznak, ami megakadályozza a fényezés fakulását hosszú évekig.
                    </p>
                  </>
                ),
              },
              {
                h2: "Milyen csomagokat kínálunk?",
                body: (
                  <>
                    <p><strong className="text-white">Fronti alappakett</strong> — első lökhárító, motorháztető eleje, szemöldöklemez, fényszóróhuzatok, tükrök. A legveszélyeztetettebb felületek védelme, 1 munkanap alatt.</p>
                    <p><strong className="text-white">Full front</strong> — teljes lökhárító, teljes motorháztető, teljes első sárvédő, első küszöbrész, tükrök, első oldalüveg-alatti rész. 2 munkanap.</p>
                    <p><strong className="text-white">Track pack / sport csomag</strong> — full front + ajtó-belépők + hátsó kerékboltívek + rakterhéj. Verseny- vagy sportos vezetéshez. 3–4 munkanap.</p>
                    <p><strong className="text-white">Full body (teljes karosszéria)</strong> — az egész jármű fényezését beborítjuk PPF-fel. A végső megoldás, ha maximális védelmet és értékmegőrzést keresel. 5–8 munkanap.</p>
                    <p>Egyedi kombinációk és részlet-borítások (küszöb, belső ajtópillér, rakterhéj) is rendelhetők.</p>
                  </>
                ),
              },
              {
                h2: "Hogyan zajlik a PPF felhelyezése?",
                body: (
                  <>
                    <ol className="list-decimal list-inside space-y-1 pl-2">
                      <li><strong className="text-white">Előkészítés:</strong> A karosszéria alapos gépi polírozása, zsírtalanítása — a PPF csak tökéletesen tiszta fényezésen tapad maradandóan.</li>
                      <li><strong className="text-white">Szabás:</strong> Computer-cut technológiával, a gyártó által hitelesített, jármű-specifikus sablonok alapján, milliméter pontos illesztéssel.</li>
                      <li><strong className="text-white">Felhelyezés:</strong> Víz + spray módszerrel, feszítéssel és gumilappal, hogy a fólia alatt ne maradjon levegő vagy folyadék.</li>
                      <li><strong className="text-white">Illesztés:</strong> A fólia széleit beszorítjuk a karosszéria éleibe vagy visszahajtjuk, hogy ne legyen látható.</li>
                      <li><strong className="text-white">Kiszáradás:</strong> 48–72 órás pihentetés, hogy a ragasztó végleg megkössön.</li>
                      <li><strong className="text-white">Átadás:</strong> Átadjuk a garanciakártyát és az utógondozási útmutatót.</li>
                    </ol>
                  </>
                ),
              },
              {
                h2: "Karbantartás és garancia",
                body: (
                  <>
                    <p>
                      A PPF nem igényel különleges karbantartást — úgy mosható, mint a normál fényezés,
                      kézi vagy érintésmentes mosóval. Kerülendő a súrolókefés alagútmosó és az agresszív,
                      oldószer alapú tisztítószer. A hidrofób top coat miatt a kosz nehezebben tapad, így
                      a ritkább mosás is elegendő.
                    </p>
                    <p>
                      Prémium PPF termékeinkre akár 10 év gyártói garanciát biztosítunk, amely fedi a
                      sárgulás, buborékosodás, leválás és UV-degradáció eseteit. A garancia a szakszerűen
                      felhelyezett és karbantartott fóliára érvényes.
                    </p>
                  </>
                ),
              },
              {
                h2: "Mennyibe kerül a PPF?",
                body: (
                  <>
                    <p>
                      A PPF egy prémium termék, ára a járművel, a borítási felülettel és a választott
                      márkával arányos. Egy fronti alappakett belépő szintje átlagosan 200 000 – 400 000 Ft
                      tól indul, teljes full front 600 000 Ft-tól, míg egy full body projekt 1,5 – 3 millió
                      Ft közötti sávban mozog. Pontos, tételes árajánlatot személyes konzultáció után adunk
                      a konkrét járműre és igényekre szabva.
                    </p>
                    <p>
                      A befektetés megtérül: a jármű piaci értéke a fényezett felület sértetlensége miatt
                      magasabb marad, és a fényezésjavítás (polírozás, újrafényezés) költsége nagyságrendekkel
                      meghaladja a PPF árát.
                    </p>
                  </>
                ),
              },
            ],
            faqs: [
              {
                q: "Látszik a PPF az autón?",
                a: "A prémium, modern PPF fóliák teljesen átlátszóak és gyakorlatilag észrevehetetlenek. Csak a beszegett élek lehetnek minimálisan láthatók közelről, de ezeket szakszerű elhelyezéssel a karosszéria hornyaiba rejtjük.",
              },
              {
                q: "Mennyi ideig tart egy PPF karc eltűnése?",
                a: "Felszíni karcoknál napon 5–15 perc, meleg vízzel 30 másodperc. Mélyebb karcoknál hőpisztollyal 2–3 perc alatt visszaáll a sima felület.",
              },
              {
                q: "Leszedhető a PPF, ha nem kell tovább?",
                a: "Igen. Szakszerű melegítéssel a PPF 100%-osan eltávolítható, a fényezés sértetlen marad alatta. Ez egyben védi is az eredeti festést a PPF felhelyezése óta.",
              },
              {
                q: "PPF vagy kerámiabevonat — melyik érdemes jobban?",
                a: "Ha a cél fizikai védelem (kavicsfelverődés, karcok), akkor PPF. Ha csak vízlepergető, fényes hatás és könnyebb tisztítás, akkor kerámia. A kettő kombinálható: PPF a karosszérián + kerámia a PPF tetején a maximális védelemért.",
              },
              {
                q: "Új autó esetén mikor érdemes felhelyezni?",
                a: "Minél hamarabb, ideálisan a jármű átvétele után 1–4 héten belül — még azelőtt, hogy az úton érné az első kavicsbecsapódás.",
              },
              {
                q: "Használt autóra is felhelyezhető?",
                a: "Igen, ugyanakkor a fóliázás előtt a fényezést alaposan ellenőrizzük és szükség esetén kisebb polírozással felkészítjük. Így a PPF alatti fényezés is frissebben marad.",
              },
            ],
          }}
        />
      </main>
      <Footer />
    </>
  );
}
