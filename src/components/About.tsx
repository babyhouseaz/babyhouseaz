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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image Placeholder */}
        <Reveal animation="reveal-left" className="relative w-full h-[480px] flex justify-center items-center order-2 md:order-1">
          <div className="absolute w-[85%] h-[85%] bg-[#4B4EFC]/10 rounded-[60%_40%_70%_30%/50%_60%_40%_50%]" />
          <div className="relative z-10 w-[80%] h-[78%] bg-slate-100 rounded-3xl shadow-xl flex flex-col justify-center items-center text-slate-400 gap-3 border-2 border-dashed border-slate-200">
            <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="text-sm font-semibold">Bağça fotosunu əlavə edin</span>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal animation="reveal-right" className="order-1 md:order-2">
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
