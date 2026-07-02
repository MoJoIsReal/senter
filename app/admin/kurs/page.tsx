import { AdminShell } from "@/components/AdminShell";
import { courseTypes } from "@/lib/data/courseTypes";
import { activeSeason } from "@/lib/data/seasons";

export default function AdminCourseTypesPage() {
  const selected = courseTypes.find((type) => type.id === "hiphop") ?? courseTypes[0];
  const linkedCourses = activeSeason.courses.filter(
    (course) => course.courseTypeId === selected.id,
  );

  return (
    <AdminShell
      title="Kurstype-innhold"
      intro="Rediger tekstene som vises på Kurs-tabben og i timeplanens kursdetaljer."
    >
      <section className="admin-split">
        <div className="admin-card">
          <h2>Kurstyper</h2>
          {courseTypes.map((type) => (
            <div className="type-row" key={type.id}>
              <strong>{type.title}</strong>
              <span>
                {activeSeason.courses.filter((course) => course.courseTypeId === type.id).length} kurs
              </span>
            </div>
          ))}
        </div>
        <div className="admin-card editor-card">
          <h2>Rediger {selected.shortTitle}</h2>
          <label>
            Navn
            <input defaultValue={selected.title} />
          </label>
          <label>
            Ingress
            <input defaultValue={selected.intro} />
          </label>
          <label>
            Beskrivelse
            <textarea defaultValue={selected.description.join("\n\n")} rows={9} />
          </label>
          <h3>Brukes av</h3>
          {linkedCourses.map((course) => (
            <div className="linked-course" key={course.id}>
              <strong>{course.title}</strong>
              <span>
                {course.day} {course.time} · {course.level}
              </span>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
