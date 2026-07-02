import { AdminShell } from "@/components/AdminShell";
import { activeSeason } from "@/lib/data/seasons";

export default function CheckInPage() {
  const todaysCourses = activeSeason.courses.filter((course) => course.day === "Torsdag");

  return (
    <AdminShell
      title="Resepsjon og innsjekk"
      intro="Resepsjonen registrerer oppmøte ved ankomst. QR-kode kan scannes, med manuelt søk som fallback."
    >
      <section className="checkin-layout">
        <div className="admin-card qr-card">
          <div className="qr-placeholder">QR</div>
          <h2>Scan deltaker</h2>
          <p className="muted">
            QR-koden finner elev, kurs og dagens kursuke. Resepsjonen bekrefter
            oppmøte før eleven går inn.
          </p>
          <input placeholder="Søk manuelt etter navn, telefon eller kurs" />
        </div>
        <div className="admin-card">
          <h2>Dagens kurs</h2>
          {todaysCourses.map((course) => (
            <div className="linked-course" key={course.id}>
              <strong>{course.time} · {course.title}</strong>
              <span>
                {course.enrolled} påmeldte · uke 4 av 12
              </span>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
