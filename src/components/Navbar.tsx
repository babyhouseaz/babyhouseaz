"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600", "700"] });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 z-50 px-4 transition-all duration-300 ${
          scrolled ? "pt-2" : "pt-4"
        }`}
      >
        <div
          className={`w-max mx-auto backdrop-blur-xl rounded-full px-4 flex justify-between items-center gap-4 md:gap-6 transition-all duration-300 ${
            scrolled ? "bg-white py-1.5 shadow-lg" : "bg-white/95 py-2 shadow-md"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 z-50 group">
            <Image
              src="/Logo.png"
              alt="BabyHouse Logo"
              width={70}
              height={30}
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className={`md:hidden font-extrabold text-[22px] mt-1 tracking-tight ${fredoka.className}`}>
              <span className="text-[#4B4EFC]">Baby</span><span className="text-[#ff4d85]">House</span>
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-6 font-extrabold text-slate-700 text-base items-center">
            <Link href="/#haqqimizda" className="hover:text-[#4B4EFC] transition-colors">Haqqımızda</Link>
            <Link href="/#dernekler" className="hover:text-[#4B4EFC] transition-colors">Dərnəklər</Link>
            <Link href="/#xidmetler" className="hover:text-[#4B4EFC] transition-colors">Xidmətlər</Link>
            <Link href="/#tedris" className="hover:text-[#4B4EFC] transition-colors">Tədris Proqramı</Link>
            <div className="w-px h-5 bg-slate-300 mx-0.5"></div>
            <a href="https://www.instagram.com/babyhouse_az/" target="_blank" rel="noopener noreferrer" className="text-[#ff4d85] hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/elaqe"
              className="bg-[#ff4d85] hover:bg-pink-600 text-white px-5 py-2 rounded-full font-bold text-base transition-all hover:scale-105 shadow-md block"
            >
              Bizimlə Əlaqə
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-slate-800 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 text-center font-extrabold text-slate-800 text-3xl mb-12">
          <Link href="/#haqqimizda" onClick={() => setMenuOpen(false)}>Haqqımızda</Link>
          <Link href="/#dernekler" onClick={() => setMenuOpen(false)}>Dərnəklər</Link>
          <Link href="/#xidmetler" onClick={() => setMenuOpen(false)}>Xidmətlər</Link>
          <Link href="/#tedris" onClick={() => setMenuOpen(false)}>Tədris Proqramı</Link>
          <Link href="/elaqe" onClick={() => setMenuOpen(false)}>Əlaqə</Link>
        </nav>
        
        <div className="flex flex-col items-center gap-6 mt-8">
          <p className="text-slate-500 font-medium italic text-lg px-8 text-center leading-relaxed">
            Ən müasir məktəbəqədər təhsil proqramı ilə övladlarınızı gələcəyə hazırlayırıq.
          </p>

          <a href="https://www.instagram.com/babyhouse_az/" target="_blank" rel="noopener noreferrer" className="text-[#ff4d85] p-4 bg-pink-50 rounded-full hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
