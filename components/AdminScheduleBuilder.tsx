import { Fragment } from "react";
import { activeSeason } from "@/lib/data/seasons";

export function AdminScheduleBuilder() {
  const sampleCourses = activeSeason.courses.slice(0, 24);
  const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
  const times = ["15:30", "16:00", "17:00", "18:00", "19:00", "20:00"];

  return (
    <div className="builder-layout">
      <aside className="admin-card builder-bank">
        <h2>Kursbank</h2>
        <div className="bank-card">
          <strong>Hip Hop Ungdom</strong>
          <span>Dra til dag og tidspunkt · 20 plasser</span>
        </div>
        <div className="bank-card">
          <strong>Brudevals</strong>
          <span>Privat/gruppe · sal 2</span>
        </div>
        <div className="bank-card">
          <strong>Barnekurs 5/7 år</strong>
          <span>Lørdag ønsket · 16 plasser</span>
        </div>
      </aside>

      <section className="admin-card builder-board">
        <div className="builder-grid">
          <div className="builder-corner" />
          {days.map((day) => (
            <div className="builder-head" key={day}>
              {day}
            </div>
          ))}
          {times.map((time) => (
            <Fragment key={time}>
              <div className="builder-time" key={`${time}-label`}>
                {time}
              </div>
              {days.map((day) => {
                const course = sampleCourses.find(
                  (candidate) =>
                    candidate.day === day && candidate.time.startsWith(time.slice(0, 2)),
                );
                return (
                  <div className="builder-cell" key={`${day}-${time}`}>
                    {course ? (
                      <div className="builder-course">
                        <strong>{course.time}</strong>
                        <span>{course.title}</span>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
