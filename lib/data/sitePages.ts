import type { SitePage } from "@/lib/types";

export const sitePages: SitePage[] = [
  {
    slug: "om-oss",
    title: "Om oss",
    intro:
      "Hildemors Dansesenter er en danseskole i Bergen med røtter tilbake til 1947.",
    body: [
      "Hildemor Svenkerud grunnla sin egen danseskole i Bergen som 19-åring. Skolen har siden hatt som mål å gjøre dans, omgangsformer og mestring tilgjengelig for flere.",
      "Hildemors ønsker å stimulere til trivsel, mestring og god helse, samtidig som dansesenteret bidrar til integrering, likestilling og et levende lokalt miljø.",
    ],
  },
  {
    slug: "historie",
    title: "Historie",
    intro:
      "Historien bak Hildemors Dansesenter strekker seg fra de første kursene i 1948 til dagens lokaler i Torggaten 7.",
    body: [
      "Hildemors Dansesenter ble grunnlagt av Hildemor Svenkerud høsten 1947, og de første kursene ble arrangert våren etter. Undervisningen startet med standarddanser og latinamerikanske danser for barn og voksne.",
      "Skolen har lagt grunnlaget for mange sterke dansere, inkludert utøvere med NM-, EM- og VM-titler. I 1997 overtok Jane Vestøl driften, og hun har videreført skolen etter Hildemors prinsipper samtidig som nye danseformer og trenere er kommet til.",
      "Etter mange år i Håndverkeren flyttet dansesenteret til Eldoradogården i 2003, og i 2023 videre til supersentrale lokaler i Torggaten 7 ved siden av Hotell Norge.",
    ],
  },
  {
    slug: "privattimer",
    title: "Privattimer",
    intro:
      "Privatundervisning for brudevals, bryllupsgjester, utdrikningslag, konkurransedansere og egne arrangementer.",
    body: [
      "Privattimer hos Hildemors tilpasses deltakerne og anledningen. Det kan være alt fra en rolig brudevals til et eget danseopplegg for vennegjengen.",
      "Ta kontakt med Hildemors for tidspunkt, pris og anbefalt opplegg.",
    ],
    sections: [
      {
        title: "Brudevals",
        body: [
          "Mange tar privattimer for å forberede brudevalsen. Du trenger ingen erfaring, og instruktørene tilpasser undervisningen til parets bakgrunn.",
          "De vanligste valgene er engelsk vals og wienervals. Den engelske valsen er langsom og elegant, mens wienervalsen er raskere og mer tradisjonell.",
          "Dere kan også få råd om musikk, slør, sko og andre praktiske detaljer før den store dagen.",
        ],
      },
      {
        title: "Dansekurs for bryllupsgjester",
        body: [
          "Noen inviterer også gjestene på dansekurs, enten før bryllupet eller mens brudeparet er hos fotografen.",
          "Opplegget kan gjøres enkelt, sosialt og morsomt slik at gjestene får en felles opplevelse før festen.",
        ],
      },
      {
        title: "Utdrikningslag",
        body: [
          "Hildemors kan lage ferdige eller skreddersydde opplegg for utdrikningslag.",
          "Aktuelle stiler kan være hip hop, salsa, morsomme koreografier, street dance eller latin-inspirerte timer. Poenget er at alle skal få det til og ha det gøy.",
        ],
      },
      {
        title: "Privattimer for konkurransedansere",
        body: [
          "Barn og unge som går videre til konkurransedans kan ta privattimer med trenere ved Hildemors.",
          "Privattimer kan brukes til sportsdans, standard/latin, freestyle/discojazz, hip hop, streetdance, jazz, moderne, klassisk og andre danseformer. Mengden tilpasses ambisjon, nivå, alder og ønsker.",
        ],
      },
      {
        title: "Andre typer undervisning",
        body: [
          "Privatundervisning kan også brukes til blåtur, jubileer, vennegrupper, firma eller private dansepartier.",
          "Hildemors kan hjelpe med et opplegg som passer gruppen og anledningen.",
        ],
      },
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
