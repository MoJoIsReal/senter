"use client";

import { useMemo, useState } from "react";
import { courseTypes, getCourseType } from "@/lib/data/courseTypes";
import { scheduleDays } from "@/lib/data/seasons";
import type { ScheduledCourse, Season } from "@/lib/types";

const colorClass: Record<string, string> = {
  hiphop: "aqua",
  selskapsdans: "violet",
  barn: "violet",
  jazz: "pink",
  ballett: "rose",
  privat: "gold-block",
  apent: "violet",
};

export function ScheduleGrid({ season }: { season: Season }) {
  const [selected, setSelected] = useState<ScheduledCourse | null>(null);
  const selectedType = selected ? getCourseType(selected.courseTypeId) : null;

  const coursesByDay = useMemo(
    () =>
      scheduleDays.map((day) => ({
        day,
        startDate: season.courses.find((course) => course.day === day)?.startDate,
        courses: season.courses
          .filter((course) => course.day === day)
          .sort((a, b) => a.time.localeCompare(b.time)),
      })),
    [season.courses],
  );

  return (
    <>
      <section className="schedule-shell">
        <div className="schedule-head">
          <div>
            <h2>Ukeplan</h2>
            <p>
              {season.startsWeek} · {season.breakWeek} · {season.endsWeek}
            </p>
          </div>
          <p className="muted">Endringer kan forekomme</p>
        </div>

        <div className="schedule-grid">
          {coursesByDay.map(({ day, startDate, courses }) => (
            <div className="schedule-day" key={day}>
              <div className="schedule-day__head">
                {day}
                <span>Start {startDate}</span>
              </div>
              <div className="schedule-day__courses">
                {courses.map((course) => {
                  const type = getCourseType(course.courseTypeId) ?? courseTypes[0];
                  return (
                    <button
                      className={`schedule-course ${colorClass[type.category]}`}
                      key={course.id}
                      onClick={() => setSelected(course)}
                      type="button"
                    >
                      <time>{course.time}</time>
                      <strong>{course.title}</strong>
                      <span>{course.level}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <footer className="schedule-footer">
          <p>Endringer kan forekomme</p>
          <strong>{season.priceLine}</strong>
        </footer>
      </section>

      {selected && selectedType ? (
        <div
          className="drawer-backdrop"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <article
            className="course-detail"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-detail-title"
          >
            <div
              className="detail-image"
              style={{ backgroundImage: `url(${selectedType.image})` }}
              aria-hidden="true"
            />
            <div className="detail-body">
              <p className="detail-kicker">Kursinformasjon</p>
              <h2 id="course-detail-title">{selected.title}</h2>
              <p className="detail-meta">
                {selected.day} {selected.time} · {selected.level} ·{" "}
                {selected.capacity - selected.enrolled} ledige plasser
              </p>
              {selectedType.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="detail-actions">
                <button
                  className="button secondary"
                  onClick={() => setSelected(null)}
                  type="button"
                >
                  Lukk
                </button>
                <a className="button" href={`/pamelding?course=${selected.id}`}>
                  Meld deg på
                </a>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
