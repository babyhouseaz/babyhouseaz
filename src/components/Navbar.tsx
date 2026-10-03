import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full absolute top-0 left-0 z-50 px-4 pt-2">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur rounded-full px-6 py-1.5 flex justify-between items-center shadow-md">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="BabyHouse Logo"
            width={90}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex gap-7 font-extrabold text-slate-700 text-lg">
          <Link href="/#haqqimizda" className="hover:text-[#4B4EFC] transition-colors">Haqqımızda</Link>
          <Link href="/#xidmetler"  className="hover:text-[#4B4EFC] transition-colors">Xidmətlər</Link>
          <Link href="/#tedris"     className="hover:text-[#4B4EFC] transition-colors">Tədris Proqramı</Link>
          <Link href="/#video"      className="hover:text-[#4B4EFC] transition-colors">Video</Link>
          <Link href="/elaqe"      className="hover:text-[#4B4EFC] transition-colors">Əlaqə</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/elaqe"
          className="bg-[#ff4d85] hover:bg-pink-600 text-white px-5 py-1.5 rounded-full font-extrabold text-lg transition-all hover:scale-105 shadow-md"
        >
          Bizimlə Əlaqə
        </Link>
      </div>
    </div>
  );
}
