import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full absolute top-0 left-0 z-50 p-4">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur rounded-full px-6 py-3 flex justify-between items-center shadow-md">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="BabyHouse Logo"
            width={130}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex gap-6 font-bold text-slate-600 text-sm">
          <Link href="#haqqimizda" className="hover:text-[#4B4EFC] transition-colors">Haqqımızda</Link>
          <Link href="#xidmetler" className="hover:text-[#4B4EFC] transition-colors">Xidmətlər</Link>
          <Link href="#tedris" className="hover:text-[#4B4EFC] transition-colors">Tədris Proqramı</Link>
          <Link href="#video" className="hover:text-[#4B4EFC] transition-colors">Video</Link>
          <Link href="#elaqe" className="hover:text-[#4B4EFC] transition-colors">Əlaqə</Link>
        </nav>

        {/* CTA */}
        <Link
          href="#elaqe"
          className="bg-[#ff4d85] hover:bg-pink-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md"
        >
          Bizimlə Əlaqə
        </Link>
      </div>
    </div>
  );
}
