import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#4B4EFC] pt-32 pb-28 px-4 md:px-8 overflow-hidden min-h-[820px] flex items-center">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#ffcc00]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#ff4d85]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text */}
        <div className="text-center lg:text-left z-10 relative">
          <Reveal animation="reveal-left">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight text-white">
              BabyHouse <br />
              <span className="text-[#ffcc00]">Uşaq Bağçası</span>
            </h1>
          </Reveal>
          
          <Reveal animation="reveal-left" delay={100}>
            <p className="text-xl md:text-2xl font-bold text-blue-100 mb-4">
              Kiçik addımlar, böyük gələcək!
            </p>
          </Reveal>
          
          <Reveal animation="reveal-left" delay={200}>
            <p className="text-base md:text-lg text-blue-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sevgi dolu mühitdə xoşbəxt uşaqlar böyüdürük. Övladlarınızın intellektual
              və fiziki inkişafını dəstəkləyən zəngin fəaliyyətlər ilə dopdolu gün.
            </p>
          </Reveal>
          
          <Reveal animation="reveal-left" delay={300}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/#haqqimizda"
                className="bg-[#ffcc00] hover:bg-yellow-400 text-slate-800 px-8 py-4 rounded-full font-extrabold text-base transition-all hover:scale-105 shadow-lg"
              >
                Daha Ətraflı
              </Link>
              <Link
                href="/elaqe"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/40 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
              >
                Bizimlə Əlaqə
              </Link>
            </div>
          </Reveal>

          {/* Quick stats */}
          <Reveal animation="reveal-scale" delay={400}>
            <div className="flex justify-center lg:justify-start gap-8 mt-12">
              {[
                { val: "08:00", label: "Açılış saatı" },
                { val: "19:00", label: "Bağlanış saatı" },
                { val: "24/7",  label: "Kamera müşahidəsi" },
              ].map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-3xl font-extrabold text-[#ffcc00]">{s.val}</p>
                  <p className="text-blue-200 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal animation="reveal-right" className="hidden lg:flex justify-end relative h-[500px] w-full">
          <div className="relative w-full h-full rounded-[40px] overflow-hidden border-8 border-white/20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
             <Image 
                src="/Photo5.jpeg" 
                alt="BabyHouse Uşaq Bağçası" 
                fill 
                className="object-cover"
                priority
             />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-fade-up delay-300">
            <div className="w-12 h-12 rounded-full bg-[#ff4d85]/10 flex items-center justify-center text-[#ff4d85]">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <div>
               <p className="font-extrabold text-slate-800">Sevgi Dolu</p>
               <p className="text-sm text-slate-500">Təhlükəsiz Mühit</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[90px]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
