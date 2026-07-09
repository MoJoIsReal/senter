import Link from "next/link";

const links = [
  ["Kurs", "/kurs"],
  ["Timeplan", "/timeplan"],
  ["Om oss", "/om-oss"],
  ["Kontakt", "/kontakt"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="Hildemors Dansesenter">
          <img src="/images/logo_nobg.png" alt="" />
        </Link>
        <nav className="site-nav" aria-label="Hovedmeny">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link className="nav-cta" href="/pamelding">
            Påmelding
          </Link>
        </nav>
      </div>
    </header>
  );
}
