import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { servicesData } from "@/data/services";

export default function Programs() {
  return (
    <section id="xidmetler" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-sm mb-2">Bütün Gün Xidmətlər (08:00 – 19:00)</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Övladınız Üçün Hər Şey <br className="hidden md:block" />
            <span className="text-[#4B4EFC]">Bir Damın Altında</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((s, i) => (
            <Reveal key={i} delay={i * 80} animation="reveal-scale" className="h-full">
              <Link href="/elaqe" className="block h-full bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 group flex flex-col" style={{ borderColor: s.color }}>
                <div className="relative w-full h-40 mb-5 rounded-2xl overflow-hidden bg-slate-100">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="text-white w-10 h-10 drop-shadow-md">
                      {s.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-extrabold text-slate-800 mb-2 group-hover:text-[#4B4EFC] transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">{s.desc}</p>
                <div className="text-sm font-bold flex items-center gap-2 transition-colors mt-auto" style={{ color: s.color }}>
                  Qeydiyyatdan Keç
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
