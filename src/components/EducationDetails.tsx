import Reveal from "./Reveal";
import Image from "next/image";

export default function EducationDetails() {
  return (
    <section className="py-24 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-sm mb-4">Məktəbəqədər Təhsil</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Ən Müasir Standartlara <br className="hidden md:block" />
            Uyğun Akademik Hazırlıq
          </h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Peşəkar məktəbəqədər təhsil proqramımız uşaqları 1-ci sinfə hərtərəfli və ən qabaqcıl qlobal standartlara uyğun hazırlamaq üçün nəzərdə tutulub. 
            Uşaqlar həm ənənəvi biliklərə mükəmməl şəkildə yiyələnir, həm də elektron (onlayn) imtahan və test sistemləri 
            ilə sərbəst işləmək vərdişləri qazanırlar. Məqsədimiz övladınızın təhsil həyatına özgüvənli və irəlidə başlamasıdır.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İlkin Savad Təlimi */}
          <Reveal animation="reveal-left" delay={100} className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#ff4d85]">
            <div className="relative w-20 h-20 mb-6 rounded-2xl overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop" alt="İlkin Savad Təlimi" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-5">İlkin Savad Təlimi</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-[#ff4d85] text-lg font-bold mt-0.5">✓</span> Hərflərin, səslərin tanınması və sərbəst hecalama.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff4d85] text-lg font-bold mt-0.5">✓</span> Oxu vərdişlərinin yaradılması və ilkin xəttatlıq (yazıya hazırlıq).
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff4d85] text-lg font-bold mt-0.5">✓</span> Lüğət ehtiyatının zənginləşdirilməsi və səlis nitq bacarığının formalaşdırılması.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff4d85] text-lg font-bold mt-0.5">✓</span> Mətnləri diqqətlə dinləmə, anlama və müstəqil hekayə qurma bacarığı.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff4d85] text-lg font-bold mt-0.5">✓</span> Nağıl saatları, qrup daxili debatlar və sərbəst müzakirə mədəniyyətinin aşılanması.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff4d85] text-lg font-bold mt-0.5">✓</span> Ətraf aləmlə tanışlıq və ilkin dünyagörüşünün əsaslarının qoyulması.
              </li>
            </ul>
          </Reveal>

          {/* Məntiq və Riyaziyyat */}
          <Reveal animation="reveal-scale" delay={200} className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#4B4EFC]">
            <div className="relative w-20 h-20 mb-6 rounded-2xl overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=400&auto=format&fit=crop" alt="Məntiq və Riyaziyyat" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-5">Məntiq və Riyaziyyat</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-[#4B4EFC] text-lg font-bold mt-0.5">✓</span> Rəqəmlərin tanınması, irəli/geri sayma və sadə hesablama (toplama, çıxma).
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4B4EFC] text-lg font-bold mt-0.5">✓</span> Həndəsi fiqurların, fəza, zaman (saat) və kəmiyyət anlayışlarının öyrədilməsi.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4B4EFC] text-lg font-bold mt-0.5">✓</span> Uşağın analitik düşüncəsini, diqqətini və yaddaşını gücləndirən xüsusi məntiq oyunları.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4B4EFC] text-lg font-bold mt-0.5">✓</span> Fəza təfəkkürünü və müstəqil qərar vermə (problem həlletmə) vərdişlərini inkişaf etdirən tapmacalar.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4B4EFC] text-lg font-bold mt-0.5">✓</span> Məlumatları qruplaşdırmaq, müqayisə etmək və əlaqələndirmək bacarığının yaradılması.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4B4EFC] text-lg font-bold mt-0.5">✓</span> İmtahan tipli riyazi-məntiqi testlərin elektron formatda sərbəst həlli.
              </li>
            </ul>
          </Reveal>

          {/* Musiqi Bölümü */}
          <Reveal animation="reveal-right" delay={300} className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#00cc66]">
            <div className="relative w-20 h-20 mb-6 rounded-2xl overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=400&auto=format&fit=crop" alt="Musiqi Bölümü" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-5">Musiqi Bölümü</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-[#00cc66] text-lg font-bold mt-0.5">✓</span> Ritm duyğusunun, səsləri fərqləndirmə və musiqi eşitmə qabiliyyətinin kəskin inkişafı.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00cc66] text-lg font-bold mt-0.5">✓</span> Səs və nəfəs idarəetməsi, uşaq xorunda aktiv iştirakla kollektiv işləmə bacarığı.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00cc66] text-lg font-bold mt-0.5">✓</span> Milli, klassik və dünya uşaq mahnılarının öyrənilməsi.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00cc66] text-lg font-bold mt-0.5">✓</span> Sadə musiqi alətləri ilə (kсилофон, baraban, marakas) ilkin tanışlıq.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00cc66] text-lg font-bold mt-0.5">✓</span> Xor və vokal məşqləri ilə diksiyanın, tələffüzün xeyli yaxşılaşdırılması.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00cc66] text-lg font-bold mt-0.5">✓</span> Musiqi vasitəsilə duyğuların ifadə edilməsi və uşaqların incəsənət zövqünün formalaşdırılması.
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
