import { AdminShell } from "@/components/AdminShell";
import { activeSeason } from "@/lib/data/seasons";

export default function AdminPage() {
  const enrolled = activeSeason.courses.reduce((sum, course) => sum + course.enrolled, 0);
  const capacity = activeSeason.courses.reduce((sum, course) => sum + course.capacity, 0);
  const nearlyFull = activeSeason.courses.filter(
    (course) => course.capacity - course.enrolled <= 2,
  ).length;

  return (
    <AdminShell
      title="Kursoversikt"
      intro="Opprett kurs, styr kapasitet, registrer betaling og følg oppmøte gjennom semesteret."
    >
      <section className="admin-stats">
        <div className="admin-card stat">
          <span>Aktive kurs</span>
          <strong>{activeSeason.courses.length}</strong>
        </div>
        <div className="admin-card stat">
          <span>Påmeldte</span>
          <strong>{enrolled}</strong>
        </div>
        <div className="admin-card stat">
          <span>Kapasitet</span>
          <strong>{capacity}</strong>
        </div>
        <div className="admin-card stat">
          <span>Få plasser igjen</span>
          <strong>{nearlyFull}</strong>
        </div>
      </section>

      <section className="admin-card admin-table">
        <div className="admin-table__head">
          <strong>{activeSeason.title}</strong>
          <span>Betaling registreres manuelt</span>
        </div>
        {activeSeason.courses.slice(0, 10).map((course) => (
          <div className="admin-row" key={course.id}>
            <div>
              <strong>{course.title}</strong>
              <span>
                {course.day} {course.time} · {course.level}
              </span>
            </div>
            <span>{course.enrolled} / {course.capacity}</span>
            <span>{course.capacity - course.enrolled} ledig</span>
            <span className="chip">Manuell betaling</span>
          </div>
        ))}
      </section>
    </AdminShell>
  );
}
