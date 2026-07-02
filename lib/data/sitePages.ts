import type { SitePage } from "@/lib/types";

export const sitePages: SitePage[] = [
  {
    slug: "om-oss",
    title: "Om oss",
    intro:
      "Hildemors Dansesenter er en ledende danseskole i Bergen sentrum med kurs for alle nivåer.",
    body: [
      "Hildemors tilbyr dans i et varmt, trygt og profesjonelt miljø.",
      "Senteret har kurs for barn, ungdom, voksne, nybegynnere og mer erfarne dansere.",
    ],
  },
  {
    slug: "historie",
    title: "Historie",
    intro:
      "Historien om Hildemors bevares som egen innholdsside i den nye løsningen.",
    body: [
      "Denne første versjonen setter av struktur til historieteksten fra dagens nettsted.",
      "Innholdet kan flyttes inn og redigeres i admin når CMS-delen bygges.",
    ],
  },
  {
    slug: "privattimer",
    title: "Privattimer",
    intro:
      "Brudevals, privatundervisning og egne opplegg for personer, par og grupper.",
    body: [
      "Privattimer tilpasses deltakerne, enten målet er brudevals, teknikk eller et eget danseopplegg.",
      "Forespørsler kan gå til Hildemors med antall deltakere, ønsket tidspunkt og anledning.",
    ],
  },
  {
    slug: "show",
    title: "Show",
    intro: "Show og oppvisning er en viktig del av Hildemors-identiteten.",
    body: [
      "Denne siden bevarer plass til show, arrangementer og scenisk aktivitet.",
    ],
  },
  {
    slug: "pris",
    title: "Pris",
    intro: "Priser og søskenrabatter fra aktivt semester.",
    body: [
      "Prislinjen fra timeplanen vises også på prissiden, og kan senere styres fra admin.",
    ],
  },
  {
    slug: "kontakt",
    title: "Kontakt",
    intro: "Kontakt Hildemors Dansesenter.",
    body: [
      "Tlf: 55 32 00 33",
      "E-post: info@hildemors.no",
      "Adresse: Torggaten 7, 5015 Bergen.",
    ],
  },
  {
    slug: "betalingsbetingelser",
    title: "Betalingsbetingelser",
    intro: "Kursvilkår og betalingsbetingelser for påmelding.",
    body: [
      "Påmelding er bindende, og vilkårene versjoneres slik at hver påmelding lagrer nøyaktig versjon.",
    ],
  },
];

export function getSitePage(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}
