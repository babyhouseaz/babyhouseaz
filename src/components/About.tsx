export default function About() {
  return (
    <section id="haqqimizda" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image Placeholder */}
        <div className="relative w-full h-[480px] flex justify-center items-center order-2 md:order-1">
          <div className="absolute w-[85%] h-[85%] bg-[#4B4EFC]/10 rounded-[60%_40%_70%_30%/50%_60%_40%_50%]" />
          <div className="relative z-10 w-[80%] h-[78%] bg-slate-100 rounded-3xl shadow-xl flex flex-col justify-center items-center text-slate-400 gap-2 border-2 border-dashed border-slate-200">
            <span className="text-5xl">🏡</span>
            <span className="text-sm font-semibold mt-2">Şəkil yeri (Bağça fotosunu əlavə edin)</span>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <p className="text-[#ff4d85] font-bold uppercase tracking-wider text-sm mb-4">Haqqımızda</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Sevgi ilə Böyüyən, <br />
            <span className="text-[#4B4EFC]">İnkişaf Edən Mühit</span>
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed text-base">
            <strong>BabyHouse</strong> olaraq məqsədimiz, övladlarınızın həm sevgi, qayğı
            və diqqətlə əhatə olunduğu bir mühitdə böyüməsi, həm də onların intellektual
            və fiziki inkişafını dəstəkləyən zəngin fəaliyyətlərdə iştirak etməsini
            təmin etməkdir.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              { icon: "🛡️", text: "Bağçamız 24/7 kamera müşahidəsi altındadır" },
              { icon: "❤️", text: "Sevgi və qayğı ilə böyüyən isti mühit" },
              { icon: "🧩", text: "Hərtərəfli inkişaf: əqli, məntiqi, yaradıcı" },
              { icon: "👨‍⚕️", text: "Peşəkar loqoped, defektoloq və psixoloq dəstəyi" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <span className="text-slate-700 font-semibold text-sm">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Registration Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-extrabold text-amber-800 text-sm mb-1">Qeydiyyat Statusu</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  2026–2027-ci tədris ili üçün dövlət dəstəyi ilə qəbul yerlərimiz
                  məhdud sayda olduğundan artıq <strong>dolmuşdur</strong> və hazırda
                  yeni qeydiyyat aparılmır.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
