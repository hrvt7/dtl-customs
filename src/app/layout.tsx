import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const heading = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dtlcustoms.hu"),
  title: {
    default: "DTL Customs — Autóüveg-fóliázás és PPF | Szombathely",
    template: "%s | DTL Customs",
  },
  description:
    "Prémium autóüveg-fóliázás Szombathelyen. Fényvédő, hővédő ablakfóliák és PPF karosszéria-védelem kavicsfelverődés ellen. Profi kivitelezés, hosszú garancia.",
  keywords:
    "autóüveg fóliázás szombathely, autófóliázás, ablakfólia, hővédő fólia, fényvédő fólia, PPF fólia, paint protection film, karosszéria védőfólia, kavicsfelverődés elleni fólia, autófólia szombathely, DTL Customs",
  openGraph: {
    title: "DTL Customs — Autóüveg-fóliázás és PPF | Szombathely",
    description:
      "Prémium autóüveg-fóliázás és PPF karosszéria-védelem Szombathelyen. Fény-, hő- és kavicsfelverődés elleni fóliák.",
    url: "https://dtlcustoms.hu",
    siteName: "DTL Customs",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DTL Customs — Autóüveg-fóliázás és PPF | Szombathely",
    description:
      "Prémium autóüveg-fóliázás és PPF karosszéria-védelem Szombathelyen.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://dtlcustoms.hu" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${heading.variable} ${body.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname);window.scrollTo(0,0)` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "@id": "https://dtlcustoms.hu/#business",
              name: "DTL Customs — Autóüveg-fóliázás és PPF",
              description:
                "Prémium autóüveg-fóliázás és karosszéria PPF védelem Szombathelyen. Fény-, hő- és kavicsfelverődés elleni professzionális fóliázás.",
              url: "https://dtlcustoms.hu",
              telephone: "+36303899625",
              email: "dtlcustoms.info@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Körmendi út 45.",
                addressLocality: "Szombathely",
                postalCode: "9700",
                addressCountry: "HU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.2130,
                longitude: 16.6050,
              },
              areaServed: [
                { "@type": "City", name: "Szombathely" },
                { "@type": "AdministrativeArea", name: "Vas megye" },
              ],
              priceRange: "$$",
              image: "https://dtlcustoms.hu/images/dtl-customs-logo.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61587179489147",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fényvédő ablakfóliázás",
                    description: "Prémium fényvédő autóüveg-fóliázás UV- és vakításvédelemmel.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hővédő ablakfóliázás",
                    description: "Infravörös- és hővédő ablakfólia a kényelmes utazásért.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "PPF karosszériavédő fóliázás",
                    description: "Paint Protection Film — önjavuló, átlátszó karosszériavédő fólia kavicsfelverődés ellen.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased">
        {children}
      </body>
    </html>
  );
}
