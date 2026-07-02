import { SignupFlow } from "@/components/SignupFlow";

type SignupPageProps = {
  searchParams: Promise<{ course?: string }>;
};

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const { course } = await searchParams;

  return (
    <main className="container page-section">
      <span className="eyebrow">Påmelding</span>
      <h1>Påmelding Hildemors Dansesenter</h1>
      <p className="lead">
        En guidet versjon av det opprinnelige Google-skjemaet med foresattinfo,
        samtykker og versjonerte kursvilkår.
      </p>
      <SignupFlow courseId={course} />
    </main>
  );
}
