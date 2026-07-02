import Link from "next/link";

const adminLinks = [
  ["Oversikt", "/admin"],
  ["Kurstype-innhold", "/admin/kurs"],
  ["Semester og timeplan", "/admin/timeplan"],
  ["Innsjekk", "/admin/innsjekk"],
];

export function AdminShell({
  children,
  title,
  intro,
}: {
  children: React.ReactNode;
  title: string;
  intro: string;
}) {
  return (
    <main className="container page-section">
      <section className="admin-app">
        <aside className="admin-sidebar">
          <div className="brand">
            Hildemors
            <span>Admin dashboard</span>
          </div>
          <nav className="admin-nav" aria-label="Admin">
            {adminLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="admin-content">
          <div className="admin-top">
            <div>
              <h1>{title}</h1>
              <p className="lead">{intro}</p>
            </div>
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}
