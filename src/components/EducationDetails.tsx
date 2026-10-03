import Reveal from "./Reveal";

export default function EducationDetails() {
  return (
    <section className="py-20 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-sm mb-4">Məktəbəqədər Təhsil</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Ən Müasir Standartlara Uyğun Hazırlıq
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Məktəbəqədər təhsil proqramımız uşaqları 1-ci sinfə hərtərəfli hazırlamaq üçün nəzərdə tutulub. 
            Uşaqlar həm ənənəvi biliklərə yiyələnir, həm də elektron (onlayn) imtahan və test sistemləri 
            ilə sərbəst işləmək vərdişləri qazanırlar.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İlkin Savad Təlimi */}
          <Reveal animation="reveal-left" delay={100} className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#ff4d85]">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-[#ff4d85] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">İlkin Savad Təlimi</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#ff4d85] font-bold mt-1">•</span> Hərflərin, səslərin tanınması və sərbəst hecalama.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff4d85] font-bold mt-1">•</span> Oxu vərdişlərinin yaradılması və ilkin xəttatlıq (yazıya hazırlıq).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff4d85] font-bold mt-1">•</span> Lüğət ehtiyatının zənginləşdirilməsi və səlis nitq bacarığı.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff4d85] font-bold mt-1">•</span> Mətnləri dinləmə, anlama və hekayə qurma bacarığı.
              </li>
            </ul>
          </Reveal>

          {/* Məntiq və Riyaziyyat */}
          <Reveal animation="reveal-scale" delay={200} className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#4B4EFC]">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-[#4B4EFC] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Məntiq və Riyaziyyat</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#4B4EFC] font-bold mt-1">•</span> Rəqəmlərin tanınması, irəli/geri sayma, sadə hesablama.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4B4EFC] font-bold mt-1">•</span> Həndəsi fiqurlar, fəza, zaman və kəmiyyət anlayışları.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4B4EFC] font-bold mt-1">•</span> Analitik düşüncəni və yaddaşı gücləndirən məntiq oyunları.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4B4EFC] font-bold mt-1">•</span> İmtahan tipli riyazi-məntiqi testlərin elektron formatda sərbəst həlli.
              </li>
            </ul>
          </Reveal>

          {/* Musiqi Bölümü */}
          <Reveal animation="reveal-right" delay={300} className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#00cc66]">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-[#00cc66] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19.5V15m6 4.5v-4.5M9 7.5l3-3m0 0l3 3m-3-3v10.5" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Musiqi Bölümü</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#00cc66] font-bold mt-1">•</span> Ritm duyğusunun və eşitmə qabiliyyətinin inkişafı.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cc66] font-bold mt-1">•</span> Səs və nəfəs idarəetməsi, uşaq xorunda iştirak.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cc66] font-bold mt-1">•</span> Milli və klassik uşaq mahnılarının öyrənilməsi.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cc66] font-bold mt-1">•</span> Sadə musiqi alətləri ilə ilkin tanışlıq və musiqi zövqünün formalaşdırılması.
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
