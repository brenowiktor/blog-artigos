import Link from "next/link";
import { getArticles } from "@/lib/articles";

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className="container">
      <h1 className="site-title">Blog de Artigos</h1>
      <p className="site-subtitle">Leituras sobre Next.js e desenvolvimento web</p>

      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.slug} className="article-card">
            <h2>
              <Link href={`/artigos/${article.slug}`}>{article.title}</Link>
            </h2>
            <p>{article.description}</p>
            <span className="article-meta">
              {article.author} · {article.date}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}