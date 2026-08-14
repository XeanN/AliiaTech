export default function PageHeader({
  title,
  subtitle,
  imageUrl,
}: {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}) {
  const defaultImage = "/fondito.jpg";

  return (
    <section className="h-[40vh] min-h-[300px] flex items-center justify-center relative text-white [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl || defaultImage}')` }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
