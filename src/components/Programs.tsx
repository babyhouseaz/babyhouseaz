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
              <Link href={`/xidmetler/${s.slug}`} className="block h-full bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 group" style={{ borderColor: s.color }}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ backgroundColor: s.color + "20", color: s.color }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-extrabold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
