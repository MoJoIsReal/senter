import Link from "next/link";
import { CourseTypeCard } from "@/components/CourseTypeCard";
import { courseTypes } from "@/lib/data/courseTypes";

const courseGroups = [
  {
    title: "Barn og ungdom",
    ids: ["barnekurs-small", "barnekurs-7-10", "sportsdans"],
  },
  {
    title: "Hip hop, street og commercial",
    ids: ["hiphop", "hiphop-under-16", "streetdance-kids", "kpop", "commercial"],
  },
  {
    title: "Ballroom, latin og pardans",
    ids: ["latin-solo", "ballroom-beg", "ballroom-par", "salsa", "swing"],
  },
  {
    title: "Jazz, moderne og ballett",
    ids: ["jazz", "jazz-heels", "song-dance", "ballett", "moderne"],
  },
  {
    title: "Privat og åpent",
    ids: ["brudevals", "apent"],
  },
];

export default function CoursesPage() {
  return (
    <main>
      <section className="container hero">
        <div className="hero-card">
          <span className="eyebrow">Kurs hos Hildemors</span>
          <h1>Kurs for alle som vil danse.</h1>
          <p className="lead">
            Kurstypene bevarer innholdet fra originalsidene. Timeplanen henter
            beskrivelser herfra når du åpner et konkret kurs.
          </p>
          <div className="actions">
            <Link className="button" href="/timeplan">
              Se konkrete tider
            </Link>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true" />
      </section>

      <section className="container page-section">
        <h2>Velg kurstype</h2>
        <div className="course-group-list">
          {courseGroups.map((group) => (
            <section className="course-group" key={group.title}>
              <div className="course-group__head">
                <h3>{group.title}</h3>
              </div>
              <div className="grid-3">
                {group.ids.map((id) => {
                  const courseType = courseTypes.find((type) => type.id === id);
                  return courseType ? (
                    <CourseTypeCard courseType={courseType} key={courseType.id} />
                  ) : null;
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
