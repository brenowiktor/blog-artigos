import slugify from "slugify";
import data from "@/data/articles.json";

export type Article = {
  slug: string;
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
};

export function toSlug(title: string) {
  return slugify(title, { lower: true, strict: true });
}

export async function getArticles(): Promise<Article[]> {
  return data.map((article) => ({ ...article, slug: toSlug(article.title) }));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}