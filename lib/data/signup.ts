import type { TermsVersion } from "@/lib/types";

export const currentTerms: TermsVersion = {
  id: "terms-2026-07-02",
  label: "Kursvilkår 2026",
  effectiveFrom: "2026-07-02",
  sections: [
    {
      title: "Bindende påmelding",
      body: "Påmeldingen er bindende. For ordinære semesterkurs må avmelding skje innen første kursuke etter gjeldende frister.",
    },
    {
      title: "Bytte av kurs",
      body: "Man kan bytte kurs i sesongen dersom ønsket kurs har ledig plass. Eventuell prisdifferanse betales.",
    },
    {
      title: "Betaling og prøvetime",
      body: "Betaling håndteres manuelt av Hildemors. Admin registrerer status som ubetalt, delvis betalt eller betalt.",
    },
    {
      title: "Fravær og refusjon",
      body: "Fravær refunderes normalt ikke. Hildemors må informeres skriftlig ved relevante endringer.",
    },
    {
      title: "Vikar og endringer",
      body: "Hildemors kan bruke vikar og gjøre nødvendige endringer i kursoppsett ved behov.",
    },
    {
      title: "Force majeure",
      body: "Ved hendelser utenfor senterets kontroll er Hildemors fritatt for ansvar etter vilkårene.",
    },
  ],
};
