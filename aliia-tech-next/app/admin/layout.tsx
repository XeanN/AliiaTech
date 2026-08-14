import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/lib/siteConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Admin — Aliia Tech",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans bg-dark-bg text-text-light`}>{children}</body>
    </html>
  );
}
