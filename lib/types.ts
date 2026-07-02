export type CourseCategory =
  | "hiphop"
  | "selskapsdans"
  | "barn"
  | "jazz"
  | "ballett"
  | "privat"
  | "apent";

export type CourseType = {
  id: string;
  title: string;
  shortTitle: string;
  intro: string;
  description: string[];
  image: string;
  category: CourseCategory;
  tags: string[];
};

export type ScheduledCourse = {
  id: string;
  courseTypeId: string;
  day: "Mandag" | "Tirsdag" | "Onsdag" | "Torsdag" | "Fredag" | "Lørdag";
  startDate: string;
  time: string;
  title: string;
  level: string;
  capacity: number;
  enrolled: number;
  instructor?: string;
  room?: string;
  priceNote?: string;
};

export type Season = {
  id: string;
  title: string;
  status: "draft" | "scheduled" | "published" | "archived";
  startsWeek: string;
  breakWeek: string;
  endsWeek: string;
  priceLine: string;
  courses: ScheduledCourse[];
};

export type SitePage = {
  slug: string;
  title: string;
  intro: string;
  body: string[];
  sections?: Array<{
    title: string;
    body: string[];
  }>;
};

export type TermsVersion = {
  id: string;
  label: string;
  effectiveFrom: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};
