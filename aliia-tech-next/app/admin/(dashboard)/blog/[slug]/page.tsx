import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/data";
import { saveBlogPost, deleteBlogPost } from "@/app/actions/blog";

const inputClass = "mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-start";
const labelClass = "block text-sm font-medium text-text-muted";

export default async function BlogEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isNew = slug === "nuevo";
  const post = isNew ? null : await getBlogPostBySlug(slug);

  if (!isNew && !post) notFound();

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-white mb-6">{isNew ? "Nuevo post" : `Editar: ${post!.title}`}</h1>

      <form action={saveBlogPost} className="space-y-6">
        <input type="hidden" name="originalSlug" defaultValue={post?.slug || ""} />

        <div>
          <label className={labelClass}>Slug (URL) *</label>
          <input name="slug" required defaultValue={post?.slug} className={inputClass} placeholder="ej: mi-nuevo-articulo" />
        </div>

        <div>
          <label className={labelClass}>Título *</label>
          <input name="title" required defaultValue={post?.title} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Descripción corta *</label>
          <input name="shortDescription" required defaultValue={post?.shortDescription} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Imagen (ruta /archivo.jpg) *</label>
          <input name="imageUrl" required defaultValue={post?.imageUrl} className={inputClass} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Autor *</label>
            <input name="author" required defaultValue={post?.author} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Fecha *</label>
            <input name="date" required defaultValue={post?.date} className={inputClass} placeholder="ej: 5 de Noviembre, 2025" />
          </div>
        </div>

        <div>
          <label className={labelClass}>Contenido (Markdown) *</label>
          <textarea name="contentMarkdown" required rows={16} defaultValue={post?.contentMarkdown} className={`${inputClass} font-mono text-sm`} />
        </div>

        <div className="flex gap-4 pt-4">
          <button type="submit" className="bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
            Guardar
          </button>
        </div>
      </form>

      {!isNew && (
        <form action={deleteBlogPost} className="mt-6">
          <input type="hidden" name="slug" value={post!.slug} />
          <button type="submit" className="text-red-400 hover:text-red-300 text-sm transition">
            Eliminar este post
          </button>
        </form>
      )}
    </div>
  );
}
