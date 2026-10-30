# Blog de Artigos

## Objetivo
Blog de artigos em Next.js (App Router) com Server Components, geração estática
de páginas por slug e metadados de SEO únicos para cada artigo.

## Estrutura dos artigos
Os artigos ficam em `data/articles.json`. Cada artigo tem:
- `title`: título
- `description`: descrição curta (usada no SEO)
- `content`: conteúdo
- `author` e `date`: autor e data

O `slug` é gerado a partir do título com a biblioteca `slugify`
(`lib/articles.ts`).

## Instalação e execução
```bash
npm ci              # instala as dependências a partir do package-lock.json
npm run dev         # desenvolvimento em http://localhost:3000
npm run build       # build de produção
npm start           # executa o build de produção
```

## Estratégia de geração das páginas
- `/`: Server Component estático que lista os artigos.
- `/artigos/[slug]`: **SSG**. A função `generateStaticParams` gera uma página
  estática para cada slug no build.
- `generateMetadata` define `title` e `description` com base no artigo.
- Slugs inexistentes chamam `notFound()` e exibem a página 404.

Escolhi SSG porque o conteúdo muda pouco, o que dá páginas rápidas e boas para SEO.

## Deploy
Publicado na Vercel, com deploy automático a cada push na branch `main`.

**URL de produção:** https://blog-artigos.vercel.app