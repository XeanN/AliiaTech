import Link from "next/link";
import Image from "next/image";
import { PilarIconWeb, PilarIconSistemas, PilarIconMarketing, PilarIconIndustria } from "@/lib/icons";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center text-white overflow-hidden bg-dark-bg [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
        <Image
          src="/Ali_home.png"
          alt="Galaxia de fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover z-0"
        />

        <div
          className="absolute inset-0 z-10 opacity-50 mix-blend-soft-light"
          style={{ backgroundImage: "linear-gradient(to top, #011f2d, #0c4b5c 57%, #17a3b3 94%)" }}
          aria-hidden="true"
        />

        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-90 z-20">
          <Image src="/home-header-1.png" alt="" width={1920} height={400} className="absolute bottom-0 w-full h-auto" />
          <Image src="/home-header-4.png" alt="" width={1920} height={400} className="absolute bottom-0 w-full h-auto" />
          <Image src="/home-header-2.png" alt="" width={1920} height={400} className="absolute bottom-0 w-full h-auto" />
          <Image src="/home-header-3.png" alt="" width={1920} height={400} className="absolute bottom-0 w-full h-auto" />
          <Image src="/home-header-5.png" alt="Silueta de persona mirando al cielo" width={1920} height={400} className="absolute bottom-0 w-full h-auto" />
        </div>

        <div className="relative z-30 container mx-auto px-6 flex flex-col items-center text-center pt-24 pb-32">
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight md:leading-tight lg:leading-none">
              <span className="text-white">Socios en tu</span> <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Transformación Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-text-light mt-6 max-w-2xl mx-auto">
              No solo creamos software. Integramos Sistemas Empresariales, IA y Marketing para optimizar tu negocio.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contacto" className="inline-block bg-gradient-to-r from-cyan-400 to-emerald-500 text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
              Agendar Consultoría
            </Link>
            <Link href="/servicios" className="inline-block bg-[#1a2333] text-text-light font-semibold px-8 py-3 rounded-lg hover:bg-gray-700 transition">
              Explorar Servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 md:-mt-20" data-aos="fade-up">
        <div className="content-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-white">Nuestros Pilares Estratégicos</h2>
              <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
                Soluciones integrales que cubren cada área de tu negocio.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/servicios#pilar-web" className="block bg-dark-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent-start transition-colors" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-gray-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PilarIconWeb />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Web y E-commerce</h3>
                <p className="text-text-muted">Tiendas online, apps móviles y sitios web corporativos.</p>
              </Link>
              <Link href="/servicios#pilar-sistemas" className="block bg-dark-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent-start transition-colors" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-gray-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PilarIconSistemas />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Sistemas y Automatización</h3>
                <p className="text-text-muted">Software ERP, Logística (SUNAT), IA y Servicios Cloud.</p>
              </Link>
              <Link href="/servicios#pilar-marketing" className="block bg-dark-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent-start transition-colors" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-gray-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PilarIconMarketing />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Marketing y Estrategia</h3>
                <p className="text-text-muted">Power BI, Marketing Conversacional y Auditorías de Seguridad.</p>
              </Link>
              <Link href="/servicios#pilar-industrias" className="block bg-dark-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent-start transition-colors" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-gray-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PilarIconIndustria />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Soluciones por Industria</h3>
                <p className="text-text-muted">Soluciones para Turismo, Constructoras y Educación.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-card relative z-10" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="font-semibold uppercase bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">Sobre Nosotros</span>
              <h2 className="text-4xl font-extrabold mt-2 text-white">Apasionados por la Tecnología y la Ciberseguridad</h2>
              <p className="text-lg text-text-muted mt-6 leading-relaxed">
                Somos un equipo dedicado a brindar soluciones innovadoras que no solo cumplen, sino que superan las expectativas.
                Nuestra misión es ser tu aliado tecnológico.
              </p>
              <Link href="/nosotros" className="inline-block mt-8 bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
                Conoce más
              </Link>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/Hero-Nosotros.jpg"
                alt="Equipo de Aliia Tech"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent py-20 relative z-10" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">¿Listo para transformar tu negocio?</h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            Hablemos hoy mismo. Estamos aquí para ayudarte a alcanzar tus objetivos tecnológicos y de seguridad.
          </p>
          <Link href="/contacto" className="inline-block mt-8 bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
            Contáctanos ahora
          </Link>
        </div>
      </section>
    </>
  );
}
