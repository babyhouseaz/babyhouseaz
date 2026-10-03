import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#4B4EFC] pt-36 pb-28 px-4 md:px-8 overflow-hidden min-h-[820px] flex items-center">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#ffcc00]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#ff4d85]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text */}
        <div className="text-white">
          {/* Registration Warning Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ffcc00]/20 border border-[#ffcc00]/50 rounded-full px-4 py-2 mb-6">
            <span className="text-[#ffcc00] text-lg">⚠️</span>
            <span className="text-[#ffcc00] font-bold text-sm">
              2026–2027 qeydiyyat yerlərı dolmuşdur
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            BabyHouse <br />
            <span className="text-[#ffcc00]">Uşaq Bağçası</span>
          </h1>
          <p className="text-xl font-bold text-blue-100 mb-3">
            Kiçik addımlar, böyük gələcək!
          </p>
          <p className="text-base text-blue-200 mb-8 max-w-lg leading-relaxed">
            Sevgi dolu mühitdə xoşbəxt uşaqlar böyüdürük. Övladlarınızın intellektual
            və fiziki inkişafını dəstəkləyən zəngin fəaliyyətlər ilə dopdolu gün.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#haqqimizda"
              className="bg-[#ffcc00] hover:bg-yellow-400 text-slate-800 px-8 py-4 rounded-full font-extrabold text-base transition-all hover:scale-105 shadow-lg"
            >
              Daha Ətraflı
            </Link>
            <Link
              href="#elaqe"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/40 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
            >
              Bizimlə Əlaqə
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex gap-8 mt-10">
            <div>
              <p className="text-3xl font-extrabold text-[#ffcc00]">08:00</p>
              <p className="text-blue-200 text-xs mt-1">Açılış saatı</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#ffcc00]">19:00</p>
              <p className="text-blue-200 text-xs mt-1">Bağlanış saatı</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#ffcc00]">24/7</p>
              <p className="text-blue-200 text-xs mt-1">Kamera müşahidəsi</p>
            </div>
          </div>
        </div>

        {/* Logo / Image area */}
        <div className="relative w-full h-[440px] flex justify-center items-center">
          <div className="absolute w-[85%] h-[85%] bg-white/10 rounded-[60%_40%_70%_30%/50%_60%_40%_50%] animate-[spin_25s_linear_infinite]" />
          <div className="relative z-10 bg-white rounded-3xl p-10 shadow-2xl flex items-center justify-center">
            <Image
              src="/Logo.png"
              alt="BabyHouse Uşaq Bağçası"
              width={320}
              height={200}
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[90px]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
