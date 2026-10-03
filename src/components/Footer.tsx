import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-32 pb-8 px-4 mt-10 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto">

        {/* CTA Banner */}
        <Reveal animation="reveal-scale" id="elaqe"
          className="bg-[#4B4EFC] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8 -mt-52 shadow-2xl mb-16"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Əlaqə Saxlayın</h3>
            <p className="text-blue-200 text-base">Gələcək qeydiyyat dövrü üçün məlumat alın.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+994553776710"
              className="bg-[#ffcc00] text-slate-800 font-extrabold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg whitespace-nowrap flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +994 (55) 377 67 10
            </a>
            <a
              href="https://www.instagram.com/babyhouse_az/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform whitespace-nowrap flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </Reveal>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand — colorful logo */}
          <Reveal delay={100}>
            <Link href="/" className="inline-block mb-4 hover:scale-105 transition-transform">
              <div className="bg-white/95 rounded-full w-[100px] h-[100px] flex items-center justify-center p-2 shadow-sm">
                <Image
                  src="/Logo.png"
                  alt="BabyHouse Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Kiçik addımlar, böyük gələcək. Sevgi dolu mühitdə xoşbəxt uşaqlar böyüdürük.
            </p>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={200}>
            <h4 className="font-bold text-white mb-4">Keçidlər</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/#haqqimizda", label: "Haqqımızda" },
                { href: "/#xidmetler",  label: "Xidmətlər" },
                { href: "/#tedris",     label: "Tədris Proqramı" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Social */}
          <Reveal delay={300}>
            <h4 className="font-bold text-white mb-4">Sosial Media</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://www.instagram.com/babyhouse_az/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @babyhouse_az
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@babyhouse_usaqbagcasi" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                  </svg>
                  @babyhouse_usaqbagcasi
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal delay={400}>
            <h4 className="font-bold text-white mb-4">Əlaqə</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+994553776710" className="hover:text-white transition-colors">+994 (55) 377 67 10</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Cəfər Xəndan küçəsi 20 (və ya 24/2D), Bakı, Azərbaycan</span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} BabyHouse Uşaq Bağçası. Bütün hüquqlar qorunur.</p>
          <p className="text-slate-600 text-xs">Bakı, Azərbaycan</p>
        </div>

      </div>
    </footer>
  );
}
