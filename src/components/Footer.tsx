import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-32 pb-8 px-4 mt-10 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto">

        {/* CTA Banner */}
        <div id="elaqe" className="bg-[#4B4EFC] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8 -mt-52 shadow-2xl mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Əlaqə Saxlayın
            </h3>
            <p className="text-blue-200 text-base">Gələcək qeydiyyat dövrü üçün məlumat alın.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+994553776710"
              className="bg-[#ffcc00] text-slate-800 font-extrabold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg whitespace-nowrap flex items-center gap-2"
            >
              📞 +994 (55) 377 67 10
            </a>
            <a
              href="https://www.instagram.com/babyhouse_az/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform whitespace-nowrap flex items-center gap-2"
            >
              📸 Instagram
            </a>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/Logo.png"
              alt="BabyHouse Logo"
              width={140}
              height={70}
              className="object-contain mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed text-slate-400">
              Kiçik addımlar, böyük gələcək. Sevgi dolu mühitdə xoşbəxt uşaqlar böyüdürük.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Keçidlər</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#haqqimizda" className="hover:text-white transition-colors">Haqqımızda</Link></li>
              <li><Link href="#xidmetler" className="hover:text-white transition-colors">Xidmətlər</Link></li>
              <li><Link href="#tedris" className="hover:text-white transition-colors">Tədris Proqramı</Link></li>
              <li><Link href="#video" className="hover:text-white transition-colors">Video</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Sosial Media</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/babyhouse_az/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="text-lg">📸</span> @babyhouse_az
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@babyhouse_usaqbagcasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="text-lg">🎵</span> @babyhouse_usaqbagcasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Əlaqə</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+994553776710" className="hover:text-white transition-colors">
                  +994 (55) 377 67 10
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Cəfər Xəndan küçəsi 20 (və ya 24/2D), Bakı, Azərbaycan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} BabyHouse Uşaq Bağçası. Bütün hüquqlar qorunur.</p>
          <p className="text-slate-600 text-xs">Bakı, Azərbaycan 🇦🇿</p>
        </div>

      </div>
    </footer>
  );
}
