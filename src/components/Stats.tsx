import Reveal from "./Reveal";
import CountUp from "./CountUp";

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
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2">
                Tədris Proqramımız
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-2">
                Uşaqlarınızın parlaq gələcəyi üçün fərqli tədris dillərində bölmələrimiz fəaliyyət göstərir. 
              </p>
              <p className="text-[#ff4d85] font-bold text-sm mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Qeyd: Bütün bölmələrdə (Azərbaycan və Rus) əlavə olaraq xüsusi metodika ilə İngilis dili tədris olunur.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Reveal delay={100} animation="reveal-scale">
                  <a href="https://wa.me/994553776710?text=Salam,%20Az%C9%99rbaycan%20B%C3%B6lm%C9%99si%20il%C9%99%20ba%C4%9Fl%C4%B1%20qeydiyyatdan%20ke%C3%A7m%C9%99k%20ist%C9%99yir%C9%99m." target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="bg-yellow-50 border-2 border-[#f59e0b] rounded-2xl p-5 text-center relative overflow-hidden group h-full flex flex-col justify-center">
                      <div className="absolute top-0 right-0 bg-[#f59e0b] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                        ⭐ Özəl
                      </div>
                      <span className="text-4xl mb-2 group-hover:scale-125 transition-transform">🇦🇿</span>
                      <p className="text-xl font-extrabold text-[#f59e0b] mb-2 group-hover:scale-105 transition-transform">Azərbaycan Bölməsi</p>
                      <p className="text-slate-600 text-sm font-semibold mb-3">Dövlət Dəstəyi ilə</p>
                      <div className="bg-[#f59e0b] text-white text-sm font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors mx-auto w-max">
                        Qeydiyyatdan Keç
                      </div>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={200} animation="reveal-scale">
                  <a href="https://wa.me/994553776710?text=Salam,%20Rus%20B%C3%B6lm%C9%99si%20il%C9%99%20ba%C4%9Fl%C4%B1%20qeydiyyatdan%20ke%C3%A7m%C9%99k%20ist%C9%99yir%C9%99m." target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center flex flex-col justify-center h-full group hover:border-[#4B4EFC] transition-colors">
                      <span className="text-4xl mb-2 group-hover:scale-125 transition-transform">🇷🇺</span>
                      <p className="text-xl font-extrabold text-[#4B4EFC] mb-1 group-hover:scale-105 transition-transform">Rus Bölməsi</p>
                      <p className="text-slate-500 text-sm mb-4">Standart Qəbul</p>
                      <div className="bg-[#4B4EFC] text-white text-sm font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors mx-auto w-max">
                        Qeydiyyatdan Keç
                      </div>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={300} animation="reveal-scale">
                  <a href="https://wa.me/994553776710?text=Salam,%20%C4%B0ngilis%20B%C3%B6lm%C9%99si%20il%C9%99%20ba%C4%9Fl%C4%B1%20qeydiyyatdan%20ke%C3%A7m%C9%99k%20ist%C9%99yir%C9%99m." target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center flex flex-col justify-center h-full group hover:border-[#00cc66] transition-colors">
                      <span className="text-4xl mb-2 group-hover:scale-125 transition-transform">🇬🇧</span>
                      <p className="text-xl font-extrabold text-[#00cc66] mb-1 group-hover:scale-105 transition-transform">İngilis Bölməsi</p>
                      <p className="text-slate-500 text-sm mb-4">Standart Qəbul</p>
                      <div className="bg-[#00cc66] text-white text-sm font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-green-700 transition-colors mx-auto w-max">
                        Qeydiyyatdan Keç
                      </div>
                    </div>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats Banner */}
        <Reveal animation="reveal-scale" className="bg-[#4B4EFC] rounded-[40px] p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-2xl">
          {[
            { end: 15, suffix: "+", label: "Peşəkar Müəllim" },
            { end: 500, suffix: "+", label: "Xoşbəxt Uşaq" },
            { end: 24, suffix: "/7", label: "Kamera Nəzarəti" },
            { end: 5, suffix: "x", label: "Günlük Qidalanma" },
          ].map((s, i) => (
            <div key={i} className={i > 0 ? "border-l border-blue-400" : ""}>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-blue-200 font-bold text-sm">{s.label}</p>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
