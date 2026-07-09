import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <img
            alt="Hildemors Dansesenter"
            className="footer-logo"
            src="/images/logo_nobg.png"
          />
          <p>
            Torggaten 7, ved siden av Hotell Norge. Inngang via Bunnpris til
            høyre, opp trappen, 5015 Bergen.
          </p>
        </div>
        <div>
          <p>
            <strong>Tlf:</strong> 55 32 00 33
            <br />
            <strong>E-post:</strong> info@hildemors.no
          </p>
          <p>
            <Link href="/privattimer">Privattimer</Link> ·{" "}
            <Link href="/show">Show</Link> ·{" "}
            <Link href="/pris">Pris</Link> ·{" "}
            <Link href="/nyheter">Nyheter</Link>
            <br />
            <Link href="/om-oss#historie">Historie</Link> ·{" "}
            <Link href="/etikette">Etikette</Link> ·{" "}
            <Link href="/betalingsbetingelser">Betalingsbetingelser</Link> ·{" "}
            <Link href="/admin">Admin</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
