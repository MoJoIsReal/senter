"use client";

import { useMemo, useState } from "react";
import { currentTerms } from "@/lib/data/signup";
import { activeSeason } from "@/lib/data/seasons";

const steps = [
  "Kurs og deltaker",
  "Foresatt og kontaktinfo",
  "Samtykker og vilkår",
  "Bekreft og send",
];

export function SignupFlow({ courseId }: { courseId?: string }) {
  const [step, setStep] = useState(0);
  const selectedCourse = useMemo(
    () =>
      activeSeason.courses.find((course) => course.id === courseId) ??
      activeSeason.courses[0],
    [courseId],
  );

  return (
    <section className="signup-layout">
      <aside className="signup-summary panel">
        <h2>Din påmelding</h2>
        <p>
          <strong>{selectedCourse.title}</strong>
          <br />
          {selectedCourse.day} {selectedCourse.time} · {selectedCourse.level}
        </p>
        <p className="muted">
          {selectedCourse.capacity - selectedCourse.enrolled} ledige plasser i{" "}
          {activeSeason.title}
        </p>
        <p className="chip">Vilkår: {currentTerms.label}</p>
      </aside>

      <div className="signup-main panel">
        <div className="signup-steps" aria-label="Påmeldingssteg">
          {steps.map((label, index) => (
            <button
              className={index === step ? "active" : ""}
              key={label}
              onClick={() => setStep(index)}
              type="button"
            >
              <span>{index + 1}</span>
              {label}
            </button>
          ))}
        </div>

        <div className="signup-body">
          {step === 0 ? <ParticipantStep /> : null}
          {step === 1 ? <GuardianStep /> : null}
          {step === 2 ? <TermsStep /> : null}
          {step === 3 ? <ConfirmStep courseTitle={selectedCourse.title} /> : null}

          <div className="signup-actions">
            <button
              className="button secondary"
              disabled={step === 0}
              onClick={() => setStep((value) => Math.max(0, value - 1))}
              type="button"
            >
              Tilbake
            </button>
            <button
              className="button"
              onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))}
              type="button"
            >
              {step === steps.length - 1 ? "Send påmelding" : "Fortsett"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParticipantStep() {
  return (
    <div>
      <h2>1. Kurs og deltaker</h2>
      <div className="form-grid two">
        <Field label="Fornavn" value="Emma" />
        <Field label="Etternavn" value="Nilsen" />
      </div>
      <Field
        label="Eventuell dansepartners navn"
        value="Valgfritt for parkurs"
      />
      <div className="form-grid three">
        <Field label="Dag" value="08" />
        <Field label="Måned" value="Juni" />
        <Field label="År" value="2012" />
      </div>
    </div>
  );
}

function GuardianStep() {
  return (
    <div>
      <h2>2. Foresatt og kontaktinfo</h2>
      <p className="muted">
        For barn og ungdom registreres foresatt tydelig. For voksne brukes samme
        felter som deltakerens kontaktinfo.
      </p>
      <div className="form-grid two">
        <Field label="Foresattes fornavn" value="Kari" />
        <Field label="Foresattes etternavn" value="Nilsen" />
        <Field label="Foresattes e-post" value="kari@example.no" />
        <Field label="Foresattes telefonnummer" value="999 99 999" />
      </div>
      <Field label="Ekstra kontaktperson" value="Valgfritt" />
      <Field label="Gateadresse og husnummer" value="Torgallmenningen 1" />
      <Field label="Postnummer og poststed" value="5014 Bergen" />
      <Field label="Aktivitetskort fra Bergen Kommune" value="Valgfritt" />
      <Field label="Beskjed til Hildemors" value="Erfaring, behov eller helse" />
    </div>
  );
}

function TermsStep() {
  return (
    <div>
      <h2>3. Samtykker og vilkår</h2>
      <div className="radio-list">
        <label>
          <input name="photo" type="radio" /> Ja, det er helt i orden med
          reklamefoto/film
        </label>
        <label>
          <input name="photo" type="radio" /> Nei, det ønsker jeg ikke
        </label>
      </div>
      <div className="terms-grid">
        {currentTerms.sections.map((section) => (
          <article className="term-card" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </article>
        ))}
      </div>
      <label className="accept-row">
        <input type="checkbox" /> Jeg godtar påmelding- og betalingsbetingelsene.
      </label>
    </div>
  );
}

function ConfirmStep({ courseTitle }: { courseTitle: string }) {
  return (
    <div>
      <h2>4. Bekreft og send</h2>
      <p className="lead">
        Påmeldingen opprettes med status ny. Hvis kurset er fullt settes den
        automatisk på venteliste.
      </p>
      <div className="panel mini-panel">
        <strong>{courseTitle}</strong>
        <span>Betaling registreres manuelt av Hildemors.</span>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="fake-field">
      <span>{label}</span>
      <input defaultValue={value} />
    </label>
  );
}
