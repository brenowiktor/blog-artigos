import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <h1 className="site-title">Artigo não encontrado</h1>
      <p className="site-subtitle">O endereço acessado não corresponde a nenhum artigo.</p>
      <Link href="/">← Voltar para a página inicial</Link>
    </main>
  );
}