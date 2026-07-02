import Link from "next/link";
import { CourseTypeCard } from "@/components/CourseTypeCard";
import { courseTypes } from "@/lib/data/courseTypes";
import { activeSeason } from "@/lib/data/seasons";

export default function HomePage() {
  return (
    <main>
      <section className="container hero">
        <div className="hero-card">
          <span className="eyebrow">Torggaten 7 · Bergen sentrum</span>
          <h1>Dans med trygghet, energi og glede.</h1>
          <p className="lead">
            Hildemors Dansesenter tilbyr kurs for barn, ungdom, voksne, par og deg
            som vil ta neste dansesteg.
          </p>
          <div className="actions">
            <Link className="button gold" href="/kurs">
              Finn ditt kurs
            </Link>
            <Link className="button secondary" href="/timeplan">
              Se timeplan
            </Link>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true" />
      </section>

      <section className="container page-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Kurs</span>
            <h2>Finn dansekurset som passer.</h2>
          </div>
          <Link className="button secondary" href="/kurs">
            Alle kurs
          </Link>
        </div>
        <div className="grid-3">
          {courseTypes.slice(0, 6).map((courseType) => (
            <CourseTypeCard courseType={courseType} key={courseType.id} />
          ))}
        </div>
      </section>

      <section className="container page-section">
        <div className="callout">
          <div>
            <span className="eyebrow">Levende timeplan</span>
            <h2>{activeSeason.title} er publisert.</h2>
            <p className="lead">
              PDF-planen er erstattet av en klikkbar ukeplan med reelle kurs,
              tider og kursbeskrivelser.
            </p>
          </div>
          <Link className="button" href="/timeplan">
            Åpne timeplan
          </Link>
        </div>
      </section>
    </main>
  );
}
