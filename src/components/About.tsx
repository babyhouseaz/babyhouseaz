import Image from "next/image";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const checkItems = [
  "2011-ci ildən bu günə qədər rəsmi lisenziyalı fəaliyyət",
  "Bağçamız 24/7 kamera müşahidəsi altındadır",
  "Sevgi və qayğı ilə böyüyən isti mühit",
  "Hərtərəfli inkişaf: əqli, məntiqi, yaradıcı",
  "Peşəkar loqoped, defektoloq və psixoloq dəstəyi",
];

export default function About() {
  return (
    <section id="haqqimizda" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Images Grid */}
        <div className="relative h-[600px] w-full hidden md:block">
          <Reveal animation="reveal-left" className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-10 hover:scale-105 transition-transform duration-500">
             <Image src="/About1.jpeg" alt="About BabyHouse" fill className="object-cover" />
          </Reveal>
          <Reveal animation="reveal-scale" delay={200} className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-20 hover:scale-105 transition-transform duration-500 border-8 border-white">
             <Image src="/About2.jpeg" alt="About BabyHouse" fill className="object-cover" />
          </Reveal>
          <Reveal animation="reveal" delay={400} className="absolute top-1/4 right-0 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-[#ffcc00]/20 flex items-center justify-center text-[#ffcc00]">
               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
            </div>
            <div>
               <p className="font-extrabold text-slate-800 text-lg"><CountUp end={15} suffix="+" /> İllik</p>
               <p className="text-sm text-slate-500">Təcrübə</p>
            </div>
          </Reveal>
        </div>

        {/* Content */}
        <div>
          <Reveal animation="reveal-right">
            <p className="text-[#ff4d85] font-bold uppercase tracking-wider text-sm mb-4">Haqqımızda</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
              Sevgi ilə Böyüyən, <br />
              <span className="text-[#4B4EFC]">İnkişaf Edən Mühit</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              <strong>BabyHouse</strong> olaraq məqsədimiz, övladlarınızın həm sevgi, qayğı
              və diqqətlə əhatə olunduğu bir mühitdə böyüməsi, həm də onların intellektual
              və fiziki inkişafını dəstəkləyən zəngin fəaliyyətlərdə iştirak etməsini
              təmin etməkdir.
            </p>

            <ul className="space-y-5 mb-10">
              {checkItems.map((text, i) => (
                <Reveal key={i} delay={i * 100} animation="reveal-scale">
                  <li className="flex items-center gap-4 group cursor-default">
                    <div className="w-8 h-8 rounded-full bg-[#4B4EFC]/10 group-hover:bg-[#4B4EFC] flex items-center justify-center shrink-0 transition-colors duration-300">
                      <svg className="w-4 h-4 text-[#4B4EFC] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-semibold text-base group-hover:text-[#4B4EFC] transition-colors">{text}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
