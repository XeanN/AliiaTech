import Link from "next/link";
import { getAllBlogPosts } from "@/lib/data";

export default async function AdminBlogList() {
  const posts = await getAllBlogPosts();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Blog ({posts.length})</h1>
        <Link href="/admin/blog/nuevo" className="bg-accent-start text-dark-bg font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition">
          + Nuevo post
        </Link>
      </div>
      <div className="space-y-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/admin/blog/${post.slug}`}
            className="block bg-dark-card p-4 rounded-lg border border-gray-700 hover:border-accent-start transition"
          >
            <p className="text-white font-semibold">{post.title}</p>
            <p className="text-text-muted text-sm">
              {post.author} · {post.date} · /blog/{post.slug}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
