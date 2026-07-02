import Link from "next/link";
import { CourseTypeCard } from "@/components/CourseTypeCard";
import { courseTypes } from "@/lib/data/courseTypes";

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
        <div className="grid-3">
          {courseTypes.map((courseType) => (
            <CourseTypeCard courseType={courseType} key={courseType.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
