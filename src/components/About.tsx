import Reveal from "./Reveal";

const checkItems = [
  "Bağçamız 24/7 kamera müşahidəsi altındadır",
  "Sevgi və qayğı ilə böyüyən isti mühit",
  "Hərtərəfli inkişaf: əqli, məntiqi, yaradıcı",
  "Peşəkar loqoped, defektoloq və psixoloq dəstəyi",
];

export default function About() {
  return (
    <section id="haqqimizda" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Content */}
        <Reveal animation="reveal">
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
            {checkItems.map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4B4EFC] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700 font-semibold text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
