import type { Season, ScheduledCourse } from "@/lib/types";

const host2026Courses: ScheduledCourse[] = [
  { id: "mon-brudevals-1530", courseTypeId: "brudevals", day: "Mandag", startDate: "31/8", time: "15:30", title: "Brudevals", level: "Privat/gruppe", capacity: 10, enrolled: 4 },
  { id: "mon-commercial-girly-1625", courseTypeId: "commercial", day: "Mandag", startDate: "31/8", time: "16:25", title: "Commercial Girly Style", level: "10-15 år", capacity: 18, enrolled: 12 },
  { id: "mon-street-1710", courseTypeId: "streetdance-kids", day: "Mandag", startDate: "31/8", time: "17:10", title: "Street", level: "6-10 år · Begynnere", capacity: 18, enrolled: 15 },
  { id: "mon-latin-beg-1755", courseTypeId: "latin-solo", day: "Mandag", startDate: "31/8", time: "17:55", title: "Latin solo (tidl. Ladies)", level: "Begynnere", capacity: 20, enrolled: 13 },
  { id: "mon-latin-forts-1850", courseTypeId: "latin-solo", day: "Mandag", startDate: "31/8", time: "18:50", title: "Latin solo (tidl. Ladies)", level: "Fortsettere", capacity: 20, enrolled: 14 },

  { id: "tue-hiphop-1600", courseTypeId: "hiphop-under-16", day: "Tirsdag", startDate: "1/9", time: "16:00", title: "HipHop", level: "11-16 år", capacity: 20, enrolled: 18 },
  { id: "tue-sportsdans-1650", courseTypeId: "sportsdans", day: "Tirsdag", startDate: "1/9", time: "16:50", title: "Sportsdans", level: "Rekruttering 2-3", capacity: 18, enrolled: 17 },
  { id: "tue-sportsdans-1735", courseTypeId: "sportsdans", day: "Tirsdag", startDate: "1/9", time: "17:35", title: "Sportsdans", level: "10-15 · Rekruttering 1", capacity: 18, enrolled: 16 },
  { id: "tue-ballroom-beg-1820", courseTypeId: "ballroom-par", day: "Tirsdag", startDate: "1/9", time: "18:20", title: "Ballroom/Latin voksen par", level: "Begynnere", capacity: 24, enrolled: 22 },
  { id: "tue-ballroom-forts-1915", courseTypeId: "ballroom-par", day: "Tirsdag", startDate: "1/9", time: "19:15", title: "Ballroom/Latin voksen par", level: "Fortsettere", capacity: 24, enrolled: 21 },
  { id: "tue-ballroom-2-3-2010", courseTypeId: "ballroom-par", day: "Tirsdag", startDate: "1/9", time: "20:10", title: "Ballroom/Latin voksen par", level: "Fortsetter 2&3", capacity: 24, enrolled: 19 },

  { id: "wed-ballet-barre-1600", courseTypeId: "ballett", day: "Onsdag", startDate: "2/9", time: "16:00", title: "Ballet Barre", level: "Ungd/voksen", capacity: 18, enrolled: 16 },
  { id: "wed-contemporary-1655", courseTypeId: "moderne", day: "Onsdag", startDate: "2/9", time: "16:55", title: "Moderne/Contemporary", level: "Ungdom/voksen", capacity: 18, enrolled: 14 },
  { id: "wed-ballet-1750", courseTypeId: "ballett", day: "Onsdag", startDate: "2/9", time: "17:50", title: "Ballet", level: "6-11 år", capacity: 18, enrolled: 15 },
  { id: "wed-jazz-heels-1835", courseTypeId: "jazz-heels", day: "Onsdag", startDate: "2/9", time: "18:35", title: "Jazz in Heels", level: "Ungdom/voksen", capacity: 18, enrolled: 12 },
  { id: "wed-voksen-ungdom-1930", courseTypeId: "ballroom-beg", day: "Onsdag", startDate: "2/9", time: "19:30", title: "Voksen/ungdom", level: "Begynnere", capacity: 20, enrolled: 13 },
  { id: "wed-swing-salsa-2025", courseTypeId: "swing", day: "Onsdag", startDate: "2/9", time: "20:25", title: "Swing/Salsa", level: "Begynnere", capacity: 20, enrolled: 17 },

  { id: "thu-commercial-beg-1600", courseTypeId: "commercial", day: "Torsdag", startDate: "3/9", time: "16:00", title: "Commercial", level: "Ung/voksen · Begynnere", capacity: 18, enrolled: 11 },
  { id: "thu-hiphop-street-1655", courseTypeId: "streetdance-kids", day: "Torsdag", startDate: "3/9", time: "16:55", title: "Hip Hop & Street", level: "Fortsettere 7-11 år", capacity: 18, enrolled: 17 },
  { id: "thu-commercial-forts-1740", courseTypeId: "commercial", day: "Torsdag", startDate: "3/9", time: "17:40", title: "Commercial", level: "Ung/voksen · Fortsettere", capacity: 18, enrolled: 15 },
  { id: "thu-kpop-under14-1840", courseTypeId: "kpop", day: "Torsdag", startDate: "3/9", time: "18:40", title: "K-Pop", level: "Under 14 år", capacity: 18, enrolled: 15 },
  { id: "thu-kpop-youth-adult-1925", courseTypeId: "kpop", day: "Torsdag", startDate: "3/9", time: "19:25", title: "K-Pop", level: "Ungdom/voksen", capacity: 18, enrolled: 16 },
  { id: "thu-hiphop-youth-adult-2020", courseTypeId: "hiphop", day: "Torsdag", startDate: "3/9", time: "20:20", title: "Hip Hop", level: "Ungdom/voksen", capacity: 18, enrolled: 12 },

  { id: "fri-sportsdans-1615", courseTypeId: "sportsdans", day: "Fredag", startDate: "4/9", time: "16:15", title: "Sportsdans", level: "Rekruttering 2-3", capacity: 18, enrolled: 14 },
  { id: "fri-solo-sportsdans-1700", courseTypeId: "sportsdans", day: "Fredag", startDate: "4/9", time: "17:00", title: "Solo Sportsdans", level: "Ungdom", capacity: 18, enrolled: 12 },
  { id: "fri-ballet-closed-1745", courseTypeId: "ballett", day: "Fredag", startDate: "4/9", time: "17:45", title: "Ballet Lukket undervisning", level: "Kun inviterte", capacity: 12, enrolled: 12 },
  { id: "fri-open-dance-1845", courseTypeId: "apent", day: "Fredag", startDate: "4/9", time: "18:45", title: "Åpen Dansekveld", level: "Kr. 50,- pr person", capacity: 40, enrolled: 0, priceNote: "Kr. 50,- pr person" },
  { id: "fri-open-dance-1930", courseTypeId: "apent", day: "Fredag", startDate: "4/9", time: "19:30", title: "Åpen Dansekveld", level: "Fortsetter", capacity: 40, enrolled: 0, priceNote: "Kr. 50,- pr person" },

  { id: "sat-3-5-1100", courseTypeId: "barnekurs-small", day: "Lørdag", startDate: "5/9", time: "11:00", title: "3/5 år", level: "Begynnere", capacity: 16, enrolled: 14 },
  { id: "sat-5-7-1145", courseTypeId: "barnekurs-small", day: "Lørdag", startDate: "5/9", time: "11:45", title: "5/7 år", level: "Begynnere/Fortsettere", capacity: 16, enrolled: 15 },
  { id: "sat-7-10-1235", courseTypeId: "barnekurs-7-10", day: "Lørdag", startDate: "5/9", time: "12:35", title: "7/10 år", level: "Sportsdans/pardans", capacity: 16, enrolled: 13 },
];

export const seasons: Season[] = [
  {
    id: "host-2026",
    title: "Høst 2026",
    status: "published",
    startsWeek: "Sesongstart uke 36",
    breakWeek: "Høstferie uke 41",
    endsWeek: "Sesongslutt uke 48",
    priceLine:
      "12 uker 1 person 1 kurs kr. 2690,- · 1 par kr. 4980,- · 2 søsken kr. 4980,- · 3 søsken kr. 6290,- · 4 søsken kr. 6900,- · 6 uker 1 kurs kr. 1790,-",
    courses: host2026Courses,
  },
  {
    id: "var-2027",
    title: "Vår 2027",
    status: "draft",
    startsWeek: "Planlegges",
    breakWeek: "Ikke publisert",
    endsWeek: "Ikke publisert",
    priceLine: "Prislinje settes før publisering.",
    courses: [],
  },
];

export const activeSeason =
  seasons.find((season) => season.status === "published") ?? seasons[0];

export const scheduleDays = [
  "Mandag",
  "Tirsdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lørdag",
] as const;
