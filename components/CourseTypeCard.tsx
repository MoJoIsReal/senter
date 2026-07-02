import type { CourseType } from "@/lib/types";

export function CourseTypeCard({ courseType }: { courseType: CourseType }) {
  return (
    <article className="course-card">
      <div
        className="course-card__image"
        style={{ backgroundImage: `url(${courseType.image})` }}
        aria-hidden="true"
      />
      <div className="course-card__body">
        <h3>{courseType.title}</h3>
        <p className="muted">{courseType.intro}</p>
        <div className="chips" aria-label={`Kategorier for ${courseType.title}`}>
          {courseType.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
