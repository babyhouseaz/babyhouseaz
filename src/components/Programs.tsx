const services = [
  {
    icon: "🍎",
    title: "Sağlam Qidalanma",
    desc: "Gündə 5 dəfə təzə və sağlam məhsullardan ibarət qidalanma proqramı.",
    color: "#00cc66",
  },
  {
    icon: "🌍",
    title: "Xarici Dil Dərsləri",
    desc: "Erkən yaşlardan etibarən xarici dil biliklərinin əsaslarının qoyulması.",
    color: "#4B4EFC",
  },
  {
    icon: "♟️",
    title: "Şahmat və Məntiq",
    desc: "Strateji şahmat dərsləri və məntiq oyunları ilə analitik düşüncənin inkişafı.",
    color: "#ffcc00",
  },
  {
    icon: "🎨",
    title: "İncəsənət və Yaradıcılıq",
    desc: "Rəqs, musiqi dərsləri və yaradıcı rəsm dərnəyi ilə daxili dünyalarını rənglərlə ifadə.",
    color: "#ff4d85",
  },
  {
    icon: "🧠",
    title: "Psixoloji Dəstək",
    desc: "Peşəkar loqoped, defektoloq və psixoloq xidməti. Xüsusi qayğıya ehtiyacı olan uşaqlar üçün fərdi korreksiya.",
    color: "#4B4EFC",
  },
  {
    icon: "👩‍🍼",
    title: "Dayə Xidməti",
    desc: "İş saatlarından kənar, həftəsonları saatlıq və günlük peşəkar dayə xidməti.",
    color: "#00cc66",
  },
  {
    icon: "🚌",
    title: "Bağça Servisi",
    desc: "Uşaqların bağçaya təhlükəsiz gediş-gəlişini təmin edən xüsusi nəqliyyat xidməti.",
    color: "#ffcc00",
  },
  {
    icon: "📹",
    title: "24/7 Kamera Müşahidəsi",
    desc: "Bağçamız 24/7 kamera müşahidəsi altındadır. Siz rahatlıqla öz işlərinizlə məşğul olun.",
    color: "#ff4d85",
  },
];

export default function Programs() {
  return (
    <section id="xidmetler" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#4B4EFC] font-bold uppercase tracking-wider text-sm mb-2">Bütün Gün Xidmətlər (08:00 – 19:00)</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Övladınız Üçün Hər Şey <br className="hidden md:block" />
            <span className="text-[#4B4EFC]">Bir Damın Altında</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4"
              style={{ borderColor: s.color }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: s.color + "20" }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-extrabold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
