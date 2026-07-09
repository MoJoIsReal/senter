import { ScheduleGrid } from "@/components/ScheduleGrid";
import { activeSeason } from "@/lib/data/seasons";

export default function SchedulePage() {
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
      </div>
      <ScheduleGrid season={activeSeason} />
    </main>
  );
}
