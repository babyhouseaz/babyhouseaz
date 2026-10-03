import Reveal from "./Reveal";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13l-1-4m5 4v6m4-6v6" />
      </svg>
    ),
    title: "Sağlam Qidalanma",
    desc: "Gündə 5 dəfə təzə və sağlam məhsullardan ibarət qidalanma proqramı.",
    color: "#00cc66",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: "Xarici Dil Dərsləri",
    desc: "Erkən yaşlardan etibarən xarici dil biliklərinin əsaslarının qoyulması.",
    color: "#4B4EFC",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="2" width="8" height="8" rx="1" /><rect x="2" y="14" width="8" height="8" rx="1" /><rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
    title: "Şahmat və Məntiq",
    desc: "Strateji şahmat dərsləri və məntiq oyunları ilə analitik düşüncənin inkişafı.",
    color: "#ffcc00",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "İncəsənət və Yaradıcılıq",
    desc: "Rəqs, musiqi dərsləri və yaradıcı rəsm dərnəyi ilə daxili dünyalarını ifadə.",
    color: "#ff4d85",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Psixoloji Dəstək",
    desc: "Peşəkar loqoped, defektoloq və psixoloq xidməti. Xüsusi ehtiyaclı uşaqlar üçün fərdi korreksiya.",
    color: "#4B4EFC",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Dayə Xidməti",
    desc: "İş saatlarından kənar, həftəsonları saatlıq və günlük peşəkar dayə xidməti.",
    color: "#00cc66",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Bağça Servisi",
    desc: "Uşaqların bağçaya təhlükəsiz gediş-gəlişini təmin edən xüsusi nəqliyyat xidməti.",
    color: "#ffcc00",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882V15.118a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: "24/7 Kamera Müşahidəsi",
    desc: "Bağçamız gecə-gündüz kamera müşahidəsi altındadır. Siz rahatlıqla öz işlərinizlə məşğul olun.",
    color: "#ff4d85",
  },
];

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
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4" style={{ borderColor: s.color } as React.CSSProperties}>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: s.color + "20", color: s.color }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-extrabold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
