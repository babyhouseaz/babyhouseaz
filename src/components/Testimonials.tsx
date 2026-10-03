import Reveal from "./Reveal";

const reviews = [
  { name: "Aytən X.", text: "Övladım BabyHouse-a getdikdən sonra çox inkişaf etdi. Müəllimlər həqiqətən qayğıkeş və peşəkardır." },
  { name: "Rauf M.",  text: "24 saat kamera izləməsi bizə çox rahatlıq verir. Uşağımızın bağçada nə etdiyini hər an izləyə bilirik." },
  { name: "Gülnar S.", text: "Loqoped xidməti fantastikdir. Oğlumun danışıq problemi qısa müddətdə həll olundu." },
  { name: "Nigar Ə.", text: "Bütün gün xidmət (08:00–19:00) iş vaxtımıza çox uyğundur. Heç bir narahatlıq olmadan işimizdə diqqətimizi saxlaya bilirik." },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 my-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#ff4d85] rounded-[50px] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <Reveal className="text-center mb-12">
              <p className="text-white/70 font-bold uppercase tracking-wider text-sm mb-2">Rəylər</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                Valideynlər Nə Deyir?
              </h2>
            </Reveal>

            <Reveal delay={200} animation="reveal-scale">
              <div className="overflow-hidden group w-full py-4 relative">
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#ff4d85] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#ff4d85] to-transparent z-10 pointer-events-none" />
                
                <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] focus:[animation-play-state:paused] active:[animation-play-state:paused]">
                {[...reviews, ...reviews].map((r, i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 shadow-xl w-[320px] md:w-[400px] shrink-0">
                    <svg className="w-8 h-8 text-[#ff4d85] mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 italic whitespace-normal">{r.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#ff4d85] font-extrabold text-sm shrink-0">
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
