import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/data";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.shortDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.shortDescription,
      images: [post.imageUrl.trim()],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.shortDescription,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="h-[50vh] min-h-[500px] flex items-center justify-center relative text-white [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${post.imageUrl.trim()}')` }} />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="container mx-auto px-6 text-center relative z-10" data-aos="fade-in">
          <span className="text-lg font-semibold text-accent-start">Blog de Aliia Tech</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto mt-2">{post.title}</h1>
          <p className="mt-4 text-text-muted">
            Publicado por {post.author} el {post.date}
          </p>
        </div>
      </section>

      <section className="content-card relative z-10 -mt-0 md:-mt-4">
        <div className="container mx-auto px-6">
          <div className="prose prose-lg prose-invert max-w-3xl mx-auto" data-aos="fade-up">
            <ReactMarkdown>{post.contentMarkdown}</ReactMarkdown>
          </div>
        </div>
      </section>

      <section className="bg-dark-bg py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">¿Listo para transformar tu negocio?</h2>
          <Link href="/contacto" className="inline-block mt-8 bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
            Contáctanos ahora
          </Link>
        </div>
      </section>
    </>
  );
}
