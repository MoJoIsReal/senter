import { AdminScheduleBuilder } from "@/components/AdminScheduleBuilder";
import { AdminShell } from "@/components/AdminShell";

export default function AdminSchedulePage() {
  return (
    <AdminShell
      title="Semester og timeplan"
      intro="Bygg neste semester som utkast. Publisering erstatter aktiv offentlig timeplan."
    >
      <section className="admin-stats">
        <div className="admin-card stat">
          <span>Aktiv</span>
          <strong>Høst 2026</strong>
        </div>
        <div className="admin-card stat">
          <span>Utkast</span>
          <strong>Vår 2027</strong>
        </div>
        <div className="admin-card stat">
          <span>Publisering</span>
          <strong>Planlegges</strong>
        </div>
      </section>
      <AdminScheduleBuilder />
    </AdminShell>
  );
}
