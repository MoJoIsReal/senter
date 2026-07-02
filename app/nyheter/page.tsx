import { newsPosts } from "@/lib/data/news";

export default function NewsPage() {
  return (
    <main className="container page-section">
      <span className="eyebrow">Nyheter</span>
      <h1>Aktuelt fra Hildemors</h1>
      <p className="lead">
        Nyheter, workshops, ferieinformasjon og aktuelle påmeldinger basert på
        originalsidens nyhetsliste.
      </p>
      <section className="news-grid">
        {newsPosts.map((post) => (
          <article className="panel news-card" key={post.id}>
            <p className="news-meta">
              {post.author} · {post.date}
            </p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
