export default function Stats() {
  return (
    <section id="tedris" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* State Support Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-slate-100">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">🏛️</div>
            <div>
              <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-xs mb-2">Arxiv Məlumatı – Tədris Proqramı</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4">
                Dövlət Dəstəkli Tədris Proqramı
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Nəzərinizə çatdırırıq ki, aşağıdakı məlumatlar əvvəlki qeydiyyat prosesinə aiddir
                və <strong>hazırda qüvvədə deyil</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-extrabold text-[#4B4EFC]">500 ₼</p>
                  <p className="text-slate-600 text-xs mt-1">Aylıq ümumi ödəniş</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-extrabold text-[#00cc66]">150 ₼</p>
                  <p className="text-slate-600 text-xs mt-1">Valideyn ödənişi (30%)</p>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-extrabold text-[#ffcc00]">70%</p>
                  <p className="text-slate-600 text-xs mt-1">Dövlət tərəfindən qarşılanırdı</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-4">
                ℹ️ Qeydiyyat myGov portalı üzərindən elektron qaydada aparılmışdır. "Valideyn-dövlət-özəl tərəfdaşlığı" layihəsi çərçivəsindədir.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-[#4B4EFC] rounded-[40px] p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-2xl">
          {[
            { value: "08:00", label: "Açılış Saatı" },
            { value: "19:00", label: "Bağlanış Saatı" },
            { value: "24/7", label: "Kamera Nəzarəti" },
            { value: "5×", label: "Günlük Qidalanma" },
          ].map((s, i) => (
            <div key={i} className={i > 0 ? "border-l border-blue-400" : ""}>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{s.value}</p>
              <p className="text-blue-200 font-bold text-sm">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
