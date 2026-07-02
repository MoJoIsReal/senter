import { notFound } from "next/navigation";
import { getSitePage, sitePages } from "@/lib/data/sitePages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="container page-section content-page">
      <span className="eyebrow">Hildemors</span>
      <h1>{page.title}</h1>
      <p className="lead">{page.intro}</p>
      <div className="panel content-panel">
        {page.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {page.sections?.map((section) => (
          <section
            className="content-subsection"
            id={section.title.toLowerCase().startsWith("historien") ? "historie" : undefined}
            key={section.title}
          >
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
