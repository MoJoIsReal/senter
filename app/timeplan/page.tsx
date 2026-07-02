import { ScheduleGrid } from "@/components/ScheduleGrid";
import { activeSeason, seasons } from "@/lib/data/seasons";

export default function SchedulePage() {
  const draftSeason = seasons.find((season) => season.status === "draft");

  return (
    <main className="container page-section">
      <div className="page-title-row">
        <div>
          <h1>Timeplan {activeSeason.title}</h1>
          <p className="lead">
            Levende versjon av den opprinnelige PDF-timeplanen. Kun aktivt
            publisert semester vises offentlig.
          </p>
        </div>
        {draftSeason ? (
          <div className="season-pill">
            <strong>{activeSeason.title}</strong>
            <span>{draftSeason.title} åpner senere</span>
          </div>
        ) : null}
      </div>
      <ScheduleGrid season={activeSeason} />
    </main>
  );
}
