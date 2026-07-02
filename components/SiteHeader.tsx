import Link from "next/link";

const links = [
  ["Hjem", "/"],
  ["Kurs", "/kurs"],
  ["Timeplan", "/timeplan"],
  ["Privattimer", "/privattimer"],
  ["Show", "/show"],
  ["Pris", "/pris"],
  ["Nyheter", "/nyheter"],
  ["Om oss", "/om-oss"],
  ["Kontakt", "/kontakt"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/">
          Hildemors
          <span>Dansesenter i Bergen sentrum</span>
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
