import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { saveService, deleteService } from "@/app/actions/services";

const inputClass = "mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-start";
const labelClass = "block text-sm font-medium text-text-muted";

export default async function ServiceEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isNew = slug === "nuevo";
  const service = isNew ? null : await getServiceBySlug(slug);

  if (!isNew && !service) notFound();

  const featuresText = service?.features?.join("\n") || "";
  const techText = service?.tech?.join("\n") || "";
  const processText =
    (service?.process as { title: string; description: string }[] | undefined)
      ?.map((p) => `${p.title}|${p.description}`)
      .join("\n") || "";
  const socialProof = (service?.socialProof as { quote: string; author: string; company: string } | undefined) || {
    quote: "",
    author: "",
    company: "",
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-white mb-6">{isNew ? "Nuevo servicio" : `Editar: ${service!.title}`}</h1>

      <form action={saveService} className="space-y-6">
        <input type="hidden" name="originalSlug" defaultValue={service?.slug || ""} />

        <div>
          <label className={labelClass}>Slug (URL) *</label>
          <input name="slug" required defaultValue={service?.slug} className={inputClass} placeholder="ej: diseno-tiendas-online" />
        </div>

        <div>
          <label className={labelClass}>Pilar *</label>
          <select name="pillar" required defaultValue={service?.pillar} className={inputClass}>
            <option value="Desarrollo Web y E-commerce">Desarrollo Web y E-commerce</option>
            <option value="Sistemas Empresariales y Automatización">Sistemas Empresariales y Automatización</option>
            <option value="Marketing y Estrategia Digital">Marketing y Estrategia Digital</option>
            <option value="Soluciones por Industria">Soluciones por Industria</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Ícono *</label>
          <select name="iconKey" required defaultValue={service?.iconKey || "web"} className={inputClass}>
            <option value="web">Web</option>
            <option value="sistemas">Sistemas</option>
            <option value="marketing">Marketing</option>
            <option value="industria">Industria</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Título *</label>
          <input name="title" required defaultValue={service?.title} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Descripción corta *</label>
          <input name="shortDescription" required defaultValue={service?.shortDescription} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Imagen (ruta /services/N.jpg) *</label>
          <input name="imageUrl" required defaultValue={service?.imageUrl} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Título del hero *</label>
          <input name="heroTitle" required defaultValue={service?.heroTitle} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Problema *</label>
          <textarea name="problem" required rows={3} defaultValue={service?.problem} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Solución *</label>
          <textarea name="solution" required rows={3} defaultValue={service?.solution} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Características (una por línea) *</label>
          <textarea name="features" required rows={5} defaultValue={featuresText} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Proceso — formato &quot;Título|Descripción&quot;, una por línea *</label>
          <textarea name="process" required rows={4} defaultValue={processText} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Tecnologías (una por línea) *</label>
          <textarea name="tech" required rows={4} defaultValue={techText} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Testimonio — cita *</label>
          <textarea name="quote" required rows={2} defaultValue={socialProof.quote} className={inputClass} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Testimonio — autor *</label>
            <input name="author" required defaultValue={socialProof.author} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Testimonio — empresa *</label>
            <input name="company" required defaultValue={socialProof.company} className={inputClass} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Texto del botón CTA *</label>
          <input name="cta" required defaultValue={service?.cta} className={inputClass} />
        </div>

        <div className="flex gap-4 pt-4">
          <button type="submit" className="bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
            Guardar
          </button>
        </div>
      </form>

      {!isNew && (
        <form action={deleteService} className="mt-6">
          <input type="hidden" name="slug" value={service!.slug} />
          <button type="submit" className="text-red-400 hover:text-red-300 text-sm transition">
            Eliminar este servicio
          </button>
        </form>
      )}
    </div>
  );
}
