import type { CourseType } from "@/lib/types";

export const courseTypes: CourseType[] = [
  {
    id: "hiphop",
    title: "Hip Hop",
    shortTitle: "Hip Hop",
    intro:
      "Hip hop har fundament i old school party dances, rytme, groove og fengende musikk.",
    description: [
      "Hip hop er en dansestil som har sitt fundament i old school party dances som Running Man, Criss Cross og Harlem Shake.",
      "I dag har hip hop spredt seg til den kommersielle verden og blitt et verdensfenomen. Sentralt i hip hop dans er rytme, groove og fengende musikk.",
      "På begynnernivå læres grunnleggende hip hop-steg, med fokus på å komme inn i hip hop-feelingen og treffe musikken. Man lærer koreografi til fengende musikk og ulike imponerende triks.",
      "På fortsetternivå blandes hip hop og street-styles, med videreutvikling av grunnleggende hip hop, eget uttrykk, freestyle og mer avanserte koreografier.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/hip-hop-break.jpg",
    category: "hiphop",
    tags: ["HipHop", "Street", "Locking", "Popping", "House"],
  },
  {
    id: "hiphop-under-16",
    title: "Hip Hop under 16 år",
    shortTitle: "Hip Hop",
    intro:
      "Hip hop-klasser med commercial-preg, moderne musikk, motorikk og kroppsbeherskelse.",
    description: [
      "Disse hiphop-klassene er iblandet commercial for at det skal være gøy med koreografier i tillegg til hiphop-prinsippene.",
      "Enkle rutiner til topp moderne musikk. Motorikk og kroppsbeherskelse er sentrale tema, og du lærer deg å bevege deg til den musikken du liker selv.",
      "Du kan med fordel gå begynnerkurs flere semester, da det er nye danser og ny musikk hver sesong.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/hip-hop-break.jpg",
    category: "hiphop",
    tags: ["Under 16 år", "Commercial", "Show"],
  },
  {
    id: "streetdance-kids",
    title: "Streetdance for kids",
    shortTitle: "Street",
    intro:
      "Streetdance for barn med grunnprinsipper, kule moves og mye danseglede.",
    description: [
      "I denne kategorien tilbyr Hildemors et bredt spekter innenfor streetdance.",
      "Klassen er populær og har ofte venteliste, så det er lurt å være tidlig ute med booking.",
      "Ta gjerne begynnerklassen flere ganger før du gjør fortsetterklassen. Du lærer grunnprinsippene og en hel del kule moves.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/hip-hop-break.jpg",
    category: "hiphop",
    tags: ["Streetdance", "Barn", "Begynnere"],
  },
  {
    id: "kpop",
    title: "Tik Tok m/K-POP & Shuffle",
    shortTitle: "K-Pop",
    intro:
      "Korte koreografier kjent fra sosiale medier, K-POP og Shuffle.",
    description: [
      "Disse kursene baserer seg på enkle, korte koreografier kjent fra sosiale medier og deriblant Tik Tok.",
      "Kursene inneholder blant annet K-POP og Shuffle, og man lærer en dans hver gang, eventuelt over to ganger hvis det er et lengre stykke koreografi.",
      "Begynnerkursene krever ingen forkunnskaper.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/hip-hop-break.jpg",
    category: "hiphop",
    tags: ["K-Pop", "Shuffle", "TikTok"],
  },
  {
    id: "commercial",
    title: "Commercial - tidligere Girly-Style",
    shortTitle: "Commercial",
    intro:
      "Streetdance-basert stil med fokus på koreografi, feminine bevegelser og trendy musikk.",
    description: [
      "Disse kursene er basert på Streetdance med fokus på feminine bevegelser. Du lærer å føre deg feminint samtidig som man danser utfordrende, rå koreografi.",
      "Kursene er åpne for alle, og “Girly” refererer kun til stilarten.",
      "Commercial er en populær dansestil inspirert av ulike dansestiler til trendy musikk, og brukes ofte i underholdningsbransjen.",
      "Begynnerkurset krever ingen forkunnskap. Fortsetterkurset passer godt for de som tidligere har danset jazz, latino-street eller Girly Class.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/hip-hop-break.jpg",
    category: "hiphop",
    tags: ["Commercial", "Girly Style", "Koreografi"],
  },
  {
    id: "jazz-heels",
    title: "Jazz in Heels",
    shortTitle: "Jazz in Heels",
    intro:
      "Jazzdans med høye hæler, men mulig å delta uten hæler hvis man ønsker.",
    description: [
      "Du lærer å danse jazz i høye hæler. Kurset har mange likhetstrekk med et ordinært jazzkurs, men benytter i tillegg de høyhælte skoene.",
      "Man kan selvsagt delta uten høye hæler hvis man liker dansestilen, men ikke vil utfordre fottøyet.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "jazz",
    tags: ["Jazz", "Heels", "Ungdom/voksen"],
  },
  {
    id: "latin-solo",
    title: "Latin Ladies / Latin Solo",
    shortTitle: "Latin solo",
    intro:
      "Latinamerikanske danser uten partner, med koreografier, hofter, armer og spennende trinn.",
    description: [
      "Her danser du det du ser på Skal vi danse, men uten å trenge partner.",
      "Kurset bruker de latinamerikanske dansene, som inneholder mye singledans, og lager gøye koreografier med hoftebevegelser, armer og spennende trinn til gøy musikk.",
      "Kurset er åpent for alle, og “ladies” refererer kun til feminin stilart.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "selskapsdans",
    tags: ["Latin", "Solo", "Salsa", "Samba", "Cha cha cha"],
  },
  {
    id: "ballroom-beg",
    title: "Ballroom Dancing - voksen & ungdom begynnere",
    shortTitle: "Ballroom",
    intro:
      "Innføringskurs i klassiske selskapsdanser for deg som vil bli tryggere på dansegulvet.",
    description: [
      "Her lærer du Engelsk Vals, Tango, Wienervals, Quickstep, Samba, Cha cha cha, Swing og Salsa.",
      "Kurset er lagt opp på nybegynnernivå, så du trenger ingen forkunnskap. Du trenger ikke å ha partner med deg, men Hildemors kan ikke love partner til alle.",
      "Dette er et fint innføringskurs for deg som føler deg usikker på dansegulvet, og kursene har en hyggelig atmosfære der du kan slappe av og kose deg mens du lærer.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "selskapsdans",
    tags: ["Ballroom", "Latin", "Nybegynnere"],
  },
  {
    id: "ballroom-par",
    title: "Ballroom/Latin par",
    shortTitle: "Pardans",
    intro:
      "Selskapsdans for par, med kvalitetstid, grunnlag for bryllup og dans til ulike rytmer.",
    description: [
      "Kursene er like Voksen/ungdom-begynnerkurset, med unntak av at du må ha partner for å begynne her.",
      "Her rullerer vi aldri på partnere uten at det er et spesielt ønske om det.",
      "Dette er et ideelt kurs for de som ønsker å nyte kvalitetstid sammen en gang i uken, eller som skal i bryllup eller andre selskap med dans.",
      "På fortsetterkurs lærer du mer om karakteren til de forskjellige dansene, riktig dansestilling og hvordan du får dansen til å se naturlig og enkel ut.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "selskapsdans",
    tags: ["Pardans", "Begynnere", "Fortsettere"],
  },
  {
    id: "salsa",
    title: "Salsa",
    shortTitle: "Salsa",
    intro:
      "Latinamerikansk dans, hovedsakelig Mambo/LA-stil og cubansk salsa.",
    description: [
      "Salsa betyr saus og er egentlig en fellesbetegnelse for latinamerikansk dans, men Mambo eller LA-stil er den Hildemors benytter mest på kursene.",
      "Det tilbys også cubansk salsa. På begynnerkurset trenger man ingen forkunnskap, og man kan komme uten partner.",
      "Det er ofte flere kvinner enn menn, og Hildemors kan ikke love partner til alle, så det er bra om man kommer som par.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "selskapsdans",
    tags: ["Salsa", "Mambo", "LA-stil", "Cubansk salsa"],
  },
  {
    id: "swing",
    title: "Swing",
    shortTitle: "Swing",
    intro:
      "Original sekstakter swing fra Amerika, anvendelig til musikk på voksne utesteder.",
    description: [
      "Her lærer du den originale sekstakter-swingen fra Amerika. I Bergen bruker vi enkelt og greit bare navnet Swing.",
      "Dette er en anvendelig dans til den typen musikk som spilles på voksne utesteder.",
      "Du lærer en hel del turer i løpet av semesteret, i tillegg til at mannen lærer å føre og damen lærer å følge.",
      "På begynnerkurset trenger man ingen forkunnskap, og man kan komme uten partner.",
      "Hildemors har også en solo swing-klasse hvor man lærer styling i forskjellige swing-danser, som Charleston, Lindy, Boogie og West Coast.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "selskapsdans",
    tags: ["Swing", "Charleston", "Lindy", "Boogie", "West Coast"],
  },
  {
    id: "brudevals",
    title: "Brudevals",
    shortTitle: "Brudevals",
    intro:
      "Privattimer eller kurs for å forberede bryllupsdansen i god tid før den store dagen.",
    description: [
      "Privattimer i brudevals kan bestilles når som helst. Det kan være ventetid, og det er smart å starte et par måneder i forkant av bryllupet for å få god tid til innlæring.",
      "Hvis man vil bli veldig proff til bryllupet, kan man gjerne gå et 12-ukers kurs i Ballroom Dancing og deretter ta en privattime for å spesialdesigne dansen til egen melodi.",
      "Her kan du lære både Engelsk Vals og Wienervals, og i tillegg få tips og råd som er nyttige å ta med.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "privat",
    tags: ["Brudevals", "Engelsk vals", "Wienervals"],
  },
  {
    id: "barnekurs-small",
    title: "Barnekurs 3-5 år eller 4-7 år",
    shortTitle: "Barnekurs",
    intro:
      "Barnekurs med motorikk, kroppsbeherskelse, ringdanser og etikette.",
    description: [
      "På dette kurset lærer barnet motorikk og kroppsbeherskelse ved å danse til kjent musikk.",
      "I utgangspunktet lærer barnet en del ringdanser som også inneholder trinn fra Samba, Cha cha cha, Vals og litt moderne danser.",
      "Hildemors legger også stor vekt på etiske retningslinjer, og barna lærer blant annet å bukke og neie.",
      "På høstsemesteret er det barneball noen uker før jul, noe som er populært for både store og små.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/under-15-%C3%A5r.jpg",
    category: "barn",
    tags: ["3-5 år", "4-7 år", "Barneball"],
  },
  {
    id: "barnekurs-7-10",
    title: "Barnekurs 7-10 år pardans",
    shortTitle: "Barnekurs",
    intro:
      "Samba, cha cha cha, swing, vals, tango, quickstep og enkel moderne dans for barn.",
    description: [
      "Samba, Cha cha cha, Swing, Vals, Tango, Quickstep og enkel moderne dans er blant dansene barnet lærer her.",
      "Kursene fokuserer på å øke barnets koordinasjonsevne og lære barnet å forstå rytmen i musikken.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/under-15-%C3%A5r.jpg",
    category: "barn",
    tags: ["7-10 år", "Pardans", "Koordinasjon"],
  },
  {
    id: "sportsdans",
    title: "Sportsdans - Standard og latinamerikansk",
    shortTitle: "Sportsdans",
    intro:
      "Sportsdans med standard- og latinamerikanske danser, teknikk, rytme og konkurransegrunnlag.",
    description: [
      "Kursene inneholder de samme dansene som 7/10-årskursene, pluss Rumba og Slowfox på fortsetternivå.",
      "Her er Hildemors nøye med at takten i musikken følges, at fotarbeidet er riktig, og at barnet lærer mer om karakteren og bakgrunnen til de forskjellige dansene.",
      "Barnet lærer også mer avanserte trinn, blant annet fra konkurransedans.",
      "Enkelte bruker kursene som forberedelse til å bli konkurransedanser, men de fleste følger kursene for gøy. Man kan også konkurrere som singledanser.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/under-15-%C3%A5r.jpg",
    category: "barn",
    tags: ["Sportsdans", "Standard", "Latin", "Konkurranse"],
  },
  {
    id: "jazz",
    title: "Jazz",
    shortTitle: "Jazz",
    intro:
      "Jazzdans med kroppsbeherskelse, fleksibilitet, teknikk og koreografi.",
    description: [
      "Her lærer du kroppsbeherskelse, fleksibilitet, teknikk og koreografi.",
      "Kursene passer for deg som ønsker å kose deg med dans, og fortsetterkursene egner seg godt for deg som vil utvikle deg til et høyere nivå også innen andre dansestiler.",
      "Noen av Hildemors sine trenere i jazz har danset i musikkvideoer og opptrådt på teaterscener i inn- og utland.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "jazz",
    tags: ["Jazz", "Teknikk", "Koreografi"],
  },
  {
    id: "song-dance",
    title: "Song & Dance",
    shortTitle: "Song & Dance",
    intro:
      "Musikalkurs med sang og dans i kombinasjon, tilpasset performance og scene.",
    description: [
      "For en opplevelse med sang og dans i kombinasjon anbefales musikalkurs med Myrna Braza i sang og Marit Hagen i dans.",
      "Koreografien tilpasses at du skal synge samtidig som det legges opp til å være kult og utfordrende.",
      "Sangundervisningen er grunnleggende og gir kunnskap om hvordan du bruker stemmen best mulig i kombinasjon med dans, stage-performance og microphone technique.",
      "Ingen forkunnskaper kreves.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/20110825_fotografi_hildemors_landslag_MG_3650.jpg",
    category: "jazz",
    tags: ["Song & Dance", "Musikal", "Sang"],
  },
  {
    id: "ballett",
    title: "Klassisk ballett",
    shortTitle: "Ballett",
    intro:
      "Styrke, balanse, positure, fleksibilitet og teknikk.",
    description: [
      "Styrke, balanse, positure og fleksibilitet utvikles godt på dette kurset.",
      "Du får grundig innføring i teknikken, og kurset passer som effektiv trening for hele kroppen og som supplement for andre dansegrener på høyere nivå.",
      "Ballet Barre er for å øke styrke og fleksibilitet og passer godt for dansere fra andre stilarter som vil videreutvikle seg.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/under-15-%C3%A5r.jpg",
    category: "ballett",
    tags: ["Ballett", "Ballet Barre", "Fleksibilitet"],
  },
  {
    id: "moderne",
    title: "Moderne/Contemporary",
    shortTitle: "Moderne",
    intro:
      "Moderne dans og contemporary for ungdom og voksne.",
    description: [
      "Moderne/Contemporary-kursene bygger videre på teknikk, kroppsbeherskelse, uttrykk og koreografi.",
      "Kursene hører sammen med Hildemors sitt tilbud innen teknisk og scenisk dans.",
    ],
    image:
      "https://www.hildemors.no/wp-content/uploads/2019/02/under-15-%C3%A5r.jpg",
    category: "ballett",
    tags: ["Moderne", "Contemporary", "Ungdom/voksen"],
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
