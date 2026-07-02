# Hildemors Modernisering Design

## Formål

Modernisere Hildemors Dansesenter uten å bytte ut identiteten. Innholdet fra dagens nettside skal bevares, men struktureres bedre, og dagens Google Forms/PDF-flyt skal erstattes av en levende kurs-, timeplan- og påmeldingsløsning.

Teknisk retning: Vercel-hostet webapp med Neon Serverless Postgres som database.

## Designretning

Uttrykket skal være lyst, varmt og lokalt, ikke mørkt eller nattklubbaktig. Bruk varm off-white base, mørk tekst, dempet blå som primær handlingsfarge, og gull/sage som støttefarger. Bilder fra dagens Hildemors-side og sosiale kanaler brukes for å bevare energi, dans, show og fellesskap.

Forsiden skal kombinere studiofølelse og handling:

- Merkevare og trygghet først.
- Kursfinner og påmelding synlig tidlig.
- Levende timeplan som erstatter PDF.

## Public Navigasjon

Public nettside skal minst ha:

- Hjem
- Kurs
- Timeplan
- Privattimer
- Om oss
- Historie
- Show
- Pris
- Kontakt
- Betalingsbetingelser / kursvilkår
- Etikette, hvis innholdet fortsatt er relevant

`Om oss`, `Historie` og `Privattimer` skal bevares som egne sider. `Privattimer` skal også kunne være en kurstype i admin, siden brudevals/privatundervisning kan knyttes til påmelding eller forespørsel.

## Kursinnhold

Public `Kurs`-tabben viser redaksjonelle kurstyper fra originalsidens innhold, for eksempel:

- Hip Hop, Street og K-Pop
- Selskapsdans
- Barnekurs
- Jazz og scene
- Ballett og moderne
- Privattimer

Kurstype-innholdet eies i admin. Hver kurstype har navn, ingress, full beskrivelse, bilde, kategorifarge, eventuell alder/nivåtekst og synlighet.

Konkrete kurs i timeplanen peker til en kurstype. Når en bruker klikker på et kurs i timeplanen, vises kurstypebeskrivelsen sammen med den konkrete kursradens dag, tid, alder/nivå, pris, kapasitet og påmeldingsstatus.

Eksempel: Begge timeplanradene `K-Pop torsdag 18:40 Under 14 år` og `K-Pop torsdag 19:25 Ungdom/voksen` peker til kurstypen `K-Pop`, som inneholder teksten om korte koreografier fra sosiale medier, K-POP, Shuffle og at begynnerkurs ikke krever forkunnskaper.

## Levende Timeplan

Timeplanen skal erstatte PDF-en, men ta utgangspunkt i samme tydelige ukegrid:

- Mandag-lørdag som kolonner.
- Hver dag viser flere kurskort i kronologisk rekkefølge.
- Kurskort viser tidspunkt, kursnavn og alder/nivå.
- Klikk på kurskort åpner kursdetalj og påmeldingshandling.
- Footer/infotekst viser sesongstart, høstferie, sesongslutt, prislinjer og “Endringer kan forekomme”.

Public timeplan skal kun vise kurs fra aktivt publisert semester.

## Semester Og Publisering

Semester/sesong er en egen enhet, for eksempel `Høst 2026` og `Vår 2027`.

Semesterstatus:

- `draft`: kan redigeres i admin, ikke synlig offentlig.
- `scheduled`: klart og planlagt for publisering på dato/klokkeslett.
- `published`: aktiv offentlig timeplan og påmelding.
- `archived`: tidligere semester, beholdes for historikk og administrasjon.

Hildemors kan bygge `Vår 2027` mens `Høst 2026` fortsatt er offentlig. Når `Vår 2027` publiseres, blir det ny public timeplan, og `Høst 2026` arkiveres. Eksisterende påmeldinger og oppmøtehistorikk for arkivert semester bevares.

Publisering må kreve tydelig bekreftelse fordi den erstatter aktiv offentlig timeplan.

## Admin Dashboard

Admin skal være et praktisk kursdriftverktøy, ikke et tungt CRM.

Hildemors må kunne:

- Opprette og redigere kurstyper/innhold.
- Opprette og redigere konkrete kurs.
- Legge kurs i semester.
- Sette dag, starttid, varighet, instruktør, sal, pris og maks antall deltakere.
- Se ledige plasser og venteliste.
- Registrere betaling.
- Registrere oppmøte for hver elev over 12 kursuker.
- Lage nytt semester som utkast.
- Forhåndsvise og publisere ny timeplan.

Timeplanbygger i admin bør være visuell:

- Kursbank med kurs som kan dras inn i ukegrid.
- Mandag-lørdag som planleggingsflate.
- Kurskort kan flyttes mellom dager og tidspunkt.
- Sidepanel viser/redigerer valgt kurs.
- Konfliktvarsling for sal/instruktør på samme tidspunkt.

## Påmelding

Påmelding erstatter Google Forms med en guidet firestegs flyt:

1. Kurs og deltaker
2. Foresatt og kontaktinfo
3. Samtykker og kursvilkår
4. Bekreft og send

For barn og ungdom skal foresatt være eksplisitt:

- Foresattes fornavn
- Foresattes etternavn
- Foresattes e-post
- Foresattes telefonnummer
- Ekstra kontaktperson, valgfritt

For voksne kursdeltakere kan samme steg brukes som deltakerens egen kontaktinfo.

Påmeldingen må også støtte:

- Dansepartners navn for parkurs.
- Adresse og poststed.
- Aktivitetskort fra Bergen Kommune.
- Reklamefoto/film-samtykke.
- Beskjed til Hildemors.
- Automatisk venteliste hvis kurset er fullt.

## Kursvilkår

Kursvilkårene fra dagens Google Forms skal bevares, men vises mer lesbart i steg 3.

Vilkår grupperes i temaer:

- Bindende påmelding
- Bytte av kurs
- Betaling og prøvetime
- Fravær og refusjon
- Vikar og endringer
- Force majeure
- Personvern

Brukeren må aktivt bekrefte “Jeg godtar påmelding- og betalingsbetingelsene” før innsending. Full norsk/engelsk tekst skal være tilgjengelig fra samme steg.

## Datamodell

Foreslåtte hovedentiteter:

- `pages`: redaksjonelle sider som Om oss, Historie, Privattimer, Show, Pris.
- `course_types`: kurstypeinnhold som Hip Hop, K-Pop, Selskapsdans, Barnekurs.
- `seasons`: semester med status, start/slutt, publiseringstidspunkt.
- `courses`: konkrete kurs i et semester.
- `course_sessions`: ukentlige økter eller 12 kursuker for oppmøte.
- `participants`: elever/deltakere.
- `guardians`: foresatte/kontaktpersoner.
- `enrollments`: påmelding til konkret kurs.
- `payments`: betalingsregistreringer og status.
- `attendance`: oppmøte per deltaker per kursuke.
- `consents`: foto/film og vilkårsaksept.

Viktige relasjoner:

- Et `course` tilhører ett `season`.
- Et `course` peker til én `course_type`.
- En `enrollment` peker til `course` og `participant`.
- `participant` kan ha én eller flere `guardians`.
- `attendance` knytter `enrollment` til `course_session`.

## Mockups

Arbeidsmockups ligger i `mockups/`:

- `public-courses-tab.html`
- `public-live-schedule.html`
- `signup-original-modernized.html`
- `signup-step-3-terms.html`
- `admin-dashboard-concept.html`
- `admin-season-publishing.html`
- `admin-visual-schedule-builder.html`
- `admin-course-types.html`

## Åpne Avklaringer

- Om betaling kun registreres manuelt i første versjon, eller om Vipps/kort skal integreres senere.
- Om instruktører skal ha egen mobiltilpasset oppmøtevisning.
- Om tidligere semester skal være synlig offentlig som arkiv eller kun internt.
- Om kursvilkår skal ha versjonering, slik at hver påmelding lagrer nøyaktig vilkårsversjon.
