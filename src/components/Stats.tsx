import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section id="tedris" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* State Support Card */}
        <Reveal className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-slate-100">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-[#4B4EFC]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
            <div className="w-full">
              <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-xs mb-2">Tədris Bölmələri</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4">
                Tədris Proqramımız
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Uşaqlarınızın parlaq gələcəyi üçün fərqli tədris dillərində bölmələrimiz fəaliyyət göstərir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Reveal delay={100} animation="reveal-scale">
                  <div className="bg-yellow-50 border-2 border-[#f59e0b] rounded-2xl p-5 text-center relative overflow-hidden group h-full">
                    <div className="absolute top-0 right-0 bg-[#f59e0b] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                      ⭐ Özəl
                    </div>
                    <p className="text-xl font-extrabold text-[#f59e0b] mb-2 mt-2 group-hover:scale-105 transition-transform">Azərbaycan Bölməsi</p>
                    <p className="text-slate-600 text-sm font-semibold">Dövlət Dəstəyi ilə</p>
                    <p className="text-[#f59e0b] text-xs font-bold mt-1">70% Güzəşt (Endirim)</p>
                  </div>
                </Reveal>
                <Reveal delay={200} animation="reveal-scale">
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center flex flex-col justify-center h-full group hover:border-[#4B4EFC] transition-colors">
                    <p className="text-xl font-extrabold text-[#4B4EFC] mb-1 group-hover:scale-105 transition-transform">Rus Bölməsi</p>
                    <p className="text-slate-500 text-sm">Standart Qəbul</p>
                  </div>
                </Reveal>
                <Reveal delay={300} animation="reveal-scale">
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center flex flex-col justify-center h-full group hover:border-[#00cc66] transition-colors">
                    <p className="text-xl font-extrabold text-[#00cc66] mb-1 group-hover:scale-105 transition-transform">İngilis Bölməsi</p>
                    <p className="text-slate-500 text-sm">Standart Qəbul</p>
                  </div>
                </Reveal>
              </div>
              <p className="text-slate-400 text-xs mt-4">
                "Valideyn-dövlət-özəl tərəfdaşlığı" layihəsi çərçivəsində Azərbaycan bölməsinə dövlət tərəfindən 70% təhsil dəstəyi (endirim) tətbiq olunur.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stats Banner */}
        <Reveal animation="reveal-scale" className="bg-[#4B4EFC] rounded-[40px] p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-2xl">
          {[
            { value: "08:00", label: "Açılış Saatı" },
            { value: "19:00", label: "Bağlanış Saatı" },
            { value: "24/7",  label: "Kamera Nəzarəti" },
            { value: "5×",    label: "Günlük Qidalanma" },
          ].map((s, i) => (
            <div key={i} className={i > 0 ? "border-l border-blue-400" : ""}>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{s.value}</p>
              <p className="text-blue-200 font-bold text-sm">{s.label}</p>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
