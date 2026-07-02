import type { CourseType } from "@/lib/types";

export const courseTypes: CourseType[] = [
  {
    id: "hiphop",
    title: "Hip Hop, Street og K-Pop",
    shortTitle: "Hip Hop",
    intro:
      "Energi, rytme og koreografier fra moderne dansekultur for barn, ungdom og voksne.",
    description: [
      "Hip Hop-kursene gir danseglede, rytme, koordinasjon og moderne koreografier i et trygt kursmiljø.",
      "K-Pop-kursene baserer seg på enkle, korte koreografier kjent fra sosiale medier og deriblant TikTok.",
      "Kursene inneholder blant annet K-POP og Shuffle, og man lærer en dans hver gang, eventuelt over to ganger hvis det er et lengre stykke koreografi.",
      "Begynnerkursene krever ingen forkunnskaper.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/hip-hop-break.jpg",
    category: "hiphop",
    tags: ["HipHop", "Street", "K-Pop", "Commercial", "Shuffle"],
  },
  {
    id: "selskapsdans",
    title: "Selskapsdans",
    shortTitle: "Selskapsdans",
    intro:
      "Ballroom, latin, swing og salsa for voksne, par og deg som vil lære trygg sosial dans.",
    description: [
      "Selskapsdans passer for både nybegynnere og viderekomne som vil bli tryggere på dansegulvet.",
      "Kursene dekker ballroom, latinamerikanske danser, swing og salsa. Flere kurs kan tas alene, mens parkurs kan registrere dansepartner ved påmelding.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "selskapsdans",
    tags: ["Ballroom", "Latin", "Swing/Salsa", "Pardans"],
  },
  {
    id: "barnekurs",
    title: "Barnekurs",
    shortTitle: "Barnekurs",
    intro:
      "Trygge kurs for barn med rytme, koordinasjon, danseglede og mestring i sentrum.",
    description: [
      "Barnekursene gir barna en positiv introduksjon til dans, musikk og bevegelse.",
      "Undervisningen tilpasses alder og nivå, og fokuserer på trygghet, rytme, koordinasjon og danseglede.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/under-15-%C3%A5r.jpg",
    category: "barn",
    tags: ["3/5 år", "5/7 år", "7/10 år", "Sportsdans"],
  },
  {
    id: "jazz-scene",
    title: "Jazz og scene",
    shortTitle: "Jazz",
    intro:
      "Jazz, Jazz in Heels og sceniske kurs for deg som vil jobbe med uttrykk, musikalitet og showfølelse.",
    description: [
      "Jazzkursene kombinerer teknikk, musikalitet og uttrykk.",
      "Kursene passer for deltakere som vil utvikle danseglede, styrke og scenisk trygghet.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "jazz",
    tags: ["Jazz", "Jazz in Heels", "Song & Dance"],
  },
  {
    id: "ballett-moderne",
    title: "Ballett og moderne",
    shortTitle: "Ballett",
    intro:
      "Klassisk ballett, Ballet Barre og moderne/contemporary for barn, ungdom og voksne.",
    description: [
      "Ballett og moderne kurs gir teknisk grunnlag, kroppskontroll og musikalitet.",
      "Kursene finnes for både barn, ungdom og voksne, fra grunnleggende nivå til mer spesialiserte timer.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/under-15-%C3%A5r.jpg",
    category: "ballett",
    tags: ["Ballet", "Ballet Barre", "Contemporary"],
  },
  {
    id: "privattimer",
    title: "Privattimer og brudevals",
    shortTitle: "Privattimer",
    intro:
      "Brudevals, privatundervisning og egne opplegg for personer, par eller grupper.",
    description: [
      "Privattimer passer for brudevals, individuell oppfølging, firma, vennegjenger og grupper som ønsker eget opplegg.",
      "Hildemors tilpasser undervisningen etter mål, erfaring og anledning.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "privat",
    tags: ["Brudevals", "Privatundervisning", "Gruppe"],
  },
  {
    id: "apent",
    title: "Åpen dansekveld",
    shortTitle: "Åpen dans",
    intro: "Sosial dansekveld med enkel inngang og rom for å danse sammen.",
    description: [
      "Åpen dansekveld er et lavterskeltilbud for deg som vil danse sosialt og øve i et hyggelig miljø.",
      "Tilbudet kan ha egen pris og krever ikke nødvendigvis ordinær semesterpåmelding.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "apent",
    tags: ["Åpen dansekveld", "Sosial dans"],
  },
];

export function getCourseType(id: string) {
  return courseTypes.find((courseType) => courseType.id === id);
}
