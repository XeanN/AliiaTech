"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import FullScreenMenu from "./FullScreenMenu";

const baseLink = "py-2 px-3 rounded-lg transition-colors duration-300 text-white hover:bg-white/20";
const activeLink = "py-2 px-3 rounded-lg transition-colors duration-300 text-white font-bold bg-white/20";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-opacity duration-300 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="block">
            <Image src="/Aliia-tech.png" alt="Logo Aliia Tech" width={140} height={32} className="h-8 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <ActiveLink href="/" className={baseLink} activeClassName={activeLink}>Inicio</ActiveLink>
            <ActiveLink href="/servicios" className={baseLink} activeClassName={activeLink}>Servicios</ActiveLink>
            <ActiveLink href="/nosotros" className={baseLink} activeClassName={activeLink}>Nosotros</ActiveLink>
            <ActiveLink href="/blog" className={baseLink} activeClassName={activeLink}>Blog</ActiveLink>
            <Link
              href="/contacto"
              className="ml-4 px-5 py-2 rounded-lg font-semibold text-primary bg-white hover:bg-gray-100 shadow transition"
            >
              Contacto
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none text-white" aria-label="Abrir menú">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <button
        onClick={() => setIsMenuOpen(true)}
        aria-label="Abrir menú"
        className={`fixed top-6 right-6 z-50 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-dark-bg transition-all duration-300 ${
          scrolled ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {isMenuOpen && <FullScreenMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
