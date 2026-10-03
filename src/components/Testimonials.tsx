export default function Testimonials() {
  const reviews = [
    {
      name: "Aytən X.",
      text: "Övladım BabyHouse-a getdikdən sonra çox inkişaf etdi. Müəllimlər həqiqətən qayğıkeş və peşəkardır.",
    },
    {
      name: "Rauf M.",
      text: "24 saat kamera izləməsi bizə çox rahatlıq verir. Uşağımızın bağçada nə etdiyini hər an izləyə bilirik.",
    },
    {
      name: "Gülnar S.",
      text: "Loqoped xidməti fantastikdir. Oğlumun danışıq problemi qısa müddətdə həll olundu.",
    },
    {
      name: "Nigar Ə.",
      text: "Bütün gün xidmət (08:00–19:00) iş vaxtımıza çox uyğundur. Kənar narahatlıq olmadan işimizdə diqqətimizi saxlaya bilirik.",
    },
  ];

  return (
    <section className="py-24 px-4 my-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#ff4d85] rounded-[50px] p-10 md:p-16 relative overflow-hidden">
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <p className="text-white/70 font-bold uppercase tracking-wider text-sm mb-2">Rəylər</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                Valideynlər Nə Deyir?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-xl">
                  <div className="text-[#ff4d85] text-3xl mb-3">❝</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                    {r.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#ff4d85] font-extrabold text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{r.name}</p>
                      <p className="text-slate-400 text-xs">BabyHouse Valideyn</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
