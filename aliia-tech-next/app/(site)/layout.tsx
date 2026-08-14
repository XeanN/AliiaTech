import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AosInit from "@/components/AosInit";
import { siteConfig } from "@/lib/siteConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Transformación Digital, IA y Ciberseguridad en Perú`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_PE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/Aliia-tech.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda Costa Norte 539",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans bg-dark-bg text-text-light`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AosInit />
        <div className="relative min-h-screen">
          <div
            className="fixed inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(to top, #011f2d, #0c4b5c 57%, #17a3b3 94%), url('/fondito.jpg')",
              backgroundBlendMode: "soft-light",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="fixed inset-0 -z-10 bg-black opacity-70" />

          <Navbar />
          <WhatsAppButton />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
