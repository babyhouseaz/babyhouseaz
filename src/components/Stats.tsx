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
              <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-xs mb-2">Arxiv Məlumatı – Tədris Proqramı</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4">
                Dövlət Dəstəkli Tədris Proqramı
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Nəzərinizə çatdırırıq ki, aşağıdakı məlumatlar əvvəlki qeydiyyat prosesinə aiddir
                və <strong>hazırda qüvvədə deyil</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { val: "500 ₼", label: "Aylıq ümumi ödəniş", bg: "bg-blue-50", color: "text-[#4B4EFC]" },
                  { val: "150 ₼", label: "Valideyn ödənişi (30%)", bg: "bg-green-50", color: "text-[#00cc66]" },
                  { val: "70%",   label: "Dövlət tərəfindən qarşılanırdı", bg: "bg-yellow-50", color: "text-[#f59e0b]" },
                ].map((s, i) => (
                  <div key={i} className={`${s.bg} rounded-2xl p-5 text-center`}>
                    <p className={`text-3xl font-extrabold ${s.color}`}>{s.val}</p>
                    <p className="text-slate-600 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-4">
                Qeydiyyat myGov portalı üzərindən elektron qaydada aparılmışdır. "Valideyn-dövlət-özəl tərəfdaşlığı" layihəsi çərçivəsindədir.
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
